import { Router } from "express";

const productRoutes = Router();

productRoutes.post("/", (req, res) => {
  res.send("produto");
});

export { productRoutes };
