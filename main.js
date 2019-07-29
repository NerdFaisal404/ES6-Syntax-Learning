// let firstName = "faisal";
// firstName = "Ahmed";
// console.log(firstName);

// function showSomeThing() {
//   //Templete String
//   return ` My name is ${firstName}`;
// }

// console.log(showSomeThing());

// //alert("Hello Faisal");

// // const  tag= `
// // <h1>Header</h1>
// // <p>My Name is ${firstName.toUpperCase}</p>`;

// //document.body.innerHTML=tag;

// //document.body.innerHTML="<h1>test</h1>";

// var user = {
//   name: "buddy",
//   age: 40,
//   weight: 60
// };

// console.log(user.age);

// //Arrays
// var points = ["faisal", "masud", "hoque"];
// console.log(points);

// var course = new Map();
// course.set("react", { description: "Java" });
// course.set("position", { description: "Developer" });

// console.log(course);
// //console.log(course.react);
// console.log(course.get("react"));

// for (const letters of "Faisal") {
//   console.log(letters);
// }

// var cat = {
//   meow(times) {
//     console.log("meow".repeat(times));
//   },
//   halum(times) {
//     console.log("halum".repeat(times));
//   },
//   huam(times) {
//     console.log("huam".repeat(times));
//   }
// };

// cat.meow(3);
// cat.halum(4);
// cat.meow(5);

///Building promise
// const spacePeople = () => {
//   return new Promise((resolves, reject) => {
//     const api = "http://api.open-notify.org/astros.json";
//     const request = new XMLHttpRequest();
//     request.open("GET", api);
//     request.onload = () => {
//       if (request.status == 200) {
//         resolves(JSON.parse(request.response));
//       } else {
//         reject(Error(request.statusText));
//       }
//     };
//     request.onerror = err =>reject(err);
//     request.send();
//   });
// };

// spacePeople().then(
//   spaceData => console.log(spaceData),
//   err=> console.error(new Error('Can not open space people'))
// );

const getPeopleInSpace = () =>
  fetch("http://api.open-notify.org/astros.json")
  .then(res =>res.json());

  getPeopleInSpace().then(console.log)


  ///Defautl paremeters

  function getCity(city ="Dhaka", district="Dhaka"){
   // return city.toLowerCase() + district.toLowerCase();

    return `${city.toLowerCase()} ${district.toLowerCase()}`;

  }

  console.log(getCity());
