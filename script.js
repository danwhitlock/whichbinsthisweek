const bins = ['Green Bin', 'Blue Bin', 'Brown Bin'];

document.addEventListener('DOMContentLoaded', () => {
    const currentWeek = getWeek(new Date());
    const binIndex = (currentWeek - 1) % bins.length;
    const currentBin = bins[binIndex];

    const binImages = document.querySelectorAll('.binimage');
    binImages.forEach((binImage, index) => {
        if (index === binIndex) {
            binImage.style.display = 'block';
        } else {
            binImage.style.display = 'none';
        }
    });

    const collectionInfo = document.getElementById('collection-info');
    collectionInfo.textContent = `This week, please put out your ${currentBin}.`;
});

function getWeekNumber(date) {
    const onejan = new Date(date.getFullYear(), 0, 1);
    return Math.ceil(((date - onejan) / 86400000 + onejan.getDay() + 1) / 7);
};