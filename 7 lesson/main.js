let persone = {}
persone.name = 'Ivan';
persone.secondName = 'Ivanov';
persone.showData = function () {
    console.log(`Name: ${this.name}, secondName: ${this.secondName}`);
};
let newPersone = {}
for (const key in persone) {
    newPersone[key] = persone[key]
}
newPersone.name = 'Petro';
newPersone.secondName = 'Petriv';

persone.showData();
newPersone.showData();

//2
let MyMath = {}
MyMath.a = 5;
MyMath.b = 2;
MyMath.sum = function (c) {
    c = this.a + this.b
    console.log(c)
}
MyMath.sum()
MyMath.multiplication = function (d) {
    d = this.a * this.b
    console.log(d)
}
MyMath.multiplication();
MyMath.division = function (j) {
    j = this.a / this.b
    console.log(j)
}
MyMath.division();
MyMath.substraction = function (e) {
    e = this.a - this.b
    console.log(e)
}
MyMath.substraction();