class Person {
    constructor(name, gender) {
        this.name = name,
        this.gender = gender
    }
}

class Flat {
    residents = []
    setPerson(Person){
        if(Person != null){
            this.residents.push(Person)
        }
    }
}   

class Building {
    constructor(maxApartmentsNumber){
        this.maxApartmentsNumber = maxApartmentsNumber
        this.flats = [];
    }
    
    addApart(Flat){
        if(this.maxApartmentsNumber < this.flats.length){
            this.flats.push(Flat)
        }else{
            console.log("Усі квартири зайняті")
        }
    }
}

const person1 = new Person ("Kostya", "male");
const person2 = new Person ("Vetalii", "male")
const person3 = new Person ("Masha", "female")
const person4 = new Person ("Karina", "female")
const person5 = new Person ("Ihor", "male")

const flat1 = new Flat()
flat1.setPerson(person1)
flat1.setPerson(person2)

const flat2 = new Flat()
flat1.setPerson(person3)
flat1.setPerson(person5)

const flat3 = new Flat()
flat1.setPerson(person4)

const building = new Building(2)
building.addApart(flat1);
building.addApart(flat2);
building.addApart(flat3);

