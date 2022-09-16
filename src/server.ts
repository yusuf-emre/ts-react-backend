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
    })
    .catch(error => {
        console.log(error);
    });
