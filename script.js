       // --- Active Nav Link on Scroll ---
const sections = document.querySelectorAll("section[id], header[id]");
const navLinks = document.querySelectorAll(".navbar-nav .nav-link");

const navObserverOptions = {
    root: null,
    rootMargin: "-20% 0px -60% 0px", // Triggers when section is in the middle of the screen
    threshold: 0
};

const navObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            const id = entry.target.getAttribute("id");
            
            // Remove active class from all links
            navLinks.forEach((link) => {
                link.classList.remove("active");
                // Check if the link's href matches the current section ID
                if (link.getAttribute("href") === `#${id}`) {
                    link.classList.add("active");
                }
            });
        }
    });
}, navObserverOptions);

// Observe all sections
sections.forEach((section) => {
    navObserver.observe(section);
});

// Set Home/About as active if at the very top
window.addEventListener('scroll', () => {
    if (window.scrollY < 100) {
        navLinks.forEach(link => link.classList.remove('active'));
        const firstLink = document.querySelector('.navbar-nav .nav-link[href="#home"]');
        if(firstLink) firstLink.classList.add('active');
    }
});