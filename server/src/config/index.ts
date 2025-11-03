import dotenv from "dotenv";

dotenv.config();


export const MONGO_URI = process.env.MONGO_URI ?? "mongodb://mongo:27017/myapp";
export const PORT = process.env.PORT ?? 8000;
export const NODE_ENV = process.env.NODE_ENV ?? "dev";

