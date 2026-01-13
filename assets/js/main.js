const navMenu = document.getElementById("nav-menu"),
    navToggle = document.getElementById("nav-toggle"),
    navClose = document.getElementById("nav-close")

/* SHOW MENU */
if(navToggle) {
    navToggle.addEventListener('click', () => {
        navMenu.classList.add("show-menu")
    })
}

/* MENU HIDDEN */
if(navClose) {
    navClose.addEventListener('click', () => {
        navMenu.classList.remove("show-menu")
    })
}

/* REMOVE MENU MOBILE */
const navLinks = document.querySelectorAll(".nav-link")

function linkAction() {
    const navMenu = document.getElementById("nav-menu")
    navMenu.classList.remove("show-menu")
}
navLinks.forEach(n => n.addEventListener('click', linkAction))

/* CHANGE BACKGROUND HEADER */
function scrollHeader() {
    const header = document.getElementById("header")
    if(this.scrollY >= 80) header.classList.add("scroll-header"); 
    else header.classList.remove("scroll-header")
}
window.addEventListener("scroll", scrollHeader)

/* TESTIMONIAL SWIPER */
if(document.querySelector(".testimonial-wrapper")) {
    var swiper = new Swiper(".testimonial-wrapper", {
        loop: true,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true,
        },
    });
}

/* SCROLL SECTION ACTIVE LINK */
const sections = document.querySelectorAll("section[id]");

window.addEventListener("scroll", navHighlighter);

function navHighlighter() {
    let scrollY = window.pageYOffset;
    
    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 100;
        const sectionId = current.getAttribute("id");
        
        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove("active-link");
            });
            
            const activeLink = document.querySelector('.nav-menu a[href*=' + sectionId + ']');
            if(activeLink) {
                activeLink.classList.add("active-link");
            }
        }
    })
    
    // Special handling for the last section (contact)
    const contactSection = document.querySelector('#contact');
    if(contactSection) {
        const contactTop = contactSection.offsetTop - 100;
        const documentHeight = document.documentElement.scrollHeight;
        const windowHeight = window.innerHeight;
        
        // If we're at the bottom of the page or in contact section
        if(scrollY + windowHeight >= documentHeight - 50 || scrollY >= contactTop) {
            document.querySelectorAll('.nav-menu a').forEach(link => {
                link.classList.remove("active-link");
            });
            const contactLink = document.querySelector('.nav-menu a[href*="contact"]');
            if(contactLink) {
                contactLink.classList.add("active-link");
            }
        }
    }
}

/* PORTFOLIO ITEM FILTER */
const filterContainer = document.querySelector(".portfolio-filter-inner");

if(filterContainer) {
    const filterBtns = filterContainer.children,
        totalFilterBtn = filterBtns.length,
        portfolioItems = document.querySelectorAll(".portfolio-item"),
        totalPortfolioItem = portfolioItems.length;

    for(let i = 0; i < totalFilterBtn; i++) {
        filterBtns[i].addEventListener("click", function() {
            filterContainer.querySelector(".active").classList.remove("active");
            this.classList.add("active");

            const filterValue = this.getAttribute("data-filter");
            
            for(let k = 0; k < totalPortfolioItem; k++) {
                if(filterValue === "all") {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                } else if(filterValue === portfolioItems[k].getAttribute("data-category")) {
                    portfolioItems[k].classList.remove("hide");
                    portfolioItems[k].classList.add("show");
                } else {
                    portfolioItems[k].classList.add("hide");
                    portfolioItems[k].classList.remove("show");
                }
            }
        })
    }
}

/* THEME/DISPLAY CUSTOMIZATION */
const theme = document.querySelector("#theme-button");
const themeModal = document.querySelector(".customize-theme");
const fontSizes = document.querySelectorAll('.choose-size span');
const colorPalette = document.querySelectorAll(".choose-color span");
var root = document.querySelector(":root");
const Bg1 = document.querySelector(".bg-1");
const Bg2 = document.querySelector(".bg-2");
const Bg3 = document.querySelector(".bg-3");

// Load saved theme settings on page load
window.addEventListener('DOMContentLoaded', () => {
    loadThemeSettings();
});

// Save theme settings to localStorage
function saveThemeSettings() {
    const settings = {
        fontSize: document.querySelector('html').style.fontSize || '16px',
        primaryHue: root.style.getPropertyValue('--primary-color-hue') || '352',
        lightColorLightness: root.style.getPropertyValue('--light-color-lightness') || '92%',
        whiteColorLightness: root.style.getPropertyValue('--white-color-lightness') || '100%',
        darkColorLightness: root.style.getPropertyValue('--dark-color-lightness') || '17%',
        activeFontSize: getActiveFontSizeClass(),
        activeColor: getActiveColorClass(),
        activeBackground: getActiveBackgroundClass()
    };
    localStorage.setItem('portfolioTheme', JSON.stringify(settings));
}

