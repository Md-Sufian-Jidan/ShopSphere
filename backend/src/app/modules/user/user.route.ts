import { Router } from "express";
import { userControllers } from "./user.controller";

const router = Router();

router.post("/", userControllers.create);
router.get("/", userControllers.getUsers);

export const userRoutes = router;
