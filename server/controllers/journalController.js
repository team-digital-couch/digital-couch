module.exports = {
    getJournal: async (req, res) => {
        const db = req.app.get('db');
        const journals = await db.journal.getJournal();
        res.status(200).json(journals);
    },

    addJournal: async (req, res) => {
        const db = req.app.get('db');
        const {user_id, time, content} = req.body;
        const newJournal = await db.journal.addJournal(user_id, time, content);
        res.status(200).json(newJournal);
    },

    editJournal: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {content} = req.body;
        const editedJournal = await db.journal.editJournal(id, content);
        res.status(200).json(editedJournal);
    },

    deleteJournal: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const deletedJournal = await db.journal.deleteJournal(id);
        res.status(200).json(deletedJournal);
    }
}