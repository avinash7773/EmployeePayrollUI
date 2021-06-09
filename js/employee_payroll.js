class EmployeePayrollData {
    //properties
    id;
    salary;
    gender;
    startDate;
  
    //constructor
    constructor(...params) {
      this.id = params[0];
      this.name = params[1];
      this.salary = params[2];
      this.gender = params[3];
      this.startDate = params[4];
    }
  
    /**
     * getters and setters:
     */
    get name() {
      return this._name;
    }
    set name(name) {
      let nameRegex = RegExp("^[A-Z]{1}[a-zA-Z]{2,}$"); 
      if (nameRegex.test(name)) 
        this._name = name;
     else throw "Incorrect name";
    }
  
  
    //toString
    toString() {
      const options = { year: "numeric", month: "long", day: "numeric" };
      const empDate =
        this.startDate === undefined
          ? "undefined"
          : this.startDate.toLocaleDateString("en-US", options); 
      return (
        "id = " +
        this.id +
        ", name = " +
        this.name +
        ", gender = " +
        this.gender +
        ", salary = " +
        this.salary +
        ", Date started = " +
        empDate
      );
    }
  }