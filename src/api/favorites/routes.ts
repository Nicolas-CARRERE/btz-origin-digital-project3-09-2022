import { Router } from "express";
import favoriteController from "./controller";

const router = Router();

router.post("/", favoriteController.create);
router.delete("/:id", favoriteController.delete);
router.get("/", favoriteController.getAll);
router.get("/:videoId", favoriteController.getAll);
router.get("/:videoId/isFavorite", favoriteController.isFavorite);

export default router;
