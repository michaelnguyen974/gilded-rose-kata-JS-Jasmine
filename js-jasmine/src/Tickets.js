class Tickets {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    var sellIn = this.sellIn
    if (sellIn === 0 && this.quality <= 50) {
      this.quality = 0
    } else if (sellIn >= 1 && sellIn <= 5 && this.quality < 50) {
      this.quality += 3
    } else if (sellIn >= 6 && sellIn <= 10 && this.quality <= 50) {
      this.quality += 2
    } else if (sellIn > 10 && this.quality < 50) {
      this.quality += 1
    }
  }
}

module.exports = {
  Tickets
}