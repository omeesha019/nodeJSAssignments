const fs = require('fs');

// Define the file paths
const inputFile = './INPUT/input.txt';    // Change this to the path of the file you want to read
const outputFile = './OUTPUT/output.txt';  // Change this to the path of the file where modified content will be written

// Read the content of the input file
fs.readFile(inputFile, 'utf8', (err, data) => {
  if (err) {
    console.error('Error reading the file:', err);
    return;
  }

  // Modify the content (e.g., converting all text to uppercase)
  const modifiedContent = data.toUpperCase();
  console.log(modifiedContent);
  // Write the modified content to the output file
  fs.writeFile(outputFile, modifiedContent, 'utf8', (err) => {
    if (err) {
      console.error('Error writing the file:', err);
      return;
    }
    console.log(`File successfully modified and written to ${outputFile}`);
  });
});
