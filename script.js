// Education details stuff
const detailsBtns = document.querySelectorAll(".details-btn");
const educationModel = document.querySelector("#education-modal");
const closeBtn = document.querySelector(".close-btn");

// Certificate links stuff
const certificateLinks = document.querySelectorAll(".certificate-btn");
const certificateModal = document.getElementById("certificate-modal");
const certificateImage = document.getElementById("certificate-image");
const closeCertificateModal = document.getElementById("close-certificate-modal");

detailsBtns.forEach((button) => {
    button.addEventListener('click', () => {
    if (button.name === "vguh") {
      educationModel.showModal();
      document.body.classList.add("modal-open");
    }
    else {
      alert("Update this soon!");
    }
  });
});

closeBtn.addEventListener('click', () => {
  educationModel.close();
  document.body.classList.remove("modal-open");
});

certificateLinks.forEach((link) => {
  link.addEventListener("click", function(event) {
    event.preventDefault();

    const imagePath = this.getAttribute("data-image");

    certificateImage.src = imagePath;
    certificateModal.showModal();
    document.body.classList.add("model-open");
  });
});

closeCertificateModal.addEventListener("click", function () {
    certificateModal.close();
    document.body.classList.remove("modal-open");
  });

  certificateModal.addEventListener("click", function (event) {
    if (event.target === certificateModal) {
      certificateModal.close();
      document.body.classList.remove("modal-open");
    }
  });


