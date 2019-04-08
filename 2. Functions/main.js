// Funktionen können unterscheidlich definiert werden...
// Generell würde ich die 2. Variante empfehlen. Es gibt jedoch Ausnahmen, in der die erste Variante genutzt werden muss (...)

const firstName = "Fabian";

function sayHello(name) {
  alert("Hello " + name);
}

const sayBye = name => {
  alert("Bye " + name);
};

sayHello(firstName);
sayBye(firstName);
