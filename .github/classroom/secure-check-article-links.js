const fs = require('fs');

try {
  // Read the links file
  const linksContent = fs.readFileSync('./article-links.json', 'utf8');
  const links = JSON.parse(linksContent);
  
  // Check if the required links exist
  if (!links.linkedin || !links.twitter) {
    console.error("Missing required links. Please provide both LinkedIn and Twitter links.");
    process.exit(1);
  }
  
  // Validate LinkedIn link
  const linkedinRegex = /^https:\/\/(www\.)?linkedin\.com\/.+/i;
  if (!linkedinRegex.test(links.linkedin)) {
    console.error("Invalid LinkedIn link. The URL should start with https://linkedin.com/ or https://www.linkedin.com/");
    process.exit(1);
  }
  
  // Validate Twitter link
  const twitterRegex = /^https:\/\/(www\.)?(twitter\.com|x\.com)\/.+/i;
  if (!twitterRegex.test(links.twitter)) {
    console.error("Invalid Twitter link. The URL should start with https://twitter.com/ or https://x.com/");
    process.exit(1);
  }
  
  // All checks passed
  console.log("Both LinkedIn and Twitter links are valid");
  
} catch (error) {
  console.error("Error checking article links:", error.message);
  console.error("Make sure you've created an article-links.json file with LinkedIn and Twitter links.");
  process.exit(1);
}