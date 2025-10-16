/**
 * Converts a string to camelCase
 * @param {string} str - The string to convert
 * @returns {string} The camelCase version of the string
 */
function toCamelCase(str) {
    if (!str) return '';
    
    // Split by spaces, underscores, or hyphens
    const words = str.split(/[\s_-]+/);
    
    // Convert first word to lowercase, capitalize first letter of remaining words
    return words
        .map((word, index) => {
            // Convert entire word to lowercase first
            word = word.toLowerCase();
            
            // If it's the first word, keep it lowercase
            if (index === 0) {
                return word;
            }
            
            // Otherwise, capitalize the first letter
            return word.charAt(0).toUpperCase() + word.slice(1);
        })
        .join('');
}

// Example usage:
// console.log(toCamelCase('first name'));        // firstName
// console.log(toCamelCase('user_id'));           // userId
// console.log(toCamelCase('SCREEN_NAME'));       // screenName
// console.log(toCamelCase('mobile-number'));     // mobileNumber

module.exports = toCamelCase;