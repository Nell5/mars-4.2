console.log = prompt


let string = prompt("String typedagi textni yozing")

let age = +prompt("Number typedagi textni yozing")

let r = prompt("Boolean typedagi textni yozing")

r = boolean(r);

confirm("Siz yozgan malumot niqmi?")

alert(` Siz yozgan ${string} malumot turi ${typeof string} ga tegishli \n
        Siz yozgan ${age} malumot turi ${typeof age} ga tegishli \n
        Siz yozgan ${boolean} malumot turi ${typeof boolean} ga tegishli \n`)