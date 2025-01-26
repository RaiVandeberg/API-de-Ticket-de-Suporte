import { create } from "../controllers/tickets/creat.js"


export const tickets = [
    {
     method: "POST",  
     path: "/tickets",
     controller: create,
    },
]