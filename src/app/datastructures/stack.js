 class Stack {
    constructor() {
        this.items=[];
    }

    push(element) {
        this.items.push(element);
    }

    pop(element) {
        if(this.items.length == 0) {
            return "Underflow"
        }
        return this.items.pop(element);
    }

    peek() {
        return this.items[this.items.length-1];
    }

    isEmpty() {
        return this.items.length == 0;
    }

    printStack() {
        return this.items.toString();
    }
}

var stack = new Stack();
console.log(stack.isEmpty()); 
console.log(stack.pop()); 
stack.push(10);
stack.push(20);
stack.push(30);
console.log(stack.printStack());
console.log(stack.peek());
console.log(stack.pop());
console.log(stack.printStack()); 

function postFixEvaluation(exp) {
    var stack = new Stack();
    console.log("evalating the xpression: "+exp)
    for( var i=0;i < exp.length; i++){
        var c = exp[i];
        // console.log("element checking: "+c)
        // console.log(" checking is NaN: "+ isNaN(c) )
        // console.log(" c-'0': "+ (c-'0') )
        if (!isNaN(c))
            stack.push(c - '0');
        else {
            var val1 = stack.pop();
            var val2 = stack.pop();
            if (val1 == "Underflow" || val2 == "Underflow")
                return "Can't perform postfix evaluation";
            switch (c) {
                    case '+':
                        stack.push(val2 + val1);
                        break;
         
                    case '-':
                        stack.push(val2 - val1);
                        break;
         
                    case '/':
                        stack.push(val2 / val1);
                        break;
         
                    case '*':
                        stack.push(val2 * val1);
                        break;
            }
        }
    }
         
    return stack.pop();
}
         
console.log(postFixEvaluation("235*+8-"));
console.log(postFixEvaluation("23*+")); 

