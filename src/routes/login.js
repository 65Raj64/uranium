let endpoint='https://www.google.com'

let log = function() {
    console.log(module)
    console.log('i am inside log function')
}

module.exports.endpoint=endpoint

module.exports.log=log