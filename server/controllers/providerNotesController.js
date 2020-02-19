module.exports = {
    
    getProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {clientId} = req.query;
        const provider_id = req.session.user.userId;
        console.log(clientId, provider_id)
    
        try{
            const getProviderNotes = await db.providerNotes.getProviderNotes(provider_id, clientId);
            res.status(200).json(getProviderNotes);
        }catch(err){
            res.status(500).json({message: 'could not get Provider Notes'})
        }
    },

    addProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {client_id, time, content} = req.body;
        // const {client_id} = req.query;
        const provider_id = req.session.user.userId;
        try{
            const newProviderNotes = await db.providerNotes.addProviderNotes(provider_id, client_id, time, content);
            res.status(200).json(newProviderNotes);
        }catch(err){
            res.status(500).json({message: 'could not add Provider Note'})
        }
    },

    editProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {time, content} = req.body;
        try{
            const editedProviderNotes = await db.providerNotes.editProviderNotes(id, time, content);
            res.status(200).json(editedProviderNotes);
        }catch(err){
            res.status(500).json({message: 'could not edit Provider Note'})
        }
    },

    deleteProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        try{
            const deleteProviderNotes = await db.providerNotes.deleteProviderNotes(id);
            res.status(200).json(deleteProviderNotes);
        }catch(err){
            res.status(500).json({message:'could not delete Provider Note'})
        }
    }
}