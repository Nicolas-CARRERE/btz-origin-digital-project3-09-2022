import { Router } from "express";

import controller from "./controller";

const router = Router();

router.get("/", controller.getAll);
router.get("/:id", controller.getOne);
router.post("/", controller.create);
router.post("/new-with-videos", controller.createWithVideos);
router.put("/:id", controller.update);
router.put("/:id/add-video", controller.connectVideo);
router.put("/:id/remove-video", controller.disconnectVideo);
router.delete("/:id", controller.delete);

export default router;
