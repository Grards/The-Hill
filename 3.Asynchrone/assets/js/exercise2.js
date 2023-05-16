import { lastResearch } from "./last-research.js";

export function ageForName(name,country){
    const fetchName = (name,country) => fetch("https://api.agify.io/?name=" + name + "&country_id=" + country);
    fetchName(name,country)
        .then((response) => response.json())
        .then((json) => {
            let resultContainer = document.getElementById("result-2")
            resultContainer.innerHTML += `
                <li>
                    <h3>Firstname : ${json.name}</h3>
                    <p>Country selected : ${json.country_id}</p>
                    <p>${json.age} years on average</p>
                    <p>${json.count} ${json.name} existing</p>
                </li>
            `
            let temporary = []
            temporary.push(JSON.stringify(json))
            localStorage.setItem("lastResearch", temporary)
        })
        .catch((error) => {
            console.log("There was an error!", error);
        });
        lastResearch()
}