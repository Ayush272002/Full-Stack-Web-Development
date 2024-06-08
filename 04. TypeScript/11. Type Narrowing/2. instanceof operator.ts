class Dog {
  bark(): void {
    console.log("Woof");
  }
}

class Cat {
  meow(): void {
    console.log("meow");
  }
}

function animalSound(animal: Dog | Cat) : void{
    if(animal instanceof Dog) animal.bark();
    else animal.meow();
}

animalSound(new Dog());
animalSound(new Cat());