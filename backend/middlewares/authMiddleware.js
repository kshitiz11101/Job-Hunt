import JWT from "jsonwebtoken";

const userAuth = async (req, res, next) => {
  const authHeader = req?.headers?.authorization;

  if (!authHeader || !authHeader?.startsWith("Bearer")) {
    next("Authentication== failed");
  }

  const token = authHeader?.split(" ")[1];
  // console.log(token);

  try {
    const userToken = JWT.verify(token, process.env.JWT_SECRET_KEY);
    // console.log(userToken);
    req.body.user = {
    };

    next();
  } catch (error) {
    console.log(error);
    next("Authentication failed");
  }
};

export default userAuth;