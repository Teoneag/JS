const person = {
    name: "John Doe",
    printName: function() {
      console.log(this.name);
    }
  }

  const printPersonName = person.printName.bind(person);
  printPersonName(); // Outputs: "John Doe"
  