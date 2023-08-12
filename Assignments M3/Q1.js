const printObjectProperties = obj => {
    if (Object.keys(obj).length === 0) {
      console.log("Object is empty");
      return;
    }
  
    for (let property in obj) {
      console.log(`${property}: ${obj[property]}`);
    }
  }
  
  const person = {
    name: "David",
    age: 22,
    city: "New York"
  };
  
  const emptyObject = {};
  
  printObjectProperties(person);
  printObjectProperties(emptyObject);  