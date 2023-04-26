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
      let filteredGoods = this.#goods.filter(good => good.available && this.filter.test(good.name));
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

  export class BasketGood extends Good {
    constructor(good, amount) {
      super(good.id, good.name, good.description, good.sizes, good.price, good.available);
      this.amount = amount;
    }
  }

  export class Basket {
    #goods = [];
  
    get totalAmount() {
      return this.#goods.reduce((total, good) => total + good.amount, 0);
    }
  
    get totalSum() {
      return this.#goods.reduce((total, good) => total + good.amount * good.price, 0);
    }
  
    add(good, amount) {
      const basketGood = this.#goods.find((basketGood) => basketGood.id === good.id);
      if (basketGood) {
        basketGood.amount += amount;
      } else {
        this.#goods.push(new BasketGood(good, amount));
      }
    }
  
    remove(good, amount) {
      const basketGood = this.#goods.find((basketGood) => basketGood.id === good.id);
      if (basketGood) {
        basketGood.amount -= amount;
        if (basketGood.amount <= 0) {
          this.#goods.splice(this.#goods.indexOf(basketGood), 1);
        }
      }
    }
  
    clear() {
      this.#goods = [];
    }
  
    removeUnavailable() {
      this.#goods = this.#goods.filter((basketGood) => basketGood.available);
    }
  }