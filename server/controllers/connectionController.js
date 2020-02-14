module.exports = {
    create: async (req, res) => {
        const db = req.app.get('db')
        const {clientId, providerId} = req.body

        try {
            const result = await db.connections.create()
            res.sendStatus(200)
        } catch(err) {
            console.log('Create connection', err)
            res.status(500).json({message: 'Could not request new connection'})
        }
    },

    read: async (req, res) => {
        const db = req.app.get('db')

        try {
            const connections = await db.connections.read(req.session.user.userId)
            res.status(200).json(connections)
        } catch(err) {
            console.log('Get connections', err)
            res.status(500).json({message: 'Could not get provider connections'})
        }
    },

    approve: async (req, res) => {
        const db = req.app.get('db')
        const connection = req.params.connId

        try {
            const result = await db.connection.approve()
            res.sendStatus(200)
        } catch(err) {
            console.log('Approve connection', err)
            res.status(500).json({message: 'Could not approve connection'})
        }
    },

    delete: async (req, res) => {
        const db = req.app.get('db')
        const connection = req.params.connId

        try {
            const result = await db.connection.delete(connection)
            res.sendStatus(200)
        } catch(err) {
            console.log('Delete connection', err)
            res.status(500).json({message: 'Could not delete connection'})
        }
    }
}