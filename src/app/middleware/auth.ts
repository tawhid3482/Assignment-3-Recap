import { RequestHandler } from 'express';
import { JwtPayload } from 'jsonwebtoken';
import jwt from 'jsonwebtoken';
import config from '../config';
import { User } from '../modules/user/user.model';

const auth = (...roles: string[]) => {
  const authorize: RequestHandler = async (req, res, next) => {
    try {
      const token = req.headers.authorization;

      if (!token) {
        throw new Error('You must login first!');
      }

      const tokenParts = token.split(' ');

      if (tokenParts.length !== 2 || tokenParts[0] !== 'Bearer') {
        throw new Error('Invalid token format');
      }

      const accessToken = tokenParts[1];
      const decoded = jwt.verify(
        accessToken,
        config.jwt_access_secret as string
      ) as JwtPayload;

      const { email, role } = decoded;

      const user = await User.findOne({ email: email });

      if (!user) {
        throw new Error('This user is not found!');
      }

      if (roles && !roles.includes(role)) {
        res.status(401).json({
          success: false,
          statusCode: 401,
          message: 'You have no access to this route',
        });
        return;
      }

      req.user = user; 
      next();
    } catch (error) {
      next(error);
    }
  };

  return authorize;
};

export default auth;