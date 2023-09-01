import { PageHandlers } from "../interface";
import prisma from "../../../../prisma/client";

const deleteOnePage: PageHandlers["delete"] = async (req, res) => {
  try {
    const { id } = req.params;
    const page = await prisma.page.delete({
      where: {
        id: id,
      },
    });

    if (!page) {
      return res.status(404).json({ message: "Page not found" });
    }

    res.status(200).json({ message: "Page deleted" });
  } catch (error) {
    res.status(500).json({ message: error });
  }
};

export default deleteOnePage;
