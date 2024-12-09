let name = {
  firstname: "Shubham",
  lastname: "Kumar",
  printFullName: function () {
    console.log(this.firstname + " " + this.lastname);
  },
};

name.printFullName();
