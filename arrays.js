var plants = ["Monstera", "Pothos", "Fiddle Leaf Fig", "ZZ Plant"];
//in this call I'm using the pop method which will exclude the last element of this array//
plants.pop ();
console.log(plants);

var merchQuantity = [6, 12, 24, 72];
//in this call I'm using the push method which will add an element to the end of this array//
merchQuantity.push (100);
console.log(merchQuantity);

//Index Positions are used to access elements from an array. 
//We need to use brackets and a number that corresponds with that element. 
//Counting starts with the number 0, and carries through the end of the elements.
//For example, in my plants variable above, Monstera is 0, Pothos is 1, and so on.
//If I want to access "ZZ Plant" I will make sure to use the following
//   console.log(plants[3])

var answers = [true, true, false, false]
//In this call I'm using the shift method which removes the first element of the array
//As a result, this also changes the length of the array
answers.shift ();
console.log(answers)