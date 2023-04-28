const express = require('express')
const app = express()
const port = 5000
let cors = require('cors')
const categoris = require("./data/Catagories.json")
const news = require("./data/News.json")
app.use(cors())
app.get('/', (req, res) => {
  res.send('dragon is running!')
})
app.get("/catagories", (req, res) => {
  res.send(categoris);
})
app.get("/news", (req, res) => {
  res.send(news);
})
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  const selectNew = news.find(n => n._id === id);
  res.send(selectNew);

})
app.get("/catagories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news)
  }
  else {
    const catagoryNews = news.filter(n => parseInt(n.category_id) === id)
    res.send(catagoryNews)

  }

})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})