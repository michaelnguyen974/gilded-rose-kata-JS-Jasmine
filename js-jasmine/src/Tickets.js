class Tickets {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.sellIn === 0) {
      return this.quality = 0
    }
  }
}

module.exports = {
  Tickets
}