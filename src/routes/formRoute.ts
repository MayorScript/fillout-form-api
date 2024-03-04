import express from "express";
import validate from "../middlewares/validator"; // validator middleware
import formSchema from "../schema/formSchema"; // validate schema
import { filteredFormSubmissions } from "../controllers/formController";
const router = express.Router();

router.get(
  "/:formId/filteredResponses",
  validate(formSchema),
  filteredFormSubmissions,
);

export default router;
