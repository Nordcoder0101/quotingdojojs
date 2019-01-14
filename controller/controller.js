const Quote = require('../models/Quote')

module.exports = {
  index: function(req, res){
    res.render('index')
  },

  newQuote: function(req, res) {
    let newQuote = new Quote(req.body)
    newQuote.save((err) =>{
      if(err){
        console.log('Something went wrong', err)
        res.redirect('/')
      } else{
        console.log('New quote created')
        res.redirect('/showquotes')
      }
      
    })
    
  },
  showQuotes: function(req, res) {
    Quote.find({}, (err, quotes) => {
      if (err){
        console.log('something went wrong', err)
      } else {
        let data = {}
        data.allQuotes = quotes
        console.log(data)
        res.render('quotes', {data: data})
      }
    })
  }

}