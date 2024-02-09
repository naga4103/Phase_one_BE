import * as jwt from "jsonwebtoken";

const jwtSecret: string = `${process.env.JWT_SECRET}`;

export const generateToken: any = (username: string, email: string): string => {
  return jwt.sign({ username, email }, jwtSecret, {
    expiresIn: "1d",
  });
};
