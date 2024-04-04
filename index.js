document.addEventListener('DOMContentLoaded', function () {
  const cardForm = document.getElementById('cardForm');
  const modal = document.getElementById('modal');
  const certificateContent = document.getElementById('certificateContent');
  const closeModal = document.querySelector('.close');

  // Hide the modal when page first loads
  modal.style.display = 'none';

  cardForm.addEventListener('submit', function (e) {
    e.preventDefault();

    // 🚨 Get input values - stores references in variables
    const studentNameInput = document.getElementById('studentName');
    const personalMessageInput = document.getElementById('personalMessage');
    const courseNameInput = document.getElementById('courseName'); 

    const studentName = studentNameInput.value;
    const personalMessage = personalMessageInput.value;
    const courseName = courseNameInput.value ? courseNameInput.value : "a course"; // Fallback to "a course" if no input

    if (studentName.trim() === '' || personalMessage.trim() === '') {
      alert('Please fill in all fields');
      return;
    }

    // 🚨 Generate certificate content dynamically - template literals(` content `)
    certificateContent.innerHTML = `
    <p><strong><h1>Certificate of Achievement</h1></strong></p>
    <p>this is to certify that</p>
    <h3>${studentName}</h3>
    <p>has almost completed the</p>
    <h3>${courseName}</h3>
    <p>with legendary perseverance and world-class bad-assery for never giving up</p>
    <img src="logo.png" width="700" height="200" alt="Certificate Image">
    <p>${personalMessage}</p>
    `;
  
    //  Display the modal - visible after the certificate content has been generated.
    modal.style.display = 'block';

    // Clear the form inputs
    studentNameInput.value = '';
    personalMessageInput.value = '';
    courseNameInput.value = '';
  });

  //  🚨 Close the modal when the close button is clicked
  closeModal.addEventListener('click', function () {
    modal.style.display = 'none'; 
  });
});

  
