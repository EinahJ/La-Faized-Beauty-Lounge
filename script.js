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
