function getRandomColor(type = 'random') {
    const letters = type === 'light' ? '89ABCDEF' : type === 'dark' ? '01234567' : '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * letters.length)];
    }
    return color;
}

console.log(getRandomColor('light')); // Example output: #AECF8B (light color)
console.log(getRandomColor('dark'));  // Example output: #2A1B0E (dark color)
console.log(getRandomColor());        // Example output: #5C4F3A (random color)
