class AgedBrie {
  constructor(sellIn, quality) {
    this.name = 'Aged Brie'
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.quality < 50 && !this.sellIn > 0) {
      this.quality += 2
    }
    else if (this.quality < 50 && this.sellIn > 0) {
      this.quality += 1
    }
    else {
      this.quality += 0
    }
  }


}

module.exports = {
  AgedBrie
}