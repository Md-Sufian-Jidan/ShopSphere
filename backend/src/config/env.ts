import dotenv from "dotenv";
dotenv.config();

interface IEnv {
  PORT: string;
  DATABASE_URL: string;
  NODE_ENV: string;
  BCRYPT_SECRET_KEY: string;
  BCRYPT_SALT_ROUND: string;
}

const loadEnvVar = (): IEnv => {
  const requireEnvVariales: string[] = [
    "PORT",
    "DATABASE_URL",
    "NODE_ENV",
    "BCRYPT_SALT_ROUND",
    "BCRYPT_SECRET_KEY",
  ];

  requireEnvVariales.forEach((KEY) => {
    if (!process.env[KEY]) {
      throw new Error(`Missing required env variable ${KEY}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
    DATABASE_URL: process.env.DATABASE_URL as string,
    NODE_ENV: process.env.NODE_ENV as string,
    BCRYPT_SECRET_KEY: process.env.BCRYPT_SECRET_KEY as string,
    BCRYPT_SALT_ROUND: process.env.BCRYPT_SALT_ROUND as string,
  };
};

export default loadEnvVar();
