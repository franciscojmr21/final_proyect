const database = new Sequelize("postgres://postgres:postgres@localhost:5432/sevilla")


// Function that will initialize the connection to the database
async function initializeDatabaseConnection() {
    await database.authenticate()
    const Event = database.define("event", {
        title: DataTypes.STRING, 
        title2: DataTypes.STRING, 
        photo: DataTypes.STRING, 
        eventWeb: DataTypes.STRING, 
        ticketWeb: DataTypes.STRING, 
        prize: DataTypes.STRING, 
        date: DataTypes.STRING, 
        locationName: DataTypes.STRING, 
        locationURL: DataTypes.STRING,
    })
    await database.sync({ force: true })
    return {
        Event
    }
}

// const database = new Sequelize("postgres://postgres:postgres@localhost:5432/hyp")


// // Function that will initialize the connection to the database
// async function initializeDatabaseConnection() {
//     await database.authenticate()
//     const Cat = database.define("cat", {
//         name: DataTypes.STRING,
//         breed: DataTypes.STRING,
//         img: DataTypes.STRING,
//     })
//     await database.sync({ force: true })
//     return {
//         Cat
//     }
// }
