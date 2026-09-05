const mongoose = require("mongoose");

const propertySchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
      trim: true,
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    price: {
      type: Number,
      required: [true, "Price is required"],
      min: [0, "Price cannot be negative"],
    },
    location: {
      type: String,
      required: [true, "Location is required"],
      trim: true,
    },
    address: {
      type: String,
      required: [true, "Address is required"],
      trim: true,
    },
    city: {
      type: String,
      required: [true, "City is required"],
      trim: true,
    },
    type: {
      type: String,
      required: [true, "Property type is required"],
      enum: ["house", "apartment", "villa", "condo"],
    },
    bedrooms: {
      type: Number,
      required: [true, "Number of bedrooms is required"],
      min: 0,
    },
    bathrooms: {
      type: Number,
      required: [true, "Number of bathrooms is required"],
      min: 0,
    },
    area: {
      type: Number,
      required: [true, "Area is required"],
      min: 0,
    },
    image: {
      type: String, // primary/thumbnail image
      default: "",
    },
    images: {
      type: [String],
      default: [],
    },
    features: {
      type: [String],
      default: [],
    },
    yearBuilt: {
      type: Number,
    },
    featured: {
      type: Boolean,
      default: false,
    },
    status: {
      type: String,
      enum: ["for-sale", "for-rent", "sold"],
      default: "for-sale",
    },
  },
  { timestamps: true }
);

// Text index for search
propertySchema.index({ title: "text", description: "text", location: "text" });

module.exports = mongoose.model("Property", propertySchema);
