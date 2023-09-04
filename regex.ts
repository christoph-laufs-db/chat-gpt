function parseWithNamedGroups(inputString: string, regexPattern: RegExp): Record<string, string> | null {
  const match = regexPattern.exec(inputString);

  if (!match) {
    return null; // No match found
  }

  const result: Record<string, string> = {};

  // Extract named capturing groups
  const groupNames = Object.keys(regexPattern.exec(''));
  groupNames.forEach((groupName, index) => {
    if (index === 0) return; // Skip the first element, which is the full match
    result[groupName] = match[index];
  });

  return result;
}

// Example usage:
const inputString = "John Doe, Age: 30, Email: john@example.com";
const regexPattern = /(?<name>[A-Za-z ]+), Age: (?<age>\d+), Email: (?<email>[\w@.]+)/;

const parsedObject = parseWithNamedGroups(inputString, regexPattern);

if (parsedObject) {
  console.log(parsedObject);
} else {
  console.log("No match found.");
}
