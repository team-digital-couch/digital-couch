//imports
require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');

//controllers
const {getJournal, getJournals, addJournal, editJournal, deleteJournal} = require('./controllers/journalController');
const {getProviderNotes, addProviderNotes, editProviderNotes, deleteProviderNotes} = require('./controllers/providerNotesController');
const timelineController = require('./controllers/timelineController')
const timelineEventController = require('./controllers/timelineEventController')
const authController = require('./controllers/authController')
const userController = require('./controllers/userController')
const connectionController = require('./controllers/connectionController')
const searchController = require('./controllers/searchController')

//dotenv
const { SERVER_PORT, DB_STRING, SESSION_SECRET } = process.env;


//middleware
app.use(express.json());

app.use(session({
    secret: SESSION_SECRET,
    resave: false,
    saveUninitialized: true,
    cookie: {
        maxAge: 1000*60*60*24*7
    }
}))


//massive
massive(DB_STRING).then(db => {
    app.set('db', db);
    console.log('DB Connected');
});


////endpoints

//auth
app.post('/auth/register', authController.register);
app.post('/auth/login', authController.login);
app.post('/auth/logout', authController.logout);
app.get('/auth/me',  authController.me);

//user
app.put('/api/user/info/:id', userController.updateInfo)

//search
app.get('/api/search/name', searchController.searchByName)
app.get('/api/search/city', searchController.searchByLocation)

//dashboard
app.put('/api/info/:id');
app.get('/api/info', userController.read);

//notifications
app.delete('/api/notifications/:id')

//connection
app.post('/api/connections', connectionController.create);
app.get('/api/connections', connectionController.read);
app.put('/api/connections/:id', connectionController.approve);
app.delete('/api/connections/:id', connectionController.delete);

//journal
app.post('/api/journal', addJournal);
app.get('/api/journal', getJournals);
app.get('/api/journal/:id', getJournal);
app.put('/api/journal/:id', editJournal);
app.delete('/api/journal/:id', deleteJournal);

//timeline
app.post('/api/timeline', timelineController.create);
app.get('/api/timeline', timelineController.read);
app.put('/api/timeline/:id', timelineController.update);
app.delete('/api/timeline/:id', timelineController.delete);

//timeline events
app.get('/api/timeline/event', timelineEventController.read)
app.put('/api/timeline/event/:id', timelineEventController.update);
app.post('/api/timeline/event', timelineEventController.create);
app.delete('/api/timeline/event/:id', timelineEventController.delete);

//provider notes
app.post('/api/notes', addProviderNotes);
app.get('/api/notes', getProviderNotes);
app.put('/api/notes/:id', editProviderNotes);
app.delete('/api/notes/:id', deleteProviderNotes);

//listen
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});