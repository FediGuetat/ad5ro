var firebaseConfig = {
    apiKey: "AIzaSyDaS6EbHINKcwxcXQLZqntU7fyP6fId0Tg",
    authDomain: "adopt-778c9.firebaseapp.com",
    databaseURL: "https://adopt-778c9.firebaseio.com",
    projectId: "adopt-778c9",
    storageBucket: "",
    messagingSenderId: "374700063675",
    appId: "1:374700063675:web:5d441b810904ec41"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);




var messagesRef = firebase.database().ref()


document.getElementById('contactForm').addEventListener('submit', submitForm)

function submitForm(e) {
    e.preventDefault();
    var name = document.getElementById('name').value
    var email = document.getElementById('email').value
    var message = document.getElementById('message').value
    saveMessage(name, email, message)
}




function saveMessage(name, email, message) {
    var newMessageRef = messagesRef.push()
    newMessageRef.set({
        name: name,
        email: email,
        message: message
    })
}