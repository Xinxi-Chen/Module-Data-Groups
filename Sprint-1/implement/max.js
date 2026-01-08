function findMax(elements) {
    const numericalElements = elements.filter(element => {
        return typeof element === 'number' && !Number.isNaN(element);
    });
    if (numericalElements.length === 0) {
        return Infinity;
    }
    return Math.max(...numericalElements);
}

module.exports = findMax;
