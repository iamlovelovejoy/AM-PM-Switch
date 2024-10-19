// Get the checkbox (switch) element by its ID
const amPmSwitch = document.getElementById('am-pm-switch'); 
// Get the label text element (which displays "AM" or "PM")
const labelText = document.getElementById('label-text');

// Function to update the background color and label text based on the switch state
function updateBackgroundColor() {
    if (amPmSwitch.checked) {
        document.body.style.backgroundColor = '#E4B1F0'; // Set background color to dark blue for PM
        labelText.textContent = 'PM'; // Update label text to PM
    } else {
        document.body.style.backgroundColor = '#FFE1FF'; // Set background color to light yellow for AM
        labelText.textContent = 'AM'; // Update label text to AM
    }
}

// Add an event listener to the checkbox to detect when it is toggled
amPmSwitch.addEventListener('change', function () {
    updateBackgroundColor(); // Call the function to update color and label text
});

// Set the initial background color and label text based on the default state of the switch
updateBackgroundColor();
