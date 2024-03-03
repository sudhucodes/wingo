let selectedButton = document.querySelector('.gamemode.selected');
let selectedNumber = null;
let selectedBigSmall = null;
let selectedColor = null;

function selectGameMode(button) {
    if (selectedButton) {
        selectedButton.classList.remove('selected');
    }

    selectedButton = button;
    selectedButton.classList.add('selected');
}

var seconds = 60;
var timerDisplay = document.querySelector('.timer');
var priodNumElement = document.querySelector('.priodnum p');
var currentNumber = 20240226010502;

function updateTimer() {
    seconds--;

    if (seconds <= 0) {
        seconds = 60;
        // Increment the current number by 1
        currentNumber++;
        // Update the content of the <p> tag with the new number
        priodNumElement.textContent = currentNumber;
    }

    var minutes = Math.floor(seconds / 60);
    var remainingSeconds = seconds % 60;

    // Use padStart to ensure two digits for minutes
    timerDisplay.textContent = minutes.toString().padStart(2, '0') + ':' + (remainingSeconds < 10 ? '0' : '') + remainingSeconds;
}

setInterval(updateTimer, 1000);

document.getElementById('howToPlayLink').addEventListener('click', function () {
    document.getElementById('howToPlayPopup').style.display = 'block';
});

document.getElementById('closePopup').addEventListener('click', function () {
    document.getElementById('howToPlayPopup').style.display = 'none';
});

// Close the popup if clicked outside the content
window.addEventListener('click', function (event) {
    if (event.target === document.getElementById('howToPlayPopup')) {
        document.getElementById('howToPlayPopup').style.display = 'none';
    }
});

// random number ke liye
document.addEventListener('DOMContentLoaded', function () {
    var selectedAmount = document.querySelector('.randombtnamount.selected');
    if (!selectedAmount) {
        document.querySelector('.randombtnamount:first-child').classList.add('selected');
    }

    var amountInput = document.querySelector('#betAmount');
    amountInput.value = 1; // Set default value

    var randomBtn = document.querySelector('.randombtn');
    randomBtn.addEventListener('click', function () {
        selectedNumber = null; // Reset the selected number
        selectedBigSmall = null; // Reset the selected big/small
        selectedColor = null; // Reset the selected color

        // Get a random number from 0 to 9
        selectedNumber = getRandomNumber();

        // Set the bet amount to the selected amount
        var selectedAmountValue = selectedAmount ? parseInt(selectedAmount.textContent.trim().replace('X', '')) : 1;
        amountInput.value = isNaN(selectedAmountValue) ? 1 : selectedAmountValue;

        // Update the chosendiv color based on the selected number
        updateChosenDivColor(selectedNumber);

        document.querySelector('.chosen-number').textContent = 'Select ' + selectedNumber;

        // Show the modal when the "Random" button is clicked
        document.querySelector('.modal').style.display = 'block';
        document.getElementById('overlay').style.display = 'block';
        // Display the selected number and amount in the console (optional)
        console.log('Selected Amount:', amountInput.value);
        console.log('Chosen Number:', selectedNumber);
        console.log('Selected Number:', selectedNumber);
        
        // Show the overlay
         document.getElementById('overlay').style.display = 'block';
    });

    function updateChosenDivColor(selectedNumber) {
        var chosenDiv = document.querySelector('.chosendiv');
        var betBtnDiv = document.querySelector('.closebetbtn');
    
        // Reset to default background color before applying the new color
        chosenDiv.style.background = '';
        betBtnDiv.style.background = '';
    
        switch (selectedNumber) {
            case 0:
                chosenDiv.style.background = 'linear-gradient(130deg, #ff2323 50%, #b659ff 50%)';
                betBtnDiv.style.background = 'linear-gradient(130deg, #ff2323 50%, #b659ff 50%)';
                decrementAmount.style.backgroundColor = '#ff2323';
                incrementAmount.style.backgroundColor = '#ff2323';
                break;
            case 1:
            case 3:
            case 7:
            case 9:
                chosenDiv.style.backgroundColor = '#29ac66';
                betBtnDiv.style.backgroundColor = '#29ac66';
                decrementAmount.style.backgroundColor = '#29ac66';
                incrementAmount.style.backgroundColor = '#29ac66';
                break;
            case 2:
            case 4:
            case 6:
            case 8:
                chosenDiv.style.backgroundColor = '#ff2323';
                betBtnDiv.style.backgroundColor = '#ff2323';
                decrementAmount.style.backgroundColor = '#ff2323';
                incrementAmount.style.backgroundColor = '#ff2323';
                break;
            case 5:
                chosenDiv.style.background = 'linear-gradient(130deg, #29ac66 50%, #b659ff 50%)';
                betBtnDiv.style.background = 'linear-gradient(130deg, #29ac66 50%, #b659ff 50%)';
                decrementAmount.style.backgroundColor = '#29ac66';
                incrementAmount.style.backgroundColor = '#29ac66';
                break;
            default:
                // Handle other cases if needed
                break;
        }
    }

    var randomAmountButtons = document.querySelectorAll('.randombtnamount');
    randomAmountButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            randomAmountButtons.forEach(function (btn) {
                btn.classList.remove('selected');
            });

            button.classList.add('selected');
            selectedAmount = button;
        });
    });

    var numberButtons = document.querySelectorAll('.number1, .number2, .number3, .number4, .number5, .number6, .number7, .number8, .number9, .number0');
    numberButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            // Manually selected number
            selectedNumber = parseInt(button.textContent);
            document.querySelector('.chosen-number').textContent = 'Selected ' + selectedNumber;

            // Update the chosendiv color based on the selected number
            updateChosenDivColor(selectedNumber);

            // Display the selected number in the console (optional)
            console.log('Manually Selected Number:', selectedNumber);

            // Show the modal when a number button is clicked manually
            document.querySelector('.modal').style.display = 'block';
            document.getElementById('overlay').style.display = 'block';
        });
    });

    var betButton = document.querySelector('#placeBet');

    betButton.addEventListener('click', function () {
        var betAmount = amountInput.value;
        // Process the bet amount as needed (e.g., update UI or send to server)
        console.log('Selected Amount:', selectedAmount.textContent);
        console.log('Chosen Number:', selectedNumber);
        console.log('Bet Amount:', betAmount);

        // Update the total amount element with the selected amount
        document.querySelector('.total-amount').textContent = 'Total amount: ' + selectedAmount.textContent;

        // Close the modal after placing the bet
        document.getElementById('overlay').style.display = 'none';
        document.querySelector('.modal').style.display = 'none';
    });

    // Add event listener for the close button
    var closeButton = document.querySelector('.close-button');
    closeButton.addEventListener('click', function () {
        document.querySelector('.modal').style.display = 'none';
        // Hide the overlay
        document.getElementById('overlay').style.display = 'none';
        
        // Reset the selected quantity to 1
    var xButton = document.querySelector('.balancebtn button.selected');
    if (xButton) {
        xButton.classList.remove('selected');
    }
    var defaultxButton = document.querySelector('.balancebtn button:first-child');
    if (defaultxButton) {
        defaultxButton.classList.add('selected');
    }
 // Reset the selected quantity to 1
    var xButton = document.querySelector('.quantityx button.selected');
    if (xButton) {
        xButton.classList.remove('selected');
    }
    var defaultxButton = document.querySelector('.quantityx button:first-child');
    if (defaultxButton) {
        defaultxButton.classList.add('selected');
    }
    });

    // Color Buttons
