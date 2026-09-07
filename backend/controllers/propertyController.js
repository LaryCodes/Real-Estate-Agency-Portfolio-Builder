import Property from "../models/Property.js";

// GET /api/properties
const getProperties = async (req, res) => {
  try {
    const { type, status, featured, search, page = 1, limit = 12 } = req.query;

    const filter = {};
    if (type) filter.type = type;
    if (status) filter.status = status;
    if (featured !== undefined) filter.featured = featured === "true";
    if (search) {
      filter.$text = { $search: search };
    }

    const skip = (Number(page) - 1) * Number(limit);

    const [properties, total] = await Promise.all([
      Property.find(filter).sort({ createdAt: -1 }).skip(skip).limit(Number(limit)),
      Property.countDocuments(filter),
    ]);

    res.status(200).json({
      properties,
      pagination: {
        total,
        page: Number(page),
        pages: Math.ceil(total / Number(limit)),
        limit: Number(limit),
      },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// GET /api/properties/:id
const getPropertyById = async (req, res) => {
  try {
    const property = await Property.findById(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json(property);
  } catch (error) {
    if (error.kind === "ObjectId") {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// POST /api/properties  (protected: admin)
const createProperty = async (req, res) => {
  try {
    const property = await Property.create(req.body);
    res.status(201).json({ message: "Property created", property });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// PUT /api/properties/:id  (protected: admin)
const updateProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property updated", property });
  } catch (error) {
    if (error.name === "ValidationError") {
      const messages = Object.values(error.errors).map((e) => e.message);
      return res.status(400).json({ message: messages.join(", ") });
    }
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// DELETE /api/properties/:id  (protected: admin)
const deleteProperty = async (req, res) => {
  try {
    const property = await Property.findByIdAndDelete(req.params.id);
    if (!property) {
      return res.status(404).json({ message: "Property not found" });
    }
    res.status(200).json({ message: "Property deleted" });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

export {
  getProperties,
  getPropertyById,
  createProperty,
  updateProperty,
  deleteProperty,
};