const abbr = require('./abbr_countries')



function modifyResultOfMapCountry(x) {

    let s = "country_code,country_name,country_score\n"

    x.forEach(elem => {
        s += `${abbr.abbr[elem.country]},${elem.country},${elem.score}\n`
    })
    
    return s
    
}


module.exports = modifyResultOfMapCountry