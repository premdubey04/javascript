document.addEventListener('DOMContentLoaded', () => {
    const img = document.querySelector('.img');
    const container = document.querySelector('.container');
    const circle = document.querySelector('.circle');

    container.addEventListener('mousemove', (event) => {
        const offsetX = event.pageX ;
        const offsetY = event.pageY ;
        circle.style.top = `${offsetY}px`;
        circle.style.left = `${offsetX}px`;
        circle.style.backgroundPositionX = `-${offsetX}px`;
        circle.style.backgroundPositionY = `-${offsetY}px`;
        img.style.opacity = 0;
    });


});
