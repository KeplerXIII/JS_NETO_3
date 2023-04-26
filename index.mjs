import {Good, GoodsList} from "./classes.mjs";

const good1 = new Good(1, 'T-shirt', 'Cotton T-shirt', ['S', 'M', 'L'], 20, true);
const good2 = new Good(2, 'Hoodie', 'Cotton Hoodie', ['S', 'M', 'L'], 40, true);
const good3 = new Good(3, 'Sweatpants', 'Cotton Sweatpants', ['S', 'M', 'L'], 30, false);
const goodsList = new GoodsList(/t-shirt/i, true, false);
goodsList.add(good1);
goodsList.add(good2);
goodsList.add(good3);


// console.log(goodsList.list)
goodsList.filter = /hood/i
console.log(goodsList.list)