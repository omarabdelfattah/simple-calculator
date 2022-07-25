
    let result, num1, num2, operation;
    let status = true;

    function calculate(num1, num2, op , result = null) {
        if(result == null ){
            num1 = Number(prompt("enter first number"));
            operation = prompt("enter operation (+,-,*,/,%)");
        }else{
            num1 = result;
            operation = prompt("result = "+result +"\n enter operation (+,-,*,/,%)");
        }
        num2 = Number(prompt("enter second number"));


        if(operation == "+"){
        result = num1 + num2;
        } else if(operation == "-"){
            result = num1 - num2;
        } else if(operation == "*"){
            result = num1 * num2;
        } else if(operation == "/"){
            result = num1 / num2;
        } else if(operation == "%"){
            result = num1 % num2;
        } else {
        result = "Unknow operation please use (+,-,*,/,%)";
        }
        return result;
    }


    while(status){
        result = calculate(num1, num2, operation, result);
    }
    
