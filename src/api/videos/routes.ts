import { Router } from "express";
import videoController from "./controller";

const router = Router();

router.get("/", videoController.getAll);
router.get("/search", videoController.search);
router.get("/:id", videoController.getOne);
router.post("/", videoController.create);
router.put("/:id", videoController.update);
router.delete("/:id", videoController.delete);

export default router;
