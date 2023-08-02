let edge = [
    ['a','b'],
    ['b','c'],
    ['c','e'],
    ['e','f'],
    ['a','d'],
    ['c','e']
]




function findTheNode(src,dst,trav)
{
    if( src === dst ) return true
    if( trav.has(src) ) return false

    trav.add(src)

    for( let neb of adjList[src])
    {
        if(findTheNode(neb,dst,trav)) return true
    }
    return false
}


let adjList={}


// console.log(adjList[a])

edge.forEach( (pair) =>{
    let [a,b] = pair

    if( ! (a in adjList) ) adjList[a] =[]
    if( ! (b in adjList) ) adjList[b] =[]

    adjList[a].push(b)
    adjList[b].push(a)

} )

// console.log(adjList)

console.log(findTheNode('a' , 'z' ,new Set() ))


// console.log(parseInt(Date()))

// function getTimeToExecute()
// {
//     let t1 = Date.now()

//     for(let i=0 ; i<1000; i++) findTheNode('a' , 'z' ,new Set())

//     let t2 = Date.now()

//     return (t2 - t1)/1000
// }

// console.log(getTimeToExecute())