var colorButtons = document.querySelectorAll('.greenColor, .violetColor, .redColor');

colorButtons.forEach(function (button) {
    button.addEventListener('click', function () {
        selectedNumber = null; // Reset the selected number
        selectedBigSmall = null; // Reset the selected big/small

        selectedColor = button.classList.contains('greenColor') ? 'Green' :
            button.classList.contains('violetColor') ? 'Violet' :
            button.classList.contains('redColor') ? 'Red' : '';

        document.querySelector('.chosen-number').textContent = 'Selected: ' + selectedColor;

        // Update the chosendiv color based on the selected color
        updateChosenDivColorForColor(selectedColor);

        // Show the modal when a color button is clicked manually
        document.getElementById('overlay').style.display = 'block';
        document.querySelector('.modal').style.display = 'block';
    });
});

function updateChosenDivColorForColor(selectedColor) {
    var chosenDiv = document.querySelector('.chosendiv');
    var betBtnDiv = document.querySelector('.closebetbtn');

    // Reset to default background color before applying the new color
    chosenDiv.style.background = '';
    betBtnDiv.style.background = '';

    switch (selectedColor) {
        case 'Green':
            chosenDiv.style.backgroundColor = '#29ac66';
            betBtnDiv.style.backgroundColor = '#29ac66';
            decrementAmount.style.backgroundColor = '#29ac66';
            incrementAmount.style.backgroundColor = '#29ac66';
            break;
        case 'Violet':
            chosenDiv.style.background = '#b659ff';
            betBtnDiv.style.background = '#b659ff';
            decrementAmount.style.backgroundColor = '#b659ff';
            incrementAmount.style.backgroundColor = '#b659ff';
            break;
        case 'Red':
            chosenDiv.style.backgroundColor = '#ff2323';
            betBtnDiv.style.backgroundColor = '#ff2323';
            decrementAmount.style.backgroundColor = '#ff2323';
            incrementAmount.style.backgroundColor = '#ff2323';
            break;
        default:
            // Handle other cases if needed
            break;
    }
}


    var bigSmallButtons = document.querySelectorAll('.bigbutton, .smallbutton');
    bigSmallButtons.forEach(function (button) {
        button.addEventListener('click', function () {
            selectedNumber = null; // Reset the selected number
            selectedColor = null; // Reset the selected color

            selectedBigSmall = button.classList.contains('bigbutton') ? 'Big' :
                button.classList.contains('smallbutton') ? 'Small' : '';

            document.querySelector('.chosen-number').textContent = 'Selected ' + selectedBigSmall;

            // Display the selected big/small in the console (optional)
            console.log('Manually Selected Big/Small:', selectedBigSmall);

            // Update the chosendiv color based on the selected big/small
            updateChosenDivColorForBigSmall(selectedBigSmall);

            // Show the modal when a big/small button is clicked manually
            document.getElementById('overlay').style.display = 'block';
            document.querySelector('.modal').style.display = 'block';
        });
    });

    function updateChosenDivColorForBigSmall(selectedBigSmall) {
        var chosenDiv = document.querySelector('.chosendiv');
        var betBtnDiv = document.querySelector('.closebetbtn');
    
        // Reset to default background color before applying the new color
        chosenDiv.style.background = '';
        betBtnDiv.style.background = '';
    
        switch (selectedBigSmall) {
            case 'Big':
                chosenDiv.style.backgroundColor = '#ffa82d';
                betBtnDiv.style.backgroundColor = '#ffa82d';
                decrementAmount.style.backgroundColor = '#ffa82d';
                incrementAmount.style.backgroundColor = '#ffa82d';
                break;
            case 'Small':
                chosenDiv.style.backgroundColor = 'rgb(64, 133, 243)';
                betBtnDiv.style.backgroundColor = 'rgb(64, 133, 243)';
                decrementAmount.style.backgroundColor = 'rgb(64, 133, 243)';
                incrementAmount.style.backgroundColor = 'rgb(64, 133, 243)';
                break;
            default:
                // Handle other cases if needed
                break;
        }
    }

    // Add event listeners for increment and decrement buttons
    var incrementButton = document.querySelector('#incrementAmount');
    var decrementButton = document.querySelector('#decrementAmount');

    incrementButton.addEventListener('click', function () {
        amountInput.value = parseInt(amountInput.value) + 1;
    });

    decrementButton.addEventListener('click', function () {
        amountInput.value = Math.max(1, parseInt(amountInput.value) - 1);
    });

    function getRandomNumber() {
        return Math.floor(Math.random() * 10);
    }
});

