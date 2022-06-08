const abbr = require('./abbr_countries.js')
const fieldName = require('./fieldName.js')


function sql(req) {

    const s = `
    select id, name, affiliation_name, score from 
    (
        select * from 
        (
            select id, name, affiliation_id from author where affiliation_id 
            in (select affiliation_id from org_score where field='${fieldName[req.params.fieldName]}' and country='${abbr.fullname[req.params.country]}')         
        ) as tmp1
        inner join author_score
        on tmp1.id = author_score.id
        order by score desc
        limit ${req.params.top}        
    ) as tmp2
    inner join
    affiliation
    on affiliation.affiliation_id = tmp2.affiliation_id
    order by score desc
    `

    // console.log(abbr.fullname[req.params.country])
    console.log(s)

    return s
}


module.exports = sql