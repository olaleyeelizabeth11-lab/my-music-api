const express = require('express')
const app = express();
const cors = require('cors');
const port = 3000;
app.listen(port,()=>{
    console.log('am using port 2000')
    console.log('welcome to my world')
    console.log(`am using port ${port} `);
    console.log('music is life')
})
app.use(cors());
const songs =[
    {
        id:1,
        Title:"Blinding lights",
        Artist:"The Weekend",
        Genre:"POP",
        Duration:"3:20",
        ReleaseYear:2019,
        Image:"",
    },
    {
        id:2,
        Title:"Calm down",
        Artist:"Rema ",
        Genre:"Afrobeats",
        Duration:"3:39",
        ReleaseYear:2022,
        Image:"",
    },
    {
        id:3,
        Title:"Essence",
        Artist:"Wizkid",
        Genre:"Afrobeats",
        Duration:"4:09",
        ReleaseYear:2020,
        Image:"",
    },
    {
        id:4,
        Title:"Bad Habits",
        Artist:"Ed Sheeran",
        Genre:"POP",
        Duration:"3:51",
        ReleaseYear:2021,
        Image:"",
    },
    {
        id:5,
        Title:"Last Last",
        Artist:"Burna Boy",
        Genre:"Afrobeats",
        Duration:"2:52",
        ReleaseYear:2022,
        Image:"",
    },
    {
        id:6,
        Title:"Ojuelegba",
        Artist:"Wizkid",
        Genre:"Afrobeats",
        Duration:"3:33",
        ReleaseYear:2014,
        Image:"",
    },
    {
        id:7,
        Title:"Ye",
        Artist:"Burna Boy",
        Genre:"Afrobeats",
        Duration:"3:50",
        ReleaseYear:2018,
        Image:"",
    },
    {
        id:8,
        Title:"Rush",
        Artist:"Ayra Starr",
        Genre:"Afrobeats",
        Duration:"3:05",
        ReleaseYear:2022,
        Image:"",
    },
    {
        id:9,
        Title:"Love Nwantiti",
        Artist:"CKay",
        Genre:"Afrobeats",
        Duration:"2:25",
        ReleaseYear:2019,
        Image:"",
    },
    {
        id:10,
        Title:"God's Plan",
        Artist:"Drake",
        Genre:"Hip-Hop",
        Duration:"3:19",
        ReleaseYear:2018,
        Image:"",
    }
];


app.get('/music',(req, res)=>{
    res.send(songs)
})