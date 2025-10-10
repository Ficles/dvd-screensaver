let dvd;
let x, y;
let maxX, maxY;
let direction = 0.25 * Math.PI; // 45 degrees in radians
let rainbow = 0;
const speed = 8;

window.addEventListener('DOMContentLoaded', () => {
    dvd = document.getElementById('dvd-logo');
    x = (window.innerWidth/2) - (dvd.clientWidth/2);
    y = (window.innerHeight/2) - (dvd.clientHeight/2);
    dvd.style.left = `${x}px`;
    dvd.style.top = `${y}px`;
    dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
});

setInterval(() => {
    maxX = window.innerWidth - dvd.clientWidth;
    maxY = window.innerHeight - dvd.clientHeight;
    if (dvd) {
        dvd.style.left = `${x}px`;
        dvd.style.top = `${y}px`;
        dx = Math.cos(direction) * speed;
        dy = Math.sin(direction) * speed;
        x += dx;
        y += dy;
        if (x <= 0 || x >= maxX) {
            direction = Math.PI - direction;
            x = Math.max(0, Math.min(x, maxX));
            dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
        }
        if (y <= 0 || y >= maxY) {
            direction = -direction;
            y = Math.max(0, Math.min(y, maxY));
            dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
        }
        if ((y <= 0 || y >= maxY) && (x <= 0 || x >= maxX)) {
            rainbow = 1;
        }
    }
    if (rainbow > 0) {
        window.document.body.style.backgroundColor = `hsl(${rainbow}, 100%, 50%)`;
        rainbow += 5;
        if (rainbow >= 360) {
            rainbow = 0;
            window.document.body.style.backgroundColor = 'black';
        }
    }
}, 15);