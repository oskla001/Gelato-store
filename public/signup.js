/* fordi at de ikke refresher*/
var form = document.getElementById("signup_DIV");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);


function submitForm() {
    let username = document.getElementById('input_Signup_1').value;
    let password = document.getElementById('input_Signup_2').value;
    console.log(username);
    console.log(password);
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

