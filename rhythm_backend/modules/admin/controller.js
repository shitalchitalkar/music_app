const Enquiry = require("../../model/enquiry.js");
const multimedia = require("../../model/multimedia.js");
const { APICODES } = require("../../common/constants.js");
const response = require("../../common/responseFormatter.js")

// create
const Createenquiry = async (req, res) => {
    try {
        // phoneNo
        const { name, email, phone_no, enquiry_type, tell_us } = req.body;
        // create var names meaning ful
        const db = await Enquiry.create({
            name,
            email,
            phone_no,
            enquiry_type,
            tell_us
        });

        return response(res, APICODES.SUCCESS, { message: "Enquiry created successfully", data: db })
    } catch (error) {
        console.error("Create enquiry error:", error);
        return response(res, APICODES.INTERNAL_SERVER_ERROR, { message: "Enquiry not created", error: error.message })
    }
};

const Deleteenquiry = async (req, res) => {
    try {
        const { id } = req.params;

        const db = await Enquiry.findByIdAndDelete(id);

        if (!db) {
            return res.status(404).json({
                message: "Enquiry not found"
            });
        }

        return res.status(200).json({
            message: "Enquiry deleted successfully",
            data: db
        });

    } catch (error) {
        console.error("Delete enquiry error:", error);

        return res.status(APICODES.INTERNAL_SERVER_ERROR).json({
            message: "Enquiry not deleted",
            error: error.message
        });
    }
};


//api for multimedia

const createmultimedia = async (req, res) => {
    try {

        const { images, video } = req.body;

        const db = await multimedia.create({ images, video });

        return res.status(APICODES.SUCCESS).json({
            message: "image upload sucessfully",
            data: db

        })
    } catch (error) {
        return res.status(APICODES.INTERNAL_SERVER_ERROR).json({
            message: "not uploaded succesfully",
            error: error.message

        })
    }

};

const deletemultimedia = async (req, res) => {

    try {
        const { id } = req.params;

        const db = await multimedia.findByIdAndDelete(id);

        if (!db) {
            return res.status(404).json({
                message: "data found...",

            })
        }
        return res.status(200).json({
            message: "data deleted sucessfully..",
            data: db
        })
    } catch (error) {
        return res.status(APICODES.INTERNAL_SERVER_ERROR).json({
            message: "data not found for deletion",
            error: error.message
        })
    }
};





module.exports = {
    Createenquiry,
    Deleteenquiry,
    createmultimedia,
    deletemultimedia
};