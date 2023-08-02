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
    adjList.pair[0].push(pair[1])
    adjList.pair[1].push(pair[0])
} )

console.log(adjList)
