/**
 * @param preferences - an array of integers. Indices of people, whom they love
 * @returns number of love triangles
 */
module.exports = function getLoveTrianglesCount(preferences = []) {
    let triangles = 0,
        length = preferences.length;

    for (let i = 0; i < length; i++) {
        const spichonee1 = preferences[i],
            spichonee2 = preferences[spichonee1-1],
            spichonee3 = preferences[spichonee2-1];

        if (spichonee3 === i+1 && spichonee1 !== spichonee2) {
            triangles++;
            preferences[i] = null;
        }
    }
    return triangles;
};
