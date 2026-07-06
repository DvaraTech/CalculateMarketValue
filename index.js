function calculatePremium(data) {
    let premium = 0;

    if (data.age > 5) premium += 500;
    if (data.weight > 300) premium += 1000;

    return { premium };
}

module.exports = {
    calculatePremium
};