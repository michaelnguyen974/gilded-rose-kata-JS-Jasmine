class NormalItem {
  constructor(sellIn, quality) {
    this.sellIn = sellIn
    this.quality = quality
  }

  updateQuality() {
    if (this.quality < 50 && this.sellIn <= 0) {
      this.quality -= 2
    }
  }
}

module.exports = {
  NormalItem
}