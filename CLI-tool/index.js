const readline = require('readline');
const crypto = require('crypto');
const { clear } = require('console');

// Create an interface for reading user input
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Function to generate a random password
function generateRandomPassword(length) {
  const charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let password = '';
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * charset.length);
    password += charset[randomIndex];
  }
  return password;
}

// Function to start the CLI tool
function startCLI() {
  rl.question('Enter the length of the password you want to generate: ', (length) => {
    if (!isNaN(length)) {
      const password = generateRandomPassword(parseInt(length));
      console.log('Generated Password:', password);
    } else {
      console.log('Invalid input. Please enter a valid number for password length.');
    }
    rl.close();
  });
}

// Start the CLI tool
startCLI();
