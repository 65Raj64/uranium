const   axios =require("axios")

let getStates = async function (req, res) {

    try {
        let options = {
            method: 'get',
            url: 'https://cdn-api.co-vin.in/api/v2/admin/location/states'
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}


let getDistricts = async function (req, res) {
    try {
        let id = req.params.stateId
        let options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/admin/location/districts/${id}`
        }
        let result = await axios(options);
        console.log(result)
        let data = result.data
        res.status(200).send({ msg: data, status: true })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getByPin = async function (req, res) {
    try {
        let pin = req.query.pincode
        let date = req.query.date
        console.log(`query params are: ${pin} ${date}`)
        var options = {
            method: "get",
            url: `https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByPin?pincode=${pin}&date=${date}`
        }
        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

let getOtp = async function (req, res) {
    try {
        let blahhh = req.body
        
        console.log(`body is : ${blahhh} `)
        var options = {
            method: "post",
            url: `https://cdn-api.co-vin.in/api/v2/auth/public/generateOTP`,
            data: blahhh
        }

        let result = await axios(options)
        console.log(result.data)
        res.status(200).send({ msg: result.data })
    }
    catch (err) {
        console.log(err)
        res.status(500).send({ msg: err.message })
    }
}

// WRITE A GET API TO GET THE LIST OF ALL THE "vaccination sessions by district id" for any given district id and for any given date
let getDistrictsByid = async function (req,res){
    try {
    let district  =req.query.districtid
    let date=req.query.date

    let options ={
        method: "get",
        url:`https://cdn-api.co-vin.in/api/v2/appointment/sessions/public/findByDistrict?district_id=${district}&date=${date}`
    } 

    let result = await axios (options)
    console.log(result.date)
    res.status(200).send({msg: result.data})
}
catch (err) {
    console.log(err)
    res.status(500).send({ msg: err.message })
}
}

///////////////////////////////////////////////////////////////////////////////////////


let getCitytemp = async function(req,res){
    try{
        let city=["Bangaluru","Mumbai","Delhi","kolkata", "Channai","London","Moscow"]
        let cityArray=[ ]

        for( i=0; i < city.length; i++)
        {
            let obj={citi: city[i]}
            let resp= await axios.get (`https://api.openweathermap.org/data/2.5/weather?q=london&appid=9e6ed1ab741e24715c868aee9ef2c4b1`)
            //(`http://api.openweathermap.org/data/2.5/weather?q=${city[i]}&appid=d5427ed4d78fce0784033b93fc6f5a25`)
            console.log(resp.data.main.temp)

            obj.temp=resp.data.main.temp
            cityArray.push(obj)
        }

        let sorted=cityArray.sort( function(a,b) {return a.temp - b.temp})

        console.log(sorted)
        res.status(200).send({status:true,data:sorted})
    }catch (error){
        console.log(error)
        res.status(500).send({status:false, msg:"server error"})
    }

}


let createMeme = async function(req,res){
    
    
    let template  =req.query.templateid
    let text = req.query.text0
    let txt=req.query.text1
    let user=req.query.usename
    let pass=req.query.password

    const options={
        method:"post",
        url:`https://api.imgflip.com/coption_image? template_id=${district}& text0${text}&text1${txt}&username${user}&password${pass}`,
        data:text
    }
    const meme=await axios(options)
    const result = mame.data
    res.status(200).send({status:true, data:result})
}

//c5a07a5f1ba8b10f0e5cb28b018f097a





module.exports.getStates = getStates
module.exports.getDistricts = getDistricts
module.exports.getByPin = getByPin
module.exports.getOtp = getOtp
module.exports.getDistrictsByid=getDistrictsByid
module.exports.getCitytemp=getCitytemp

module.exports.createMeme=createMeme