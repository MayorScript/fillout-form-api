import { Request, Response } from "express";
import FormService from "../services/formService";
import logger from "../lib/logger";

export const filteredFormSubmissions = async (req: Request, res: Response) => {
  try {
    const formService = new FormService();
    const result = await formService.getFormSubmissions(req);
    res.json(result);
  } catch (error: any) {
    const errorMessage = `An error occurred: ${error.message}`;
    logger.error(errorMessage);
    const statusCode = error.isAxiosError ? 502 : 400;
    res
      .status(statusCode)
      .json({ message: "An error occurred", error: error.message });
  }
};
