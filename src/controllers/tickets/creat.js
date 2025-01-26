import { randomUUID } from "node:crypto"

export function create ({req,res}){
    const {equipament, description, user_name} = req.body
    const ticket = 
    {
        id: randomUUID(),
        equipament,
        description,
        user_name,
        status: "open",
        created_at: new Date(), 
        uptaded_at: new Date(),
    }
    return res.end( JSON.stringify(ticket))
}