import express from 'express';
import * as userApi from "./Users"

const app = express();
const port = 3000;

app.get('/user/', userApi.getUser);

app.listen(port, err => {
    if (err) {
        return console.error(err)
    }

   return console.log(`server is listening on ${port}`)
});