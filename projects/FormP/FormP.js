document.getElementById('myForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const first = document.getElementById('firstName').value;
    const last = document.getElementById('lastName').value;
    const pass = document.getElementById('password').value;
    const age = document.getElementById('age').value;

    if (!first || !last) {
        alert('Please provide fullname.');
        return;
    }

    if (!pass || !pass) {
        alert('Please provide the password.');
    }

    if (!age || age <18) {
        alert('You must be 18 years or older to submit this form.');
        return;
    }

    const formData = {
        firstName: first, 
        lastName: last,
        password: pass,
        age: age
    }

    const xhr = new XMLHttpRequest();
    xhr.open ("GET", "Submit.json", true);
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