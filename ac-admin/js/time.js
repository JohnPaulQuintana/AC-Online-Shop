
  function updateDateTime() {
    var datetimeElementDash = document.getElementById('datetime-dashboard');
    var datetimeElementHome = document.getElementById('datetime-home');
    var datetimeElementShop = document.getElementById('datetime-shop');
    var currentTime = new Date();
    var options = {
      timeZone: 'Asia/Manila',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
      hour: 'numeric',
      minute: 'numeric',
      second: 'numeric'
    };
    var datetimeString = currentTime.toLocaleString('en-US', options);
  
    // Update the datetime element with the current date and time
    datetimeElementDash.textContent = datetimeString;
    datetimeElementHome.textContent = datetimeString;
    datetimeElementShop.textContent = datetimeString;
  }
  
  // Call updateDateTime function initially to display the current date and time
  updateDateTime();
  
  // Update the date and time every second
  setInterval(updateDateTime, 1000);
  