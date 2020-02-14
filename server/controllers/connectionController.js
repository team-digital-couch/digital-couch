module.exports = {
    read: async (req, res) => {
        const db = req.app.get('db')

        try {
            const connections = db.connections.read(req.session.user.userId)
            res.status(200).json(connections)
        } catch(err) {
            console.log('Get connections', err)
            res.status(500).json({message: 'Could not get provider connections'})
        }
    }
}