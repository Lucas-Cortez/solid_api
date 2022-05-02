import { Router } from "express";
import { productRoutes } from "./productRoutes";

const route = Router();

route.use("/product", productRoutes);

export { route };
