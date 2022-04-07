let printDate= function(){
    let currentDate=new Date()
    console.log('The current Date is:',currentDate)

}

let printMonth=function(){
    let currentDate=new Date()
    console.log('The current month is:',currentDate.getMonth()+1)
}

let getBatchInfo=function(){

    console.log('Uranim, W2D4, the Topic for today is Nodejs Module')
}
module.exports.printDate=printDate
module.exports.printMonth=printMonth
module.exports.getBatchInfo=getBatchInfo
