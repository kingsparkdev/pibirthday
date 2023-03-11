let raw;
let digits,
    searchBox;
let indexP;
let txt;

function preload() {
    raw = loadStrings("pi.txt");
}

function indexOf(txt, search) {
    let start = search.charAt(0);
    for (let i = 0; i < txt.length; i++) {
        if (txt.charAt(i) === start) {
            let found = true;
            for (let j = 1; j < search.length; j++) {
                if (txt.charAt(i + j) !== search.charAt(j)) {
                    found = false;
                    break;
                }
            }
            if (found) {
                return i;
            }
        }
    }
    return -1;
}

function searchItUp(a) {
    let index = indexOf(digits, a);

    if (index > 0) {
        document.getElementById("numDigit").innerText = (String(index-1));
    } else {
        document.getElementById("numDigit").innerText = ("10억 자리 이내에서 찾을 수 없습니다.");
    }
}

function button(){
    txt = document.getElementById("text").value;
    searchItUp(txt);
}


function setup() {
    noCanvas();
    digits = raw[0];
    //searchBox = createInput("");
    //txt.input(searchItUp);
    //indexP = createP("searching");
}
