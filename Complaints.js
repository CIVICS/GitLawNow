// Let's fetch some data and filter out the results that
// are not owned by "CFPB Administrator", then get a list
// of owners' names
fetch('http://data.consumerfinance.gov/api/views.json')
.then(data => data.json())
.then(data => {
    let owners = data.filter(doc => doc.owner.displayName !== 'CFPB Administrator')
    let names = owners.map(doc => doc.owner.displayName)
    console.log(names)
})
