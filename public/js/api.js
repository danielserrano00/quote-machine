function setElementText(id, text){
  document.getElementById(id).innerHTML = text
}

// const BASE_URL = 'https://andruxnet-random-famous-quotes.p.mashape.com/'
// const API_ENDPOINT = 'cat='

const BASE_URL = 'http://localhost:3000'
const API_ENDPOINT = '/api/quote/phil'

// on click method
document
  .getElementById('newQuote')
  .addEventListener('click', function (e) {

    setElementText('quote', 'Loading...')
    setElementText('author', '')

    callApi(BASE_URL, API_ENDPOINT).then(function(response){
        setElementText('quote', response.quote)
        setElementText('author', response.author)
    })
      .catch(function({response,json}){
        setElementText('quote', json.error || 'Oops, something went wrong')
        setElementText('author','')
      })
  })

/**
 * API helpers
 * */

const API_HEADERS = {
  Origin: BASE_URL,
  "X-Mashape-Key": "OivH71yd3tmshl9YKzFH7BTzBVRQp1RaKLajsnafgL2aPsfP9V",
  Accept: "application/json",
  "Content-Type": "application/x-www-form-urlencoded"
}

// fetch API call
const callApi = function(base, endpoint){
  return window.fetch(base + endpoint, {
    cache: 'no-cache',
    mode: 'cors',
    headers: API_HEADERS
  })
    .then(function (response) {

      const json = response.json()
      if(!response.ok)
        return Promise.reject({response, json})

      return json
    })
}
