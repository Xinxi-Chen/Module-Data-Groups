function createLookup(queryArray) {
  const lookup = {};

  for (const pair of queryArray) {
    const key = pair[0];
    const value = pair[1];
    
    lookup[key] = value;
  }
  return lookup;
}

module.exports = createLookup;

