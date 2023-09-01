import { Router } from "express";
import userController from "./controller";

const router = Router();

router.get("/", userController.getAll);
router.get("/:id", userController.getOne);
router.put("/:id", userController.update);
router.patch("/:id", userController.updateUsersRole);
router.delete("/:id", userController.delete);

export default router;
