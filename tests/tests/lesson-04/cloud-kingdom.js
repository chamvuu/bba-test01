let playerName = "Mario";
let currentLives = 3;

const  level_1 = 25;
const level_2 = 30;
const level_3 = 45;

const totalCoin = level_1 + level_2 + level_3;
console.log(`Tổng coin của 3 level là: ${totalCoin}`);

const averageCoin = totalCoin % 3;
console.log(`Giá trị coin trung bình là: ${averageCoin}`);

console.log(`Số dư coin khi chia tổng cho 3 là: ${totalCoin % 3}`);