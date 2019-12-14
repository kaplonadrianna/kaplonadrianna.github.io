fetch('link')
.then(res => res.json())
.then(res => {

//1

for (let i=0; i < res.length; i++){
    if (res[i].id === 50) {
        console.log(res[i].title)
    }
}

//2 

res.forEach(element => {
    console.log(element.title)
});

//3 - unikać

for (let ele in res) {
    console.log(res[ele].title)
}

})


