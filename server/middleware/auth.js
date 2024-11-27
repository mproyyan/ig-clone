const jwt = require("jsonwebtoken");
const secret = "test";
// const userToken = JSON.parse(localStorage.getItem("profile"));

const auth = async (req, res, next) => {
  try {
    const token = req.headers.authorization.split(" ")[1];
    let decodedData;

    if (token) {
      decodedData = jwt.verify(token, secret);
      req.userId = decodedData.id;
    }

    next();
  } catch (err) {
    console.log(err);
  }
};

// const routesGuard = (req, res, next) => {
//   if (userToken) {
//     jwt.verify(userToken.token, secret, (err, decodedData) => {
//       if (err) {
//         console.log(err);
//         res.redirect("/auth");
//       } else {
//         console.log(decodedData);
//         next();
//       }
//     });
//   } else {
//     res.redirect("/auth");
//   }
// };

module.exports = {
  auth,
  // routesGuard,
};
