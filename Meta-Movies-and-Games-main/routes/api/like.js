const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const auth = require("../../middleware/auth");

const Like = require("../../models/Like");
const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route POST api/likes
// @desc Like a movie
// @access PRivate
// router.post(
//   "/",
//   [auth, [check("imbdID", "movieId not present")]],
//   async (req, res) => {
//     const errors = validationResult(req);
//     if (!errors.isEmpty()) {
//       return res.status(400).json({ errors: errors.array() });
//     }

//     try {
//       const user = await User.findById(req.user.id).select("-password");
//       const existingLike = await Like.find({ imdbID: req.body.imdbID });
//       if (existingLike === -1) {
//         const newLike = new Like({
//           imdbID: req.body.imdbID,
//           users: [user.id],
//         });

//         const like = await newLike.save();
//       } else {
//         existingLike = {
//           ...existingLike,
//           users: [...existingLike.users, user.id],
//         };

//         const like = await existingLike.save();
//       }

//       res.json(like);
//     } catch (err) {
//       console.error(err.message);
//       res.status(500).send("Server Errors");
//     }
//   }
// );

module.exports = router;
