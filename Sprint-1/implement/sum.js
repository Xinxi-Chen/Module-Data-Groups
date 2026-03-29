function sum(elements) {
    const numericalElements = elements.filter(element => {
        return typeof element === 'number' && !Number.isNaN(element);
    });
    return numericalElements.reduce((acc, curr) => {
        return acc + curr;
    }, 0);
}


module.exports = sum;
