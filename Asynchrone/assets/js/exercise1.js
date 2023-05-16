export function myFirstPromise(){
    const request = fetch("./assets/json/example.json")
    const response = request.then((response) => response.text());

    response.then((text) => {
        let objectResult = JSON.parse(text)
        let resultContainer = document.getElementById("result-1")
        resultContainer.innerHTML = `<h2>${objectResult.squadName}</h2>`
        for(let hero of objectResult.members){
            resultContainer.innerHTML += `
                <li>${hero.name}</li>
            `
        }
    
    })
}
