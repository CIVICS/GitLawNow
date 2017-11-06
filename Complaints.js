// Let's fetch some data.
fetch('http://data.consumerfinance.gov/api/views.json')
  .then(data => data.json())
  .then(console.log)
