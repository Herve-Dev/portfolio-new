const apiUrl = "http://localhost:3000/api/sendMessage";

function sendMsg(event) {
    event.preventDefault();
    const emailContact = document.querySelector('.input-email').value;
    const msgContact = document.querySelector('.input-message').value;
    const formReset = document.querySelector('.bloc-form-contact__form-contact').reset()

    if (!emailContact || !msgContact) {
        return formReset
    }

    axios.post(apiUrl, {
        email:emailContact,
        message:msgContact,
    })
    .then((result) => {
        console.log(result);
        return formReset
    }).catch((err) => {
        console.log(err);
    });
}