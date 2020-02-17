module.exports = {
    //will need to test these after the login functionality is in place, since these utilize req.session
    //may also need to restructure how you are calling for the provider_id. Look at how session is being set to determine how you call for it
    getProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {client_id} = req.body;
        const {provider_id} = req.body;
        const getProviderNotes = await db.providerNotes.getProviderNotes(provider_id, client_id);
        res.status(200).json(getProviderNotes);
    },

    addProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {provider_id, client_id, time, content} = req.body;
        // const {client_id} = req.query;
        // const {provider_id} = req.session.user.user_id;
        const newProviderNotes = await db.providerNotes.addProviderNotes(provider_id, client_id, time, content);
        res.status(200).json(newProviderNotes);
    },

    editProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const {time, content} = req.body;
        const editedProviderNotes = await db.providerNotes.editProviderNotes(id, time, content);
        res.status(200).json(editedProviderNotes);
    },

    deleteProviderNotes: async (req, res) => {
        const db = req.app.get('db');
        const {id} = req.params;
        const deleteProviderNotes = await db.providerNotes.deleteProviderNotes(id);
        res.status(200).json(deleteProviderNotes);
    }
}