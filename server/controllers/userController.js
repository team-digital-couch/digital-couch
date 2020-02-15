module.exports = {
    read: async (req, res) => {
        const db = req.app.get('db')
        const {clientId} = req.query

        console.log(clientId, req.session.user)

        if(clientId) {
            try {
                const clientInfo = await db.user.getClientInfo(clientId)
                res.status(200).json(clientInfo)
            } catch(err) {
                console.log('Get client info', err)
                res.status(500).json({message: 'Could not get client info'})
            }
        } else if(req.session.user) {
            try {
                const userInfo = await db.user.getUserInfo(req.session.user.userId)
                console.log('here', userInfo)
                res.status(200).json(userInfo)
            } catch(err) {
                console.log('Get user info', err)
                res.status(500).json({message: 'Could not get user info'})
            }
        } else {
            res.status(400).json({message: 'Bad user request'})
        }
    }
}