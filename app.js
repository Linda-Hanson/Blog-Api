const express = require("express")
const mongoose = require("mongoose")
const bodyParser = require('body-parser')
const ejs = require("ejs")
const cookieParser = require("cookie-parser");

const storePostController = require('./controllers/storePostControl')
const PostController = require('./controllers/PostBlogControl')

const homeController = require('./controllers/indexBlog')
const getPostController = require('./controllers/getPostByIdControl')


const { checkUserData } = require("./middlewares/authenticate");

const authRoutes = require("./route/authentication");


// app constants 
const { PORT, DATABASE } = require("./config");

// Initialize the application
const app = express()

// templating engine to access html flies
app.set('view engine', 'ejs')

// middleware for static flies 
app.use(express.static('public'))

app.use(express.json());
app.use(cookieParser());



//initializing middleware to parser body 
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.use('/signup', authRoutes);




// Getting routes
app.get('/auth/register', (req, res) => {
    res.render('register')
})
app.get('/auth/login', (req, res) => {
    res.render('login')
})
app.get("/", homeController)

app.get("/post/:id", checkUserData, getPostController)

app.get("/posts/new", checkUserData, PostController)

app.post("/posts/store", storePostController)



// database connection
mongoose.connect(DATABASE, { useNewUrlParser: true, useUnifiedTopology: true })


//Listenting for the server on PORT
app.listen(PORT, () => { console.log(`Server successfully started on http://localhost:${PORT}`) })