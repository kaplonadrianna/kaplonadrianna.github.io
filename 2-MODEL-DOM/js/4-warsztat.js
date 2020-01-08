
// function wysylanie() {
//     let valueInput = document.getElementsByTagName["submit"]("submit").value
//     console.log(valueInput)
// }

// document.getElementsByTagName("submit").addEventListener("click", function (wysylanie) {
//     wysylanie.preventDefault()
//     let name = document.getElementsByTagName("submit")
// })


let inputTyp = document.getElementsByTagName('input')[2].addEventListener("click", function (e){
    e.preventDefault()
    let fname = document.getElementsByName('fname')[0].value
    
    let lname = document.getElementsByName('lname')[0].value
    console.log(fname + " " + lname)
    
})

