import { connect } from 'mongoose'

(async () => {
  try {
    const db = await connect('mongodb+srv://r3xdo:bbvES8il0wGB9Ant@cluster0.kmmpwik.mongodb.net/r3db?retryWrites=true&w=majority')
    console.log('DB connected to', db.connection.name)

    // Luego puedes iniciar tu servidor Express o realizar otras operaciones aquí
  } catch (error) {
    console.error('Error connecting to the database:', error)
  }
})()
