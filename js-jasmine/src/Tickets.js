class Tickets {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.sellIn === 0) {
      this.quality = 0
    } else if (this.sellIn >= 1 && this.sellIn <= 5 && this.quality < 50) {
      this.quality += 3
    } else if (this.sellIn >= 6 && this.sellIn <= 10 && this.quality < 50) {
      this.quality += 2
    } else if (this.sellIn > 10 && this.quality < 50) {
      this.quality += 1
    } else {
      this.quality = 50
    }
    this.sellIn -= 1
  }
}

module.exports = {
  Tickets
}