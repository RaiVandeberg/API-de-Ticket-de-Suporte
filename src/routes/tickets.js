import { create } from "../controllers/tickets/creat.js"
import { index } from "../controllers/tickets/index.js"


export const tickets = [
    {
    method: "POST",
    path: "/tickets",
    controller: create,
    },
    {
    method: "GET",
    path: "/tickets",
    controller: index,
    },
]