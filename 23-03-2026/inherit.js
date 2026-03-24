class person{

    constructor(fullname,address,age){
        this.fullname=fullname;
        this.address=address;
        this.age=age;
    }
    displayDetails(){
        console.log(` name : ${this.fullname} from ${this.address} and ${this.age} years old `);

    }
}
class trainer extends person{
    constructor(fullname,address,age){
        super(fullname,address,age);
    }
    displayDetails(){
        super.displayDetails();
        console.log("Im the trainer for full stack program");
    }
}

var t1=new trainer("Bhaskara","Hyd","28");
t1.displayDetails();