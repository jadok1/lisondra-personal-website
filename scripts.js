function convertCelsiusToFahrenheit() {
    let celsius;
    do {
        celsius = parseFloat(prompt("Enter Celsius to convert into Fahrenheit (numbers only)"));
        if (isNaN(celsius)) {
            alert("Invalid input! Please enter a valid number without letters or special characters");
        }
    } while (isNaN(celsius));
    
    let temp_F = (celsius * 1.8 + 32).toFixed(2);
    alert(`${celsius}°C converted into ${temp_F}°F`);
}

function computeAcceleration() {
    let iv, fv, ct;
    do {
        iv = parseFloat(prompt("Enter Initial Velocity in m/s (numbers only)"));
        if (isNaN(iv)) {
            alert("Invalid input! Please enter a valid number without letters or special characters");
        }
    } while (isNaN(iv));
    
    do {
        fv = parseFloat(prompt("Enter Final Velocity in m/s (numbers only)"));
        if (isNaN(fv)) {
            alert("Invalid input! Please enter a valid number without letters or special characters");
        }
    } while (isNaN(fv));
    
    do {
        ct = parseFloat(prompt("Enter Change Time in seconds (numbers only, cannot be zero)"));
        if (isNaN(ct) || ct === 0) {
            alert("Invalid input! Please enter a valid number (not zero) without letters or special characters");
        }
    } while (isNaN(ct) || ct === 0);
    
    let acceleration = ((fv - iv) / ct).toFixed(2);
    alert(`Acceleration is ${acceleration} meters every second squared.`);
}

function basicMathOps() {
    let num1, num2, operator;
    do {
        num1 = parseFloat(prompt("Enter first number (numbers only)"));
        if (isNaN(num1)) {
            alert("Invalid input! Please enter a valid number without letters or special characters");
        }
    } while (isNaN(num1));
    
    do {
        num2 = parseFloat(prompt("Enter    Enter second number (numbers only)"));
        if (isNaN(num2)) {
            alert("Invalid input! Please enter a valid number without letters or special characters");
        }
    } while (isNaN(num2));
    
    do {
        operator = prompt("Operators:\n M - Multiplication\n D - Division\n A - Addition\n S - Subtraction\nEnter Operator:").toUpperCase().trim();
        if (!['M', 'D', 'A', 'S'].includes(operator)) {
            alert("Invalid operator! Please enter M, D, A, or S only");
        }
    } while (!['M', 'D', 'A', 'S'].includes(operator));
    
    let result;
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
    }
    alert(`Result: ${result}`);
}

function yourBirthStone() {
    let month;
    const validMonths = ["january", "february", "march", "april", "may", "june", 
                       "july", "august", "september", "october", "november", "december"];
    
    do {
        month = prompt("Enter your Birth Month (letters only, no numbers or special characters)").toLowerCase().trim();
        if (!validMonths.includes(month) || /[^a-z]/i.test(month)) {
            alert("Invalid input! Please enter a valid month name using letters only");
        }
    } while (!validMonths.includes(month) || /[^a-z]/i.test(month));
    let a;
    switch(month) {
        case "january":
            a = "Garnet";
            break;
        case "february":
            a="Amethyst";
            break;
        case "march":
            a="Aquamarine";
            break;
        case "april":
            a="Diamond";
            break;
        case "may":
            a="Emerald";
            break;
        case "june":
            a="Alexandrite & Pearl";
            break;
        case "july":
            a="Ruby";
            break;
        case "august":
            a="Peridot";
            break;
        case "september":
            a="Sapphire";
            break;
        case "october":
            a=" Opal & Tourmaline";
            break;
        case "november":
            a="Citrine & Topaz";
            break;
        case "december":
            a="Blue Zircon, Turquoise, & Tanzanite";
            break;
    }
    alert(`Your Birthstone is ${a}`);
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
    if (heartImg.src.includes('red-heart-outline.png')) {
        heartImg.src = 'red-heart-colored.png'; 
    } else {
        heartImg.src = 'red-heart-outline.png'; 
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
