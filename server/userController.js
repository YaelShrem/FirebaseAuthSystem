const express = require('express');
//const mongoose = require("mongoose");
const admin = require("firebase-admin");


function verifyAccount(userEmail, idToken) {
  console.log("came to verifyAccount")
  return new Promise(function (resolve, reject) {
    if (userEmail === undefined) {
      return reject({
        code: 401,
        success: false,
        message: "auth denied",
      });
    }
    const userJson = userEmail;
    console.log(userJson );
    //Check if the user token is valid, this will confirm the user is correctly logged in
    admin
      .auth()
      .verifyIdToken(idToken)
      .then(function (decodedToken) {
        console.log("success decodedToken: ", decodedToken);
        //User.findOne({ uid: userJson.uid }).then(function (user) {
          //Check if user exists
          //if (user == null) {
            //Create user and save it to the databse
            // new User({
            //   username: userJson.displayName,
            //   picture: userJson.photoURL,
            //   email: userJson.email,
            //   uid: userJson.uid,
            // })
            //   .save()
            //   .then(
                // function (error, user) {
                // resolve({
                //   code: 200,
                //   success: true,
                //   message: "auth confirmed: new user created",
                //   user: userEmail,
                // });
            //   });
           // console.log("no user")
        //   } else {
            // resolve({
            //   code: 200,
            //   success: true,
            //   message: "auth confirmed: existing user",
            //   user: user,
            // });
        //  }
        // });
      })
      .catch(function (error) {
        console.log("in chatch");
      //   console.error(error);
      //   reject({
      //     code: 401,
      //     success: false,
      //     message: "auth denied",
      //     error: error,
      //   });
      });
  });
}

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

const getUser = async (req, res) => {
  const { id } = req.params;
  try {
    const user = await User.findById(id);
    res.status(200).json(user);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
}

const checkUser = async (userEmail, idToken) => {
  try {
    console.log("in check function");
    console.log("userEmail", userEmail);
    const callback = await verifyAccount(userEmail, idToken);
    res.json(callback);
  } catch (error) {
    res.json(error);
  }
}

//get user details by user email(work and update)
// const getUserDetailsByUserName = async (req, res) => {
//   const { userName } = req.params
//   try {
//     const user = await User.findOne({ email: userName }).populate({
//       path: "business",
//       populate: {
//         path: "userRecommendation"
//       },
//     });

//     if (user == null) {
//       res.send("This user doesn't exist");
//     } else {
//       return res.json({ user: user });
//     }
//   } catch (error) {
//     res.status(400).json({ massage: error.maasage });
//   }
// }


//get user details by user Id(work and update)
const getUserDetailsById = async (req, res) => {
  const { userId } = req.params
  try {
    const user = await User.findOne({ _id: userId }).populate({
      path: "business",
    });

    if (user == null) {
      res.send("This user doesn't exist");
    } else {
      return res.json({ user: user });
    }
  } catch (error) {
    res.status(400).json({ massage: error.maasage });
  }
}

const updateUser = async (req, res) => {
  try {
    const {
      googleId,
      userName,
      lastName,
      youTube,
      instagram,
      linkedin,
      email,
      phone,
      facebook,
      twitter,
      profileImg,
    } = req.body;
    const user = await User.findOneAndUpdate(
      { uid: googleId },
      {
        uid: googleId,
        userName: userName,
        lastName: lastName,
        youTube: youTube,
        instagram: instagram,
        linkedin: linkedin,
        email: email,
        phone: phone,
        facebook: facebook,
        twitter: twitter,
        profileImg: profileImg.photos,
      }
    );
    await user.save();
    const u = await User.findOne({ uid: googleId });
    res.status(200).json({ message: "the user is updata", user: u });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


//product

// const addCart = async (req, res) => {
//   try {
//     const user = await Users.findById(req.user.id);
//     if (!user) return res.status(400).json({ msg: "User does not exist." });

//     await Users.findOneAndUpdate(
//       { _id: req.user.id },
//       {
//         cart: req.body.cart,
//       }
//     );

//     return res.json({ msg: "Added to cart" });
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// };

// const history = async (req, res) => {
//   try {
//     const history = await Payment.find({ user_id: req.user.id });

//     res.json(history);
//   } catch (err) {
//     return res.status(500).json({ msg: err.message });
//   }
// };




module.exports = {
  checkUser,
  getUser,
  getUsers,
  // getUserDetailsByUserName,
  getUserDetailsById,
  updateUser,
  // addCart,
  // history,
  // deleteUser,
};