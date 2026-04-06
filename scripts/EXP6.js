let fontSize = 32;

// Change Heading
function changeHeading() {
    let text = document.getElementById("inputText").value;
    if (text !== "") {
        document.getElementById("heading").innerText = text;
    }
}

// Change Background
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}

// Increase Font Size
function increaseFont() {
    fontSize += 2;
    document.getElementById("heading").style.fontSize = fontSize + "px";
}

// Show / Hide Paragraph
function toggleParagraph() {
    let para = document.getElementById("para");

    if (para.style.display === "none") {
        para.style.display = "block";
    } else {
        para.style.display = "none";
    }
}

// Reset Page
function resetPage() {
    document.getElementById("heading").innerText = "Welcome to JavaScript Lab";
    document.body.style.backgroundColor = "#f2f2f2";
    document.getElementById("para").style.display = "block";
    document.getElementById("heading").style.fontSize = "32px";
    document.getElementById("inputText").value = "";
    fontSize = 32;
}