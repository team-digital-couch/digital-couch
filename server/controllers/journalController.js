module.exports = {
    getJournals: async (req, res) => {
        const db = req.app.get('db');
        const journals = await db.journal.getJournals();
        // const updatedJournals = {
        //     id: journals.id,
        //     user_id: journals.user_id,
        //     start: journals.start_date,
        //     end: journals.end_date,
        //     content: journals.content,
        //     title: journals.title
        // }
        res.status(200).json(journals);
    },

    getJournal: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const journal = await db.journal.getJournal(id);
        res.status(200).json(journal);
    },

    addJournal: async (req, res) => {
        const db = req.app.get('db');
        const {user_id, start_date, end_date, content, title} = req.body;
        const newJournals = await db.journal.addJournal(user_id, start_date, end_date, content, title);
        res.status(200).json(newJournals);
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