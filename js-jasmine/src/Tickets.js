class Tickets {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.sellIn === 0) {
      this.quality = 0
    } else if (this.sellIn < 11 && this.quality < 50) {
      this.quality += 1
    }
  }
}

module.exports = {
  Tickets
}