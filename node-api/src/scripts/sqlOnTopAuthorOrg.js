const abbr = require('./abbr_countries.js')
const fieldName = require('./fieldName.js')


function sql(req) {

    let s = `
        select field, country, org_id, org_name, author_id, author_name, score from 
        (
            select * from 
            (
                select 
                    id as author_id,
                    name as author_name, 
                    affiliation_id as org_id,
                    affiliation_name as org_name,
                    country,
                    field
                from author
                natural join   
                (
                    select field, country, affiliation_name, affiliation_id from org_score
                    where affiliation_id = '${req.params.orgId}' and field = '${fieldName[req.params.fieldName]}' 
                    limit 1
                )    
            ) as all_person_in_this_org_field
            inner join
            (select id, field, score from author_score where field = '${fieldName[req.params.fieldName]}') as all_person_in_this_field
            on all_person_in_this_org_field.author_id = all_person_in_this_field.id
            order by score desc
            limit ${req.params.top}     
        )
    `
 

    // console.log(abbr.fullname[req.params.country])
    console.log(s)

    return s
}



module.exports = sql