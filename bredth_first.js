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

breadthFirstTraversal('a')

function isEmpty()
{
    if(queue.length===0) return true
    else return false
}

function printAndPush()
{
    let cur =queue.shift()
    console.log(cur)
    traversed.push(cur)

    for(let e of graph[cur])
    {
        if(!queue.includes(e) && !traversed.includes(e))
        {
            queue.push(e)
        }
    }
}


function breadthFirstTraversal(start)
{
    queue.push(start)

    while(!isEmpty())
    {
        printAndPush()
    }
}