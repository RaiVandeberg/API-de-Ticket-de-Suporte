import { routes } from "../routes/index.js"
import { Database } from "../database/database.js"
import { extractQueryParams } from "../utils/extratcQueryParams.js"

const database = new Database()

export function routeHandler( req, res ) {
    const route = routes.find((route) => {
        console.log(route)
        
        return route.method === req.method && route.path.test(req.url)
        
    })

    if (route) {
        const routeParams = req.url.match(route.path)
        console.log(routeParams)
         
        return route.controller( {req, res, database} )
    } 

    return res.writeHead(404).end()
    
    }