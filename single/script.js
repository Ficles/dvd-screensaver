let dvd;
let x, y;
let maxX, maxY;
let direction;
let rainbow = 0;
const speed = 10;

window.addEventListener('DOMContentLoaded', () => {
    dvd = document.getElementById('dvd-logo');
    maxX = window.innerWidth - dvd.clientWidth;
    maxY = window.innerHeight - dvd.clientHeight;
    x = Math.random() * maxX;
    y = Math.random() * maxY;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            direction = 0.25 * Math.PI; // 45 degrees in radians
            break;
        case 1:
            direction = 0.75 * Math.PI; // 135 degrees in radians
            break;
        case 2:
            direction = 1.25 * Math.PI; // 225 degrees in radians
            break;
        case 3:
            direction = 1.75 * Math.PI;
            break;
    }
    direction += (Math.random() - 0.5) * 0.5;
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
        if ((y <= 0 || y >= maxY) && (x <= 0 || x >= maxX)) {
            rainbow = 1;
        }
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

