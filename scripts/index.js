function on_click_activate() {
    document.getElementById("activate-area").classList.add("container-contract-animation");

    var index = 1;
    function set_text_animation() {
        document.getElementById("line-" + index).classList.add("show-line-animation");

        index++;
        if (index <= 7) {
            setTimeout(set_text_animation, 1000);
        }
    }

    setTimeout(set_text_animation, 500);
}

function on_click_start() {
    var answer = prompt("Did you think it would be that easy?\n\nTo get you into the mood, let's start simple. I've hidden a code somewhere on this first website. Find it and type it into the below prompt in order to progress.")
    
    console.log(answer)
    if (answer == "FROM_ANTI" || answer == "from_anti") {
        window.location.href = "./search.html";
    } else {
        alert("Not quite... Try hit \"Ctrl + A\" if you haven't already. It'll come in handy later on.");
    }
}