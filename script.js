const bodyStyle = document.body.style;
const btn = document.querySelector('button');
const currentColor = document.querySelector('h2');

btn.onclick = () => {
    const r = Math.floor(Math.random() * 256);
    const g = Math.floor(Math.random() * 256);
    const b = Math.floor(Math.random() * 256);
    currentColor.innerHTML = `RGB : (${r}, ${g}, ${b})`;
    bodyStyle.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    btn.style.color = `rgb(${r}, ${g}, ${b})`;
    bodyStyle.color = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
    btn.style.backgroundColor = `rgb(${255 - r}, ${255 - g}, ${255 - b})`;
}

