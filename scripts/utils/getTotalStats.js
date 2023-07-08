export const getTotalStats = (stats) => {
    let totalStats = 0;
    stats.forEach(stat => {
        totalStats = totalStats + stat.base;
    })

    return parseInt(totalStats);
}