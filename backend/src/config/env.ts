import dotenv from "dotenv";
dotenv.config();

interface IEnv {
  PORT: string;
  DATABASE_URL: string;
  NODE_ENV: string;
}

const loadEnvVar = (): IEnv => {
  const requireEnvVariales: string[] = ["PORT", "DATABASE_URL", "NODE_ENV"];

  requireEnvVariales.forEach((KEY) => {
    if (!process.env[KEY]) {
      throw new Error(`Missing required env variable ${KEY}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    NODE_ENV: process.env.NODE_ENV as string,
  };
};

export default loadEnvVar();
