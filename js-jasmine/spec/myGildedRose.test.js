const { Item } = require('../src/item.js')
const { Shop } = require('../src/gilded_rose.js')

describe("Aged Brie", () => {

  beforeEach( () => {
        shop = new Shop
  })

  describe("increase quality by 1", () => { 
    test("Aged Brie will increase in quality by 1 when SellIn date is a positive integer", () => {
      var item = [new Item("Aged Brie", 1, 2)]
      var shop = new Shop(item);
      shop.updateAgedBrie();
      var all_items = shop.items
      expect(all_items[0].quality).toEqual(3);
    })
  })

})
  