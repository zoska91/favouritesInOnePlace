import bcrypt from 'bcrypt';
import models from '../db/models';
import jwt from 'jsonwebtoken';

const SECRET = 'secret12334325345346453';

const generateToken = user => {
  console.log(user);
  return jwt.sign({ userId: user.id }, SECRET, { expiresIn: '30d' });
};

export const registerUser = async (
  firstName,
  lastName,
  email,
  passwordPlane
) => {
  const password = await bcrypt.hash(passwordPlane, 10);
  return models.User.create({ firstName, lastName, email, password });
};

export const login = async (email, password) => {
  const user = await models.User.findOne({ where: { email } });
  if (!user) {
    throw new Error('User not found');
  }

  const valid = await bcrypt.compare(password, user.password);
  if (!valid) {
    throw new Error('Wrong password');
  }
  return { token: generateToken(user), user };
};

export const getUserIdMIddleware = async req => {
  const token = req.headers.authorization;

  try {
    if (token) {
      const { userId } = await jwt.verify(token, SECRET);
      req.userId = userId;
    }
  } catch (err) {
    console.error(err);
  }

  req.next();
};
