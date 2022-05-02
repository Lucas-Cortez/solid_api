import { Router } from "express";

const testRoutes = Router();

testRoutes.get("/", (req, res) => {
  res.send("teste");
});

export { testRoutes };
