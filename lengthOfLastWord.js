/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let c = 0;
    for (let i = s.length - 1; i >= 0; i--) {
        const sub = s[i];
        // Increment counter if any character other than
        // a space 
        if(sub !== ' ') ++c;
        // Break loop as soon as space is found and c is truthy (the last word was being worked on in previous loops)
        // a space
        if(sub === ' ' && c) break;
    }
    return c;
};
