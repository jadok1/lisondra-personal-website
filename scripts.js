document.addEventListener("DOMContentLoaded", function () {
    const texts = ["Jade Manila Lisondra", "Jadok"]; // Two texts to alternate
    const typingSpeed = 110;
    const delayBeforeRestart = 1500;
    let i = 0;
    let isDeleting = false;
    let textIndex = 0; // To switch between texts

    function typeEffect() {
        const element = document.getElementById("typing-text");
        const currentText = texts[textIndex];

        if (!isDeleting && i < currentText.length) {
            element.textContent += currentText.charAt(i);
            i++;
            setTimeout(typeEffect, typingSpeed);
        } 
        else if (isDeleting && i > 0) {
            element.textContent = currentText.substring(0, i - 1);
            i--;
            setTimeout(typeEffect, typingSpeed / 2);
        } 
        else {
            if (!isDeleting) {
                isDeleting = true;
                setTimeout(typeEffect, delayBeforeRestart);
            } 
            else {
                isDeleting = false;
                i = 0;
                textIndex = (textIndex + 1) % texts.length; // Switch to the next text
                setTimeout(typeEffect, typingSpeed);
            }
        }
    }

    typeEffect();
});


// Portfolio Floating Container Functions
function showFloatingContainer(type) {
    const backdrop = document.getElementById('floating-backdrop');
    const container = document.getElementById('floating-container');
    container.innerHTML = ''; // Clear previous content

    let html = '';
    switch(type) {
        case 'tempConverter':
            html = `
                <h3>Temperature Converter</h3>
                <label for="celsius">Celsius:</label>
                <input type="number" id="celsius" placeholder="Enter Celsius">
                <button onclick="convertCelsiusToFahrenheit()">Calculate</button>
                <button class="close-btn" onclick="closeFloatingContainer()">Close</button>
            `;
            break;
        case 'wordCompare':
            html = `
                <h3>The Longer Word</h3>
                <label for="word1">First Word:</label>
                <input type="text" id="word1" placeholder="Enter first word">
                <label for="word2">Second Word:</label>
                <input type="text" id="word2" placeholder="Enter second word">
                <button onclick="compareWord()">Compare</button>
                <button class="close-btn" onclick="closeFloatingContainer()">Close</button>
            `;
            break;
        case 'birthstone':
            html = `
                <h3>Know My Birthstone</h3>
                <label for="birthmonth">Birth Month:</label>
                <input type="text" id="birthmonth" placeholder="Enter birthmonth (e.g., January)">
                <button onclick="yourBirthStone()">Find</button>
                <button class="close-btn" onclick="closeFloatingContainer()">Close</button>
            `;
            break;
        case 'mathOps':
            html = `
                <h3>Basic Operators</h3>
                <label for="num1">First Number:</label>
                <input type="number" id="num1" placeholder="Enter first number">
                <label for="num2">Second Number:</label>
                <input type="number" id="num2" placeholder="Enter second number">
                <label for="operator">Operator:</label>
                <select id="operator">
                    <option value="M">Multiplication</option>
                    <option value="D">Division</option>
                    <option value="A">Addition</option>
                    <option value="S">Subtraction</option>
                </select>
                <button onclick="basicMathOps()">Calculate</button>
                <button class="close-btn" onclick="closeFloatingContainer()">Close</button>
            `;
            break;
        case 'acceleration':
            html = `
                <h3>Compute for Acceleration</h3>
                <label for="initialVelocity">Initial Velocity (m/s):</label>
                <input type="number" id="initialVelocity" placeholder="Initial Velocity (m/s)">
                <label for="finalVelocity">Final Velocity (m/s):</label>
                <input type="number" id="finalVelocity" placeholder="Final Velocity (m/s)">
                <label for="changeTime">Change in Time (s):</label>
                <input type="number" id="changeTime" placeholder="Change in Time (s)">
                <button onclick="computeAcceleration()">Calculate</button>
                <button class="close-btn" onclick="closeFloatingContainer()">Close</button>
            `;
            break;
    }

    container.innerHTML = html;
    backdrop.classList.remove('hidden');
    container.classList.remove('hidden');
}

function closeFloatingContainer() {
    const backdrop = document.getElementById('floating-backdrop');
    const container = document.getElementById('floating-container');
    backdrop.classList.add('hidden');
    container.classList.add('hidden');
    container.innerHTML = '';
}

// Modified Portfolio Functions
function convertCelsiusToFahrenheit() {
    const celsius = parseFloat(document.getElementById('celsius').value);
    if (isNaN(celsius)) {
        alert("Please enter a valid number");
        return;
    }
    const temp_F = (celsius * 1.8 + 32).toFixed(2);
    alert(`${celsius}°C converted into ${temp_F}°F`);
}

function computeAcceleration() {
    const iv = parseFloat(document.getElementById('initialVelocity').value);
    const fv = parseFloat(document.getElementById('finalVelocity').value);
    const ct = parseFloat(document.getElementById('changeTime').value);
    if (isNaN(iv) || isNaN(fv) || isNaN(ct) || ct === 0) {
        alert("Please enter valid numbers (time cannot be zero)");
        return;
    }
    const acceleration = ((fv - iv) / ct).toFixed(2);
    alert(`Acceleration is ${acceleration} meters every second squared.`);
}

