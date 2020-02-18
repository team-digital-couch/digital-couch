module.exports = {
    getJournals: async (req, res) => {
        const db = req.app.get('db');
        try {
            const journals = await db.journal.getJournals();
            const updatedJournals = journals.map(journal => ({
                id: journal.id,
                user_id: journal.user_id,
                start: journal.start_date,
                end: journal.end_date,
                content: journal.content,
                title: journal.title
            }))
            res.status(200).json(updatedJournals);
        }catch(err){
            res.status(500).json({message: 'could not get Journals'})
        }
    },

    getJournal: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        try{
            const journal = await db.journal.getJournal(id);
            res.status(200).json(journal);
        }catch(err){
            res.status(500).json({message: 'could not get Journal'})
        }
    },

    addJournal: async (req, res) => {
        const db = req.app.get('db');
        const {user_id, start_date, end_date, content, title} = req.body;
        try{
            const newJournals = await db.journal.addJournal(user_id, start_date, end_date, content, title);
            res.status(200).json(newJournals);
        }catch(err){
            res.status(500).json({message: 'could not add Journal'})
        }
    },

    editJournal: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {content} = req.body;
        try{
            const editedJournal = await db.journal.editJournal(id, content);
            res.status(200).json(editedJournal);
        }catch(err){
            res.status(500).json({message: 'could not edit Journal'})
        }
    },

    deleteJournal: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        try{
            const deletedJournal = await db.journal.deleteJournal(id);
            res.status(200).json(deletedJournal);
        }catch(err){
            res.status(500).json({message: 'could not delete Journal'})
        }
    }
}