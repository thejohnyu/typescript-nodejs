const express = require("express")

export const app = express()

app.use(express.json())

app.get("/", (req: any, res: any) => {
    res.end("Hello From NodeJS")
})