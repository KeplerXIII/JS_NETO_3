export class Good {

    constructor (id, name, description, sizes, price, available) {
        this.id = id
        this.name = name
        this.description = description
        this.sizes = sizes
        this.price = price
        this.available = available
    }
    
    setAvailable(available) {
        this.available = available
    }
}

export class GoodsList {
    #goods;

    constructor(filter = '', sortPrice = false, sortDir = true) {
      this.#goods = [];
      this.filter = filter;
      this.sortPrice = sortPrice;
      this.sortDir = sortDir;
    }
  
    get list() {
      let filteredGoods = this.#goods.filter(good => good.available && good.name.match(this.filter));
      if (this.sortPrice) {
        filteredGoods.sort((a, b) => {
          if (this.sortDir) {
            return a.price - b.price;
          } else {
            return b.price - a.price;
          }
        });
      }
      return filteredGoods;
    }
  
    add(good) {
      this.#goods.push(good);
    }
  
    remove(id) {
      let index = this.#goods.findIndex(good => good.id === id);
      if (index !== -1) {
        this.#goods.splice(index, 1);
      }
    }
  }