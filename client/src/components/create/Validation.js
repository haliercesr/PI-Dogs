export default function Validate(user){
let regexNombreSinNumero=/[a-zA-Z]+/g
let regexpass=/^(?=.*[0-9]+.*)(?=.*[a-zA-Z]+.*)[0-9a-zA-Z]{6,}$/ //La contraseña debe contener al menos una letra, al menos un número y tener más de seis caracteres.
let errors={}

!user.name?errors.email="Ingresar email":null




return errors}
