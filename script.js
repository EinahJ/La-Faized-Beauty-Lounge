function scrollLeftBy() {
    const serviceList = document.querySelector('.service-list');
    serviceList.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRight() {
    const serviceList = document.querySelector('.service-list');
    serviceList.scrollBy({ left: 300, behavior: 'smooth' });
}

function scrollLeftBySection2() {
    const serviceList = document.querySelector('.service-list-2');
    serviceList.scrollBy({ left: -300, behavior: 'smooth' });
}

function scrollRightSection2() {
    const serviceList = document.querySelector('.service-list-2');
    serviceList.scrollBy({ left: 300, behavior: 'smooth' });
}

document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('seeMoreButton').addEventListener('click', function() {
        var hiddenServices = document.getElementById('hiddenServices');
        if (hiddenServices.style.display === 'none' || hiddenServices.style.display === '') {
            hiddenServices.style.display = 'block';
            this.textContent = 'See Less'; // Change button text
        } else {
            hiddenServices.style.display = 'none';
            this.textContent = 'See More'; // Change button text back
        }
    });
});

function showPriceList(imageSrc) {
    var modal = document.getElementById("priceModal");
    var modalImg = document.getElementById("priceImage");
    modal.style.display = "block";
    modalImg.src = imageSrc;
}

function closePriceList() {
    var modal = document.getElementById("priceModal");
    modal.style.display = "none";
}

// Close the modal when clicking anywhere outside the image
window.onclick = function(event) {
    var modal = document.getElementById("priceModal");
    if (event.target == modal) {
        modal.style.display = "none";
    }
}


function showModal() {
    document.getElementById('certificateModal').style.display = 'flex';
}

function closeModal() {
    document.getElementById('certificateModal').style.display = 'none';
}

function showModal(modalId) {
    document.getElementById(modalId).style.display = 'flex';
}

function closeModal(modalId) {
    document.getElementById(modalId).style.display = 'none';
}

// Close the modal when clicking outside of it
window.onclick = function(event) {
    var certificateModal = document.getElementById('certificateModal');
    var locationModal = document.getElementById('locationModal');
    
    if (event.target == certificateModal) {
        certificateModal.style.display = 'none';
    }
    
    if (event.target == locationModal) {
        locationModal.style.display = 'none';
    }
}

