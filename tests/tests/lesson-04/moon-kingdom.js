 // Bài 1: Tạo hàm createCharacters
 function createCharacters(){
//Khai báo mảng các object: characters có các thuộc tính: name, level, health.
    const characters = [ 
        {name: "Minh Duc",level: 10, health: 99},
        {name: "Minh Duc 1",level: 11, health: 1000},
        {name: "Minh Duc 2",level: 12, health: 2000},
        {name: "Minh Duc 3",level: 13, health: 3000},



    ];
// tạo hàm mới từ hàm cũ thông qua hàm map()
    const charactersPowerUp = characters.map(char => ({
        
            name : char.name.toUpperCase(), 
            level : char.level * 2,        
            health : char.health * 3 
        
    }));
    console.log(charactersPowerUp);
//Sử dụng hàm filter để lọc ra các phần tử có chỉ số health > 1000. Đặt tên mảng mới lọc được này là “possibleWinners”
    const possibleWinners = characters.filter(char => char.health > 1000);

    return {
        charactersPowerUp,
        possibleWinners
    }
}
// in ra hàm mới
console.log(createCharacters());   

//-----------------------------------------------------------------

// Bài 2: Tạo hàm printLeaderboard:
function printLeaderboard(){
//Nhận vào tham số: players là mảng các object: [{name: "Mario", score: 1000}]

  const players =[
    {name: "Mario", score: 1000},
    {name: "Luci", score: 54},
    {name: "Sarah", score: 656},
    {name: "John", score: 4342},
    {name: "Adam", score: 7676},
    {name: "Susan", score: 5454},
    {name: "Taylor", score: 323},
    {name: "Sam", score: 686},
    {name: "Orima", score: 757}
    ];

    players.sort((a, b) => b.score - a.score);

    console.log(players);
}

printLeaderboard();







