from models import Animal, Dog, Cat
def main():

    animal1 = Animal("GenericAnimal", 5, "Something")
    dog1 = Dog("Alpha", 3, "German shepherd")
    cat1 = Cat("Konstantin", 2, "Outbred")

    animals = [animal1, dog1, cat1]

    for animal in animals:
        print(animal)
        print(animal.info())
        print("Sound:", animal.speak())

if __name__ == "__main__":
    main()
