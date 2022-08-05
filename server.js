const e = require('express')
const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())


let kindred = {

    'theo': {
        'generation': 9,
        'clan': 'brujah',
        'born/embraced': '1839,1857'
    },

    'uncle smelly': {
        'generation': 8,
        'clan': 'nosferatu',
        'born/embraced': '1892,1905'
        },

    'unknown': {
        'generation': 'not known',
        'clan': 'not known',
        'born/embraced': 'not known'
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