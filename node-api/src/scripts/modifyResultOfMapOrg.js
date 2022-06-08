const abbr = require('./abbr_countries')



function modifyResultOfMapCountry(x) {

    const y = {}

    x.forEach(elem => {
        if (Object.keys(y).includes(elem.country)) {
            y[elem.country][elem.affiliation_name] = {
                'org_score': elem.score,
                'org_id': elem.affiliation_id
            }	

        } else {

            y[elem.country] = {
                country_code: abbr.abbr[elem.country],
                [elem.affiliation_name] : {
                'org_score': elem.score,
                'org_id': elem.affiliation_id
                }
            }

        }

    })

    return y
}

module.exports = modifyResultOfMapCountry