let dvds;
let maxX, maxY;
//let rainbow = 0;
const speed = 10;

window.addEventListener('DOMContentLoaded', () => {
    dvds = document.getElementsByClassName('dvd-logo');
    for (let dvd of dvds) {
        maxX = window.innerWidth - dvd.clientWidth;
        maxY = window.innerHeight - dvd.clientHeight;
        dvd.x2 = Math.random() * maxX;
        dvd.y2 = Math.random() * maxY;
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                dvd.direction = 0.25 * Math.PI; // 45 degrees in radians
                break;
            case 1:
                dvd.direction = 0.75 * Math.PI; // 135 degrees in radians
                break;
            case 2:
                dvd.direction = 1.25 * Math.PI; // 225 degrees in radians
                break;
            case 3:
                dvd.direction = 1.75 * Math.PI;
                break;
        }
        dvd.direction += (Math.random() - 0.5) * 0.5;
        dvd.style.left = `${dvd.x2}px`;
        dvd.style.top = `${dvd.y2}px`;
        dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
    }
});

setInterval(() => {
    if (dvds) {
        for (let dvd of dvds) {
            maxX = window.innerWidth - dvd.clientWidth;
            maxY = window.innerHeight - dvd.clientHeight;
            console.log(maxX, maxY);
            dvd.style.left = `${dvd.x2}px`;
            dvd.style.top = `${dvd.y2}px`;
            dx = Math.cos(dvd.direction) * speed;
            dy = Math.sin(dvd.direction) * speed;
            dvd.x2 += dx;
            dvd.y2 += dy;
            if (dvd.x2 <= 0 || dvd.x2 >= maxX) {
                dvd.direction = Math.PI - dvd.direction;
                dvd.x2 = Math.max(0, Math.min(dvd.x2, maxX));
                dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
            }
            if (dvd.y2 <= 0 || dvd.y2 >= maxY) {
                dvd.direction = -dvd.direction;
                dvd.y2 = Math.max(0, Math.min(dvd.y2, maxY));
                dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
            }
        };
    }
    /*
    if (rainbow > 0) {
        window.document.body.style.backgroundColor = `hsl(${rainbow}, 100%, 50%)`;
        rainbow += 5;
        if (rainbow >= 360) {
            rainbow = 0;
            window.document.body.style.backgroundColor = 'black';
        }
    }
    */
}, 15);

window.addEventListener('keydown', (e) => {
    if (e.code === 'Space') {
        if (document.getElementsByTagName('h1').length > 0) {
            document.getElementsByTagName('h1')[0].remove();
        }
        const dvd = document.createElement('img');
        dvd.className = 'dvd-logo';
        dvd.src = 'dvd.png';
        dvd.style.position = 'absolute';
        dvd.style.width = '160px';
        dvd.style.height = '80px';
        document.body.appendChild(dvd);

        maxX = window.innerWidth - dvd.clientWidth;
        maxY = window.innerHeight - dvd.clientHeight;
        dvd.x2 = Math.random() * maxX;
        dvd.y2 = Math.random() * maxY;
        switch (Math.floor(Math.random() * 4)) {
            case 0:
                dvd.direction = 0.25 * Math.PI;
                break;
            case 1:
                dvd.direction = 0.75 * Math.PI;
                break;
            case 2:
                dvd.direction = 1.25 * Math.PI;
                break;
            case 3:
                dvd.direction = 1.75 * Math.PI;
                break;
        }
        dvd.direction += (Math.random() - 0.5) * 0.5;
        dvd.style.left = `${dvd.x2}px`;
        dvd.style.top = `${dvd.y2}px`;
        dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
        dvds = document.getElementsByClassName('dvd-logo');
    }

});

window.addEventListener('touchstart', (e) => {
    if (document.getElementsByTagName('h1').length > 0) {
        document.getElementsByTagName('h1')[0].remove();
    }
    const dvd = document.createElement('img');
    dvd.className = 'dvd-logo';
    dvd.src = 'dvd.png';
    dvd.style.position = 'absolute';
    dvd.style.width = '160px';
    dvd.style.height = '80px';
    document.body.appendChild(dvd);

    maxX = window.innerWidth - dvd.clientWidth;
    maxY = window.innerHeight - dvd.clientHeight;
    dvd.x2 = Math.random() * maxX;
    dvd.y2 = Math.random() * maxY;
    switch (Math.floor(Math.random() * 4)) {
        case 0:
            dvd.direction = 0.25 * Math.PI;
            break;
        case 1:
            dvd.direction = 0.75 * Math.PI;
            break;
        case 2:
            dvd.direction = 1.25 * Math.PI;
            break;
        case 3:
            dvd.direction = 1.75 * Math.PI;
            break;
    }
    dvd.direction += (Math.random() - 0.5) * 0.5;
    dvd.style.left = `${dvd.x2}px`;
    dvd.style.top = `${dvd.y2}px`;
    dvd.style.filter = `invert(1) sepia(1) saturate(10000%) brightness(1.2) hue-rotate(${Math.random() * 360}deg)`;
    dvds = document.getElementsByClassName('dvd-logo');
});


