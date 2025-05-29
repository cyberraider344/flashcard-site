const flashcards = [
    { question: "What is a vulnerability?", answer: "A weakness that can be exploited." },
    { question: "What is an exploit?", answer: "Code or method used to take advantage of a vulnerability." },
    { question: "Define brute force attack", answer: "Attempting many passwords until the correct one is found." },
    { question: "What is privilege escalation?", answer: "Gaining higher access (e.g., user to root/admin)." },
    { question: "What is reconnaissance?", answer: "Gathering information before an attack." }
];

let current = 0;
const flashcard = document.getElementById('flashcard');

function updateCard() {
    flashcard.textContent = flashcards[current].question;
}

function nextCard() {
    current = (current + 1) % flashcards.length;
    updateCard();
}

function prevCard() {
    current = (current - 1 + flashcards.length) % flashcards.length;
    updateCard();
}

flashcard.addEventListener('click', () => {
    const isQuestion = flashcard.textContent === flashcards[current].question;
    flashcard.textContent = isQuestion ? flashcards[current].answer : flashcards[current].question;
});

updateCard();
