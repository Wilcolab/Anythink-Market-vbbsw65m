function toKebabCase(word1, word2) {
    // Helper function to validate a word
    function isValidWord(word) {
        return /^[a-zA-Z]+$/.test(word);
    }

    if (!isValidWord(word1) || !isValidWord(word2)) {
        throw new Error('Both inputs must be words containing only letters.');
    }

    // Convert to lowercase
    word1 = word1.toLowerCase();
    word2 = word2.toLowerCase();

    // Sort letters in each word alphabetically
    const sortedWord1 = word1.split('').sort().join('');
    const sortedWord2 = word2.split('').sort().join('');

    // Combine with dash
    const kebabCase = `${sortedWord1}-${sortedWord2}`;

    // Print the result
    console.log(kebabCase);

    return kebabCase;
}