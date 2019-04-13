

// **************************
// PLEASE READ!
// **************************
// Helper functions for UI
// Feel free to edit the body of the functions, but let me know if you want to change their names since they interact with Firebase. 
// The functions prepended with an underscore are automatically called, and should not be called elsewhere


// Login
$("#login").click(function () {
    signInWithGoogle();
});

// Logout
$("#logout").click(function () {
    signOutUser();
});

// Displays only .logged-in elements to logged in users. Automatically called on login
function _displayLoggedInUI() {
    $('.logged-in').show();
    $('.logged-out').hide();
    console.log('_displayLoggedInUI')
}

// Displays only .logged-out elements to logged out users. Automatically called on logout
function _displayLoggedOutUI() {
    $('.logged-in').hide();
    $('.logged-out').show();
    console.log('_displayLoggedOutUI')
}

// Adds new chat messages to DOM. Automatically called after submitting message
function _displayMessage(message) {
    const messageElem = $('<li class="list-group-item">')
        .append('<p class="message"><strong>' + message.name + ': </strong>' + message.message + '</p>');
    const allMessagesElem = $('#messages');
    allMessagesElem.append(messageElem);
    allMessagesElem.scrollTop($('#messages').prop("scrollHeight"));
}

// Send message to DB from client
$('#send-message').click(function (event) {
    event.preventDefault();

    const messageText = $('#message-input').val().trim();
    if (!messageText.length) { // Handle empty message
        $('#message-empty').show();
        event.stopPropagation();
        return;
    }
    // Message has characters. Add to DB
    addMessageToDB(messageText);
    $('#message-input').val('');
    $('#message-empty').hide();
})

// Update user profile. 
// profileObj is an object. Ex profileObj = {location: 'Seattle', hotel: '<hotel id>'}
function updateProfile(profileObj) {
    updateProfileInDB(profileObj)
}

// Retrieves all location cards for user and displays them. Automatically called on login
function _showLocationCards(locationCards) {
    locationCards.forEach(card => {
        console.log(card)
    })
}

// Create locationCard and send it to DB from client
function createLocationCard() {
    // TODO get locationCard info from client
    // TODO know what info wil be on card

    addLocationCardToDB(locationCard);
}

// Show initial decision (I know where I want to go / No idea) div
function _showDecisionDiv() {
    console.log('Showing decision div')
    $('#knowDestination').show();

}

// Show questionnaire div
function _showQuestionnaire() {
    console.log('Showing questionnaire')

}

// Show itinerary div
function _showItinerary() {
    console.log('Showing itinerary')

}