class Shop {
  constructor(items=[]){
    this.items = items;
  }

  addToItemsArray(item) {
      this.items.push(item)
  }

  updateAgedBrie() {
    if (this.increaseBrieQualityByOne() === true) {
      return this.items[0].quality += 1
    }
  };

  increaseBrieQualityByOne() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name === 'Aged Brie' && this.items[i].sellIn > 0 && this.items[i].quality < 50) {
        return true
      } else {
        return this.items
      } 
    }; 
  }

  updateQuality() {
    for (var i = 0; i < this.items.length; i++) {
      if (this.items[i].name != 'Aged Brie' && this.items[i].name != 'tickets') {
        if (this.items[i].quality > 0) {
          if (this.items[i].name != 'Sulfuras') {
            this.items[i].quality = this.items[i].quality - 1;
          }
        }
      } else {
        if (this.items[i].quality < 50) {
          this.items[i].quality = this.items[i].quality + 1;
          if (this.items[i].name == 'tickets') {
            if (this.items[i].sellIn < 11) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
            if (this.items[i].sellIn < 6) {
              if (this.items[i].quality < 50) {
                this.items[i].quality = this.items[i].quality + 1;
              }
            }
          }
        }
      }
      if (this.items[i].name != 'Sulfuras') {
        this.items[i].sellIn = this.items[i].sellIn - 1;
      }
      if (this.items[i].sellIn < 0) {
        if (this.items[i].name != 'Aged Brie') {
          if (this.items[i].name != 'tickets') {
            if (this.items[i].quality > 0) {
              if (this.items[i].name != 'Sulfuras') {
                this.items[i].quality = this.items[i].quality - 1;
              }
            }
          } else {
            this.items[i].quality = this.items[i].quality - this.items[i].quality;
          }
        } else {
          if (this.items[i].quality < 50) {
            this.items[i].quality = this.items[i].quality + 1;
          }
        }
      }
    }

    return this.items;
  }
}
module.exports = {
  Shop
}
