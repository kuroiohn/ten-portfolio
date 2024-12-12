
// home func when the page loads
document.addEventListener('DOMContentLoaded', () => {
    home();
});

// home function
function home() {
    document.getElementById('main-content').style.display = 'block';
    document.getElementById('about-me-section').style.display = 'none';

    //applyTransition('.welcome-container');
}

// about me function
function aboutMe() {
    document.getElementById('main-content').style.display = 'none';
    document.getElementById('about-me-section').style.display = 'block';
}

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
                left = 0;
                width = 103;
                marginLeft = 5;
                break;
            case 1: // about Me
                left = 82;
                width = 127;
                marginLeft = 35;
                break;
            case 2: // projects
                left = 222;
                width = 140;
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

// for blur
document.addEventListener("DOMContentLoaded", function() {
    const imageContainers = document.querySelectorAll('.about-me-container div');

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
  