import adminModel from "../models/admin.js";


export const CreateAdmin = async (req, res) => {
 
  const {username, password, email} = req.body;
  try {
    // Check if the user already exists
    let admin = await adminModel.findOne({ email });
    if (admin) {
      return res.status(400).json({ message: "User already exists" });
    }

      admin = new adminModel({
        username,
        email: email,
        password
      });
    // Save the user to the database
    await admin.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};




export const loginAdmin = async (req, res) => {
  try {
    
      let { email, password } = req.body;
      const user = await adminModel.findOne({email});

      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }

      const isPassword = await user.matchPassword(password);
      if (!isPassword) {
          return res.status(400).json({ message: "Invalid password" });
      }

      const token = await admin.generateToken();
      const { _id, name, email: userEmail} = user;
      res.cookie("token", token, { expiresIn: "1d" });
      let responseObject = {
          token,
          user: { _id, name, email: userEmail, role},
      };

      res.status(200).json({ data: responseObject, success: true });
  } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something went wrong", err });
  }
};
