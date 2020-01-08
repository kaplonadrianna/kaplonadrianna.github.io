
//es5
function Pracownik(name, sname, email, phone) {
    this.nameSurName = name + " " + sname;
    this.email = email
    this.phone = phone
}

let wszyscyPracownicy = []
console.log("TCL: wszyscyPracownicy", wszyscyPracownicy)

let janKowalski = new Pracownik("Jan", "Kowalski", "jk@op.pl", "777888999")
wszyscyPracownicy.push(janKowalski)
console.log(janKowalski)
console.log("TCL: wszyscyPracownicy", wszyscyPracownicy)

let adamNowak = new Pracownik("Adam", "Nowak", "an@op.pl", "555444333")
wszyscyPracownicy.push(adamNowak)
console.log("TCL: wszyscyPracownicy dodano adam Nowak", wszyscyPracownicy)

//es6
class NowyPracownik {
    constructor(name, sname, email, phone, children, ageChildren){
        this.nameSurName = name + " " + sname;
        this.email = email
        this.phone = phone
        this.children = {
            age: ageChildren,
            nameChildren: children
        }
    }
}

let adamJakis = new NowyPracownik("adam", "jakiś", "aj@wp.pl", "666777888", "Brajan", "3 lata")
console.log("TCL: adamJakis", adamJakis)
