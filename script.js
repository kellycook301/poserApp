results = () => {
    let firstName = document.getElementById('firstName').value;
    let lastName = document.getElementById('lastName').value;
    
    if (firstName.startsWith("Z"))
    {
        document.write(firstName + " " + lastName + " is a huge poser.");
    }
    else {
        document.write(firstName + " " + lastName + " is super cool. I personally would take a bullet for " + firstName + ".")

    }
    
}