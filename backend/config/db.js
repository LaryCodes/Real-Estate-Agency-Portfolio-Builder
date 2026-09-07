import mongoose from "mongoose";

const connectDB = async () => {
  try {
    console.log("Attempting to connect to MongoDB...");
    console.log("Connection string:", process.env.MONGODB_URI ? "Found (hidden for security)" : "NOT FOUND");
    
    const conn = await mongoose.connect(process.env.MONGODB_URI, {
      serverSelectionTimeoutMS: 10000, // 10 second timeout
      socketTimeoutMS: 45000,
    });
    
    console.log(`✅ MongoDB connected: ${conn.connection.host}`);
    console.log(`✅ Database name: ${conn.connection.name}`);
  } catch (error) {
    console.error(`❌ MongoDB connection error: ${error.message}`);
    
    // Provide helpful diagnostics
    if (error.message.includes('querySrv ECONNREFUSED') || error.message.includes('ENOTFOUND')) {
      console.error('');
      console.error('🔍 DNS Resolution Issue Detected!');
      console.error('Possible causes:');
      console.error('  1. Your network is blocking MongoDB Atlas DNS queries');
      console.error('  2. Firewall or antivirus blocking DNS resolution');
      console.error('  3. Corporate network restrictions');
      console.error('  4. DNS server issues');
      console.error('');
      console.error('Solutions to try:');
      console.error('  1. Try a different network (mobile hotspot, different WiFi)');
      console.error('  2. Check your DNS settings (try using 8.8.8.8 or 1.1.1.1)');
      console.error('  3. Temporarily disable firewall/antivirus');
      console.error('  4. Use VPN if on restricted network');
      console.error('  5. Ask Hasnain for standard connection string (non-SRV)');
      console.error('');
    } else if (error.message.includes('authentication failed')) {
      console.error('');
      console.error('🔐 Authentication Issue!');
      console.error('  - Username or password is incorrect');
      console.error('  - Ask Hasnain to verify credentials');
      console.error('');
    } else if (error.message.includes('IP') || error.message.includes('not in whitelist')) {
      console.error('');
      console.error('🚫 IP Whitelist Issue!');
      console.error('  - Your IP is not whitelisted on MongoDB Atlas');
      console.error('  - Ask Hasnain to whitelist 0.0.0.0/0 or your current IP');
      console.error('');
    }
    
    console.error('⚠️  Server will continue running but database operations will fail.');
  }
};

export default connectDB;