import UserModel from "../models/user.js";


export const CreateUser = async (req, res) => {
 
  const { firstName, password, num, email} = req.body;
  try {
    // Check if the user already exists
    let user = await UserModel.findOne({ email });

    if (user) {
      return res.status(400).json({ message: "User already exists" });
    }

    
   
      user = new UserModel({
        firstName: firstName,
        mobileNo: num,
        email: email,
        
        password
      });

    
    
   
    // Save the user to the database
    await user.save();
    res.status(201).json({ message: "User created successfully" });
  } catch (err) {
    console.error(err.message);
    res.status(500).json({ message: "Server error" });
  }
};




export const loginUser = async (req, res) => {
  try {
   
      let { username, password } = req.body;
      const user = await UserModel.findOne({email:username});
      if (!user) {
          return res.status(400).json({ message: "User not found" });
      }

      const isPassword = await user.matchPassword(password);
      if (!isPassword) {
          return res.status(400).json({ message: "Invalid password" });
      }

      const token = await user.generateToken();
      const { _id, name, email: userEmail, role, designation } = user;
      res.cookie("token", token, { expiresIn: "1d" });
      let responseObject = {
          token,
          user: { _id, name, email: userEmail, role, designation },
      };

      res.status(200).json({ data: responseObject, success: true });
  } catch (err) {
      console.log(err);
      res.status(400).json({ message: "Something went wrong", err });
  }
};
