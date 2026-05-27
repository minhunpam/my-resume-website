// Education details stuff
const detailsBtns = document.querySelectorAll(".details-btn");
const educationModal = document.querySelector("#education-modal");
const closeBtn = document.querySelector(".close-btn");
const educationModalBody = document.querySelector("#education-modal-body");

const educationDetails = {
  "tu-graz": 
  `
    <h3>Education Details</h3>

    <p><strong>Institution:</strong> Graz University of Technology</p>

    <p><strong>Degree:</strong> Bachelor of Computer Science</p>

    <p><strong>Period:</strong> 2024 - present</p>

    <p><strong>Relevant courses:</strong></p>

    <ul>
      <li>Operating System</li>
      <li>Algorithms and Data Structures</li>
      <li>Object-Oriented Programming</li>
      <li>System-Level Programming</li>
    </ul>

    <p>
      <a href="files/tu-graz-transcript.pdf" class="certificate-btn" target="_blank">
        Open my latest transcript of records
      </a>
    </p>
  `,

  "vguh": 
  `
    <h3>Education Details</h3>

    <p><strong>Institution:</strong> Vorstudientlehrgang der Grazer Universitäten und Hochschulen</p>

    <p><strong>Graduation Year:</strong> 2024</p>

    <p><strong>Final results:</strong></p>

    <ul>
      <li>German: <b>3</b> <a href="#" class="certificate-btn" data-image="images/vguh_german.jpeg">Certificate</a></li>
      <li>Chemistry: <b>3</b> <a href="#" class="certificate-btn" data-image="images/vguh_chemistry.jpeg">Certificate</a></li>
      <li>Mathematics: <b>2</b> <a href="#" class="certificate-btn" data-image="images/vguh_mathematics.jpeg">Certificate</a></li>
      <li>Physics: <b>2</b> <a href="#" class="certificate-btn" data-image="images/vguh_physics.jpeg">Certificate</a></li>
      <li>English: <b>1</b> <a href="#" class="certificate-btn" data-image="images/vguh_english.jpeg">Certificate</a></li>
    </ul>
  `,

  "high-school":
  `
    <h3>Education Details</h3>

    <p><strong>Institution:</strong> Luong The Vinh Private High School</p>

    <p><strong>Subject combination group (A1):</strong> Mathematics, Physics, English</p>

    <p><strong>Period:</strong> 2019 - 2022</p>

    <p><strong>University Entrance Exam Results:</strong></p>

    <ul>
      <li>Mathematics: <b>8.4 / 10 (2)</b></li>
      <li>Physics: <b>8 / 10 (2)</b></li>
      <li>English: <b>9.4 / 10 (1)</b></li>
    </ul>
  `
};


// Certificate links stuff
const certificateLinks = document.querySelectorAll(".certificate-btn");
const certificateModal = document.getElementById("certificate-modal");
const certificateImage = document.getElementById("certificate-image");
const closeCertificateModal = document.getElementById("close-certificate-modal");

detailsBtns.forEach((button) => {
  button.addEventListener('click', () => {
    const modalContent = educationDetails[button.name];

    if (!modalContent) {
      alert("Update this soon!");
      return;
    }

    educationModalBody.innerHTML = modalContent;
    educationModal.showModal();
    document.body.classList.add("modal-open");
  });
});

closeBtn.addEventListener('click', () => {
  educationModal.close();
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


