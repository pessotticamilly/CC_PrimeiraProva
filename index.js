const express = require("express");
const router = require("./router");
const app = express();

app.use(express.json());
app.use("/api", router);

app.listen(8080, () => {
    console.log("App listen on http://localhost:8080");
});

/*Express: npm i express --save
Nodemon: npm i Nodemon
Firebase: npm i firebase
          npm i firebase-admin
Jest: npm i jest*/