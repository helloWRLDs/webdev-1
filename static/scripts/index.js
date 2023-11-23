const questions = [
    {
        question: "Which genre of music is known for its origins in the African American communities of the Southern United States and features a 12-bar structure with a focus on lyrics and storytelling?",
        answers: [
            {text: "Rock", correct: false},
            {text: "Jazz", correct: false},
            {text: "Blues", correct: true},
            {text: "Reggae", correct: false}
        ]
    },
    {
        question: `Who is often referred to as the "King of Pop" and is known for hit songs like "Thriller," "Billie Jean," and "Beat It"?`,
        answers: [
            {text: "Elvis Presley", correct: false},
            {text: "Michael Jackson", correct: true},
            {text: "Madonna", correct: false},
            {text: "Prince", correct: false}
        ]
    },
    {
        question: `What genre of music is characterized by its roots in the Caribbean, with a prominent use of offbeat rhythms and is often associated with artists like Bob Marley?`,
        answers: [
            {text: "Country", correct: false},
            {text: "Reggae", correct: true},
            {text: "Hip-Hop", correct: false},
            {text: "Classical", correct: false}
        ]
    },
    {
        question: `Which musical genre developed in the 1970s and is known for its rebellious, loud, and distorted sound, often featuring electric guitars and powerful drumming?`,
        answers: [
            {text: "Country", correct: false},
            {text: "Classical", correct: false},
            {text: "Rock", correct: true},
            {text: "R&B", correct: false}
        ]
    },
    {
        question: `In which genre of music is the use of synthesizers and electronic instruments prevalent, with notable artists like Daft Punk and Kraftwerk?`,
        answers: [
            {text: "Pop", correct: false},
            {text: "Techno", correct: true},
            {text: "Folk", correct: false},
            {text: "Country", correct: false}
        ]
    },
    {
        question: `Which iconic rock festival took place in 1969 and featured performances by Jimi Hendrix, Janis Joplin, The Who, and others, becoming a symbol of the counterculture movement of the 1960s?`,
        answers: [
            {text: "Woodstock ", correct: true},
            {text: "Monterey Pop Festival", correct: false},
            {text: "Isle of Wight Festival", correct: false},
            {text: "Altamont Free Concert", correct: false}
        ]
    },
    {
        question: `Which famous composer is often credited with being a crucial figure in the development of Western classical music, particularly for his contributions to the Baroque period with compositions like "Brandenburg Concertos" and "The Well-Tempered Clavier"?`,
        answers: [
            {text: "Wolfgang Amadeus Mozart", correct: false},
            {text: "Johann Sebastian Bach", correct: true},
            {text: "Ludwig van Beethoven", correct: false},
            {text: "Antonio Vivaldi", correct: false}
        ]
    },
    {
        question: `What electronic dance music genre, characterized by its repetitive beats and synthesized melodies, originated in Detroit in the 1980s and played a significant role in the development of modern electronic music?`,
        answers: [
            {text: "Trance", correct: false},
            {text: "Techno", correct: false},
            {text: "Dubstep", correct: false},
            {text: "House ", correct: true}
        ]
    },
    {
        question: `Which iconic British rock band, formed in the 1960s, is known for their experimental approach to music and albums like "The Dark Side of the Moon" and "The Wall"?`,
        answers: [
            {text: "The Rolling Stones", correct: false},
            {text: "Led Zeppelin", correct: false},
            {text: "Pink Floyd", correct: true},
            {text: "The Beatles", correct: false}
        ]
    },
    {
        question: `What music festival, held annually in the Nevada desert, is famous for its eclectic lineup, artistic installations, and emphasis on community and self-expression?`,
        answers: [
            {text: "Burning Man", correct: true},
            {text: "Bonnaroo", correct: true},
            {text: "Coachella", correct: false},
            {text: "Glastonbury", correct: false}
        ]
    }
]

let questionCounter = 0;

document.addEventListener("DOMContentLoaded", function() {
    updateState(questionCounter)
});


//Scroll-top btn
let scrollBtn = document.getElementById("to-top-btn")
//Appearance of scroll-top btn
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
}
//Event Listener for scroll-top btn
scrollBtn.addEventListener("click", () => {
    document.documentElement.scrollTop = 0;
})

