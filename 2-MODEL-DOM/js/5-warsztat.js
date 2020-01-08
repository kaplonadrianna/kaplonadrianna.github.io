
function zgody() {
    let zgoda = document.getElementById('wszystkieZgody').checked
    let resztaZgod = document.getElementsByClassName('resztaZgody')
    if (zgoda) {
        resztaZgod[0].checked = true
        resztaZgod[1].checked = true
    } else {
        let napis = document.createElement('p')
        napis.InnerHTML = "Brak Zgody"
        resztaZgod[0].checked = false
        resztaZgod[1].checked = false
        //zgoda.appendChild(napiss)
    }
}

document.getElementById('wszystkieZgody').addEventListener('change', zgody)