function sql(req) {
    let s = `
    select DOI
    from author_publication 
    where person_id = '${req.params.authorId}'
    `
    console.log(s)

    return s
}


module.exports = sql