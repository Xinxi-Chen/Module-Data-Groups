function dedupe(arr) {
    return arr.filter((item, index) => {
        return arr.indexOf(item) === index;
    });
}
 
module.exports = dedupe;