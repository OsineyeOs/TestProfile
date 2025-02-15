document.addEventListener('DOMContentLoaded', () => {
    const toggleBtn = document.getElementById('toggleDetails');
    const profileSection = document.getElementById('profile');
  
    // Start with details shown; clicking toggles hidden class on the portfolio section.
    let detailsVisible = true;
    
    toggleBtn.addEventListener('click', () => {
      detailsVisible = !detailsVisible;
      if (detailsVisible) {
        profileSection.classList.remove('hidden-details');
        toggleBtn.textContent = 'Hide Details';
      } else {
        profileSection.classList.add('hidden-details');
        toggleBtn.textContent = 'Show Details';
      }
    });
  });
  