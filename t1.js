function getRandomColor() {
    const randomValue = () => Math.floor(Math.random() * 256);
    const r = randomValue();
    const g = randomValue();
    const b = randomValue();
    
    const toHex = (value) => value.toString(16).padStart(2, '0').toUpperCase();
    const hexColor = `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    
    return {
        hex: hexColor,
        rgb: `rgb(${r}, ${g}, ${b})`,
        r: r,
        g: g,
        b: b
    };
}

const color = getRandomColor();
console.log(color); 
// Example output: { hex: '#3E2F1B', rgb: 'rgb(62, 47, 27)', r: 62, g: 47, b: 27 }
