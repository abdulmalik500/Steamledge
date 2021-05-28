var i = 0;
while (i <= 5) {
    alert(i);
    i++;
}
// DO WHILE LOOP
 var j = 0;
 do {
     alert(j);
     j++;
 }
 while(j <=0);

 
// THIS IS AN OBJECT THAT CAN BE CALLED UPON
var person = {
    fullName: function(city, country) {
      return this.firstName + " " + this.lastName + ", " + city + ", " + country;
    }
  }
  var person1 = {
    firstName:"John",
    lastName: "Doe",
    city: "Kano",
    country: "Nigeria"
  }
  var person2 = {
    firstName:"Mary",
    lastName: "Doe",
    city: "Lagos",
    country: "Nigeria"
  }
  var person3 = {
      firstName:"abdul",
      lastName:"malik"
  }
  var x = person.fullName.call(person1, "Kano", "Nigeria");
  var y = person.fullName.call(person2); 
  document.getElementById("demo").innerHTML = [x, y];
  
  // this selects the highest number in an array
  document.getElementById("beta").innerHTML = Math.max.apply(null, [1,2,3]);