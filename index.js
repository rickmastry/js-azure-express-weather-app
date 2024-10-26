import 'dotenv/config'
import express from 'express';
import cors from 'cors';
import router from './routes/index.js'
import routerOne from './routes/daily.js'
import routerTwo from './routes/geolocate.js'
import * as path from 'path'

const PORT = process.env.PORT || 3000

const app = express()
app.use(express.urlencoded({extended: true}));


app.use('/api', router)
app.use('/onecall', routerOne)
app.use('/locate', routerTwo)

app.use(express.static('public'))
app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "public", "index.html"))
})





app.use(cors())
app.listen(PORT, () => console.log(`Server running on port ${PORT}`))