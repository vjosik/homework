function SuperMath() {
    this.input = function () {
        const newX = prompt("Enter new x: ")
        const newY = prompt("Enter new y: ")
        const newZnak = prompt("Enter znak(+, -, /, *, %): ")
        if (!isValidOperator(newZnak)) {
            alert("Некоректний знак. Введіть один із допустимих знаків: +, -, /, *, %");
            return this.input();
        }
        return { X: newX, Y: newY, znak: newZnak };
    };
    SuperMath.prototype = function performOperation(X, Y, znak) {
        switch (znak) {
            case '+':
                return X + Y;
            case '-':
                return X - Y;
            case '/':
                if (Y === 0) {
                    return "Ділення на нуль неможливе";
                }
                return X / Y;
            case '*':
                return X * Y;
            case '%':
                if (Y === 0) {
                    return "Ділення на нуль неможливе";
                }
                return X % Y;
            default:
                return "Невідомий оператор";
        }
    }
    this.check = function (obj) {
        const { X, Y, znak } = obj;
        console.log(obj)
        if (!isValidOperator(znak)) {
            alert("Некоректний знак. Введіть один із допустимих знаків: +, -, /, *, %");
            return this.input();
        } else {
            const trueZnak = confirm("Ви хочете виконати " + znak + "з X:" + X + " та з Y:" + Y)
            if (trueZnak == true) {
                return performOperation(X, Y, znak)
            }
            else{
                return this.input();
            }
        }
    }

    function isValidOperator(operator) {
        const validOperators = ['+', '-', '/', '*', '%'];
        return validOperators.includes(operator);
    } 
}





const calculator = new SuperMath();

const obj = { X: 12, Y: 3, znak: "%" };
console.log(calculator);
const result = calculator.check(obj);
console.log("Результат: ", result);





