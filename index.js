/*
1 уровень:
Задача 1: Создание класса
Условие:
Создайте класс Book, который будет представлять книгу. Класс должен содержать:
Конструктор для инициализации названия книги и имени автора.
Метод getBookInfo(), который возвращает строку с информацией о книге (название и автор).
Что необходимо сделать:
Создайте объект класса Book.
Вызовите метод getBookInfo() для вывода информации о книге.
*/

class Book {
    constructor(bookName, author) {
        this.bookName = bookName;
        this.author = author;
    }

    getBookInfo() {
        return `Книга "${this.bookName}". Автор: ${this.author}`;
    }
};

const book = new Book('Silent Dan', 'Roman Maltsev');
console.log(book.getBookInfo());

/*
Задача 2: Класс с приватными свойствами
Условие:
Создайте класс Person, который будет иметь два свойства:
Приватное свойство #name (имя).
Приватное свойство #age (возраст).
Создайте методы getName() и getAge() для доступа к этим свойствам (геттеры).
*/

class Person {
    #name
    #age
    constructor(name, age) {
        this.#age = age;
        this.#name = name;
    }

    getName() {
        return this.#name;
    }

    getAge() {
        return this.#age;
    }
};

const person = new Person('Oleg', 29);
console.log(`Имя: ${person.getName()}, возраст: ${person.getAge()}`);

/*
Задача 3: Пример наследования классов
Условие:
Создайте два класса:
Базовый класс Animal — для описания животных с методами для вывода информации о животном.
Наследуемый класс Dog — для описания собак, который наследует от класса Animal и переопределяет метод для вывода сообщения о том, что собака лает.
*/

class Animal {
    constructor(name) {
        this._name = name;
    }

    makeNoise() {
        console.log(`Животное ${this._name} издаёт звук`);
    }
};

class Dog extends Animal {
    constructor(name) {
        super(name);
    }

    makeNoise() {
        console.log(`Собака ${this._name} издаёт звук`);
    }
};

const animal = new Animal('Gorilla');
const dog = new Dog('Bobik');

animal.makeNoise();
dog.makeNoise();


/*
2 уровень:
Задача 1: Работа с классами
Условие:

Напишите два класса:
Класс Person:
В нем должно быть приватное поле _name, которое хранит имя.
Необходимо добавить метод getName() для получения имени.
Также должен быть метод setName(newName) для изменения имени.
Использование приватных полей должно быть строго ограничено внутри класса, доступ к ним извне возможен только через методы.
Класс Student, наследующийся от Person:
Класс Student должен добавлять новое приватное поле _grade (оценка).
Для работы с этим полем нужно использовать геттер и сеттер:
getGrade() для получения оценки.
setGrade(newGrade) для изменения оценки.
Важно, чтобы при установке оценки в Student, значение было проверено на допустимость (например, оценка должна быть в пределах от 1 до 5).
*/

class newPerson {
    _name;
    constructor(name) {
        this._name = name;
    }

    getName() {
        return this._name;
    }

    setName(newName) {
        this._name = newName;
    }
};

class Student extends newPerson {
    constructor(name) {
        super(name);
        this._grade = 0;
    }

    getGrade() {
        return this._grade;
    }

    setGrade(newGrade) {
        if(newGrade < 0 || newGrade > 5 || !Number.isFinite(newGrade)) return;
        this._grade = newGrade;
    }
};

const newP = new newPerson('Tom');
const student = new Student('Bob');

student.setGrade('fff');
console.log(`Отметка студента: ${student.getGrade()}`);
student.setGrade(23);
console.log(`Отметка студента: ${student.getGrade()}`);
student.setGrade(5);
console.log(`Отметка студента: ${student.getGrade()}`);

/*
Задача 2: Создание классов для работы с геометрическими фигурами
Условие:
Создайте абстрактный базовый класс Shape для представления геометрической фигуры.
Используйте наследование для создания классов Rectangle и Circle, которые наследуют от Shape.
В классе Shape должно быть приватное поле #name, которое хранит название фигуры.
В классе Rectangle и Circle переопределите метод getArea(), который будет вычислять площадь фигуры. Это демонстрирует полиморфизм.
В классе Shape создайте статическое поле count, которое отслеживает количество созданных объектов фигур.
Что необходимо сделать:
Создайте объекты классов Rectangle и Circle и покажите, как работает полиморфизм (переопределение методов).
Продемонстрируйте работу статического поля, отслеживающего количество объектов.
*/

class Shape {
    #name
    constructor(name) {
        this.#name = name;
    }

    get name() {
        return this.#name;
    }

    set name(newName) {
        this.#name = newName;
    }

    getArea() {
        return `Can't get area of shape ${this.#name}`;
    }
};

class Rectangle extends Shape {
    #length
    #wide
    constructor(name, length, wide) {
        super(name);
        this.#length = length;
        this.#wide = wide;
    }

    getArea() {
        return this.#length * this.#wide;
    }
};

class Circle extends Shape {
    #radius
    constructor(name, radius) {
        super(name);
        this.#radius = radius
    }

    getArea() {
        return (this.#radius ** 2) * Math.PI;
    }
}

const shape = new Shape('figure');
const rectangle = new Rectangle('rect', 20, 40);
const circle = new Circle('circle', 5);

console.log(`Площадь ${shape.name} = ${shape.getArea()}`);
console.log(`Площадь ${rectangle.name} = ${rectangle.getArea()}`);
console.log(`Площадь ${circle.name} = ${circle.getArea().toFixed(2)}`);