function getRandomColor() {
    const randomNumberArr = [];
    for (let i = 0; i < 3; i++) {
        const randomNumber = Math.floor(Math.random() * 255);
        randomNumberArr.push(randomNumber);
    }
    return randomNumberArr;
}

export { getRandomColor };