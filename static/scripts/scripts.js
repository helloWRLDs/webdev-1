// TODO
document.querySelector('#push').onclick = function() {
    if (document.querySelector('#new-task input').value.length == 0) {
        alert("Cannot add empty task");
    } else {
        document.querySelector('#tasks').innerHTML += `
            <li class="task list-group-item w-25 flex">
                <span id="taskname" class="w-50">
                    ${document.querySelector('#new-task input').value}
                </span>
                <button class="delete btn btn-danger">
                    <span>delete</span>
                </button>
                <button class="done btn btn-success">
                    <span>done</span>
                </button>
            </li>
        `;
    }
    var current_tasks = document.querySelectorAll(".delete");
        for(var i=0; i < current_tasks.length; i++){
            current_tasks[i].onclick = function(){
                this.parentNode.remove();
            }
        }

    var current_tasks = document.querySelectorAll(".done");
    for (var i = 0; i < current_tasks.length; i++) {
        current_tasks[i].onclick = function() {
            this.parentNode.style="background-color: #78fa78;";
        }
    }
}


// Timer
document.querySelector("#timer-start").onclick = function() {
    if (document.querySelector("#timer-input").value != 0) {
        //Output HTML element
        document.querySelector("#time-left").innerHTML = `
            <p>Time Left <span id="time-left-span">${document.querySelector("#timer-input").value}</span></p>
        `;

        //Process user's input
        const final_time = document.querySelector("#timer-input").value.split(":");
        let hours = final_time[0];
        let mins = final_time[1];
        let sec = final_time[2];

        //Convert String input into seconds
        let counter = parseInt(hours) * 3600 + parseInt(mins) * 60 + parseInt(sec);

        //Timer itself
        let timer = setInterval(function() {
            document.querySelector("#timer-stop").onclick = function() {
                clearInterval(timer);
            }
            counter--;
            if (counter == 0) {
                clearInterval(timer);
                alert("Time is up!")
            } else {
                document.querySelector("#time-left-span").innerHTML = getOutput(counter);
            }
        }, 1000);

        // Get proper output
        function getOutput(counter) {
            let output = "";
            output += Math.floor(counter / 3600) + ":";
            output += Math.floor((counter - 3600) / 60) + ":";
            output += (counter % 60);
            return output;
        }
    } else {
        alert("Fill the time section")
    }
}


// Form Validation
document.querySelector("#registration-submit").onclick = function() {
    const name = document.querySelector('#name').value;
    const email = document.querySelector("#email").value;
    const password = document.querySelector("#password").value;
    const password2 = document.querySelector("#password2").value;

    if (name == null || name == "" || email == "" || email == null || password == "" || password == null || password2 == null) {
        alert("Fields cannot be empty or null!")
        return false;
    } else if (!email.includes("@")) {
        alert("Wrong email format!");
        return false;
    } else if (password != password2) {
        alert("Passwords doesn't match!");
        return false;
    }
    alert("Success")
    return true;
}