// Limited offer Timer
document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByTagName('header')[0].style.marginBottom = 0;
    document.querySelector('#limited-offer').innerHTML += `
    <div id="limited-offer-body">
        <div class="container">
            <h3 class="limited-offer-body-title">Limited offer: Complete the quiz and get discount</h3>
            <button class="limited-offer-btn" id="limited-offer-btn" onclick="start()">Try yourself</button>
            <p class="limited-offer-body-content">Ends in <span id="limited-offer-timer"></span></p>
        </div>
    </div>
    `;

    const date = new Date();
    let counter = 86460 - (date.getHours() * 3600 + date.getMinutes() * 60 + date.getSeconds());
    
    let timer = setInterval(function() {   
        let output = (counter) => {
            output = "";
            output += `${Math.floor(counter / 3600)} hours `;
            output += `${Math.floor((counter - (3600 * Math.floor(counter / 3600))) / 60)} minutes `;
            output += `and ${counter % 60} seconds`
            return output;
        }
        //Proper Output using Function "output()"
        document.querySelector('#limited-offer-timer').innerHTML = output(counter--);
    }, 1000)
});


// Update question
function updateState(q_i) {
    let temp = questionCounter + 1;
    document.getElementById("qCounter").innerHTML = `${temp} / ${questions.length}`;
    let btnsDiv = document.getElementById("answer-buttons")
    let btns = btnsDiv.getElementsByClassName("qBtn");
    document.getElementById("question").innerHTML = questions[q_i].question;
    for (let i = 0; i < btns.length; i++) {
        btns[i].innerHTML = questions[q_i].answers[i].text;
        if (btns[i].classList.contains("correct")) {
            btns[i].classList.remove("correct");
        }
    }
}
// Get the answer
const btnsDiv = document.getElementById("answer-buttons");
const btns = btnsDiv.getElementsByClassName("qBtn");
for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener("click", function() {
        for (let j = 0; j < questions.length; j++) {
            if (document.getElementById("question").innerHTML === questions[j].question && questions[j].answers[i].correct) {
                btns[i].classList.add("correct");
                nextBtn.classList.remove("inactive");
            } else if (document.getElementById("question").innerHTML === questions[j].question && !questions[j].answers[i].correct) {
                document.getElementById("answer-buttons").style.display = "none";
                document.getElementById("question").style.display = "none";
                document.getElementById("quizTitle").innerHTML = "Incorrect! No discount for you.";
                nextBtn.classList.add("inactive");
                setTimeout(function() {
                    document.getElementById("quizEvent").style.display = "none";
                    document.getElementById("limited-offer-body").style.display = "none";
                }, 2000);
            }
        }
    })
}

const nextBtn = document.getElementById("nextBtn");
// Process the correct question
nextBtn.addEventListener("click", function() {
    if (questionCounter < questions.length) {
        updateState(++questionCounter);
        nextBtn.classList.add("inactive");
    } else {
        document.getElementById("answer-buttons").style.display = "none";
        document.getElementById("question").style.display = "none";
        document.getElementById("quizTitle").innerHTML = "Congratulations! You gained 20% discount<br>It will be automatically applied to your purchases";
        nextBtn.classList.add("inactive");
        setTimeout(function() {
            document.getElementById("quizEvent").style.display = "none";
            document.getElementById("limited-offer-body").style.display = "none";
        }, 2000);
        
    }
    
})




function start() {
    document.getElementById("quiz").classList.toggle("active");
}

function toggleMenu() {
    document.getElementById("dd-content").classList.toggle("open");
}


document.querySelector("#login-submit-btn").onclick = function() {
    const email = document.querySelector("#login-email").value;
    const password = document.querySelector("#login-password").value;
    const password2 = document.querySelector("#login-passwordConf").value;

    if (email == "" || email == null || password == "" || password == null || password2 == null) {
        alert("Fields cannot be empty or null!")
        return false;
    } else if (!email.includes("@")) {
        alert("Wrong email format!");
        return false;
    } else if (password != password2) {
        alert("Passwords doesn't match!");
        return false;
    }
    document.querySelector("#login-box").innerHTML = `
        <span class="close">&times;</span>
        <form action="">
            <label for="code" class="login-label">Enter Code from </label>
            <input type="text" name="code" id="login-code">
            
            <input type="button" value="Confirm" id="code-submit-btn">
        </form>
    `;
    document.querySelector("#code-submit-btn").onclick = () => {
        alert("Success");
        setTimeout(function() {
            document.getElementById("login-box").style.display = "none";
            document.getElementsByTagName("html")[0].style.overflowY = "scroll";
        }, 1000);
        return true;
    }
    
}


let logibBtn = document.getElementById("loginBtn");
logibBtn.addEventListener("click", () => {
    if (document.getElementById("login-box").style.display === "none") {
        document.getElementById("login-box").style.display = "block";
        document.getElementsByTagName("html")[0].style.overflowY = "hidden";
    } else {
        document.getElementById("login-box").style.display = "none";
        document.getElementsByTagName("html")[0].style.overflowY = "scroll";
    }
})

document.getElementsByClassName("close")[0].addEventListener("click", () => {
    document.getElementById("login-box").style.display = "none";
    document.getElementsByTagName("html")[0].style.overflowY = "scroll";
})