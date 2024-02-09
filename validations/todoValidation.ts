import { NextFunction, Request, Response } from "express";
import { check, validationResult } from "express-validator";

export const productValidation = {
  dummyProducts: [
    check("id")
      .exists({ checkFalsy: true })
      .withMessage("Please enter an Id")
      .isString()
      .withMessage("Id must be a text "),

    check("name")
      .exists({ checkFalsy: true })
      .withMessage("Please enter a Name")
      .isString()
      .withMessage("Name must be a text "),

    (req: Request, res: Response, next: NextFunction) => {
      const errors: any = validationResult(req);
      if (!errors.isEmpty())
        return res.status(422).json({
          success: 0,
          data: [],
          message: errors.errors[0].msg,
        });
      next();
    },
  ],
};
