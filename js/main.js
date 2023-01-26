
/*
const obj={
	"name":"Nivetha",
	"age":28,
	"qualification":"B.E",
	"student":false,
	"job":null,
	"education":{"school":"B.H.S.S","college":"B.I.T"},
	
}


obj.gender="female";

delete obj.qualification

console.log(obj.student);
console.log(obj.education.school)
console.log(obj.qualification)
console.log(obj.gender)
console.log(obj)
//obj.year=obj.age;
//delete obj.age;


const {age,...a}= obj

const newobj={year:age,...a}
console.log(newobj)

//console.log(age)
var array = [1,2,5,8];
var array2 = array;
array2.push(77);
console.log(array,array2);

var s=10;
var y=s;
y=44;
console.log(s,y)



let age = 17;
let test = "pass";
let adhaar = "yes";

if(age >=18 && test == "pass")
{
	console.log("you are eligible for license")
}
else {
	console.log("you are not eligible for license")
}

if(age >=18 && adhaar == "yes")
{
	console.log("you are eligible for voting")
}
else {
	console.log("you are not eligible for voting")
}
	
	*/
	
	
	class Trainee{
		constructor(name,number,qualification,rating){
			this.name = name;
			this.mobile = number;
			this.qualification = qualification;
			this.rating = rating;
		}
		updateRating(update){
			this.rating = (this.rating + update)/2;		
		}
		getName(){
			return this.name;
		}
		getMobile(){
			return this.mobile;
		}
		getQualification(){
			return this.qualification;
		}
		getRating(){
			return this.rating;
		}
	}
	let traineesList=[];
	var trainee1 = new Trainee("Nivetha",8883811088,"B.E",5);
	var trainee2 = new Trainee("Revathi",7773811088,"B.TECH",5);
	var trainee3 = new Trainee("Kalai",8547511088,"B.E",5);
	var trainee4 = new Trainee("Vaanmathi",9883811088,"B.TECH",5);
	var trainee5 = new Trainee("Sandhya",97883811088,"B.E",5);
	
	traineesList.push(trainee1,trainee2,trainee3,trainee4,trainee5)
	let tableEle = document.getElementsByTagName("table")[0]
	let sNo = 1;
	
	
	traineesList.forEach((a)=>{
		let rowEle = document.createElement("tr");
		let col1Ele = document.createElement("td");
		let col2Ele = document.createElement("td");
		let col3Ele = document.createElement("td");
		let col4Ele = document.createElement("td");
		let col5Ele = document.createElement("td");
		let col6Ele = document.createElement("td");
		var newRateEle = document.createElement("input")
		let newRateOkEle = document.createElement("button")
	
		col5Ele.setAttribute("id","rating"+sNo)
		newRateEle.setAttribute("size",3);
		newRateEle.setAttribute("id","input"+ sNo);
		newRateOkEle.setAttribute("onclick",`newRating(${sNo})`)

		
		col1Ele.innerText = sNo;
		col2Ele.innerText = a.getName();
		col3Ele.innerText = a.getMobile();
		col4Ele.innerText = a.getQualification();
		col5Ele.innerText = a.getRating();	 

		newRateOkEle.innerText = "ok"
		 
		col6Ele.append(newRateEle,newRateOkEle)
		 
		rowEle.append(col1Ele,col2Ele,col3Ele,col4Ele,col5Ele,col6Ele);
		tableEle.append(rowEle);
		sNo++
	})
	
function newRating (index){
	
	let inputValue = parseInt(document.getElementById("input"+index).value);
		if (inputValue){
			traineesList[index-1].updateRating(inputValue);
			document.getElementById("rating"+index).innerText = traineesList[index-1].getRating();
			document.getElementById("input"+index).value ="";
		}
		else{
			alert ("enter value")
		}
}
	
	
	
	