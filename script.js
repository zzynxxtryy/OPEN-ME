// =========================
// TYPEWRITER
// =========================

const message =
"I just wanna tell you something...";

let index = 0;

function typeWriter(){

    const element =
    document.getElementById(
        "typewriter"
    );

    if(!element) return;

    if(index < message.length){

        element.innerHTML +=
        message.charAt(index);

        index++;

        setTimeout(
            typeWriter,
            80
        );
    }
}

window.addEventListener(
    "load",
    typeWriter
);

// =========================
// PAGE NAVIGATION
// =========================

function showPage(pageNumber){

    const pages =
    document.querySelectorAll(
        ".page"
    );

    pages.forEach(page=>{

        page.classList.add(
            "hidden"
        );

    });

    document
    .getElementById(
        "page" + pageNumber
    )
    .classList.remove(
        "hidden"
    );
}

// =========================
// LETTER STATE
// =========================

let letterOpen = false;

// =========================
// BREAK SEAL
// =========================

function breakSeal(){

    if(letterOpen)
    return;

    const seal =
    document.querySelector(
        ".wax-seal"
    );

    const envelope =
    document.getElementById(
        "envelope"
    );

    const letter =
    document.getElementById(
        "letter"
    );

    const music =
    document.getElementById(
        "bgMusic"
    );

    // START MUSIC

    if(
        music &&
        music.paused
    ){

        music.volume = 0;

        music.play()
        .catch(()=>{});

        const fadeIn =
        setInterval(()=>{

            if(
                music.volume < 0.40
            ){

                music.volume =
                Math.min(
                    music.volume + 0.02,
                    0.40
                );

            }else{

                clearInterval(
                    fadeIn
                );

            }

        },100);
    }

    // BREAK SEAL

    seal.classList.add(
        "broken"
    );

    // OPEN ENVELOPE

    setTimeout(()=>{

        envelope.classList.add(
            "open-envelope"
        );

    },300);

    // SHOW LETTER

    setTimeout(()=>{

        letter.classList.add(
            "show-letter"
        );

        document
        .getElementById(
            "closeBtn"
        )
        .style.display =
        "block";

        letterOpen = true;

    },1000);
}

// =========================
// CLOSE LETTER
// =========================

function resetLetter(){

    const seal =
    document.querySelector(
        ".wax-seal"
    );

    const envelope =
    document.getElementById(
        "envelope"
    );

    const letter =
    document.getElementById(
        "letter"
    );

    letter.classList.remove(
        "show-letter"
    );

    envelope.classList.remove(
        "open-envelope"
    );

    seal.classList.remove(
        "broken"
    );

    document
    .getElementById(
        "closeBtn"
    )
    .style.display =
    "none";

    letterOpen = false;
}

// =========================
// ESC TO CLOSE
// =========================

document.addEventListener(
    "keydown",
    function(event){

        if(
            event.key ===
            "Escape"
            &&
            letterOpen
        ){

            resetLetter();

        }

    }
);