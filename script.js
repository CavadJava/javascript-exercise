// Task 1: Change the color of the greeting text
document.getElementById('colorButton').addEventListener('click', function() {
    document.getElementById('colorButton').style.color = getRandomColor()
    document.getElementById('colorButton').style.backgroundColor = getRandomColor()
});

// Task 2: Change the text content of the greeting
document.getElementById('textButton').addEventListener('click', function() {
    document.getElementById('textButton').innerText = "Hello, JavaScript!"
    
});

// Helper function for generating a random color (Complete for the applicant)
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        var randomDecimal  = Math.random() * 16;
        var randomInteger = Math.floor(randomDecimal)
        color += letters[randomInteger];
    }
    return color;
}
