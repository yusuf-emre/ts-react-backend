import express from "express";
import http from "http";
import mongoose from "mongoose";
import { config } from "./config/config";

const app = express();

// Connect to Mongo
mongoose
    .connect(config.mongo.url)
    .then(() => {
        console.log('CONNECTED');
        StartServer();
    })
    .catch(error => {
        console.log(error);
    });

//Only start the server if Mongo connects
const StartServer = () => {
    //Healthcheck
    app.get('/hej', (req, res, next) => res.status(200).json({ message: 'hej hej' }));
    
    //Error handling
    app.use((req, res, next) => {
        const error = new Error('NOT FOUND!');
        console.log(error);

        return res.status(404).json({ message: error.message})
    })

    http.createServer(app)
        .listen(config.server.port, () => console.log(`Server is running on port ${config.server.port}.`));
}
