function toggleDarkMode() {
    document.body.classList.toggle("dark");
}

function showFact() {
    const facts = [
        "His escrima sticks can deliver electrical shocks through a built‑in charge system.",
        "Nightwing once served as a Blüdhaven police officer undercover",
        "Nightwing speaks over ten languages, including Romani, Russian, and Mandarin.",
        "Nightwing’s name comes from a Kryptonian legend Superman told him.",
        "He was the leader of the Teen Titans."
    ];

    const randomIndex = Math.floor(Math.random() * facts.length);
    document.getElementById("fact").innerText = facts[randomIndex];
}

function checkQuiz() {
    const answers = {
        q1: "enemy", 
        q2: "ally",  
        q3: "lover"    
    };

    let score = 0;

    for (let q in answers) {
        const userAnswer = document.getElementById(q).value;
        if (userAnswer === answers[q]) {
            score++;
        }
    }

    document.getElementById("quizResult").innerText =
        `You scored ${score} out of 3!`;
}