// Queue class
class Queue
{
    // Array is used to implement a Queue
    constructor()
    {
        this.items = [];
    }
    // enqueue function
enqueue(element)
{    
    // adding element to the queue
    this.items.push(element);
}
dequeue()
{
    // removing element from the queue
    // returns underflow when called 
    // on empty queue
    if(this.isEmpty())
        return "Underflow";
    return this.items.shift();
}

front()
{
    // returns the Front element of 
    // the queue without removing it.
    if(this.isEmpty())
        return "No elements in Queue";
    return this.items[0];
}
// isEmpty function
isEmpty()
{
    // return true if the queue is empty.
    return this.items.length == 0;
}

printQueue()
{
    var str = "";
    for(var i = 0; i < this.items.length; i++)
        str += this.items[i] +" ";
    return str;
}

}

function generatePrintBinary(n)
{
    var q = new Queue();
          
    q.enqueue("1");
          
    while(n-- > 0)
    {
        console.log("n is: "+n)
        console.log(q)
        // print the front of queue
        var s1 = q.front();
        q.dequeue();
        console.log(s1);
              
        // Store s1 before changing it
        var s2 = s1;
              
        // Append "0" to s1 and enqueue it
        q.enqueue(s1 + "0");
              
        // Append "1" to s2 and enqueue it. Note that s2 contains
        // the previous front
        q.enqueue(s2 + "1");
        console.log("completed")
        console.log(q)

     }
}
 
// calling the above function    
// prints [1 10 11 100 101]
generatePrintBinary(3);