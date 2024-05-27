console.log("-------------------------------")
console.log("Task-1");
console.log("-------------------------------")
class Movie{
    constructor(title,studio,rating="PG"){
this.title=title;
this.studio=studio;
this.rating=rating;
    }
    get PG(){
        return this.rating==="PG";
    }
}
const obj5=new Movie("Kanaa","SK Studio","8.1");
console.log(obj5.title,obj5.rating,obj5.studio);
const obj1=new Movie("Casino Royale","Eon Productions","PG13");
console.log(obj1.title,obj1.studio,obj1.rating);
const obj2=new Movie("Om","BR Studio");
const obj3=new Movie("Hero","SK Studio");
const obj4=new Movie("Master","7Screen Studio");
let Arr=[obj1,obj2,obj3,obj4,obj5];
for(var i=0;i<Arr.length;i++){
if(Arr[i].PG===true)
    console.log(`With Rating PG : ${Arr[i].title}`);
}
console.log("-------------------------------")
console.log("Task-2");
console.log("-------------------------------")
class Circle{
    constructor(radius,color){
        this.radius=radius;
        this.color=color;
    }
    get Radius(){
        return this.radius;
    }
    set Radius(r){
        this.radius=r;
    }
    get Color(){
        return this.color;
    }
    set Color(c){
        this.color=c;
    }
    get toString(){
        return `"Circle[radius=${this.radius},color=${this.color}]"`;
    }
    get Area(){
        return Math.PI*Math.pow(this.radius,2);
    }
    get Circumference(){
      return 2*Math.PI*this.radius;
    }
}
const cir=new Circle(1.0,"red");
console.log(` ${cir.Radius},${cir.Color}
${cir.toString}
 ${cir.Area}
 ${cir.Circumference}`);


console.log("-------------------------------")
console.log("Task-3");
console.log("-------------------------------")
class Person{
    constructor(name,age,address,gender,maritalstatus,contact,email){
this.name=name;
this.age=age;
this.address=address;
this.gender=gender;
this.maritalstatus=maritalstatus;
this.contact=contact;
this.email=email;
    }
}
const per=new Person("Samy",24,"Panaimadal,Salem","Male","Single","9898989898","samy3@gmail.com");
console.log(per.name,per.age,per.address,per.gender,per.maritalstatus,per.contact,per.email);

console.log("-------------------------------")
console.log("Task-4");
console.log("-------------------------------")
class Uber{
    constructor(price,km){
        this.price=price;
        this.km=km;
        console.log("Price Per Km: "+this.price);
        console.log("Number of Km: "+this.km);
    }
    set Rate(p){
        this.price=p;
    }
    get Rate(){
        return this.price*this.km;
    }
}
const uber=new Uber(50,15);
console.log("Total Fare: "+uber.Rate);



