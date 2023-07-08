import { getTotalStats } from "../../utils/getTotalStats.js";

export const populateStats = (stats) => {
    let totalStats = getTotalStats(stats);

    stats.forEach(stat => {
        const { name, base } = stat;
        
        const statElement = document.querySelector(`[data-stat="${name}"]`);
        const statValueEelment = statElement.querySelector(".stat-value");
        statValueEelment.textContent = base;

        const statSlider = statElement.querySelector(".stat-slider");
        const filledStatSlider = statSlider.querySelector(".filled-stat-slider");
        const filledStatSliderWidth = Math.floor(base/totalStats * 100);
        filledStatSlider.style.setProperty("--filled-stat-slider-width", `${filledStatSliderWidth}%`);

        const totalStatsElement = document.querySelector(".total-stats-value");
        totalStatsElement.textContent = `${totalStats}`;
    });
}