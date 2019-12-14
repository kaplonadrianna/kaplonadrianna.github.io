let imiona = ['Monika', true, 'Łukasz', 1];
console.log("TCL: imiona", imiona[1])
imiona.pop();

// trzeba zrobic nowa tablice do uzycia joina
let NowaTablica = imiona.join('-----')

//obrazanie 
let imiona = imiona.reverse()

//sort mie na liczby 


let posortowaneNumerki = numerki.sort()

posortowaneNumerki = numerki.sort(function sortMain(a,b)) {
    return a - b
}