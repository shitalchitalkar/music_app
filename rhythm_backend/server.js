const express = require("express");
const cors = require("cors");
require("dotenv").config();

const connectDB = require("./config/db.js");

const enquiryRoutes = require("./modules/admin/route.js");


const app = express();
app.use(cors());
app.use(express.json());

// Mount enquiry routes
app.use("/api/enquiry", enquiryRoutes);

app.get("/health", (req, res) => {
    res.json({
        message: "rhythm backend is running"
    })
});

const PORT = process.env.PORT || 5000;

const startserver = async () => {
    await connectDB();
    app.listen(PORT, () => {
        console.log(`RHYTHM backend running on port ${PORT}`);

    });
}

startserver();