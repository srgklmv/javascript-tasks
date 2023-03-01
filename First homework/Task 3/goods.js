export default class Goods {
  constructor(name = "main", price=0, quantity=0, description="") {
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.description = description;
  }

  sortGoods(request, goods) {
    let conditions = request.split("&").map(item => item.split("-"));
    for (let condition of conditions) {
      switch (condition[0]){
        case "name":
          if (condition[1] == "contains") {
            goods = this.#nameContains(condition, goods);
          } else if (condition[1] == "starts") {
            goods = this.#nameStarts(condition, goods);
          } else if (condition[1] == "ends") {
            goods = this.#nameEnds(condition, goods);
          }
          break;
        case "description":
          if (condition[1] == "contains") {
            goods = this.#descriptionContains(condition, goods);
          } else if (condition[1] == "starts") {
            goods = this.#descriptionStarts(condition, goods);
          } else if (condition[1] == "ends") {
            goods = this.#descriptionEnds(condition, goods);
          }
          break;
        case "price":
          if (condition[1].includes(">=")) {
            goods = this.#priceMoreAndEqual(condition, goods);
          } else if (condition[1].includes("<=")) {
            goods = this.#priceLessAndEqual(condition, goods);
          } else if (condition[1].includes(">")) {
            goods = this.#priceMore(condition, goods);
          } else if (condition[1].includes("<")) {
            goods = this.#priceLess(condition, goods);
          } else if (condition[1].includes("=")) {
            goods = this.#priceEqual(condition, goods);
          }
          break;
        case "quantity":
          if (condition[1].includes(">=")) {
            goods = this.#quantityMoreAndEqual(condition, goods);
          } else if (condition[1].includes("<=")) {
            goods = this.#quantityLessAndEqual(condition, goods);
          } else if (condition[1].includes(">")) {
            goods = this.#quantityMore(condition, goods);
          } else if (condition[1].includes("<")) {
            goods = this.#quantityLess(condition, goods);
          } else if (condition[1].includes("=")) {
            goods = this.#quantityEqual(condition, goods);
          }
          break;
      }
    }
    return goods;
  }

  #nameContains(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.name.includes(condition[2])) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #descriptionContains(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.description.includes(condition[2])) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #nameStarts(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.name.startsWith(condition[2])) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #descriptionStarts(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.description.startsWith(condition[2])) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #nameEnds(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.name.endsWith(condition[2])) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #descriptionEnds(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.description.endsWith(condition[2])) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #priceMoreAndEqual(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.price >= Number(condition[1].slice(2))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #quantityMoreAndEqual(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.quantity >= Number(condition[1].slice(2))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #priceLessAndEqual(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.price <= Number(condition[1].slice(2))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #quantityLessAndEqual(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.quantity <= Number(condition[1].slice(2))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #priceLess(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.price < Number(condition[1].slice(1))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #quantityLess(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.quantity < Number(condition[1].slice(1))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #priceMore(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.price > Number(condition[1].slice(1))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #quantityMore(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.quantity > Number(condition[1].slice(1))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #priceEqual(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.price == Number(condition[1].slice(1))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }

  #quantityEqual(condition, goods) {
    let sortedGoods = [];
    for (let good of goods) {
      if (good.quantity == Number(condition[1].slice(1))) {
        sortedGoods.push(good);
      }
    }
    return sortedGoods;
  }
}
