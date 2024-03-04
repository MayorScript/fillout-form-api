import { Request, Response, NextFunction } from "express";

/**
 * @param schema Schema object from yup
 * @param req Request object provided by express
 * @param res Response object provided by express
 * @param next NextFunction provided by express
 */
const validate =
  (schema: any) => async (req: Request, res: Response, next: NextFunction) => {
    try {
      await schema.validate({
        query: req.query,
      });
      return next();
    } catch (err: any) {
      res.status(400).send({
        message: err.message,
        errorType: err.name,
      });
    }
  };
export default validate;
