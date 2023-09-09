
const checkValidation= (email,password)=>{

    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*[-\#\$\.\%\&\@\!\+\=\\*])(?=.*[a-zA-Z])(?=.*\d).{8,12}$/.test(password)

    if(!isEmailValid) return 'Email ID is not valid';
    if(!isPasswordValid) return 'Password is not valid'
    
    return null;

}

export {checkValidation}