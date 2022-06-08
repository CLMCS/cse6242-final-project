const express = require('express')
const queryDB = require('../scripts/queryDB.js')
const sqlOnCountry = require('../scripts/sqlOnCountry.js')
const sqlOnOrganization = require('../scripts/sqlOnOrganization.js')
const sqlOnTopAuthorCountry = require('../scripts/sqlOnTopAuthorCountry.js')
const sqlOnTopAuthorOrg = require('../scripts/sqlOnTopAuthorOrg.js')
const sqlOnAuthorWorks = require('../scripts/sqlOnAuthorWorks.js')
const modifyResultOfMapCountry = require('../scripts/modifyResultOfMapCountry.js')
const modifyResultOfMapOrg = require('../scripts/modifyResultOfMapOrg.js')

const router = express.Router()


router.use(async(req, res, next) => {
    // req.timestamp = Date.now()
    next()
})

/**
 * input (academic_field)
 * return all countries and score on correspongding field
 * return (country, country_score)
 */
router.get('/country-score/:fieldName', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    res.send(
        await queryDB(sqlOnCountry(req))
    )
})


/**
 * input (academic_field)
 * return top 10 organizations in each country in corresponding field
 * tuples: (country, org_name, org_score)
 */
router.get('/org-score/:fieldName', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    res.send(
        await queryDB(sqlOnOrganization(req))
    )
})


/**
 * input (academic_field, country, topN)
 * return topN in specific country in specific field
 * tuples: (person_id, person_name, org_name, score)
*/
router.get('/author-rank/by-country/:fieldName/:country/:top', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    res.send(
        await queryDB(sqlOnTopAuthorCountry(req))
    )
})


/**
 * input (academic_field, country, topN)
 * return topN in specific country in specific field
 * tuples: (person_id, person_name, org_name, score)
*/
router.get('/author-rank/by-org/:fieldName/:orgId/:top', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)

    res.send(
        await queryDB(sqlOnTopAuthorOrg(req))
    )

    // res.send({
    //     queryResult: await queryDB(sqlOnTopAuthorOrg(req))
    // })
})



/**
 * input (author_id)
 * return all the works of this person
 * tuples: (DOI)
 */
router.get('/author-works/:authorId', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    x = await queryDB(sqlOnAuthorWorks(req))
    let result = []
    console.log('apiresult', x)
    x.forEach(elem => {
        result.push({
            'DOI': 'https://doi.org/' + Object.values(elem)[0]
        })
    })
    console.log(result)
    res.send(
        result
        // await queryDB(sqlOnAuthorWorks(req))
    )
})


/**
 * api for map - countries
 */
 router.get('/map/country/:fieldName', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    req.result = await queryDB(sqlOnCountry(req))
    res.send(modifyResultOfMapCountry(req.result))
})



/**
 * api for map - orgs
 */
router.get('/map/org/:fieldName/', async(req, res) => {
    console.log('req.params:', req.params)
    console.log('req.query:', req.query)
    req.result = await  queryDB(sqlOnOrganization(req))
    res.send(modifyResultOfMapOrg(req.result))
})




router.get('*', function(req, res){
    res.status(404).send('<h1>404 Not Found</h1>');
  });

module.exports = router