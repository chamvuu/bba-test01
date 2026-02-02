//“Hãy đếm và in ra có bao nhiêu cặp số từ 1 tới 100 có tổng chia hết cho 17. Xem format ở hình dưới”.

function displayPairsDivisibleByK(number, divisor) {
// khai báo số cặp 'count' chia hết cho 17 và mảng chứa các cặp số đó
    let count = 0;
    let result = [];
    let total = 0;

    for (let i = 1; i <= number; i++) {
        for (let j = i + 1; j <= number; j++) {
            if ((i + j) % divisor === 0) {
                total = i + j;
                result.push(`(${i}, ${j}) = ${i + j}`);
                count++;
            }
        }
    }
// in mỗi cặp 1 dòng
    result.forEach(item => console.log(item));    
    console.log(`Tổng cộng: ${count} cặp.`);
}

displayPairsDivisibleByK(100, 17);