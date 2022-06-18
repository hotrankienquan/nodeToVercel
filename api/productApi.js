const express = require("express");

const router = express.Router();

// router.get("/", (res) => {
//   // return db.User.findAll()
//   //   .then((res) => {
//   //     return res;
//   //   })
//   //   .then((data) => {
//   //     res.render("homepage.ejs", {
//   //       data: JSON.stringify(data),
//   //     });
//   //   });
//   return res.json({
//     status: 200,
//     message: "get data has successfully",
//   });
// });
router.get("/", async (req, res) => {
  try {
    res.json({
      status: 200,
      message: "get data has successfully",
    });
  } catch (err) {
    console.log(err);
    return res.status(500).send("server error");
  }
  // res.json({
  //   status: 200,
  // });
});

module.exports = router;
