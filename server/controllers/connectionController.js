module.exports = {
    create: async (req, res) => {
        const db = req.app.get('db')
        // const {clientId, providerId} = req.body
        const [clientId, providerId] = req.session.user.isProvider ? [req.body.connId, req.session.user.userId] : [req.session.user.userId, req.body.connId]

        try {
            const result = await db.connection.create(providerId, clientId)
            res.status(200).json({message: 'Connection request sent'})
        } catch(err) {
            console.log('Create connection', err)
            res.status(500).json({message: 'Could not request new connection'})
        }
    },

    read: async (req, res) => {
        const db = req.app.get('db')

        try {
            const connections = await db.connection.read(req.session.user.userId)
            res.status(200).json(connections)
        } catch(err) {
            console.log('Get connections', err)
            res.status(500).json({message: 'Could not get provider connections'})
        }
    },

    approve: async (req, res) => {
        const db = req.app.get('db')
        const connection = req.params.id

        try {
            const result = await db.connection.approve(connection)
            res.status(200).json({message: 'Connection request approved'})
        } catch(err) {
            console.log('Approve connection', err)
            res.status(500).json({message: 'Could not approve connection'})
        }
    },

    delete: async (req, res) => {
        const db = req.app.get('db')
        const connection = req.params.id

        try {
            const result = await db.connection.delete(connection)
            res.sendStatus(200)
        } catch(err) {
            console.log('Delete connection', err)
            res.status(500).json({message: 'Could not delete connection'})
        }
    }
}