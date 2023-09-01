import { Router } from "express";
import advertisingController from "./controller";

const router = Router();

router.get("/", advertisingController.getAll);
router.get("/:id", advertisingController.getOne);
router.post("/", advertisingController.create);
router.put("/:id", advertisingController.update);
router.delete("/:id", advertisingController.delete);

export default router;
