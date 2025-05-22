function generatePassword() {
  const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
  const digitChars = "0123456789";
  const specialChars = "@#$%&()=?¿*+[]{}";

  let password = "";

  
  for (let i = 0; i < 2; i++) {
    password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
  }

  
  for (let i = 0; i < 2; i++) {
    password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
  }

 
  for (let i = 0; i < 2; i++) {
    password += digitChars.charAt(Math.floor(Math.random() * digitChars.length));
  }

  
  for (let i = 0; i < 2; i++) {
    password += specialChars.charAt(Math.floor(Math.random() * specialChars.length));
  }

  
  password = password.split('').sort(() => Math.random() - 0.5).join('');

  return password;
}

console.log("Generated Password:", generatePassword());