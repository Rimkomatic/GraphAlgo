let edge = [
    ['a','b'],
    ['b','c'],
    ['c','e'],
    ['e','f'],
    ['a','d'],
    ['c','e']
]

let adjList={}


// console.log(adjList[a])

edge.forEach( (pair) =>{
    let [a,b] = pair

    if( ! (a in adjList) ) adjList[a] =[]
    if( ! (b in adjList) ) adjList[b] =[]

    adjList[a].push(b)
    adjList[b].push(a)

} )

console.log(adjList)
