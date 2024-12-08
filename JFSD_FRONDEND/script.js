let container = document.getElementById('container')

toggle = () => {
	container.classList.toggle('sign-in')
	container.classList.toggle('sign-up')
}
function toggleMenu() {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active');
  }
  function toggleMenu() {
	const navLinks = document.querySelector('.nav-links');
	navLinks.classList.toggle('active');
	function showRegistrationForm() {
		const buttonsGroup = document.getElementById('buttonsGroup');
		const registrationForm = document.getElementById('registrationForm');
		
		// Hide buttons and show form
		buttonsGroup.style.display = 'none';
		registrationForm.style.display = 'flex';
	  }
  
	  function showUpcomingEvents() {
		alert('Upcoming Events Section Coming Soon!');
	  }
  
	  function register() {
		const id = document.getElementById('id').value;
		const name = document.getElementById('name').value;
		const event = document.getElementById('event').value;
  
		if (id && name && event) {
		  alert(`Registration Successful!\n\nID: ${id}\nName: ${name}\nEvent: ${event}`);
		  location.reload(); // Reset after registration
		} else {
		  alert('Please fill out all fields.');
		}
	  }
  }
setTimeout(() => {
	container.classList.add('sign-in')
}, 200)