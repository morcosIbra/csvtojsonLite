const path = require('path')
const fs = require('fs')
var csvJson = require(path.join(__dirname, '/index.js'))
var csvJson = new csvJson()
const csvFile = (csvFilePath = path.join(__dirname, '/customer-data.csv')) => {
    csvJson.customCsvtojson(csvFilePath).then(JsonRes => {
        //  console.log(JsonRes)
        console.log(JsonRes)
        fs.writeFile('customer-data.json' , JSON.stringify(JsonRes, null, 2), (error) => {
            if (error) return process.exit(1)
            console.log('done')
            process.exit(0)
        })
    })
}
csvFile(process.argv[2])