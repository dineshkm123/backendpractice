const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const mongoose  = require('mongoose');
const JWT_SECRET="dinesh_server"; 
// Middleware for parsing request bodies
mongoose.connect('mongodb+srv://courseapp:dbms1234@atlascluster.jwuyykx.mongodb.net/');
app.use(bodyParser.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
// module.exports="JWT_SECRET";
exports.JWT_SECRET= JWT_SECRET