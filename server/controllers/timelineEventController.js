function sortEvents(events) {
    events.sort((a, b) => {
        return new Date(a.time) - new Date(b.time)
    })
    return events
}

module.exports = {
    create: async (req, res) => {
        const db = req.app.get('db')
        const {timelineId, title, time, isApproximate, content} = req.body

        try {
            const events = await db.timelineEvent.create(timelineId, title, time, isApproximate, content)
            const sortedEvents = sortEvents(events)
            res.status(200).json(sortedEvents)
        } catch(err) {
            console.log('Create timeline event', err)
            res.status(500).json({message:'Could not create timeline event'})
        }
    },

    read: async (req, res) => {
        const db = req.app.get('db')
        const {timelineId} = req.query
        console.log('timelineId', timelineId)
        
        try {
            const events = await db.timelineEvent.read(timelineId)
            const sortedEvents = sortEvents(events)
            console.log('events', sortedEvents)

            res.status(200).json(sortedEvents)
        } catch(err) {
            console.log('Read timeline event', err)
            res.status(500).json({message: 'Could not get timeline events'})
        }
    },

    update: async(req, res) => {
        const db = req.app.get('db')
        const id = req.params.id
        const {title, time, isApproximate, content} = req.body

        try {
            const events = await db.timelineEvent.updateOne(id, title, time, isApproximate, content)
            res.status(200).json(events)
        } catch(err) {
            console.log('Update event', err)
            res.status(500).json({message: 'Could not update event'})
        }
    },

    delete: async (req, res) => {
        const db = req.app.get('db')
        const id = req.params.id

        try {
            const events = await db.timelineEvent.delete(id)
            const sortedEvents = sortEvents(events)
            res.status(200).json(sortedEvents)
        } catch(err) {
            console.log('Delete event', err)
            res.status(500).json({message: 'Could not delete event'})
        }
    }
}