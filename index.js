const fs = require('fs')
class csvJson {
    customCsvtojson(csvFilePath) {
        return new Promise(function(resolve, reject) {
            var index = 0
            var keys = []
            var jsonRes = []
            console.log(fs.readFileSync(csvFilePath).toString().split('\n').length)
            var csvArry = fs.readFileSync(csvFilePath).toString().split('\n')
            csvArry.splice(-1, 1)
            csvArry.forEach(function(row) {
                row = row.replace('\r', '').split(',')
                if (index == 0) {
                    console.log(row)
                    keys = row
                } else {
                    var obj = {}
                    var keyIndex = 0
                    keys.forEach(function(key) {
                        obj[key] = row[keyIndex]
                        keyIndex++
                    })
                    jsonRes.push(obj)
                }
                index++
            })
            resolve(jsonRes)
        })
    }
}
module.exports = csvJson