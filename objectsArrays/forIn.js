
var animal = {
  species: "dog",
  sound: "woof",
  scary: "teeth",
  limbs: 4
};
var superPower = "super power!"

animal[superPower] = "smell";


for (var item in animal){
  console.log(animal[item]);
}
