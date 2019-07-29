let firstName = "faisal";
firstName = "Ahmed";
console.log(firstName);

function showSomeThing() {
  //Templete String
  return ` My name is ${firstName}`;
}

console.log(showSomeThing());

//alert("Hello Faisal");

// const  tag= `
// <h1>Header</h1>
// <p>My Name is ${firstName.toUpperCase}</p>`;

//document.body.innerHTML=tag;

//document.body.innerHTML="<h1>test</h1>";

var user = {
  name: "buddy",
  age: 40,
  weight: 60
};

console.log(user.age);

//Arrays
var points = ["faisal", "masud", "hoque"];
console.log(points);

var course = new Map();
course.set("react", { description: "Java" });
course.set("position", { description: "Developer" });

console.log(course);
//console.log(course.react);
console.log(course.get("react"));

for (const letters of "Faisal") {
  console.log(letters);
}

var cat = {
  meow(times) {
    console.log("meow".repeat(times));
  },
  halum(times) {
    console.log("halum".repeat(times));
  },
  huam(times) {
    console.log("huam".repeat(times));
  }
};

cat.meow(3);
cat.halum(4);
cat.meow(5);
