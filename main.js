// for nav
document.addEventListener('DOMContentLoaded', () => {
    const links = document.querySelectorAll('.nav-a');
    const span = document.querySelector('nav span');

    // set active link and position span
    function setActiveLink(index) {
        // remove 'active' class from all links
        links.forEach(link => link.classList.remove('active'));

        // add 'active' class to the clicked link
        links[index].classList.add('active');

        // calculate position based on the index
        let left = 0;
        let width = 0;
        let marginLeft = 0;

        switch (index) {
            case 0: // home
                left = 2.2;
                width = 72;
                marginLeft = 0;
                break;
            case 1: // about Me
                left = 45;
                width = 88;
                marginLeft = 35;
                break;
            case 2: // projects
                left = 137;
                width = 95;
                marginLeft = 35;
                break;
        }

        span.style.left = `${left}px`;
        span.style.width = `${width}px`;
        span.style.marginLeft = `${marginLeft}px`;
    }

    // add click event listeners to links
    links.forEach((link, index) => {
        link.addEventListener('click', (e) => {
            e.preventDefault(); // prevent default link behavior
            setActiveLink(index);
        });
    });

    // initialize with the first link ("Home") active
    setActiveLink(0);
});

// home func when the page loads
document.addEventListener('DOMContentLoaded', () => {
    home();
});

// Hide all sections
function hideAllSections() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('about-me-section').style.display = 'none';
    document.getElementById('projects-section').style.display = 'none';
}

// Function to show a specific section
function showSection(sectionId) {
    hideAllSections();
    document.getElementById(sectionId).style.display = 'block';
}

// Navigation functions
function home() {
    showSection('main-content');
}

function aboutMe() {
    showSection('about-me-section');
}

function projects() {
    // Hide edits-section when showing projects
    document.getElementById('edits-section').style.display = 'none';
    showSection('projects-section');
}

function edits() {
    // Ensure projects section is visible
    showSection('projects-section');
    
    // Then display the edits section inside it
    document.getElementById('edits-section').style.display = 'block';
}

// for blur
document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll('.master-container div');

    imageContainers.forEach(container => {
        const img = container.querySelector('img');

        img.addEventListener('mouseover', () => {
            // Apply blur to other images
            imageContainers.forEach(otherContainer => {
                const otherImg = otherContainer.querySelector('img');
                if (otherImg !== img) {
                    otherImg.style.transition = 'filter 0.3s ease-out';
                    otherImg.style.filter = 'blur(5px)';
                }
            });

            // Elevate z-index of the hovered image
            container.style.zIndex = '10';
        });

        img.addEventListener('mouseout', () => {
            // Remove blur from other images
            imageContainers.forEach(otherContainer => {
                const otherImg = otherContainer.querySelector('img');
                otherImg.style.transition = 'filter 0.5s ease-out';
                otherImg.style.filter = '';
            });

            // After the transition ends, reset the z-index
            img.addEventListener('transitionend', () => {
                container.style.zIndex = ''; // Reset to the default z-index
            }, { once: true });
        });
    });
});

//for image slider
let list = document.querySelector('.slider .list');
let items = document.querySelectorAll('.slider .list .item');
let dots = document.querySelectorAll('.slider .dots li');
let prev = document.getElementById('prev');
let next = document.getElementById('next');

let active = 0;
let lengthItems = items.length - 1;

next.onclick = function() {
    if (active + 1 > lengthItems) {
        active = 0;
    } else {
        active = active + 1;
    }
    reloadSlider();
}

prev.onclick = function() {
    if (active - 1 < 0) {
        active = lengthItems;
    } else {
        active = active - 1;
    }

    reloadSlider();
}

let refreshSlider = setInterval(() => {next.click()}, 5000);

function reloadSlider() {
    let checkLeft = items[active].offsetLeft;
    list.style.left = -checkLeft + 'px';

    let lastActiveDot = document.querySelector('.slider .dots li.active');
    lastActiveDot.classList.remove('active');
    dots[active].classList.add('active');
    clearInterval(refreshSlider);
    refreshSlider = setInterval(() => {next.click()}, 3000);
}

dots.forEach((li, ket) => {
    li.addEventListener('click', function() {
        active = key;
        reloadSlider();
    })
})