
// Function to handle mouse enter
function mouseEnterHandler(event) {
    const projectLink = event.currentTarget;
    const gifSrc = projectLink.dataset.gifSrc;
    const projectImage = projectLink.querySelector('.project-image');
    setGifSource(gifSrc, projectImage);
}

// Function to handle mouse leave
function mouseLeaveHandler(event) {
    const projectLink = event.currentTarget;
    const staticSrc = projectLink.dataset.staticSrc;
    const projectImage = projectLink.querySelector('.project-image');
    setGifSource(staticSrc, projectImage);
}

// Function to set gif source
function setGifSource(src, imageElement) {
    imageElement.src = src;
}


// Attach event listeners to all projects
const projectLinks = document.querySelectorAll('.project');

projectLinks.forEach((projectLink) => {
    projectLink.addEventListener('mouseenter', mouseEnterHandler);
    projectLink.addEventListener('mouseleave', mouseLeaveHandler);
});
