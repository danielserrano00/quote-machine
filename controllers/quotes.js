const getQuote =(req, res, next) =>{
  res.json({quote: 'random quote', author: 'random author'})
}

const getPhilsQuote = (req, res, next) => {


  res.json({
    quote: 'This is generated from the server!',
    author: 'Phil Scott'
  })
}

module.exports = {
  getQuote,
  getPhilsQuote
}