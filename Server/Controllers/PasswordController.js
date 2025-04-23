const bcrypt = require('bcrypt');

const hashPassword = async (req, res) => {
  const { password } = req.body;

  if (!password) {
    return res.status(400).json({ error: 'Password is required' });
  }

  try {
    const hashed = await bcrypt.hash(password, 10);
    res.status(200).json({ hashedPassword: hashed });
  } catch (err) {
    res.status(500).json({ error: 'Hashing failed' });
  }
};

module.exports = { hashPassword };
