
function openPopup(projectTitle) {
    const projectDetails = {
        "Project 1": "Travel Website 🌍✨  A fully responsive travel website designed to help users explore destinations, plan trips, and book travel services. Featuring a **modern UI, interactive destination cards, a booking system, and a contact form**, this project showcases expertise in **HTML, CSS, and JavaScript**. With smooth animations and a mobile-friendly design, it offers an engaging user experience, making it a great addition to any portfolio. 🚀✈️.",
        "Project 2": "Event Website 🎉🎟️  A modern and responsive event website designed to showcase upcoming events, manage registrations, and provide event details. Featuring a dynamic homepage, event schedule, ticket booking system, and contact form, this project highlights skills in HTML, CSS, and JavaScript. With smooth animations, interactive elements, and a user-friendly design, it ensures a seamless experience for attendees. Perfect for conferences, concerts, or corporate events! 🚀🎶.",
        "Project 3": "Tic Tac Toe Game 🎮❌⭕  A simple and interactive Tic Tac Toe game built using HTML, CSS, and JavaScript. It features a two-player mode, win detection, and a reset option. The game provides a fun and engaging experience with a clean and responsive design. Perfect for showcasing JavaScript logic and event handling skills! 🚀🎯.",
        "Project 4": "Simple Calculator 🔢✨  A basic calculator built using HTML, CSS, and JavaScript that performs addition, subtraction, multiplication, and division. It features a responsive design, interactive buttons, and real-time calculations. Perfect for showcasing JavaScript event handling and DOM manipulation skills! 🚀💡."
    };

    document.getElementById("popup-title").innerText = projectTitle;
    document.querySelector("#popup .popup-content p").innerText = projectDetails[projectTitle];
    
    document.getElementById("popup").style.display = "flex";
}

function closePopup() {
    document.getElementById("popup").style.display = "none";
}
