import express from "express";
import { userRoutes } from "../modules/user/user.route";

const router = express.Router();

const routeMeta = [
  {
    path: "/user",
    route: userRoutes,
  },
];

routeMeta.forEach((item) => {
  router.use(item.path, item.route);
});

export const globalRoutes = router;
