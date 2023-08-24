import Express from "express";
import {
  create,
  deleteUser,
  fetch,
  update,
} from "../controller/userController.js";

const route = Express.Router();

route.get("/fetch", fetch);
route.post("/create", create);
route.put("/update/:id", update);
route.delete("/delete/:id", deleteUser);

export default route;
