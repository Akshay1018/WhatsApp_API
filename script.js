function sendMessage() {
    var a = 91;
    var num = document.getElementById("phone").value;
    var textmsg = document.getElementById("msg").value;
    var sendmsg = window.open(`https://wa.me/${a}${num}?text=I%27m%20api%20msg%20hello%20friend%20${textmsg}`, '_blank');
    sendmsg.focus();

}

function validPhone() {
    var userInput = document.getElementById("phone").value;
    var validity = /^[0-9]\d{9}$/
    if (validity.test(userInput)) {
        sendMessage();
    } else {
        alert("Invalid Phone Number");

        return;
    }
}