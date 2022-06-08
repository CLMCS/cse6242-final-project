const express = require('express')
const cors = require('cors')
const router = require('./src/router/api_router.js')


const app = express()

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static('./public/'))


// router mw
app.use('/api', router)






// error-handling mw
app.use((err, req, res, next) => {
    console.error(err.stack)
    res.status(500).send('ERROR')
})

app.listen(5000, () => {
    console.log('server running at http://127.0.0.1:5000 ...')
})