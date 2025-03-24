'use strict';

console.log("Script loaded successfully!");


// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// // sidebar toggle functionality for mobile
// sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });




// JavaScript to toggle the dropdown and set the selected category
document.addEventListener("DOMContentLoaded", function() {
  const selectButton = document.querySelector('[data-select]');
  const selectList = document.querySelector('.select-list');
  const selectValue = document.querySelector('[data-selecct-value]');
  
  // Toggle the dropdown visibility when the button is clicked
  selectButton.addEventListener('click', function() {
    selectList.classList.toggle('open');
  });

  // Set the selected category when an item is clicked
  const selectItems = document.querySelectorAll('[data-select-item]');
  selectItems.forEach(item => {
    item.addEventListener('click', function() {
      selectValue.textContent = this.textContent; // Update the selected value
      selectList.classList.remove('open'); // Close the dropdown
    });
  });
  
  // Close dropdown if clicked outside
  document.addEventListener('click', function(e) {
    if (!selectButton.contains(e.target) && !selectList.contains(e.target)) {
      selectList.classList.remove('open');
    }
  });
});

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);

  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {

  for (let i = 0; i < filterItems.length; i++) {

    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }

  }

}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {

  filterBtn[i].addEventListener("click", function () {

    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;

  });

}



// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {

    // check form validation
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }

  });
}



// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {

    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }

  });
}

// Function to open the modal
function openModal() {
  const modal = document.getElementById("myModal");
  const modalImage = document.getElementById("modalImage");
  const modalBtn = document.getElementById("myBtn");

  // Get the image URL from the data attribute of the button
  const imageUrl = modalBtn.dataset.imageUrl;

  // Set the image source in the modal
  if (modalImage) {
    modalImage.src = imageUrl;
  }

  if (modal) {
    modal.style.display = "block";
  }
}

// Function to close the modal
function closeModal() {
  const modal = document.getElementById("myModal");
  if (modal) {
    modal.style.display = "none";
  }
}

// Attach event listener to open modal button
const openModalBtn = document.getElementById("myBtn");
if (openModalBtn) {
  openModalBtn.addEventListener("click", openModal);
}

// Attach event listener to close modal button
const closeModalBtn = document.getElementById("closeModalBtn");
if (closeModalBtn) {
  closeModalBtn.addEventListener("click", closeModal);
}

const downloadBtn = document.getElementById('downloadBtn');

  // downloadBtn.addEventListener('click', function() {
  //   const fileUrl = 'https://github.com/umersanii/YT-Downloader/releases/download/Pre-Release/YT.Downloader.Setup.exe'; // Replace this with the actual URL of your hosted file

  //   // Create a link element
  //   const link = document.createElement('a');
  //   link.href = fileUrl;

  //   // Set the download attribute to force download behavior
  //   link.setAttribute('download', 'YT.Downloader.Setup.exe'); // Replace 'software.zip' with the desired file name

  //   // Append the link to the document and trigger the click event
  //   document.body.appendChild(link);
  //   link.click();

  //   // Clean up: Remove the link from the document
  //   document.body.removeChild(link);
  // });


document.addEventListener("DOMContentLoaded", () => {
  const sidebarPlaceholder = document.getElementById("sidebar-placeholder");

  if (!sidebarPlaceholder) {
    console.error("Sidebar placeholder not found!");
    return;
  }

  fetch("../pages/sidebar.html") // Adjust this path as needed
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to fetch sidebar. HTTP Status: ${response.status}`);
      }
      return response.text();
    })
    .then(data => {
      sidebarPlaceholder.innerHTML = data;
    })
    .catch(error => {
      console.error("Error loading sidebar:", error);
      sidebarPlaceholder.innerHTML = `
        <div class="error-message">
          <p>Sidebar failed to load. Please try again later.</p>
        </div>
      `;
    });
});
