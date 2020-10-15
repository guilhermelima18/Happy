import express from 'express'
import './database/connection'
import {getRepository} from 'typeorm'
import Orphanage from './models/Orphanage'

const app = express()

app.use(express.json())

app.listen(5000)

app.post("/orphanages", async (req, res) => {
    const {
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    } = req.body

    const orphanagesRepository = getRepository(Orphanage)

    const orphanage = orphanagesRepository.create({
        name,
        latitude,
        longitude,
        about,
        instructions,
        opening_hours,
        open_on_weekends,
    })

    await orphanagesRepository.save(orphanage)

    return res.json({ message: "Hello World" })
})