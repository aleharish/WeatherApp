const request = require('request');
const yargs = require('yargs');
const addressObj = require('./get-address');

const argv = yargs.options({
    a:{
        describe: 'addres variabe',
        demand: true,
        alias: 'address'
    }
}).argv;


// addressObj.getAddress(argv.address);

var addressPromise = new Promise((resolve, reject) => {
    console.log(JSON.stringify(resolve));
    console.log(JSON.stringify(reject));    
});

var addresRet = () => {
    return new Promise((resolve, reject)=>{
        if(true){
            resolve('true');
        }
        reject('false');
    });
}

addresRet();


// addressPromise.then(()=>{
//     return 'success';
// }, () => {
//     return 'failed';
// })