const mapQuery = [
	{
		country: "CHN",
		country_score: 9980,
		org: "THU",
		org_score: 2000,
		author: "A",
		author_score: 30	
	},
	{
		country: "CHN",
		country_score: 9980,
		org: "THU",
		org_score: 2000,
		author: "B",
		author_score: 28,
	},
	{
		country: "CHN",
		country_score: 9980,
		org: "THU",
		org_score: 2000,
		author: "C",
		author_score: 48,
	},
	{
		country: "UK",
		country_score: 9980,
		org: "LSE",
		org_score: 2000,
		author: "A",
		author_score: 30	
	},
	{
		country: "UK",
		country_score: 9980,
		org: "LSE",
		org_score: 2000,
		author: "B",
		author_score: 28,
	},
		{
		country: "UK",
		country_score: 9980,
		org: "LSE",
		org_score: 2000,
		author: "C",
		author_score: 30	
	},
	{
		country: "UK",
		country_score: 9980,
		org: "IC",
		org_score: 2000,
		author: "B",
		author_score: 28,
	},		
	{
		country: "US",
		country_score: 9980,
		org: "CMU",
		org_score: 2000,
		author: "A",
		author_score: 30	
	},
	{
		country: "US",
		country_score: 9980,
		org: "UW",
		org_score: 2000,
		author: "B",
		author_score: 28
	}
]



function reformat(mapQuery) {

    let authorsInSameOrg = {}
    let orgsInSameCountry = {}
    let countryScore = {}

    // first traversal: 
    //  - retrieve authors/orgs in same org/country
    //  - hashtable for retrieve in next step
    mapQuery.forEach(author => {

        // authors in same org
        const XX = [author.country, author.org].join('_')
        if (!Object.keys(authorsInSameOrg).includes(XX)){
            authorsInSameOrg[XX] = [{
                    author: author.author,
                    author_score: author.author_score
                }]
        } else {
            authorsInSameOrg[XX].push({
                author: author.author,
                author_score: author.author_score
            })
        }


        // orgs in same country
        if (!Object.keys(orgsInSameCountry).includes(author.country)){
            // no such country
            orgsInSameCountry[author.country] = [{
                org: author.org,
                org_score: author.org_score
            }]
        } else if (orgsInSameCountry[author.country].filter(elem => {
            return elem['org']===author.org
        }).length === 0) {
            // exists such country, but no such org
            orgsInSameCountry[author.country].push({
                org: author.org,
                org_score: author.org_score
            })
        }
        
        // record country score
        countryScore[author.country] = author.country_score
    })



    // traversal toward `country`s in orgsInSameCountry
    const finalResult = Object.keys(orgsInSameCountry).map(country => {
        return {
            country: country,
            country_score: countryScore[country],
            orgs: orgsInSameCountry[country].map(org => {
                return {
                    ...org,
                    authors: authorsInSameOrg[`${country}_${org['org']}`]
                }
            })		
        }
    }) 

    return finalResult
}



module.exports = {
    func: reformat,
    data: mapQuery
}