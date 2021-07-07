const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 4000
const cors = require('cors');

const UsersController = require('./Controllers/UsersController');

app.use(bodyParser.json())
app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)
app.use(cors());
app.get('/', (req, res) => {
    // Directly redirect to users page on page index
    res.redirect('/users');
})
app.get('/users/:id?', UsersController.listUsers);
app.post('/users/create', UsersController.createNewUser);
app.post('/users/edit/:id', UsersController.updateUser);
app.post('/users/delete/:id', UsersController.deleteUser);

app.listen(port, () => {
    console.log(`Application running at http://localhost:${port}`)
})