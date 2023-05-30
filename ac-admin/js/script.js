let arrow = document.querySelectorAll(".arrow");
for (var i = 0; i < arrow.length; i++) {
  arrow[i].addEventListener("click", (e)=>{
 let arrowParent = e.target.parentElement.parentElement;//selecting main parent of arrow
 arrowParent.classList.toggle("showMenu");
  });
}

let sidebar = document.querySelector(".sidebar");
let sidebarBtn = document.querySelector(".bx-menu");
console.log(sidebarBtn);
sidebarBtn.addEventListener("click", ()=>{
  sidebar.classList.toggle("close");
});



// Get all the links with the class "link_name"
const links = document.querySelectorAll('.link_name');
// Get all the sections
// const sections = document.querySelectorAll('section');
// Add click event listener to each link
links.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); // Prevent the default behavior of the link

    // Remove the "active-link" class from all links
    links.forEach(link => link.classList.remove('active-link'));
    // console.log(link)
    // Add the "active-link" class to the clicked link
    this.classList.add('active-link');
  });
});


// Get all the sections
const sections = document.querySelectorAll('section');

// Add click event listener to each section
// sections.forEach(section => {
//   section.addEventListener('click', function() {
//     // Get the value of the data-id attribute
//     const dataId = this.getAttribute('data-id');

//     // Loop through all sections and hide/remove the non-clicked sections
//     sections.forEach(sec => {
//       if (sec.getAttribute('data-id') !== dataId) {
//         // Hide or remove the non-clicked sections
//         sec.style.display = 'none'; // or sec.remove() to completely remove the element from the DOM
//       }
//     });
//   });
// });


// section controll
// / open a section function
function openSection(target) {
	const sections = document.querySelectorAll('.home-section');
	sections.forEach(section => {
		console.log('sections:'+ section.dataset.id+', '+target)
	  if (section.dataset.id == target) {
		section.style.display = 'block';
		// console.log(target)
	  } else {
		section.style.display = 'none';
	  }
	});
  }

