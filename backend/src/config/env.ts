import dotenv from "dotenv";
dotenv.config();

interface IEnv {
  PORT: string;
  DATABASE_URL: string;
}

const loadEnvVar = (): IEnv => {
  const requireEnvVariales: string[] = ["PORT", "DATABASE_URL"];

  requireEnvVariales.forEach((KEY) => {
    if (!process.env[KEY]) {
      throw new Error(`Missing required env variable ${KEY}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
  };
};

export default loadEnvVar();
