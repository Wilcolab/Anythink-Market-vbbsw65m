// Converts exactly two space-separated words to camelCase.
// Example: "red parakeet" -> "redParakeet"
function toCamelCase(twoWords) {
    if (typeof twoWords !== 'string') throw new TypeError('Input must be a string');
    const words = twoWords.trim().split(/\s+/).filter(Boolean);
    if (words.length !== 2) throw new Error('Expected exactly two words separated by space');
    const [first, second] = words.map(w => w.toLowerCase());
    return first + second.charAt(0).toUpperCase() + second.slice(1);
}

module.exports = { toCamelCase };