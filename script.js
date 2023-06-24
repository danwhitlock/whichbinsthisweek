document.addEventListener('DOMContentLoaded', () => {
    const currentWeek = getWeekNumber(new Date());
    const binImages = document.querySelectorAll('.binimage');
    const isEvenWeek = currentWeek % 2 === 0;
  
    binImages.forEach(binImage => {
        const binId = binImage.id;
        binImage.style.display = (isEvenWeek && binId !== 'blueBin') || (!isEvenWeek && binId === 'blueBin')
            ? 'block'
            : 'none';
    });
});

function getWeekNumber(date) {
    const oneJan = new Date(date.getFullYear(), 0, 1);
    const daysOffset = (oneJan.getDay() + 6) % 7; // Adjust for week starting on Monday
    const firstMonday = new Date(oneJan.getFullYear(), 0, 1 + daysOffset);
    const weekNumber = Math.floor(((date - firstMonday) / 86400000) / 7) + 1;
    return weekNumber;
}
