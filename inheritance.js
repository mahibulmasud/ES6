class Parent{
    constructor(){
        this.fatherName = "Linux";
    }
}
class Child extends Parent{
    constructor(name){
        super();
        this.name = name;
    }
    getFullName(){ 
        return this.name +" "+ this.fatherName;
    }
}
 const baby = new Child("Ubuntu");
 const baby2 = new Child("Kali");
console.log(baby.getFullName());
 console.log(baby2.getFullName());