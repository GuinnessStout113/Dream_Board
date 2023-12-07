document.addEventListener('DOMContentLoaded', () => {
    // Assuming you have the keyboard image element
    const keyboardImage = document.querySelector('.swerly-keyboard');

    // Add an event listener for mousemove
    document.addEventListener('mousemove', (event) => {
        const imageWidth = keyboardImage.offsetWidth;
        const imageHeight = keyboardImage.offsetHeight;

        // Calculate the horizontal position of the mouse relative to the center of the image
        const mouseXFromCenter = event.clientX - (keyboardImage.offsetLeft + imageWidth / 2);
        const mouseYFromCenter = event.clientY - (keyboardImage.offsetTop + imageHeight / 2);

        // Calculate the rotation angle based on the mouse position
        const rotationAngle = Math.atan2(mouseYFromCenter, mouseXFromCenter) * (180 / Math.PI);

        keyboardImage.style.transform = `translate(-50%, -50%) rotate(${rotationAngle}deg)`;
    });
});
 v   