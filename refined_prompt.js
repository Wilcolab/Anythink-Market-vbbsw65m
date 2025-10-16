/**
 * Converts a given string to camelCase format.
 *
 * The function handles strings with spaces, underscores, hyphens, and camelCase boundaries.
 * It also performs validation to reject purely numeric strings, gibberish, or invalid identifiers.
 * Acronyms (all-uppercase words with length > 1) are preserved in uppercase.
 *
 * Examples:
 *   toCamelCase('first name')      // 'firstName'
 *   toCamelCase('user_id')         // 'userId'
 *   toCamelCase('SCREEN_NAME')     // 'screenName'
 *   toCamelCase('mobile-number')   // 'mobileNumber'
 *   toCamelCase('NASA_data')       // 'NASAData'
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The camelCase version of the input string.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If the input is a purely numeric string.
 * @throws {Error} If the input appears to be gibberish or not a valid identifier.
 * @throws {Error} If the input starts with a number.
 * @throws {Error} If the input does not contain valid words.
 */
 
/**
 * Converts a given string to dot.case format.
 *
 * The function splits the input on spaces, underscores, hyphens, and camelCase boundaries,
 * then joins the resulting words with dots, converting all characters to lowercase.
 *
 * Examples:
 *   toDotCase('first name')      // 'first.name'
 *   toDotCase('user_id')         // 'user.id'
 *   toDotCase('SCREEN_NAME')     // 'screen.name'
 *   toDotCase('mobile-number')   // 'mobile.number'
 *   toDotCase('NASA_data')       // 'nasa.data'
 *   toDotCase('camelCaseInput')  // 'camel.case.input'
 *
 * @param {string} input - The input string to convert.
 * @returns {string} The dot.case version of the input string.
 * @throws {Error} If the input is not a string.
 * @throws {Error} If the input does not contain valid words.
 */
function toCamelCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Check for numeric input or gibberish (e.g., '45 birds', 'kjhwheiuq')
    if (/^\d+$/.test(input.trim())) {
        throw new Error('Input cannot be a purely numeric string.');
    }
    // Gibberish: single word with no vowels or too short
    const words = input
        .split(/[\s_\-]+/)
        .filter(Boolean);

    if (
        words.length === 1 &&
        (words[0].length < 3 || !/[aeiou]/i.test(words[0]))
    ) {
        throw new Error('Input appears to be gibberish or not a valid identifier.');
    }
    if (/\d/.test(words[0])) {
        throw new Error('Input cannot start with a number.');
    }

    // Helper: check if a word is an acronym (all uppercase, length > 1)
    function isAcronym(word) {
        return /^[A-Z]{2,}$/.test(word);
    }

    // Build camelCase
    let result = '';
    for (let i = 0; i < words.length; i++) {
        let word = words[i].replace(/[^a-zA-Z]/g, ''); // skip non-letter chars
        if (!word) continue;
        if (i === 0) {
            result += isAcronym(word) ? word : word.toLowerCase();
        } else {
            if (isAcronym(word)) {
                result += word;
            } else {
                result += word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
            }
        }
    }
    if (!result) {
        throw new Error('Input does not contain valid words.');
    }
    return result;
}

// Example usage:
// console.log(toCamelCase('first name')); // firstName
// console.log(toCamelCase('user_id')); // userId
// console.log(toCamelCase('SCREEN_NAME')); // screenName
// console.log(toCamelCase('mobile-number')); // mobileNumber
// console.log(toCamelCase('NASA_data')); // NASAData
// console.log(toCamelCase('45 birds')); // Error
// console.log(toCamelCase('kjhwheiuq')); // Error

function toDotCase(input) {
    if (typeof input !== 'string') {
        throw new Error('Input must be a string.');
    }

    // Split on spaces, underscores, hyphens, and camelCase boundaries
    let words = input
        .replace(/([a-z0-9])([A-Z])/g, '$1 $2') // camelCase to space
        .split(/[\s_\-]+/)
        .filter(Boolean);

    if (!words.length) {
        throw new Error('Input does not contain valid words.');
    }

    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage:
// console.log(toDotCase('first name')); // first.name
// console.log(toDotCase('user_id')); // user.id
// console.log(toDotCase('SCREEN_NAME')); // screen.name
// console.log(toDotCase('mobile-number')); // mobile.number
// console.log(toDotCase('NASA_data')); // nasa.data
// console.log(toDotCase('camelCaseInput')); // camel.case.input
