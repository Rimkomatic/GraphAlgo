const graph = {
    a:['b','c'],
    b:['e','f'],
    c:['d'],
    d:['b','f'],
    e:['c'],
    f:['e']
}

const queue=[]
const traversed=[]

console.log(breadthFirstTraversal('a','e'))

function isEmpty()
{
    if(queue.length===0) return true
    else return false
}

function printAndPush()
{
    let cur =queue.shift()

    traversed.push(cur)

    for(let e of graph[cur])
    {
        if(!queue.includes(e) && !traversed.includes(e))
        {
            queue.push(e)
        }
    }
}


function reached(dest)
{
    return traversed.includes(dest)
}


function breadthFirstTraversal(start,dest)
{
    queue.push(start)

    while(!isEmpty())
    {
        printAndPush()

        if(reached(dest)) return true
    }
    
    return false
}