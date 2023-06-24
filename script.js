// Determine the current week number - aligns to ISO 8601 standards

function getWeekNumber(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const daysOffset = (oneJan.getDay() + 6) % 7; // Adjust for week starting on Monday
    const firstMonday = new Date(oneJan.getFullYear(), 0, 1 + daysOffset);
    const weekNumber = Math.floor(((date - firstMonday) / 86400000) / 7) + 1;
    return weekNumber;
}

// Page auto-updates the current week when loaded

document.addEventListener('DOMContentLoaded', () => {
    const currentWeek = getWeekNumber(new Date());

// Allows for testing other weeks (comment in the line below, comment out the line above)
   // const currentWeek = 26;

// Select bin images
    const binImages = document.querySelectorAll('.binimage');

// Check if current week number is even (the blue bin is collected on even weeks, the others are collected on odd weeks)
    const isEvenWeek = currentWeek % 2 === 0;

// Retrieve the IDs of the bin images
    binImages.forEach(binImage => {
        const binId = binImage.id;

// On even weeks, display images which are not the blue bin.  On odd weeks, display the image of the blue bin 
    if ((isEvenWeek && binId !== 'blueBin') || (!isEvenWeek && binId === 'blueBin')) {
      binImage.style.display = 'block';
    } else {
      binImage.style.display = 'none';  // not strictly necessary
    }
  });
});


