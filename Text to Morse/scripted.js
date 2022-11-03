function translator(){
    let letters_to_morse = {
        // English Alphabets
        "A": ".- ", "B": "-... ", "C": "-.-. ",
        "D": "-.. ", "E": ". ", "F": "..-. ",
        "G": "--. ", "H": ".... ", "I": ".. ",
        "J": ".--- ", "K": "-.- ", "L": ".-.. ",
        "M": "-- ", "N": "-. ", "O": "--- ",
        "P": ".--. ", "Q": "--.- ", "R": ".-. ",
        "S": "... ", "T": "- ", "U": "..- ",
        "V": "...- ", "W": ".-- ", "X": "-..- ",
        "Y": "-.-- ", "Z": "--.. ", " ": "  ",
    
        // Numbers
        "0": "----- ", "1": ".---- ", "2": "..--- ",
        "3": "...-- ", "4": "....- ", "5": "..... ",
        "6": "-.... ", "7": "--... ", "8": "---.. ",
        "9": "----. ",
    
        // Signs and Punctuation Marks
        "&": ".-... ", "'": ".----. ", "@": ".--.-. ",
        ")": "-.--.- ", "(": "-.--. ", ":": "---... ",
        ",": "--..-- ", "=": "-...- ", "!": "-.-.-- ",
        ".": ".-.-.- ", "-": "-....- ", "*": "-..- ",
        "%": "----- -..-. ----- ", "+": ".-.-. ",
        "'": ".-..-. ", "?": "..--.. ", "/": "-..-. "
    }

    // Getting And Processing User Input
    let text = document.getElementById("eng_text").value;
    let text_up = text.toUpperCase();
    document.getElementById("result").innerHTML = "";

    // Outputting It In Morse Code
    for (let i = 0; i < text_up.length; i++) {
        if (letters_to_morse[text_up[i]] === undefined) {
            continue;
        } else {
            document.getElementById("result").innerHTML += letters_to_morse[text_up[i]];
        }
    }
}
