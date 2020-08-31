const express = require('express');
const mongoose = require('mongoose')
const passport = require('./passport');
var cors = require('cors');
const app = express();
const PORT = process.env.PORT || 8080;
// Route requires
const user = require('./routes')

// Configure body parsing for AJAX requests
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(cors());

// Passport
app.use(passport.initialize())
app.use(passport.session()) // calls the deserializeUser


// Routes
app.use(user)

// Serve up static assets
if (process.env.NODE_ENV === "production") {
    app.use(express.static("client/build"));
}



// Connect to the Mongo DB
mongoose.connect(
    process.env.MONGODB_URI || "mongodb+srv://username:8nHp2uJDgGSYPxCT@cluster0.fkj9s.mongodb.net/<dbname>?retryWrites=true&w=majority", 
    // 8nHp2uJDgGSYPxCT
    {
      useCreateIndex: true,
      useNewUrlParser: true
    }
);


// Starting Server 
app.listen(PORT, () => {
	console.log(`App listening on PORT: ${PORT}`)
})

module.exports = app;

