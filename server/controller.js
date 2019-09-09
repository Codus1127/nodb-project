const answers = [
  "As I see it, yes",
  "Ask again later",
  "Better not tell you now",
  "Cannot predict now",
  "Concentrate and ask again",
  "Don’t count on it",
  "It is certain",
  "It is decidedly so",
  "Most likely",
  "My reply is no",
  "My sources say no",
  "Outlook good",
  "Outlook not so good",
  "Reply hazy try again",
  "Signs point to yes",
  "Very doubtful",
  "Without a doubt",
  "Yes",
  "Yes, definitely",
  "You may rely on it",
  "Yes, but do it drunk AF",
  "My sources say no, but they also said Hilary would win",
  "Don't swipe right, it's your cousin",
  "How the hell is Applebee's still in business? Crazy",
  "Do what Jesus would do",
  "Do swipe right, it's your hot cousin",
  "Stop asking if Tom Cruise is gay and find out yourself",
  "Trump uses me when deciding to go to war"
]

const history = [
]
let id = 0

module.exports = {
  createTodo:  (req, res) => {
    const question = req.body.text;
    const randAnswer = Math.floor(Math.random() * answers.length)
    const answer = answers[randAnswer]
    const id = history.length;
    const qa = {
        question: question,
        answer: answer,
        id: id
    }
    history.push(qa)
    res.status(200).send({
      history: history,
      currentQA: qa,
    })
    
},

  getTodos: (req, res, next) => {
    res.status(200).send(history)
  },

  editTodo: (req, res, next) => {
  //  console.log(req)
    const { id } = req.params
    const { text } = req.body

    const index = history.findIndex(element => +element.id === +id)

    if(index === -1){
      return res.status(404).send('Id not found')
    }

    const newItem = {
      id: history[index].id,
      question: text,
      answer: history[index].answer
    }

    history.splice(index, 1, newItem)

    res.status(200).send(history)
  },

  deleteTodo: (req, res, next) => {
    const {id} = req.params

    const index = history.findIndex(element => +element.id === +id)

    if(index === -1){
      return res.status(404).send('Id not found')
    }

    history.splice(index, 1)

    res.status(200).send(history)
  }
}