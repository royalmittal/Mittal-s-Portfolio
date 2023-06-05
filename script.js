// Function to toggle the navigation menu
function toggleMenu() {
	var menu = document.getElementById("nav-menu");
	menu.classList.toggle("show");
  }
  
  // Function to handle form submission
  function submitForm() {
	// Get form data
	var name = document.getElementById("name").value;
	var email = document.getElementById("email").value;
	var message = document.getElementById("message").value;
	
	// Validate form data
	if (name === "" || email === "" || message === "") {
	  alert("Please fill in all fields");
	  return;
	}
	
	// Create an object with the form data
	var formData = {
	  name: name,
	  email: email,
	  message: message
	};
	
	// TODO: Process the form data (e.g., send it to a server)
	
	// Reset form fields
	document.getElementById("name").value = "";
	document.getElementById("email").value = "";
	document.getElementById("message").value = "";
	
	alert("Form submitted successfully!");
  }
  
  // Add event listeners
  document.getElementById("toggle-btn").addEventListener("click", toggleMenu);
  document.getElementById("submit-btn").addEventListener("click", submitForm);

  
  // Vanilla JavaScript
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
	anchor.addEventListener('click', function (e) {
	  e.preventDefault();
  
	  document.querySelector(this.getAttribute('href')).scrollIntoView({
		behavior: 'smooth'
	  });
	});
  });
  