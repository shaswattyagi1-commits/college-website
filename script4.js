// Open the Modal
function openModal(img) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("img01");
    modal.style.display = "block";
    modalImg.src = img.src;

    // Reset the image size when opening
    modalImg.style.transform = "scale(1)";
    modalImg.dataset.scale = 1;
    
    // Add zoom event listeners
    modalImg.addEventListener('wheel', zoomImage);
}

// Close the Modal
function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";

    // Remove zoom event listeners
    var modalImg = document.getElementById("img01");
    modalImg.removeEventListener('wheel', zoomImage);
}

// Zoom function
function zoomImage(event) {
    event.preventDefault();
    var modalImg = event.target;
    var scale = Number(modalImg.dataset.scale);

    if (event.deltaY < 0) {
        scale *= 1.1;  // Zoom in
    } else {
        scale *= 0.9;  // Zoom out
    }

    // Limit the zoom scale
    scale = Math.max(1, Math.min(scale, 5));
    modalImg.dataset.scale = scale;
    modalImg.style.transform = "scale(" + scale + ")";
}

// Close the modal if user clicks anywhere outside of the image
window.onclick = function(event) {
    var modal = document.getElementById("myModal");
    if (event.target == modal) {
        closeModal();
    }
}
