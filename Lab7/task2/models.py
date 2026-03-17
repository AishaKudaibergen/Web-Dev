class Animal:
    def __init__(self, name, age, species):
        self.name = name
        self.age = age
        self.species = species

    def speak(self):
        return "Animal makes a sound"

    def info(self):
        return f"{self.name} is {self.age} years old."

    def __str__(self):
        return f"Animal: {self.name}, Age: {self.age}, Species: {self.species}"


class Dog(Animal):
    def __init__(self, name, age, breed):
        super().__init__(name, age, "Dog")
        self.breed = breed

    def speak(self):
        return "Woof!"

    def fetch(self):
        return f"{self.name} is sitting on a chain"

    def __str__(self):
        return f"Dog: {self.name}, Age: {self.age}, Breed: {self.breed}"


class Cat(Animal):
    def __init__(self, name, age, color):
        super().__init__(name, age, "Cat")
        self.color = color

    def speak(self):
        return "Meow!"

    def scratch(self):
        return f"{self.name} is scratching the sofa"

    def __str__(self):
        return f"Cat: {self.name}, Age: {self.age}, Breed: {self.color}"
