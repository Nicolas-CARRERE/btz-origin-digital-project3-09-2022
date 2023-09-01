import { Router } from "express";
import pagesAdvertisingController from "./controller";

const router = Router();

router.get("/", pagesAdvertisingController.getAll);
router.get("/:id", pagesAdvertisingController.getOne);
router.post("/", pagesAdvertisingController.create);
router.put("/:id", pagesAdvertisingController.update);
router.delete("/:id", pagesAdvertisingController.delete);

export default router;
