//imports
require('dotenv').config();
const express = require('express');
const app = express();
const massive = require('massive');
const session = require('express-session');
const {getJournal, addJournal, editJournal, deleteJournal} = require('./controllers/journalController');
const {getProviderNotes, addProviderNotes, editProviderNotes, deleteProviderNotes} = require('./controllers/providerNotesController');


//controllers
const timelineController = require('./controllers/timelineController')

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
app.post('/api/register');
app.post('/api/login');
app.get('/api/logout');

//dashboard
app.put('/api/info/:id');
app.get('/api/info');

//notifications
app.delete('/api/notifications/:id')

//connection
app.post('/api/connections');
app.get('/api/connections');
app.put('/api/connections/:id');
app.delete('/api/connections/:id');

//journal
app.post('/api/journal', addJournal);
app.get('/api/journal', getJournal);
app.put('/api/journal/:id', editJournal);
app.delete('/api/journal/:id', deleteJournal);

//timeline
app.post('/api/timeline', timelineController.create);
app.get('/api/timeline', timelineController.read);
app.put('/api/timeline/:id', timelineController.update);
app.delete('/api/timeline/:id', timelineController.delete);

//timeline events
app.get('/api/timeline/event')
app.put('/api/timeline/event/:id');
app.post('/api/timeline/event');
app.delete('/api/timeline/event/:id');

//provider notes
app.post('/api/notes', addProviderNotes);
app.get('/api/notes', getProviderNotes);
app.put('/api/notes/:id', editProviderNotes);
app.delete('/api/notes/:id', deleteProviderNotes);

//listen
app.listen(SERVER_PORT, () => {
    console.log(`Server listening on port ${SERVER_PORT}`)
});