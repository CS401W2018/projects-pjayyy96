document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const Username = document.getElementById('user').value;
    const Email = document.getElementById('email').value;
    const password = document.getElementById('pass').value;
    const confirmpassword = document.getElementById('confirmedpass').value;
    const age = document.getElementById('age').value;

    const search = document.getElementById('search').value;


    if (!Username || !Username) {
        alert('Please provide fullname.');
        return;
    }

    if (!Email || !Email) {
        alert('Please enter your email.');
        return;
    }

    if (!password || !password) {
        alert('Please provide the password.');
    }

    if (!confirmpassword || !confirmpassword) {
        alert('Please confirm the password.');
        return;
    }

    if (!age || age <14) {
        alert('You must be 18 years or older to submit this form.');
        return;
    }


    const formData = {
        user: Username, 
        email: Email,
        pass: password,
        confirmedpass: confirmpassword,
        age: age,

        search: search
    }

    const xhr = new XMLHttpRequest();
    xhr.open ("GET", "Mysight.json", true);
    xhr.setRequestHeader ("Content-Type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            alert('Form submitted successfully.');
        } else if (xhr.readyState === 4) {
            alert('Error submitting form.');
        }        
    };    
    xhr.send(JSON.stringify(formData));
    console.log(formData);
});