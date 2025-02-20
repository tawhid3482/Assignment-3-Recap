import bcrypt from "bcrypt";
import { JwtPayload } from "jsonwebtoken";
import config from "../../config";
import { TSignInUser } from "./auth.interface";
import { User } from "../user/user.model";
import { createToken } from "./auth.utils";

const signInUserIntoDB = async (payload: TSignInUser
) => {
  const user = await User.findOne({ email: payload?.email }).select(
    "+password"
  );
  if (!user) {
    throw new Error("User not found!");
  }
  // Checking if the password is correct
  const matchPassword = await bcrypt.compare(
    payload.password,
    user.password as string
  );

  if (!matchPassword) {
    throw new Error("Wrong Password !");
  }

  // Create token and send to the client
  const jwtPayload: JwtPayload = {
    email: user.email,
    role: user.role,
  };

  const accessToken = createToken(
    jwtPayload,
    config.jwt_access_secret as string,
    config.jwt_access_expires_in as string
  );

  const userData = await User.findOne({ email: payload.email }).select(
    "-password"
  );
  return {
    accessToken,
    userData,
  };
};

export const AuthServices = {
  signInUserIntoDB,
};
