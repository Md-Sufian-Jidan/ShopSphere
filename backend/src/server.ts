import { Server } from "http";
import env from "./config/env";
import app from "./app";
import mongoose from "mongoose";

const PORT = env.PORT || 5000;

let server: Server;

const Bootstrap = async () => {
  try {
    await mongoose.connect(env.DATABASE_URL);
    console.log(`Database Connected`);
    server = app.listen(PORT, () => {
      console.log(`Server started on http://localhost:${PORT}`);
    });
  } catch (error) {
    console.log(error);
  }
};

(async () => {
  await Bootstrap();
})();

// SIGTERM Signal Detected and Close The Server
process.on("SIGTERM", () => {
  console.log(`SIGTERM SIGNAL FOUND and SERVER SHUTTING DOWN`);

  if (server) {
    server.close(() => {
      console.log(`Server closed`);
      process.exit(1);
    });
  }
});

// SIGINT Signal Send
process.on("SIGINT", (error) => {
  console.log(`SIGINT SIGNAL FOUND and SERVER SHUTTING DOWN..`, error);

  if (server) {
    server.close(() => {
      console.log(`Server closed`);
      process.exit(1);
    });
  }
});

// Unhandled Rejection Error
process.on("unhandledRejection", (error) => {
  console.log(`Unhandled Rejection Detected and SERVER SHUTTING DOWN..`, error);

  if (server) {
    server.close(() => {
      console.log(`Server closed`);
      process.exit(1);
    });
  }
});

//Unhandled Exception Error
process.on("uncaughtException", (error) => {
  console.log(`Unhandled Exception Detected and SERVER SHUTTING DOWN..`, error);

  if (server) {
    server.close(() => {
      console.log(`Server closed`);
      process.exit(1);
    });
  }
});
