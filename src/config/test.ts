import { format, transports } from "winston";

module.exports = {
  port: process.env.APP_PORT || 8080,
  cors: {
    origin: process.env.CORS_ORIGIN || "*",
  },
  logging: {
    format: format.combine(format.timestamp(), format.json()),
    transports: [
      new transports.File({ filename: "./logs/logs.log" }),
      new transports.Console(),
    ],
  },
  fillout: {
    apiUrl: process.env.FILLOUT_API_URL,
    apiKey: process.env.FILLOUT_API_KEY,
  },
};
