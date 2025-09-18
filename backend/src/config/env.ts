import dotenv from "dotenv";
dotenv.config();

interface IEnv {
  PORT: string;
}

const loadEnvVar = (): IEnv => {
  const requireEnvVariales: string[] = ["PORT"];

  requireEnvVariales.forEach((KEY) => {
    if (!process.env[KEY]) {
      throw new Error(`Missing required env variable ${KEY}`);
    }
  });

  return {
    PORT: process.env.PORT as string,
  };
};

export default loadEnvVar();