function changeInfo(containerId) {
    // Get the container by its ID
    var container = document.getElementById(containerId);

    // Check if the container exists
    if (!container) {
        console.error("Container with ID '" + containerId + "' not found.");
        return;
    }

    // Get elements within the container
    var image = container.querySelector('.image');
    var title = container.querySelector('h1');
    var description = container.querySelector('p');
    var priceTag = container.querySelector('.custom-price-tag');

    // Check if elements are found
    if (!image || !title || !description || !priceTag) {
        console.error("One or more elements not found within the container.");
        return;
    }

    // Define original and updated content for each container

    var originalContent = {
        'container-elite-gelpolish': {
            image: 'img/elite-gelpolish.jpg',
            alt: 'Elite LAGDAI Gel Polish',
            title: 'Elite LAGDAI Gel Polish',
            description: 'Get the perfect blend of flexibility and durability with our Softgel Extensions. These natural-looking enhancements provide a strong yet gentle alternative to traditional nail extensions, ensuring your nails remain beautiful and healthy.',
            price: '₱1,000.00'
        },
        'container-softgel-extension': {
            image: 'img/softgel-extension.jpg',
            alt: 'Softgel Extension',
            title: 'Softgel Extension',
            description: 'Get the perfect blend of flexibility and durability with our Softgel Extensions. These natural-looking enhancements provide a strong yet gentle alternative to traditional nail extensions, ensuring your nails remain beautiful and healthy.',
            price: '₱1,000.00'
        },
        'container-pinterest-inspo': {
            image: 'img/pinterest-inspo.jpg',
            alt: 'Pinterest Inspo',
            title: 'Customized Pinterest Inspo',
            description: 'Bring your dream nails to life with our Customized Pinterest Inspo service. Whether you have a specific design in mind or need help choosing, our talented nail artists will create unique and trendy designs tailored to your personal style.',
            price: '₱1,500.00'
        },
        'container-elite-press-nails': {
            image: 'img/elite-press-nails.jpg',
            alt: 'Elite Press on Nails',
            title: 'Elite Press on Nails',
            description: 'Bring your dream nails to life with our Customized Pinterest Inspo service. Whether you have a specific design in mind or need help choosing, our talented nail artists will create unique and trendy designs tailored to your personal style.',
            price: '₱1,500.00'
        },
        'container-russian-manicure': {
            image: 'img/russian-manicure.jpg',
            alt: 'Russian Manicure + BIAP',
            title: 'Russian Manicure + BIAP',
            description: 'Bring your dream nails to life with our Customized Pinterest Inspo service. Whether you have a specific design in mind or need help choosing, our talented nail artists will create unique and trendy designs tailored to your personal style.',
            price: '₱1,500.00'
        }
    };

    var updatedContent = {
        'container-elite-gelpolish': {
            image: 'img/business-logo.jpg',
            alt: 'Elite LAGDAI Gel Polish',
            title: 'Elite LAGDAI Gel Polish Price Guide',
            description: 'Experience the ultimate in nail care with our Elite LAGDAI Gel Polish. Pricing varies based on the following options:\n' +
                         '• Basic Application: ₱800.00\n' +
                         '• With Nail Art: ₱1,000.00\n' +
                         '• With French Tips or Additional Designs: ₱1,200.00',
            price: '₱1,000.00' // Set a default or most common price
        },
        'container-softgel-extension': {
            image: 'img/business-logo.jpg',
            alt: 'Softgel Extension',
            title: 'Softgel Extension Price Guide',
            description: 'Get the perfect blend of flexibility and durability with our Softgel Extensions. Prices vary based on:\n' +
                         '• Standard Set: ₱1,000.00\n' +
                         '• Longer Extensions or Custom Shapes: ₱1,300.00\n' +
                         '• With Additional Nail Art: ₱1,500.00',
            price: '₱1,200.00' // Set a default or most common price
        },
        'container-pinterest-inspo': {
            image: 'img/business-logo.jpg',
            alt: 'Customized Pinterest Inspo',
            title: 'Customized Pinterest Inspo Price Guide',
            description: 'Bring your dream nails to life with our Customized Pinterest Inspo service. Prices vary based on:\n' +
                         '• Basic Customization: ₱1,500.00\n' +
                         '• Complex Designs with Multiple Features: ₱2,000.00\n' +
                         '• High-End Custom Designs or Premium Materials: ₱2,500.00',
            price: '₱1,800.00' // Set a default or most common price
        },
        'container-elite-press-nails': {
            image: 'img/business-logo.jpg',
            alt: 'Elite Press on Nails',
            title: 'Elite Press on Nails Price Guide',
            description: 'Achieve salon-quality nails quickly with our Elite Press on Nails. Prices vary based on customization:\n' +
                         '• Standard Set: ₱1,500.00\n' +
                         '• Customized Designs: ₱1,800.00\n' +
                         '• Special Editions or Premium Materials: ₱2,000.00',
            price: '₱1,500.00' // Set a default or most common price
        },
        'container-russian-manicure': {
            image: 'img/business-logo.jpg',
            alt: 'Russian Manicure + BIAP',
            title: 'Russian Manicure + BIAP Price Guide',
            description: 'Experience our precise Russian Manicure with BIAP treatment. Prices vary based on additional services:\n' +
                         '• Basic Russian Manicure: ₱1,500.00\n' +
                         '• Add BIAP Treatment: ₱1,700.00\n' +
                         '• Full Package with Nail Strengthening Treatment: ₱2,000.00',
            price: '₱1,500.00' // Set a default or most common price
        }
    };

    // Get the current state of the container
    var currentState = container.getAttribute('data-state');

    // Toggle content based on the current state
    var content;
    if (currentState === 'original') {
        content = updatedContent[containerId];
        container.setAttribute('data-state', 'updated');
    } else {
        content = originalContent[containerId];
        container.setAttribute('data-state', 'original');
    }

    // Check if content is defined for the given container
    if (!content) {
        console.error("Content for container with ID '" + containerId + "' is not defined.");
        return;
    }

    // Update the content based on the currentContent
    image.src = content.image;
    image.alt = content.alt;
    title.innerText = content.title;
    description.innerText = content.description;
    priceTag.innerText = content.price;
}
