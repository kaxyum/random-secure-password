function generateSecurePassword(length)
{
    let letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890?./§!:;,*ù%µ$^¨£=)àç_è-((é&~#{[|^@]}';
    let word = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * letters.length);
        word += letters.charAt(randomIndex);
    }
    return word;
}

module.exports = {
    generateSecurePassword: generateSecurePassword
};