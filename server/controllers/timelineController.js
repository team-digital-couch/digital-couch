module.exports = {
    create: async (req, res) => {
        const db = req.app.get('db')
        const {name, startDate, endDate} = req.body

        try {
            const timelines = await db.timeline.create(req.session.user.id, name, startDate, endDate)
            res.status(200).json(timelines)
        } catch(err) {
            console.log('Add timeline', err)
            res.status(500).json({message: 'Could not create timeline'})
        }

    },

    read: async (req, res) => {
        const db = req.app.get('db')
        const userId = req.app.query ? req.app.query.clientId : req.session.user ? req.session.user.id : 0

        try {
            const timelines = await db.timeline.read(userId)
            res.status(200).json(timelines)
        } catch(err) {
            console.log('Get timelines', err)
            res.status(500).json({message: 'Could not get timelines'})
        }
    },

    update: async (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        const {name, startDate, endDate} = req.body

        try {
            const timelines = await db.timeline.updateOne(req.session.user.id, name, startDate, endDate)
            res.status(200).json(timelines)
        } catch(err) {
            console.log('Update timeline', err)
            res.status(500).json({message: 'Could not update timeline'})
        }
    },

    delete: async (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id

        try {
            const timelines = await db.timeline.delete(id)
            res.status(200).json(timelines)
        } catch(err) {
            console.log('Delete timeline', err)
            res.status(500).json({message: 'Could not delete timeline'})
        }
    }
}