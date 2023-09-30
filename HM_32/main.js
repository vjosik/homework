function Person (name, age){
    this.name = name;
    this.age = age;
}

Person.prototype.output = function(){
    console.log("Name: " + this.name + " Age: " + this.age)
}

function Car (brand, model, year, carNumber){
    this.brand = brand;
    this.model = model;
    this.year = year;
    this.carNumber = carNumber;
    
}

Car.prototype.carInfo = function(){
    if(this.person!=null)
    {
        this.person.output();
    }else{
        console.log("Власника немає (")
    }
    console.log("Car brand: " + this.brand + " model: " + this.model + " year: " + this.year + " carNumber: " + this.carNumber) 
}

Car.prototype.setOwner = function(person){
    if(person.age > 18){
        this.person = person
    }else{
        console.log("Людині нема 18 років")
    }
}

const owner1 = new Person("Dima", "25");
const owner2 = new Person("Polosatik", "11")
const owner3 = new Person("Ihor", "22")


const car1 = new Car("Mercedes", "s-class", "2022", "BH3333OX")
const car2 = new Car("BMW", "M5", "2021", "HH7777OX")

car1.setOwner(owner1);
car1.carInfo()
car2.setOwner(owner2);
car2.carInfo()
car2.setOwner(owner3);
car2.carInfo()


