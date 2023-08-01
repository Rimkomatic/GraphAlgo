const graph = {
    a:['b','c'],
    b:['e','f'],
    c:['d'],
    d:['b','f'],
    e:['c','f'],
    f:[]
}

const stack=[]
const traversed=[]


depthFirstTraversal('a')

function isEmpty()
{
    if(stack.length === 0) return true
    else return false
}

function isAlreadyTraversed(val)
{
    return traversed.includes(val)
}

function printAndPush()
{
    let cur=stack.pop()
    console.log(cur)
    traversed.push(cur)
    
    for(let e of graph[cur])
    {
        if(!isAlreadyTraversed(e)) stack.push(e)
    }
}


function depthFirstTraversal(start)
{
    stack.push(start)

    while(!isEmpty())
    {
        printAndPush()
    }
}

