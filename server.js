const e = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


let kindred = {

    'theo': {
        'generation': 7,
        'clan': 'brujah',
        'true age': 300
    },

    'uncle smelly': {
        'generation': 8,
        'clan': 'nosferatu',
        'true age': 500
        },

    'unknown': {
        'generation': 'not known',
        'clan': 'not known',
        'true age': 'not known'
    },
}

app.get('/', (request, response)=>{
    response.sendFile(__dirname + '/index.html')

})

app.get('/api/:kindredName', (request, response)=>{
    const kindredName = request.params.kindredName.toLowerCase()

if(kindred[kindredName]){
    response.json(kindred[kindredName])
}else{
    response.json(kindred['unknown'])
}
})
 
app.listen(process.env.PORT || PORT, ()=>{
    console.log(`The server is running on port ${PORT}`)
}) 