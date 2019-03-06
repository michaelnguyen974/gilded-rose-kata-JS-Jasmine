class AgedBrie {
  constructor(sellIn, quality) {
    this.name = 'Aged Brie'
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.quality < 50 && this.sellIn <= 0) {
      this.quality += 2
      this.updateSellIn()
    }
    else if (this.quality < 50 && this.sellIn > 0) {
      this.quality += 1
      this.updateSellIn()
    }
    else {
      this.quality += 0
      this.updateSellIn()
    }
  }

  updateSellIn() {
    this.sellIn -= 1
  }

}

module.exports = {
  AgedBrie
}