// Load theme settings from localStorage
function loadThemeSettings() {
    const savedSettings = localStorage.getItem('portfolioTheme');
    
    if(savedSettings) {
        const settings = JSON.parse(savedSettings);
        
        // Apply font size
        if(settings.fontSize) {
            document.querySelector('html').style.fontSize = settings.fontSize;
        }
        
        // Apply color hue
        if(settings.primaryHue) {
            root.style.setProperty('--primary-color-hue', settings.primaryHue);
        }
        
        // Apply background colors
        if(settings.lightColorLightness) {
            root.style.setProperty('--light-color-lightness', settings.lightColorLightness);
        }
        if(settings.whiteColorLightness) {
            root.style.setProperty('--white-color-lightness', settings.whiteColorLightness);
        }
        if(settings.darkColorLightness) {
            root.style.setProperty('--dark-color-lightness', settings.darkColorLightness);
        }
        
        // Set active classes
        setActiveFontSize(settings.activeFontSize);
        setActiveColor(settings.activeColor);
        setActiveBackground(settings.activeBackground);
    }
}

// Get active font size class
function getActiveFontSizeClass() {
    if(document.querySelector('.font-size-1.active')) return 'font-size-1';
    if(document.querySelector('.font-size-2.active')) return 'font-size-2';
    if(document.querySelector('.font-size-3.active')) return 'font-size-3';
    if(document.querySelector('.font-size-4.active')) return 'font-size-4';
    return 'font-size-3'; // default
}

// Get active color class
function getActiveColorClass() {
    if(document.querySelector('.color-1.active')) return 'color-1';
    if(document.querySelector('.color-2.active')) return 'color-2';
    if(document.querySelector('.color-3.active')) return 'color-3';
    if(document.querySelector('.color-4.active')) return 'color-4';
    if(document.querySelector('.color-5.active')) return 'color-5';
    return 'color-3'; // default
}

// Get active background class
function getActiveBackgroundClass() {
    if(document.querySelector('.bg-1.active')) return 'bg-1';
    if(document.querySelector('.bg-2.active')) return 'bg-2';
    if(document.querySelector('.bg-3.active')) return 'bg-3';
    return 'bg-1'; // default
}

// Set active font size
function setActiveFontSize(className) {
    fontSizes.forEach(size => size.classList.remove('active'));
    const activeSize = document.querySelector('.' + className);
    if(activeSize) {
        activeSize.classList.add('active');
    }
}

// Set active color
function setActiveColor(className) {
    colorPalette.forEach(color => color.classList.remove('active'));
    const activeColor = document.querySelector('.' + className);
    if(activeColor) {
        activeColor.classList.add('active');
    }
}

// Set active background
function setActiveBackground(className) {
    document.querySelectorAll('.choose-bg > div').forEach(bg => bg.classList.remove('active'));
    const activeBg = document.querySelector('.' + className);
    if(activeBg) {
        activeBg.classList.add('active');
    }
}

// Open modal 
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// Close modal
const closeThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')) {
        themeModal.style.display = 'none';
    }
}

if(theme) {
    theme.addEventListener("click", openThemeModal);
}

if(themeModal) {
    themeModal.addEventListener('click', closeThemeModal);
}

/* FONTS */
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove("active");
    })
}

fontSizes.forEach(size => {
    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');
        
        if(size.classList.contains('font-size-1')) {
            fontSize = '12px';
        } else if(size.classList.contains('font-size-2')) {
            fontSize = '14px';
        } else if(size.classList.contains('font-size-3')) {
            fontSize = '16px';
        } else if(size.classList.contains('font-size-4')) {
            fontSize = '18px';
        }
        
        document.querySelector('html').style.fontSize = fontSize;
        saveThemeSettings(); // Save after change
    })
})

/* PRIMARY COLORS */
const changeActiveColorClass = () => {
    colorPalette.forEach(colorPicker => {
        colorPicker.classList.remove('active');
    })
}

colorPalette.forEach(color => {
    color.addEventListener('click', () => {
        let primaryHue;
        changeActiveColorClass();

        if(color.classList.contains('color-1')) {
            primaryHue = 252;
        } else if(color.classList.contains('color-2')) {
            primaryHue = 52;
        } else if(color.classList.contains('color-3')) {
            primaryHue = 352;
        } else if(color.classList.contains('color-4')) {
            primaryHue = 152;
        } else if(color.classList.contains('color-5')) {
            primaryHue = 202;
        }
        
        color.classList.add("active");
        root.style.setProperty('--primary-color-hue', primaryHue);
        saveThemeSettings(); // Save after change
    })
})

/* THEME BACKGROUNDS */
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

const changeBG = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);
}

if(Bg1) {
    Bg1.addEventListener('click', () => {
        Bg1.classList.add('active');
        Bg2.classList.remove('active');
        Bg3.classList.remove('active');
        
        // Reset to default light theme
        root.style.setProperty('--light-color-lightness', '92%');
        root.style.setProperty('--white-color-lightness', '100%');
        root.style.setProperty('--dark-color-lightness', '17%');
        saveThemeSettings(); // Save after change
    })
}

