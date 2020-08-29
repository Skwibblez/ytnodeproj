

const express = require('express')
const bodyParser = require('body-parser')
const MongoClient = require('mongodb').MongoClient
const app = express()
app.set('view engine', 'ejs')

//For accessing static files
app.use(express.static('public'));
//For reading form body
app.use(bodyParser.urlencoded({ extended: true }))

var connectionString = 'mongodb+srv://skwibblez:7utakoe@grisaia.jyhgf.mongodb.net/skwibblez?retryWrites=true&w=majority'
var __dirname = '/ytproject'

MongoClient.connect(connectionString, { useUnifiedTopology: true })
  .then(client => {
    console.log('Connected to Database')
    const db = client.db('YouTubeProject')
    const songsCollection = db.collection('songs')
    const messageCollection = db.collection('messages')
    //Use this to use html page
    // app.get('/', (req, res) => {
    //   res.sendFile(__dirname + '/index.html')
    //   //res.sendFile(__dirname + '/ytproj.html')
    // })
    /*Old post
    app.post('/quotes', (req, res) => {
      console.log(req.body)
      res.redirect('/')
      //console.log('Hellooooooooooooooooo!')
    })*/

    //New post
    app.post('/quotes', (req, res) => {
      songsCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })

    //GET
    app.get('/', (req, res) => {
      //res.sendFile(__dirname + '/index.html')

      db.collection('songs').find().toArray()
        .then(results => {
          console.log(results)
          res.render('index.ejs', {songs: results})

        })
        .catch(error => console.error(error))

        //res.render('proj.ejs', {})
      // ...
    })

    app.post('/messages', (req, res) => {
      messagesCollection.insertOne(req.body)
        .then(result => {
          console.log(result)
          res.redirect('/')
        })
        .catch(error => console.error(error))
    })



    // app.post('/quotes', (req, res) => {
    //   songsCollection.insertOne(req.body) //Storing in db
    //     .then(result => {
    //       console.log(result) //Printing--Debugging
    //     })
    //     .catch(error => console.error(error)) //Error catching
    // })




  })










//OR use this to do smth else
// app.get('/',function(req,res){
//   res.send('Hello world')
// })

app.listen(2000, function(){
  console.log('Listening on 2000')
})
