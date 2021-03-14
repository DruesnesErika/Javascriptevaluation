 
// -rendre obligatoire sujet + code erreur en dessous
// -rendre obligatoire question + code erreur en dessous 
// -bouton annuler reset 
// -faire des console.log

var formValid = document.getElementById("boutonenvoi");
var nom = document.getElementById("nom");
var nomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var missNom = document.getElementById("missNom");
var prenom = document.getElementById("prenom");
var prenomValid = /^[a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+([-'\s][a-zA-ZéèîïÉÈÎÏ][a-zéèêàçîï]+)?$/;
var missPrenom = document.getElementById("missPrenom");
var date = document.getElementById("date");
var missDate = document.getElementById("missDate");
var codepostal = document.getElementById("codepostal");
var codepostalValid = /^(([0-8][0-9])|(9[0-5]))[0-9]{3}$/;
var missCodepostal = document.getElementById("missCodepostal");
var email = document.getElementById("email");
var emailValid = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
var missEmail = document.getElementById("missEmail");
var floatingTextarea2 = document.getElementById("floatingTextarea2");
var missFloatingTextarea2 = document.getElementById("missFloatingTextarea2");
var TextareaContenu = document.getElementById("floatingTextarea2").value;
var selector = document.getElementById("selector");
var missSelector = document.getElementById("missSelector");
var checkbox = document.getElementById("checkbox");
var missCheckbox = document.getElementById("missCheckbox");
var sexe = document.getElementsByName("sexe");
var missSexe = document.getElementById("missSexe");
var adresse = document.getElementById("adresse");
var ville = document.getElementById("ville");


formValid.addEventListener("click", validation);

function validation(event) {
    var valid = false;
    for (var i = 0; i < sexe.length; i++){
        if (sexe[i].checked) {
            valid = true;
            break;
        }
        if (valid){
            missSexe.style.display = "none";
        }
        else {
            event.preventDefault();
            missSexe.textContent = "Sexe manquant, cochez la case correspondant à votre sexe";
            missSexe.style.color = "red";
        }
    }
    
    if (nomValid.test(nom.value) == false) {
        event.preventDefault();
        missNom.textContent = "Nom manquant ou incorrect, écrivez votre nom en lettres (majuscules, minuscules, espace et - autorisés)";
        missNom.style.color = "red";
    }
    
    if (prenomValid.test(prenom.value) == false) {
        event.preventDefault();
        missPrenom.textContent = "Prénom manquant ou incorrect, écrivez votre prénom en lettres (majuscules, minuscules, espace et - autorisés)";
        missPrenom.style.color = "red";
    }
    
    
    if (date.validity.valueMissing) {
        event.preventDefault();
        missDate.textContent = "Date de naissance manquante, sélectionnez votre date de naissance";
        missDate.style.color = "red";
    }
    
    if (codepostalValid.test(codepostal.value) == false) {
        event.preventDefault();
        missCodepostal.textContent = "Code postal manquant ou  incorrect, écrivez votre code postal seulement en 5 chiffres sans espace (autre format non accepté)";
        missCodepostal.style.color = "red";
    }
   
    if (emailValid.test(email.value) == false) {
        event.preventDefault();
        missEmail.textContent = "Adresse email manquante ou incorrecte, votre adresse email doit être écrite sans espace avec obligatoirement un @ et un .";
        missEmail.style.color = "red";
    }
    // if (selector.validity.valueMissing) {
    //     event.preventDefault();
    //     missSelector.textContent = "Sujet manquant, veuillez sélectionnez un sujet";
    //     missSelector.style.color = "red";
    // }
    if (TextareaContenu == '') {
        event.preventDefault();
        missFloatingTextarea2.textContent = "Question manquante, posez votre question ici";
        missFloatingTextarea2.style.color = "red";
        
    }
    if (checkbox.validity.valueMissing) {
        event.preventDefault();
        missCheckbox.textContent = "Cochez cette case pour valider le formulaire";
        missCheckbox.style.color = "red";
        
    } else {
    alert("Formulaire envoyé!");
    missFloatingTextarea2.style.display = "none";
    // console.log("Nom: " + nom.value + "\nPrénom: " + prenom.value + "\nSexe: " + sexeChoosen + "\nDate de naissance: " + date.value + "\nCode Postal: " + codepostal.value + "\nAdresse: " + adresse.value + "\nVille: " + ville.value + "\nEmail: " + email.value + "\nSujet: \nQuestion: ");
    }
}


