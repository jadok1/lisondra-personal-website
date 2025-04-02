
function convertCelsiusToFahrenheit() {
    let celsius = parseFloat(prompt("Enter Celsius to convert into Fahrenheit"));
    if (isNaN(celsius)) {
        alert("Please enter a valid number");
        return;
    }
    let temp_F = (celsius * 1.8 + 32).toFixed(2);
    alert(`${celsius}°C converted into ${temp_F}°F`);
}

function computeAcceleration() {
    let iv = parseFloat(prompt("Enter Initial Velocity in m/s or meter per second"));
    let fv = parseFloat(prompt("Enter Final Velocity in m/s or meter per second"));
    let ct = parseFloat(prompt("Enter Change Time in seconds"));
    if (isNaN(iv) || isNaN(fv) || isNaN(ct) || ct === 0) {
        alert("Please enter valid numbers (time cannot be zero)");
        return;
    }
    let acceleration = ((fv - iv) / ct).toFixed(2);
    alert(`Acceleration is ${acceleration} meters every second squared.`);
}

function basicMathOps() {
    let num1 = parseFloat(prompt("Enter first number"));
    let num2 = parseFloat(prompt("Enter second number"));
    let operator = prompt("Operators:\n M - Multiplication\n D- Division\n A- Addition\n S- Subtraction\nEnter Operator:").toUpperCase();
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
    let month = prompt("Enter your Birth Month").toLowerCase().trim();
    let a;
    switch(month) {
        case "january":
            alert("Your Birthstone is Garnet");
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
}

function compareWord() {
    let fs = prompt("Enter first word");
    let ss = prompt("Enter second word");
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
        heartImg.src = 'images/red-heart-colored.png'; 
    } else {
        heartImg.src = 'images/red-heart-outline.png'; 
    }
}

function addComment(button) {
    let commentInput = button.previousElementSibling;
    let commentText = commentInput.value.trim();

    if (commentText !== "") {
        let commentList = button.parentElement.querySelector(".comments-list");

        let newComment = document.createElement("li");
        newComment.textContent = commentText;
        commentList.prepend(newComment); 

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
