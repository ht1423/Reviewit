import User from "../models/User.js"
import jwt from 'jsonwebtoken'

const authMiddleware = async (req, res, next) => {
  const token = req.cookies['auth-token'];

  try {
    if (!token) {
      console.warn("🔒 Access denied: No auth-token cookie found");
      return res.status(401).json({
        msg: "You're not logged in. Please log in to continue.",
      });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    if (!decoded || !decoded.user || !decoded.user.userId) {
      console.warn("🔐 Invalid token structure or missing user ID");
      return res.status(401).json({
        msg: "Session expired or invalid. Please log in again.",
      });
    }

    const user = await User.findById(decoded.user.userId);

    if (!user) {
      console.warn(`❌ No user found for ID: ${decoded.user.userId}`);
      return res.status(401).json({
        msg: "User not found. Please log in again.",
      });
    }

    console.log(`✅ Authenticated: ${user.email} (${user._id})`);
    req.user = decoded.user;
    next();
  } catch (err) {
    console.error("🔥 Error in authMiddleware:", err);
    return res.status(500).json({
      msg: "Something went wrong while verifying your session. Please try again.",
    });
  }
};

export default authMiddleware;
