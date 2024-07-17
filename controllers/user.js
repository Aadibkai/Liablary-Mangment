import users from "../models/user.js";

export const CreateUser = async (req, res) => {
  const { firstName, password, num, email } = req.body;

  try {
    // Check if the user already exists
    let user = await users.findOne({ mobileNo: num });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    // Create a new user
    user = new users({
      firstName: firstName,
      mobileNo: num,
      email: email,
    });

    // Save the user to the database
    await user.save();
    console.log(777, user);
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};


export const loginuser = async (req, res) => {
    try {
      let { email, password } = req.body;
      const obj = { role: "fgoit", email };
  
      userModel.findOne(obj).exec(async (error, user) => {
        if (error) {
          return res.status(400).json({ message: "Something went wrong", error });
        }
        if (user) {
          const isPassword = await user.matchPassword(password);
          if (isPassword) {
            const token = await user.generateToken();
            const { _id, name, email, role, designation } = user;
            res.cookie("token", token, { expiresIn: "1d" });
            let obj = {
              token,
              user: { _id, name, email, role, designation },
            };
            res.status(200).json({ data: obj, success: true });
          } else {
            return res
              .status(200)
              .json({ message: "Invalid Password", success: false });
          }
        } else {
          return res
            .status(200)
            .json({ message: "User Not Found", success: false });
        }
      });
    } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something went wrong", err });
    }
  };