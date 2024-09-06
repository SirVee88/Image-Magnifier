document.addEventListener('DOMContentLoaded', function () {
    const magnifier = document.getElementById('magnifier');
    const image = document.getElementById('image');
    const magnifierSize = 100; // Size of the magnifier square

    image.addEventListener('mousemove', (e) => {
        const rect = image.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const cx = x / (image.width / magnifierSize);
        const cy = y / (image.height / magnifierSize);

        magnifier.style.backgroundImage = `url(${image.src})`;
        magnifier.style.backgroundSize = `${image.width * 2}px ${image.height * 2}px`;
        magnifier.style.backgroundPosition = `-${cx * 2 * magnifierSize}px -${cy * 2 * magnifierSize}px`;
        magnifier.style.left = `${x - magnifierSize / 2}px`;
        magnifier.style.top = `${y - magnifierSize / 2}px`;
        magnifier.style.display = 'block';
    });

    image.addEventListener('mouseleave', () => {
        magnifier.style.display = 'none';
    });
});
