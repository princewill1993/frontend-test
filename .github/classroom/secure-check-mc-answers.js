const fs = require('fs');
const crypto = require('crypto');

try {
  if (!fs.existsSync('./answers.json')) {
    console.error("❌ Error: answers.json file is missing.");
    process.exit(1);
  }

  const studentAnswers = JSON.parse(fs.readFileSync('./answers.json', 'utf8'));
  
  // Get encrypted correct answers from environment variable
  const encryptedAnswers = process.env.CORRECT_ANSWERS;
  const salt = process.env.ANSWER_SALT;
  const key = process.env.ANSWER_KEY;
  
  if (!encryptedAnswers || !salt || !key) {
    console.error("❌ Error: Required environment variables are missing.");
    process.exit(1);
  }

  // Determine assessment type
  const assessmentType = fs.existsSync('./Backend.md') ? 'backend' : 'frontend';
  
  // Decrypt the correct answers
  const correctAnswers = decryptAnswers(encryptedAnswers, key);
  
  if (!correctAnswers || !correctAnswers[assessmentType]) {
    console.error("❌ Error: Unable to verify answers.");
    process.exit(1);
  }

  // Compare student answers with correct answers
  let incorrectCount = 0;
  for (let questionId in correctAnswers[assessmentType]) {
    // Hash the student's answer with the same salt used for the correct answers
    const studentAnswerHash = hashAnswer(studentAnswers[questionId], salt);
    
    // Compare the hash with the stored correct answer hash
    if (studentAnswerHash !== correctAnswers[assessmentType][questionId]) {
      incorrectCount++;
    }
  }

  if (incorrectCount === 0) {
    console.log("✅ All answers correct! You passed! 🎉");
    process.exit(0);
  } else {
    console.log(`❌ ${incorrectCount} answers are incorrect. Try again.`);
    process.exit(1);
  }
} catch (error) {
  console.error("❌ Error:", error.message);
  process.exit(1);
}

// Function to hash an answer with a salt
function hashAnswer(answer, salt) {
  return crypto.createHash('sha256').update(answer + salt).digest('hex');
}

// Function to decrypt the correct answers
function decryptAnswers(encryptedData, keyString) {
  try {
    // Convert key from hex string to Buffer
    const keyBuffer = Buffer.from(keyString, 'hex');
    
    // Extract IV and encrypted data
    const encryptedBuffer = Buffer.from(encryptedData, 'hex');
    const iv = encryptedBuffer.slice(0, 16);
    const data = encryptedBuffer.slice(16);
    
    // Create decipher
    const decipher = crypto.createDecipheriv('aes-256-cbc', keyBuffer, iv);
    
    // Decrypt
    const decrypted = Buffer.concat([
      decipher.update(data),
      decipher.final()
    ]);
    
    return JSON.parse(decrypted.toString());
  } catch (error) {
    console.error("Decryption error:", error.message);
    return null;
  }
}