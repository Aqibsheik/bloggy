//this is scripted file

    let Button = document.getElementById("btn");
    let Contact = document.getElementById("contact");
    let skills = document.querySelectorAll(".skl");

    Button.addEventListener('click', function() {
        Contact.textContent = `Contact: 8431843414 Email: aqibsheik5@gmail.com`;

    })

    


skills.forEach(function(skill) {
    skill.addEventListener('mouseover', function() {
        skill.style.color = "green";
    });
});

skills.forEach(function(skill) {
    skill.addEventListener('mouseout', function() {
        skill.style.color = "";
    });
});


