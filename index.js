const express = require('express')
const morgan = require('morgan')
const cors = require('cors')

morgan.token('post', function (req, res) { return JSON.stringify(req.body)})

const app = express()

app.use(express.json())
app.use(cors())
app.use(express.static('build'))
app.use(morgan('tiny'))
app.use(morgan(':post', {skip: (req, res) => { return req.method !== 'POST'}
}))

let persons = [
    {
        id: 1,
        name: "Arto Hellas",
        number: "040-123456"
    },
    {
        id: 2,
        name: "Ada Lovelace",
        number: "39-44-5323523"
    },
    {
        id: 3,
        name: "Dan Abramov",
        number: "12-43-234345"
    },
    {
        id: 4,
        name: "Mary Poppendick",
        number: "39-23-6423122"
    }
]

app.get('/info', (req, res) => {
    res.send(`<p>Phonebook has info for ${persons.length} people</p>
    <p>${Date().toString()}</p>`
    )
    
})

app.get('/api/persons', (req, res) => {
    res.json(persons)
})

app.get('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    const person = persons.find(p => p.id === id)
    
    if (person) {
        res.json(person)
    } else {
        res.status(404).end()
    }
    
})

const generateRandomId = (min, max) => {    
    min = Math.ceil(min)
    max = Math.ceil(max)

    return Math.floor(Math.random() * (max - min + 1) + min)
}

app.post('/api/persons', (req, res) => {
    const body = req.body
    const person = {
        id: generateRandomId(1, 10000),
        name: body.name,
        number: body.number    
    }

    if (!body.name || !body.number) {
        return res.status(400).json({
            error: !body.name ? 'name missing' : 'number missing'
        })
    }

    const nameFound = persons.find(p => p.name.toLowerCase() === body.name.toLowerCase())

    if (nameFound) {
        return res.status(400).json({
            error: 'name must be unique'
        })
    } 

    persons = persons.concat(person)
    res.json(person)
})

app.delete('/api/persons/:id', (req, res) => {
    const id = Number(req.params.id)
    persons = persons.filter(p => p.id !== id)
    
    res.status(204).end()
})

const PORT = process.env.PORT || 3001
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`)
})