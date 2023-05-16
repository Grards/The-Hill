import { myFirstPromise } from "./exercise1.js"
import { ageForName } from "./exercise2.js"
import { lastResearch } from "./last-research.js"

let showHeroes = document.getElementById("showHeroes")
let askAgeForName = document.getElementById("askAgeForName")


showHeroes.addEventListener("click", myFirstPromise)
askAgeForName.addEventListener("click", evenement =>{
    let name = document.getElementById("search").value
    let country = document.getElementById("country").value
    ageForName(name,country)
})

lastResearch()