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
        ImageURL:"https://images.unsplash.com/photo-1614613535308-eb5fbd3d2c17?w=500&auto=format&fit=crop",
    },
    {
        id:2,
        Title:"Calm down",
        Artist:"Rema ",
        Genre:"Afrobeats",
        Duration:"3:39",
        ReleaseYear:2022,
        ImageURL:"https://images.unsplash.com/photo-1621112904887-419379ce6824?w=500&auto=format&fit=crop",
    },
    {
        id:3,
        Title:"Essence",
        Artist:"Wizkid",
        Genre:"Afrobeats",
        Duration:"4:09",
        ReleaseYear:2020,
        ImageURL:"https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&auto=format&fit=crop",
    },
    {
        id:4,
        Title:"Bad Habits",
        Artist:"Ed Sheeran",
        Genre:"POP",
        Duration:"3:51",
        ReleaseYear:2021,
        ImageURL:"https://images.unsplash.com/photo-1514525253361-b83f83df07bb?w=500&auto=format&fit=crop",
    },
    {
        id:5,
        Title:"Last Last",
        Artist:"Burna Boy",
        Genre:"Afrobeats",
        Duration:"2:52",
        ReleaseYear:2022,
        ImageURL:"https://images.unsplash.com/photo-1459749411177-042180ce673c?w=500&auto=format&fit=crop",
    },
    {
        id:6,
        Title:"Ojuelegba",
        Artist:"Wizkid",
        Genre:"Afrobeats",
        Duration:"3:33",
        ReleaseYear:2014,
        ImageURI:"https://images.unsplash.com/photo-1493225255756-d9584f8606e9?w=500&auto=format&fit=crop",
    },
    {
        id:7,
        Title:"Ye",
        Artist:"Burna Boy",
        Genre:"Afrobeats",
        Duration:"3:50",
        ReleaseYear:2018,
        ImageURL:"https://images.unsplash.com/photo-1459749411177-042180ce673c?w=500&auto=format&fit=crop",
    },
    {
        id:8,
        Title:"Rush",
        Artist:"Ayra Starr",
        Genre:"Afrobeats",
        Duration:"3:05",
        ReleaseYear:2022,
        ImageURL:"https://images.unsplash.com/photo-1520127861197-6a103ec7194e?w=500&auto=format&fit=crop",
    },
    {
        id:9,
        Title:"Love Nwantiti",
        Artist:"CKay",
        Genre:"Afrobeats",
        Duration:"2:25",
        ReleaseYear:2019,
        ImageURL:"https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=500&auto=format&fit=crop",
    },
    {
        id:10,
        Title:"God's Plan",
        Artist:"Drake",
        Genre:"Hip-Hop",
        Duration:"3:19",
        ReleaseYear:2018,
        ImageURL:"https://images.unsplash.com/photo-1508700115892-45ecd05ae2ad?w=500&auto=format&fit=crop",
    }
];


app.get('/music',(req, res)=>{
    res.send(songs)
})