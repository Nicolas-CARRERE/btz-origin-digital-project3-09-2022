import { Router } from "express";

import auth from "./auth/routes";
import videos from "./videos/routes";
import categories from "./category/routes";
import dynamic_sections from "./section-dynamic/routes";
import static_sections from "./section-static/routes";
import advertisings from "./advertisings/routes";
import pages from "./page/routes";
import pages_static_sections from "./pages-sections-statics/routes";
import pages_dynamic_sections from "./pages-sections-dynamics/routes";
import pagesAdvertisings from "./pages-advertisings/routes";
import tags from "./tag/routes";
import users from "./users/routes";
import favorites from "./favorites/routes";
import checkToken from "../middlewares/checkToken";

const router = Router();

router.use("/auth", auth);

// This middleware check the validity of the JWT token and add the payload to the request object
router.use(checkToken);
router.use("/categories", categories);
router.use("/dynamic-sections", dynamic_sections);
router.use("/static-sections", static_sections);
router.use("/pages-static-sections", pages_static_sections);
router.use("/pages-dynamic-sections", pages_dynamic_sections);
router.use("/videos", videos);
router.use("/advertisings", advertisings);
router.use("/pages", pages);
router.use("/pages-advertisings", pagesAdvertisings);
router.use("/tags", tags);
router.use("/users", users);
router.use("/favorites", favorites);

export default router;
