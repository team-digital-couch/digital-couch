module.exports = {
    searchByName: async (req, res) => {
        const db = req.app.get('db')
        const {name} = req.query

        try {
            const results = await db.user.searchByName(`%${name}%`)
            res.status(200).json(results)
        } catch(err) {
            console.log('Search by name', err)
            res.status(500).json({message: 'Could not get name search results'})
        }
    }, 

    searchByLocation: async (req, res) => {
        const db = req.app.get('db')
        const {city} = req.query

        try {
            const results = await db.user.searchByLocation(`%${city}%`)
            res.status(200).json(results)
        } catch(err) {
            console.log('Search by city', err)
            res.status(500).json({message: 'Could not get city search results'})
        }
    }
}