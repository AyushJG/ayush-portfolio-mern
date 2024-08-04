export const generateToken = (user, message, statusCode, res) => {
  const token = user.generateJsonWebToken();
  console.log("Generated Token:", token);
  res
    .status(statusCode)
    .cookie("token", token, {
      expires: new Date(
        Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
      ),
      httpOnly: true,

      // // Uncomment these two key "secure" and "sameSite" for production
      // secure: process.env.NODE_ENV === "production", // Secure cookie in production
      // sameSite: "None", // Allow cross-origin requests
    })
    .json({
      success: true,
      message,
      user,
      token,
    });
};
