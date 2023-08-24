import server from './src/server.js'
import { conn } from './src/db.js'

const PORT = 3001

conn.sync({ force: true })
    .then(() => {
        server.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`)
        })
    })
    .catch((error) => console.error(error))
