module.exports = {
    read: async (req, res) => {
        const db = req.app.get('db')
        const {clientId} = req.query

        // console.log(clientId, req.session.user)

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
    },
    updateInfo: async (req, res) => {
        const db = req.app.get('db')
        const {id} = req.params
        const {first_name, last_name, pronouns, avatar, insurance_card, phone, email, billing_address, billing_city, billing_zipcode, address, city, zipcode, hours, bio} = req.body

        console.log(id)
        try {
            const result = await db.user.updateUserInfo(id, first_name, last_name, pronouns, avatar, insurance_card, phone, email, billing_address, billing_city, billing_zipcode, address, city, zipcode, hours, bio)
            res.status(200).json(result)
        } catch(err) {
            console.log('Update User Info', err)
            res.status(500).json({message: 'Could not update information'})
        }
    }
}