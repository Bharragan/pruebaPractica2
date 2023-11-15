const ProfileModel = require('../models/profileModel');

const createProfile = async (req, res) => {
  const {
    name,
    lastname,
    email,
    city,
    country,
    summary,
    frameworks,
    hobbies,
  } = req.body;

  try {
    const newProfile = new ProfileModel({
      name,
      lastname,
      email,
      city,
      country,
      summary,
      frameworks,
      hobbies,
    });

    const savedProfile = await newProfile.save();
    
    res.json(savedProfile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getProfile = async (req, res) => {
  try {
    const profile = await ProfileModel.findOne();
    res.json(profile);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createProfile,
  getProfile,
};