var selectedAmountElement = document.querySelector('.randombtnamount.selected');

betButton.addEventListener('click', function () {
    var betAmount = amountInput.value;
    var selectedAmount = selectedAmountElement.textContent; // Get selected amount
    var chosenNumber = document.querySelector('.chosen-number').textContent;

    // Process the bet amount and selected amount as needed (e.g., update UI or send to the server)
    console.log('Selected Amount:', selectedAmount);
    console.log('Chosen Number:', chosenNumber);
    console.log('Bet Amount:', betAmount);

    // Update the total amount element with the selected amount
    document.querySelector('.total-amount').textContent = 'Total amount: ' + selectedAmount;

    // Close the modal after placing the bet
    document.getElementById('overlay').style.display = 'none';
    document.querySelector('.modal').style.display = 'none';
});
function selectAmount(amount) {
    // Remove 'selected' class from all buttons
    var buttons = document.querySelectorAll('.balancebtn button');
    buttons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    var selectedButton = document.getElementById('btn' + amount);
    selectedButton.classList.add('selected');
}
// Check if the selected amount is stored in localStorage
var storedAmount = localStorage.getItem('selectedAmount');
if (storedAmount) {
    // Highlight the previously selected amount
    highlightSelectedAmount(storedAmount);
} else {
    // Set default value
    document.querySelector('.randombtnamount:first-child').classList.add('selected');
    storedAmount = document.querySelector('.randombtnamount:first-child').textContent.trim().replace('X', '');
    localStorage.setItem('selectedAmount', storedAmount);
}

// Function to highlight the selected amount
function highlightSelectedAmount(amount) {
    var selectedButton = document.getElementById('btn' + amount);
    if (selectedButton) {
        selectedButton.classList.add('selected');
    }
}





function selectQuantity(quantity) {
    // Remove 'selected' class from all buttons
    var quantityButtons = document.querySelectorAll('.quantityx button');
    quantityButtons.forEach(function(btn) {
        btn.classList.remove('selected');
    });

    // Add 'selected' class to the clicked button
    var selectedQuantityButton = document.getElementById('quantityBtnX' + quantity);
    selectedQuantityButton.classList.add('selected');
}

// Check if the selected quantity is stored in localStorage
var storedQuantity = localStorage.getItem('selectedQuantity');
if (storedQuantity) {
    // Highlight the previously selected quantity
    highlightSelectedQuantity(storedQuantity);
} else {
    // Set default value
    document.querySelector('.quantityx button:first-child').classList.add('selected');
    storedQuantity = document.querySelector('.quantityx button:first-child').textContent.trim().replace('X', '');
    localStorage.setItem('selectedQuantity', storedQuantity);
}

// Function to highlight the selected quantity
function highlightSelectedQuantity(quantity) {
    var selectedQuantityButton = document.getElementById('quantityBtnX' + quantity);
    if (selectedQuantityButton) {
        selectedQuantityButton.classList.add('selected');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Get the element with class "accountbtndiv"
    var accountBtn = document.querySelector('.deposit-button');

    // Add click event listener to the element
    accountBtn.addEventListener('click', function(event) {
        // Prevent the default behavior of the anchor tag
        event.preventDefault();
        
        // Redirect to the specified link
        window.location.href = 'https://sudhucodes.github.io/deposite/';
    });
});
