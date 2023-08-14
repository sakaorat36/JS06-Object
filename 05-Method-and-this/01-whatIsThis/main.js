let user = {
    name: 'John',
    sayHi: function () {
      console.log(this.name); // John
    }
  };
  
  (user.sayHi)(); // * John เพราะ console.log(this.name); // John