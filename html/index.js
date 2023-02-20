function sendMail () {

    var params = {
        name: document.getElementById("name").value,
        email: document.getElementById("email").value,
        message: document.getElementById("message").value,
        subject: document.getElementById("subject").value,
    }
    const serviceID = "service_zk9qbbf"
    const templateID = "template_37acj78"

    emailjs.send(serviceID,templateID,params)
    .then(
        res => {
            document.getElementById("name").value = "";
            document.getElementById("email").value = "";
            document.getElementById("message").value = "";
            document.getElementById("subject").value = "";
            console.log(res)
            alert("Your message sent successfully!");
        }
    )
    .catch(err => console.log(err));
    console.log("onclick")
}
