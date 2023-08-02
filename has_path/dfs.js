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



console.log(depthFirstTraversal('e','b'))

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
    traversed.push(cur)
  
    
        for(let e of graph[cur])
        {
            if(!isAlreadyTraversed(e) && !stack.includes(e)) 
            {
                stack.push(e)
            }
        }
  
    
}


function reached(dest)
{
    return traversed.includes(dest)
}


function depthFirstTraversal(start,dest)
{
    stack.push(start)

    while(!isEmpty())
    {
        printAndPush()

        if(reached(dest)) return true
    }
    
    return false
}