function basicMathOps() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const num2 = parseFloat(document.getElementById('num2').value);
    const operator = document.getElementById('operator').value;
    let result;
    if (isNaN(num1) || isNaN(num2)) {
        alert("Please enter valid numbers");
        return;
    }
    switch(operator) {
        case 'M':
            result = num1 * num2;
            break;
        case 'D':
            if (num2 === 0) {
                result = "Second Number must not be zero";
            } else {
                result = num1 / num2;
            }
            break;
        case 'A':
            result = num1 + num2;
            break;
        case 'S':
            result = num1 - num2;
            break;
        default:
            result = "Invalid operator";
            break;
    }
    alert(`Result: ${result}`);
}

function yourBirthStone() {
    const month = document.getElementById('birthmonth').value.toLowerCase().trim();
    let a;
    switch(month) {
        case "january":
            a = "Garnet";
            break;
        case "february":
            alert("Your Birthstone is Amethyst");
            return;
        case "march":
            alert("Your Birthstone is Aquamarine");
            return;
        case "april":
            alert("Your Birthstone is Diamond");
            return;
        case "may":
            alert("Your Birthstone is Emerald");
            return;
        case "june":
            alert("Your Birthstone is Alexandrite & Pearl");
            return;
        case "july":
            alert("Your Birthstone is Ruby");
            return;
        case "august":
            alert("Your Birthstone is Peridot");
            return;
        case "september":
            alert("Your Birthstone is Sapphire");
            return;
        case "october":
            alert("Your Birthstone is Opal & Tourmaline");
            return;
        case "november":
            alert("Your Birthstone is Citrine & Topaz");
            return;
        case "december":
            alert("Your Birthstone is Blue Zircon, Turquoise, & Tanzanite");
            return;
        default:
            alert("Invalid month input");
            return;
    }
    alert(`Your Birthstone is ${a}`);
}

function compareWord() {
    const fs = document.getElementById('word1').value;
    const ss = document.getElementById('word2').value;
    if (!fs || !ss) {
        alert("Please enter both words");
        return;
    }
    if (fs.length > ss.length) {
        alert("The First Word is longer than Second Word");
    } else if (fs.length < ss.length) {
        alert("The Second Word is longer than First Word");
    } else {
        alert("The two Strings are equal");
    }
}

// Homepage Functions
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.add('hidden');
    });
    document.getElementById(sectionId).classList.remove('hidden');
}

function resetCards() {
    const slides = document.querySelectorAll('.slides img');
    slides.forEach((slide, index) => {
        slide.style.display = 'block';
        slide.classList.remove('active');
        if (index === 0) {
            slide.classList.add('active');
            slide.style.transform = 'translateZ(0)';
            slide.style.opacity = '1';
        } else {
            slide.style.transform = `translateZ(${-index * 50}px) rotate(${index * 5}deg)`;
            slide.style.opacity = 0.7 - (index * 0.1);
        }
    });
}

function distributeCard() {
    const slides = document.querySelectorAll('.slides img');
    const activeSlide = document.querySelector('.slides img.active');
    const visibleSlides = document.querySelectorAll('.slides img:not([style*="display: none"])');

    if (visibleSlides.length > 1 && activeSlide) {
        activeSlide.style.transform = 'translateX(500px) rotate(20deg)';
        activeSlide.style.opacity = '0';
        activeSlide.classList.remove('active');

        setTimeout(() => {
            activeSlide.style.display = 'none';
            const nextSlide = document.querySelector('.slides img:not([style*="display: none"])');
            if (nextSlide) {
                nextSlide.classList.add('active');
                nextSlide.style.transform = 'translateZ(0)';
                nextSlide.style.opacity = '1';
            }
        }, 500);
    } else if (visibleSlides.length === 1) {
        setTimeout(() => {
            resetCards();
        }, 500);
    }
}
let autoDistributeInterval;

function startAutoDistribute() {
 
    autoDistributeInterval = setInterval(distributeCard, 5000);
}

function stopAutoDistribute() {
    clearInterval(autoDistributeInterval);
}

document.addEventListener('DOMContentLoaded', () => {
    resetCards();
    startAutoDistribute();
});


function toggleLike(element) {
    const heartImg = element.querySelector('img');
    if (heartImg.src.includes('images/red-heart-outline.png')) {
        heartImg.src = 'images/red-heart-colored.png'; // Path to the red heart image
    } else {
        heartImg.src = 'images/red-heart-outline.png'; // Path to the default heart image
    }
}

function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let commentList = button.parentElement.querySelector(".comments-list");

        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.prepend(newComment); // Add the new comment to the beginning of the list

        commentInput.value = "";
    } else {
        alert("Please enter a comment before posting.");
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('.comment-input').forEach(input => {
        input.addEventListener('keypress', function(event) {
            if (event.key === 'Enter' || event.keyCode === 13) {
                event.preventDefault();
                const postButton = input.nextElementSibling;
                if (postButton && postButton.tagName === 'BUTTON') {
                    postButton.click();
                }
            }
        });
    });
});