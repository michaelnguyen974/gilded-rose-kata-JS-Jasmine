// var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
var shop;
  beforeEach( () => {
    shop = new Shop
  })
  describe("Aged Brie", () => {

    it("looks for aged brie in Item object via its property name", function() {
      const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      const items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("Aged brie will increase quality when SellIn date is reached", () => {
      var item = [new Item("Aged Brie", 0, 0)]
      const gildedRose = new Shop(item);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2)
    })

    it("Aged Brie will increase in quality by 1 when SellIn date is a positive integer", () => {
      var item = [new Item("Aged Brie", 1, 2)]
      const gildedRose = new Shop(item);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3)
    })
    
    it("Aged Brie will increase in quality when the SellIn date has gone down to 0", () => {
      var item = [new Item("Aged Brie", 0, 2)]
      const gildedRose = new Shop(item);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(4)
    })

  })
  
  describe("Any type of food", () => {
    it("any food that has a SellIn of 0 apart from aged brie will have it's quality subtracted by 2", () => {
      var item = [new Item("Could be any food", 0, 9)]
      const gildedRose = new Shop(item);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(7)
    })
    it("any food that has a positive integer SellIn date will have it's quality decrease by 1", () => {
      var item = [new Item("Could be any food", 1, 40)]
      const gildedRose = new Shop(item);
      const items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(39)
    })
  })
  
});
