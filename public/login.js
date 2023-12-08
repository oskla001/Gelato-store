/* fordi at de ikke refresher*/
var form = document.getElementById("login_DIV");
function handleForm(event) { event.preventDefault(); }
form.addEventListener('submit', handleForm);

//login funksjon

async function login() {
    // henter "/users" fra server.js
    const res = await fetch("/users",
        {
            method: "GET"
        })
    const users = await res.json()
    //sjekker brukernavn fra htmldokument til og så sjekker de value
    let brukernavn = document.getElementById("input_login_1").value
    let password = document.getElementById("input_login_2").value
    for (let i = 0; i < users.length; i++) {
        console.log(users[i]);
        //sjekker om brukernavn personen skrev inn er riktig hvis fortsetter man til bestill.html ikke får man alert// 
        if(brukernavn == users[i].Telefonnummer && password == users[i].Passord){
            alert(users[i].Epost)
            sessionStorage.setItem("Telefonnummer", users[i].Telefonnummer)
            window.location.assign("bestill.html")
            return
        }

    }
    alert("Du skrev noe feil:)")
   }

   