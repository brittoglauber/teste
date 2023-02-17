import express from "express";
import { router } from "./routes";
import cors from "cors"

const app = express();

const corsOptions = {
  "origin": "http://localhost:3000",
  "methods": "GET,HEAD,PUT,PATCH,POST,DELETE",
  "credentials": true,
  "headers": "X-Requested-With, Content-Type, Accept, Origin, Authorization"
}
app.use(cors(corsOptions));

app.use(express.json());

app.use(router)


app.listen(5000, () => {
    console.log('Server is running at port 5000')
})