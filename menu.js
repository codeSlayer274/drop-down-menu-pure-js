let isMainNMenuOpen = false;
let isMainOMenuOpen = false;
let isMainPMenuOpen = false;
let isMainRMenuOpen = false;




function openMenu(param) {
    console.log(param);

    if (param === 'nB') {
        if (isMainNMenuOpen) {


            document.getElementById("nB").classList.add("hide");

            isMainNMenuOpen = false;

        } else {
            document.getElementById("nB").classList.remove("hide");
            document.getElementById("oB").classList.add("hide");
            document.getElementById("pB").classList.add("hide");
            document.getElementById("rB").classList.add("hide");
            isMainOMenuOpen = false;
            isMainPMenuOpen = false;
            isMainRMenuOpen = false;

            isMainNMenuOpen = true;
        }

    }

    if (param === 'oB') {
        if (isMainOMenuOpen) {
            document.getElementById("oB").classList.add("hide");
            isMainOMenuOpen = false;
        } else {

            document.getElementById("oB").classList.remove("hide");
            document.getElementById("nB").classList.add("hide");
            document.getElementById("pB").classList.add("hide");
            document.getElementById("rB").classList.add("hide");
            isMainNMenuOpen = false;
            isMainPMenuOpen = false;
            isMainRMenuOpen = false;

            isMainOMenuOpen = true;


        }
    }
    if (param === 'pB') {
        if (isMainPMenuOpen) {
            document.getElementById("pB").classList.add("hide");
            isMainPMenuOpen = false;
        } else {

            document.getElementById("pB").classList.remove("hide");
            document.getElementById("nB").classList.add("hide");
            document.getElementById("oB").classList.add("hide");
            document.getElementById("rB").classList.add("hide");
            isMainRMenuOpen = false;
            isMainOMenuOpen = false;
            isMainNMenuOpen = false;

            isMainPMenuOpen = true;


        }
    }
    if (param === 'rB') {
        if (isMainRMenuOpen) {
            document.getElementById("rB").classList.add("hide");
            isMainRMenuOpen = false;
        } else {

            document.getElementById("rB").classList.remove("hide");
            document.getElementById("nB").classList.add("hide");
            document.getElementById("oB").classList.add("hide");
            document.getElementById("pB").classList.add("hide");
            isMainPMenuOpen = false;
            isMainOMenuOpen = false;
            isMainNMenuOpen = false;

            isMainRMenuOpen = true;


        }
    }
}