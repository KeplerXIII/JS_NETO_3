import {Basket, Good, GoodsList} from "./classes.mjs";

const goodsList = new GoodsList(/t-shirt/i, true, false);
const basket1 = new Basket();

const good1 = new Good(1, 'T-shirt', 'Comfortable and stylish cotton t-shirt', ['s', 'l', 'm'], 100, true);
const good2 = new Good(2, 'Sneakers', 'Sporty and fashionable sneakers', ['s', 'l', 'm'], 200, false);
const good3 = new Good(3, 'Jeans', 'Stylish and durable denim jeans', ['s', 'l', 'm'], 150, true);
const good4 = new Good(4, 'Backpack', 'Functional and stylish backpack for everyday use', ['s', 'l', 'm'], 80, false);
const good5 = new Good(5, 'Watch', 'Elegant and reliable wristwatch', ['s', 'l', 'm'], 300, true);

goodsList.add(good1);
goodsList.add(good2);
goodsList.add(good3);
goodsList.add(good4);
goodsList.add(good5);


basket1.add(good1, 2)
basket1.add(good2, 2)

console.log(`\nКорзина\nВсего: ${basket1.totalAmount} На сумму:${basket1.totalSum}`)

basket1.remove(good1, 1)
console.log(`\nКорзина после удаления одного товара\nВсего: ${basket1.totalAmount} На сумму:${basket1.totalSum}`)

basket1.removeUnavailable()
console.log(`\nКорзина после удаления недоступного товара\nВсего: ${basket1.totalAmount} На сумму:${basket1.totalSum}`)

console.log(`\nВ каталоге по фильтру: ${goodsList.filter}`)
console.log(goodsList.list)

goodsList.filter = /jeans/i
console.log(`\nВ каталоге по фильтру: ${goodsList.filter}`)
console.log(goodsList.list)

basket1.clear
