const fieldName = require('./fieldName.js')


function sql(req) {
    const s = `
    select country, score
    from country_score
    where field = '${fieldName[req.params.fieldName]}'
    order by score desc
    `
    console.log(s)

    return s
}


module.exports = sql