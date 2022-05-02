import { Router } from "express";
// import { Router } from "../app";

import { testRoutes } from "./testRoutes";

// const route = Router();

// route.get("/ola", (req, res) => {
//   res.send("ola");
// });

const route = Router();

route.use("/hello", testRoutes);

// export { route };

export { route };
