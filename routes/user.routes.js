import { Router } from "express";
import { getUser, getUsers } from "../controllers/user.controller.js";
import { authorize } from "../middlewares/auth.middleware.js";
const userRouter = Router();

userRouter.get("/", getUsers);

userRouter.get("/:id",authorize, getUser);

userRouter.post("/", (req, res) => res.send({ message: "CREATE NEW User" }));

userRouter.put("/", (req, res) => res.send({ message: "UPDATE User" }));

userRouter.delete("/", (req, res) => res.send({ message: "Delete User" }));

export default userRouter
