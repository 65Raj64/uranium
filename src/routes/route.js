const express = require('express');
const router = express.Router();
const CowinController= require("../controllers/CowinController")



router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})


router.get("/cowin/states", CowinController.getStates)
router.get("/cowin/districtsInState/:stateId", CowinController.getDistricts)
router.get("/cowin/getByPin", CowinController.getByPin)
router.get("/cowin/getDistId", CowinController.getDistrictsByid)

router.get("/getcitytemp", CowinController.getCitytemp)

router.post("/getmeme", CowinController.createMeme)


router.post("/cowin/getOtp", CowinController.getOtp)

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date



module.exports = router;