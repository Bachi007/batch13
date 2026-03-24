class display{
            #greet=""//private field
        constructor(greet){
            this.#greet=greet;//greet is a variable
        }
        greetnow(){
            console.log(`Hello ${this.#greet}`);
        }
        getUser(){
            return this.#greet;
        }
        static wish(){
            console.log("Good Morning");
        }
}

var p1=new display("Bhaskara");
p1.wish();//not valid
display.wish();//valid