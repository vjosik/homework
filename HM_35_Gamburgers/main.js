class Gamburgers {
    constructor(size, stuffing) {
        this.size = size;
        this.stuffing = stuffing;
        this.toppings = [];
    }
    addToppings(toppings) {
        this.toppings.push(toppings);
    }

    calculatePrice() {
        let totalPrice = 0;
        switch (this.size) {
            case "small":
                totalPrice += 50;
                break;
            case "large":
                totalPrice += 100;
                break;
        }
        switch (this.stuffing) {
            case "cheese":
                totalPrice += 10;
                break;
            case "salad":
                totalPrice += 20;
                break;
            case "potato":
                totalPrice += 15;
                break;
        }
        this.toppings.forEach((topping) => {
            switch (topping) {
                case "spice":
                    totalPrice += 15;
                    break;
                case "mayo":
                    totalPrice += 20;
                    break;
            }
        })
        return totalPrice;
    }

    calculateCallorice() {
        let totalCallorice = 0;
        switch (this.size) {
            case "small":
                totalCallorice += 20;
                break;
            case "large":
                totalCallorice += 40;
                break;
        }
        switch (this.stuffing) {
            case "cheese":
                totalCallorice += 20;
                break;
            case "salad":
                totalCallorice += 5;
                break;
            case "potato":
                totalCallorice += 10;
                break;
        }
        this.toppings.forEach((topping) => {
            switch (topping) {
                case "spice":
                    totalCallorice += 0;
                    break;
                case "mayo":
                    totalCallorice += 5;
                    break;
            }
        })
        return totalCallorice;
    }
}

const myGamburger = new Gamburgers ('small', 'potato');
myGamburger.addToppings('mayo');

const totalPrice = myGamburger.calculatePrice();
const totalCallorice = myGamburger.calculateCallorice();

console.log ("Price for my gamburger: " + totalPrice + " $ " )
console.log ("Callories of my gamburger: " + totalCallorice + " cal."  )
