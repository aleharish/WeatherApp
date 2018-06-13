const request = require('request');

var getAddress = (address)=>{
    encodeAddress = encodeURIComponent(address);

    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address='${address}'&key=AIzaSyCoEzs8omT-XL9aatcjR2LOrm9xhgy7Jwc`,
        json: true
    }, (error, response, body)=>{
        console.log(JSON.stringify(body,undefined,2));
    });
};
// key=AIzaSyCoEzs8omT-XL9aatcjR2LOrm9xhgy7Jwc
module.exports.getAddress = getAddress;