// Let's fetch some data and filter out the results that
// are not owned by "CFPB Administrator"
fetch('http://data.consumerfinance.gov/api/views.json')
.then(data => data.json())
.then(data => {
    let owners = data.filter(doc => doc.owner.displayName !== 'CFPB Administrator')
    console.log(owners)
})
