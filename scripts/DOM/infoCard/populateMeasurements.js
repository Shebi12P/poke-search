export const populateMeasurements = (height, weight) => {
    const weightElement = document.querySelector(".weight-value");
    const heightElement = document.querySelector(".height-value");

    const heightInMeters = (height/10).toFixed(2);
    const weightInMeters = (weight/10).toFixed(2);
    heightElement.innerText = `${heightInMeters} m`;
    weightElement.innerText = `${weightInMeters} kg`;
}