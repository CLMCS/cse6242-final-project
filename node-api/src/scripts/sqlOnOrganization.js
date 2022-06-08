const fieldName = require('./fieldName.js')


function sql(req) {
    const s = `
    select country, affiliation_name, affiliation_id, score from 
    (
        select country, field, affiliation_name, affiliation_id, score, Rank()
        over (Partition by country order by score desc) as Rank
        from org_score
        where field = '${fieldName[req.params.fieldName]}'        
    ) 
    where Rank <= 10
    `
    console.log(s)

    return s
}


module.exports = sql