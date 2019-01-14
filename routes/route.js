const controller = require("../controller/controller")

module.exports = (app) =>{
  app.get('/', controller.index)
  app.post('/newquote', controller.newQuote)
  app.get('/showquotes', controller.showQuotes)
}