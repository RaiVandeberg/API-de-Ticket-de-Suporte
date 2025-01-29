export function update({ req, res, database}) {
    const { id } = req.params
    const { equipament, description} = req.body

    database.update("tickets", id, { 
        equipament, 
        description,
        update_at: new Date()
    })
 return res.end()
}