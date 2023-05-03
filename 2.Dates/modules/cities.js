const DateAnchorage = document.getElementById("DateAnchorage");

export function showingDateAnchorage() {
    const options = {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
        hour: "numeric",
        minute: "numeric",
        second : "numeric",
        timeZone: "America/Anchorage" // Spécifie le fuseau horaire d'Anchorage
    };

    const today = new Date().toLocaleString("fr-FR", options);
    DateAnchorage.innerText = today;
}