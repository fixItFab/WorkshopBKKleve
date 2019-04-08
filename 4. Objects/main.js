// Mithilfe von Objekten lassen sich Datenelemente mit definierten Eigenschaften erzeugen

const person = {
  firstName: "Fabian",
  lastName: "Grebe",
  age: 28,
  drinkingCoffee: true,
  sayHello: function() {
    alert("Hello " + this.firstName + " " + this.lastName);
  }
};

person.sayHello();

person.firstName = "Max";
person.lastName = "Mustermann";

person.sayHello();
