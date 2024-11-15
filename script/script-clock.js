function updateClock() {
    const now = new Date();
    const hour = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    const hourDeg = (hour % 12) * 30 + minutes * 0.5; // 30° per hour + 0.5° per minute
    const minuteDeg = minutes * 6; // 6° per minute
    const secondDeg = seconds * 6; // 6° per second

    document.querySelector('.hour-hand').style.transform = `rotate(${hourDeg}deg)`;
    document.querySelector('.minute-hand').style.transform = `rotate(${minuteDeg}deg)`;
    document.querySelector('.second-hand').style.transform = `rotate(${secondDeg}deg)`;
}

// Atualizar o relógio a cada segundo
setInterval(updateClock, 1000);
updateClock();