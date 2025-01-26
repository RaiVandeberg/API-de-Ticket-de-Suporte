import http from "node:http";

import { jsonHandler } from "./middlewares/jsonHandler.js";
import { routeHandler } from "./middlewares/routeHandlers.js";

async function listerner (req, res) {
    await jsonHandler(req, res);
    routeHandler(req,res)
}

http.createServer(listerner).listen(2999);


  