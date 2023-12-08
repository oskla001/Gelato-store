/* fordi at de ikke refresher*/
var form = document.getElementById("signup_DIV");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


// signup funksjonen
function submitForm() {
    //sjekker brukernavn fra htmldokument til og så sjekker de value
    let username = document.getElementById('input_Signup_1').value;
    let password = document.getElementById('input_Signup_2').value;
    console.log(username);
    console.log(password);
    //får verdien fra brukernavn som hentes fra HTML//
    const data = {
        user: username,
        passord: password
    }
    // sends the data to the database
    fetch("/create/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    })
}

