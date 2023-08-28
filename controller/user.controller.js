const db = require('../model');
const User = db.user;
// security
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

// Create a new user
exports.createUser = async (req,res)=>{
try {
    const {username,password} = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(password,salt)
    const user = await User.create({
username,
password:hashPassword,
})
   return res.status(201).json({ message:' user create successfully',feedback:user})
} 
 catch (error)
 { 
  console.error('server error create user:', error);
  return res.status(500).json({ error:' server error create user '})
}
};

// login user
exports.userLogin =  async (req, res) => {
  try {
   const { username, password } = req.body;
  const user = await User.findOne({ where: { username } });

  if (!user) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);

  if (!isPasswordValid) {
    return res.status(401).json({ error: 'Authentication failed' });
  }

  const token = jwt.sign({ userId: user.id },process.env.SECRET_KEY, { expiresIn: '1h' });

  res.json({ token }); 
  } catch (error) {
    
     console.error('server error Login User:', error);
  return res.status(500).json({ error:' server error Login User '})
  }
}