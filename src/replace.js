const fs = require('fs')

module.exports = (replacements, file) =>
    new Promise((resolve, reject) =>
        fs.readFile(file, 'utf8', (err, data) => {
            if (err) {
                reject(err)
                return
            }

            let result = data
            replacements.forEach(({find, replace}) => result = result.replace(find, replace))

            fs.writeFile(file, result, 'utf8', (err) => {
                if (err) {
                    reject(err)
                    return
                }
                resolve()
            })
        })
    )
