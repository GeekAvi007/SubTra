import { Router } from "express";

const userRouter = Router();

userRouter.get("/", (req, res) => res.send({ message: "GET Users" }));

userRouter.get("/:id", (req, res) =>
  res.send({ message: "GET Users details" })
);

userRouter.post("/", (req, res) => res.send({ message: "CREATE NEW User" }));

userRouter.put("/", (req, res) => res.send({ message: "UPDATE User" }));

userRouter.delete("/", (req, res) => res.send({ message: "Delete User" }));

export default userRouter
