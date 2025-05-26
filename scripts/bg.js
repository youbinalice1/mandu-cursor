function updateH1WithViewportSize() {
    const h1 = document.querySelector('#box h1');
    if (h1) {
        const width = window.innerWidth;
        const height = window.innerHeight;
        h1.textContent = `Width: ${width}px, Height: ${height}px`;
    }
}

// Update on initial load
document.addEventListener('DOMContentLoaded', updateH1WithViewportSize);

// Update on window resize
window.addEventListener('resize', updateH1WithViewportSize);