if(Bg2) {
    Bg2.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '20%';
        lightColorLightness = '15%';

        Bg2.classList.add('active');
        Bg1.classList.remove('active');
        Bg3.classList.remove('active');
        changeBG();
        saveThemeSettings(); // Save after change
    })
}

if(Bg3) {
    Bg3.addEventListener('click', () => {
        darkColorLightness = '95%';
        whiteColorLightness = '10%';
        lightColorLightness = '0%';

        Bg3.classList.add('active');
        Bg2.classList.remove('active');
        Bg1.classList.remove('active');
        changeBG();
        saveThemeSettings(); // Save after change
    })
}

/* BLOG MODAL FUNCTIONS */
function openBlogModal(blogId) {
    const modalContent = document.getElementById("modal-blog-content");
    const modal = document.getElementById("blogModal");
    
    if(!modal || !modalContent) return;
    
    // Blog data - expand this with your actual blog posts
    let blogData = {
        '1': {
            title: "5 Best App Development Tool for Your Projects",
            date: "February 09, 2022",
            author: "Nymul Islam Moon",
            content: `
                <p>In the rapidly evolving world of app development, having the right tools can make all the difference. Here are five essential tools that every developer should consider for their projects.</p>
                
                <h3>1. Visual Studio Code</h3>
                <p>A powerful, lightweight code editor with excellent extension support and built-in Git integration.</p>
                
                <h3>2. Postman</h3>
                <p>Essential for API testing and development, making it easy to test endpoints and debug issues.</p>
                
                <h3>3. Docker</h3>
                <p>Containerization platform that ensures consistency across different development environments.</p>
                
                <h3>4. Git & GitHub</h3>
                <p>Version control is crucial for any development project, and Git remains the industry standard.</p>
                
                <h3>5. Figma</h3>
                <p>For UI/UX design and prototyping, Figma offers collaborative features that streamline the design process.</p>
                
                <p>These tools have proven invaluable in my development workflow and can significantly boost productivity.</p>
            `
        },
        '2': {
            title: "Common Misconceptions About Payment",
            date: "February 07, 2022",
            author: "Nymul Islam Moon",
            content: `
                <p>Payment integration is often misunderstood by developers and clients alike. Let's clear up some common misconceptions.</p>
                
                <h3>Misconception 1: All payment gateways are the same</h3>
                <p>Different gateways have different features, fees, and regional support. Choose based on your specific needs.</p>
                
                <h3>Misconception 2: PCI compliance is optional</h3>
                <p>Security standards must be followed strictly to protect customer data and avoid legal issues.</p>
                
                <h3>Misconception 3: Payment integration is always complex</h3>
                <p>Modern SDKs and APIs have made payment integration much simpler than it used to be.</p>
            `
        },
        '3': {
            title: "3 Things to Know About Startup Business",
            date: "February 09, 2022",
            author: "Nymul Islam Moon",
            content: `
                <p>Starting a business requires more than just a great idea. Here are three crucial aspects every entrepreneur should understand.</p>
                
                <h3>1. Market Research is Critical</h3>
                <p>Understanding your target audience and market demand is essential before investing time and resources.</p>
                
                <h3>2. Cash Flow Management</h3>
                <p>Many startups fail not because of bad products, but because of poor financial management.</p>
                
                <h3>3. Adaptability is Key</h3>
                <p>Be prepared to pivot your strategy based on market feedback and changing circumstances.</p>
            `
        }
    };

    if(blogData[blogId]) {
        modalContent.innerHTML = `
            <h2>${blogData[blogId].title}</h2>
            <p class="blog-meta"><strong>Date:</strong> ${blogData[blogId].date} | <strong>Author:</strong> ${blogData[blogId].author}</p>
            <div class="blog-content">${blogData[blogId].content}</div>
        `;
        modal.style.display = "block";
        document.body.style.overflow = "hidden";
    } else {
        modalContent.innerHTML = "<p>Blog content not found.</p>";
        modal.style.display = "block";
    }
}

function closeBlogModal() {
    const modal = document.getElementById("blogModal");
    if(modal) {
        modal.style.display = "none";
        document.body.style.overflow = "auto";
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    const modal = document.getElementById("blogModal");
    if(event.target === modal) {
        closeBlogModal();
    }
}

// Close modal with Escape key
document.addEventListener('keydown', function(event) {
    if(event.key === "Escape") {
        closeBlogModal();
    }
});

/* CONTACT FORM INPUT LABEL ANIMATION FIX */
const contactInputs = document.querySelectorAll('.contact-input');

contactInputs.forEach(input => {
    // Check if input has value on page load
    if(input.value !== '') {
        input.classList.add('has-value');
    }
    
    // Add class when input has value
    input.addEventListener('blur', function() {
        if(this.value !== '') {
            this.classList.add('has-value');
        } else {
            this.classList.remove('has-value');
        }
    });
});