document.addEventListener("DOMContentLoaded", () => {
    // Funzione per generare il percorso delle onde circolari
    function generateCircularWavePath(radius, phase, amplitude, frequency) {
        let d = "M "; // Inizia con il comando "move to"
        let centerX = 250; // Centro dell'onda (orizzontale)
        let centerY = 250; // Centro dell'onda (verticale)

        // Ciclo per disegnare l'onda in base agli angoli
        for (let angle = 0; angle <= 360; angle += 5) {
            let radian = angle * Math.PI / 180;
            let dynamicRadius = radius + amplitude * Math.sin(frequency * radian + phase); // Calcola il raggio dinamico in base alla frequenza e fase
            let x = centerX + dynamicRadius * Math.cos(radian); // Calcola la posizione X
            let y = centerY + dynamicRadius * Math.sin(radian); // Calcola la posizione Y
            d += `${x},${y} `; // Aggiungi il punto al percorso dell'onda
        }
        d += "Z"; // Chiudi il percorso
        return d; // Restituisce il percorso
    }

    const wave1 = document.getElementById("wave1");
    const wave2 = document.getElementById("wave2");
    const wave3 = document.getElementById("wave3");
    const wave4 = document.getElementById("wave4");
    const wave5 = document.getElementById("wave5");

    let phase1 = 0, phase2 = Math.PI / 3, phase3 = Math.PI / 2;
    let phase4 = Math.PI / 4, phase5 = Math.PI / 5;

    // Colori per le onde (verde e turchese)
    const green = "rgb(0, 255, 0)";    // Verde
    const turquoise = "rgb(0, 255, 255)";  // Turchese

    // Funzione per animare le onde
    function animateWaves() {
        // Imposta i percorsi delle onde con una frequenza modificata per ottenere un effetto circolare
        wave1.setAttribute("d", generateCircularWavePath(190, phase1, 5, 10));
        wave2.setAttribute("d", generateCircularWavePath(193, phase2, 5, 10));
        wave3.setAttribute("d", generateCircularWavePath(196, phase3, 5, 10));
        wave4.setAttribute("d", generateCircularWavePath(199, phase4, 5, 10));
        wave5.setAttribute("d", generateCircularWavePath(201, phase5, 5, 10));

        // Imposta il colore per ciascuna onda
        wave1.setAttribute("stroke", green);     // Prima onda - Verde
        wave2.setAttribute("stroke", turquoise); // Seconda onda - Turchese
        wave3.setAttribute("stroke", green);     // Terza onda - Verde
        wave4.setAttribute("stroke", turquoise); // Quarta onda - Turchese
        wave5.setAttribute("stroke", green);     // Quinta onda - Verde

        // Modifica la fase per animare le onde
        phase1 += 0.10;
        phase2 -= 0.20;
        phase3 += 0.15;
        phase4 -= 0.08;
        phase5 += 0.05;

        requestAnimationFrame(animateWaves); // Ripeti l'animazione
    }

    animateWaves(); // Avvia l'animazione
});
