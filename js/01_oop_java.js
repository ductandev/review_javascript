// =============================================
//            ✅ Java (OOP chuẩn)
// =============================================

abstract class Animal {
  protected String name;

  public Animal(String name) {
    this.name = name;
  }

  public abstract void speak();
}

class Dog extends Animal {
  private String breed;

  public Dog(String name, String breed) {
    super(name);
    this.breed = breed;
  }

  // encapsulation (getter)
  public String getBreed() {
    return breed;
  }

  // polymorphism (override)
  @Override
  public void speak() {
    System.out.println(name + " barks");
  }
}

// sử dụng
public class Main {
  public static void main(String[] args) {
        Dog dog = new Dog("Buddy", "Husky");
    dog.speak();
    System.out.println(dog.getBreed());
  }
}