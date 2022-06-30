const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')

// With this line, our server will know how to parse any incoming request
// that contains some JSON in the body
app.use(express.json())
app.use(cors())

// Our fake database 
const eventList = [
    {
        title: "Puro Latino1",
        title2: "Festival",
        photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
        prize: "79€",
        locationName: "Estadio Olímpico de La Cartuja",
        locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
        date: "01/07/22 - 02/07/22",
        eventWeb: "https://purolatino.es/sevilla/",
        ticketWeb: "https://purolatino.es/sevilla/entradas/"
    },
    {
        title: "Puro Latino2",
        title2: "Festival",
        photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
        prize: "79€",
        locationName: "Estadio Olímpico de La Cartuja",
        locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
        date: "01/07/22 - 02/07/22",
        eventWeb: "https://purolatino.es/sevilla/",
        ticketWeb: "https://purolatino.es/sevilla/entradas/"
    },
    {
        title: "Puro Latino3",
        title2: "Festival",
        photo: "https://purolatino.es/sevilla/wp-content/themes/yootheme/cache/f31ed0ea-9a0a-4aed-8cec-c51e2aa12c9e-71c7821e.jpeg",
        prize: "79€",
        locationName: "Estadio Olímpico de La Cartuja",
        locationURL: "https://goo.gl/maps/vHTorSTkSrrDK4wBA",
        date: "01/07/22 - 02/07/22",
        eventWeb: "https://purolatino.es/sevilla/",
        ticketWeb: "https://purolatino.es/sevilla/entradas/"
    },
]
// const catList = [
//     {
//         id: 1,
//         name: "Cat 1",
//         breed: "Siberian",
//         details: "Details about cat 1",
//         img: "https://fs.i3lab.group/hypermedia/cats/siberian.jpg",
//     },
//     {
//         id: 2,
//         name: "Cat 2",
//         breed: "Birman",
//         details: "Details about cat 2",
//         img: "https://fs.i3lab.group/hypermedia/cats/birman.jpg",
//     },
//     {
//         id: 3,
//         name: "Cat 3",
//         breed: "Bombay",
//         details: "Details about cat 3",
//         img: "https://fs.i3lab.group/hypermedia/cats/bombay.jpg",
//     },
//     {
//         id: 4,
//         name: "Cat 4",
//         breed: "Calico",
//         details: "Details about cat 4",
//         img: "https://fs.i3lab.group/hypermedia/cats/calico.jpg",
//     },
//     {
//         id: 5,
//         name: "Cat 5",
//         breed: "Maine Coon",
//         details: "Details about cat 5",
//         img: "https://fs.i3lab.group/hypermedia/cats/maine-coon.jpg",
//     },
// ]

// // HTTP GET api that returns one of the cats in our fake database
// app.get('/api/cats/:id', (req, res) => {
//     const id = +req.params.id
//     const result = catList.find(cat => cat.id === id)
//     return res.json(result)
// })

// // HTTP GET api that returns all the cats in our fake database
// app.get("/api/cats", (req, res) => {
//     const result= catList.map(cat => {
//         return {
//             id: cat.id,
//             img: cat.img,
//             breed: cat.breed,
//             name: cat.name,
//         }
//     })
//     return res.json(result)
// })

// // HTTP POST api that will push (and therefore create) a new element in 
// // our fake database 
// app.post("/api/cats", (req, res) => {
//     const { body } = req
//     catList.push(body)
//     return res.sendStatus(200)
// })

// HTTP GET api that returns one of the events in our fake database
app.get('/api/events/:id', (req, res) => {
    const id = +req.params.id
    const result = eventList.find(event => event.id === id)
    return res.json(result)
})

// HTTP GET api that returns all the events in our fake database
app.get("/api/events", (req, res) => {
    const result= eventList.map(event => {
        return {
            id:event.id,
            title: event.title,
            title2: event.title2,
            photo: event.photo,
            prize: event.prize,
            locationName: event.locationName,
            locationURL: event.locationURL,
            date: event.date,
            eventWeb: event.eventWeb,
            ticketWeb: event.ticketWeb,
        }
    })
    return res.json(result)
})

// HTTP POST api that will push (and therefore create) a new element in 
// our fake database 
app.post("/api/events", (req, res) => {
    const { body } = req
    eventList.push(body)
    return res.sendStatus(200)
})



app.listen(3010, () => {
    console.log("Server running on port 3010")
})

