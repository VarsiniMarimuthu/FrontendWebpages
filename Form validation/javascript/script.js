function validateform(){
    // GET inputs
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    
    // Reset error message
    document.getElementById('nameError').innerHTML = '';
    document.getElementById('emailError').innerHTML = '';
    
    // Validate name
    if(name === ''){
        document.getElementById('nameError').innerHTML = 'Name is required';
        return false;
    }
    
    // Validate email
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if(email === '' || !emailRegex.test(email)){
        document.getElementById('emailError').innerHTML = 'Email is required';
        return false;
    }

    return true; // Form is valid
}
