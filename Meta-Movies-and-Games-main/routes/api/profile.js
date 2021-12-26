const express = require("express");
const auth = require("../../middleware/auth");
const config = require("../../middleware/auth");
const router = express.Router();
const { check, validationResult } = require("express-validator");

const Profile = require("../../models/Profile");
const User = require("../../models/User");

// @route GET api/profile/me
// @desc Get current users profile
// @access Private
router.get("/me", auth, async (req, res) => {
  try {
    const profile = await Profile.findOne({
      user: req.user.id,
    }).populate("user", "name");

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route POST api/profile
// @desc Create or update user profile
// @access Public

router.post(
  "/",
  [
    auth,
    [
      // skills && status
      check("favoritemovie", "Favorite Movie is required").not().isEmpty(),
      check("favoritemovie", "Favorite Game is required").not().isEmpty(),
      check("favoritemovie", "Favorite TV Series is required").not().isEmpty(),
    ],
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const {
      // company,
      // website,
      // location,
      bio,
      // status,
      // githubusername,
      favoritemovie,
      favoritegame,
      favoritetvseries,
      // youtube,
      // facebook,
      // twitter,
      // instagram,
      // linkedin,
    } = req.body;
    //Build profile object

    const profileFields = {};
    profileFields.user = req.user.id;
    // if (company) profileFields.company = company;
    // if (website) profileFields.website = website;
    // if (location) profileFields.location = location;
    if (bio) profileFields.bio = bio;
    if (favoritemovie) profileFields.favoritemovie = favoritemovie;
    if (favoritegame) profileFields.favoritegame = favoritegame;
    if (favoritetvseries) profileFields.favoritetvseries = favoritetvseries;
    // if (status) profileFields.status = status;
    // if (githubusername) profileFields.githubusername = githubusername;
    // if (skills) {
    //   profileFields.skills = skills.split(",").map((skill) => skill.trim());
    // }

    // Build social Object

    // profileFields.social = {};
    // if (youtube) profileFields.social.youtube = youtube;
    // if (youtube) profileFields.social.twitter = twitter;
    // if (youtube) profileFields.social.facebook = facebook;
    // if (youtube) profileFields.social.linkedin = linkedin;
    // if (youtube) profileFields.social.instagram = instagram;

    try {
      let profile = await Profile.findOne({ user: req.user.id });

      if (profile) {
        //Update
        profile = await Profile.findOneAndUpdate(
          { user: req.user.id },
          { $set: profileFields },
          { new: true }
        );

        return res.json(profile);
      }

      // Create
      profile = new Profile(profileFields);

      await profile.save();
      res.json(profile);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server Error");
    }
  }
);

// @route DELETE api/profile/
// @desc Delete profile , user & review
// @access Private
router.delete("/", auth, async (req, res) => {
  try {
    // todo - remove users posts

    // Remove profile
    await Profile.findOneAndRemove({ user: req.user.id });
    // Revmove user
    await User.findOneAndRemove({ _id: req.user.id });
    res.json({ msg: "User Deleted" });

    if (!profile) {
      return res.status(400).json({ msg: "There is no profile for this user" });
    }
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

module.exports = router;
