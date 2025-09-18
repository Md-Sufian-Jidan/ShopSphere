import { Server } from "http";
import env from "./config/env";
import app from "./app";

const PORT = env.PORT || 5000;

let server: Server;

const Bootstrap = async () => {
  try {
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
