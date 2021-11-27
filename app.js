function omikuji(){
var result = ["大吉", "中吉", "小吉", "吉", "凶", "大凶"];
const min = 0;
const max = omikuji.length - 1;

const number = Math.floor(Math.random() * (max - min + 1) + min);
console.log(result[number]);
}

omikuji();