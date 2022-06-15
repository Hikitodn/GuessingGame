const readline = require('readline');
const fs = require('fs');
const stream  = require('stream');

var file = './file.txt';
var instream = fs.createReadStream(file)
var outstream = new stream();
var rl = readline.createInterface(instream, outstream)

async function main() {
    //read line by line
    var data = fs.readFileSync(file).toString().split("\n");
    console.log(`total line: ${data.length}`)

    //read name
    var count;
    var name = [];
    var date = {};
    var date_count = [];
    for(count = 0; count < data.length; count++){
        name.push(data[count].toString().split("|")[7])
    }
    console.log(`432nd name: ${name[431]}`)
    console.log(`43243nd name: ${name[43242]}`)

    //count donation occur each month
    rl.on('line', function(data_file) {
        var column4 = data_file.split("|")[4].slice(0,6)
        var format = column4.slice(0,4) + '-' + column4.slice(4,6)
        date_count.push(format)
    });
    
    rl.on('close', function(){
        date_count.forEach(x => {
            date[x] = (date[x] || 0) + 1
        });
        logDataElements = (key, value) => {
            console.log(`Donations month and year: ${value} , count: ${key}`)
        }
        new Map(Object.entries(date)).forEach(logDataElements);
    });
    

}

main();