import logger from "./lib/logger";
import dotenv from "dotenv";
import app from "./server";

dotenv.config(); // Load environment variables

const port = process.env.NODE_PORT || 3000;

// Start the server
app.listen(port, () => {
  logger.info(`Server is running on port ${port}`);
});
