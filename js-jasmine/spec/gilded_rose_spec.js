// var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
var shop;
  beforeEach( () => {
    shop = new Shop
  })
  describe("Aged Brie", () => {

    it("looks for aged brie in Item object via its property name", function() {
      var gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      var items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    it("Aged brie will increase quality when SellIn date is reached", () => {
      var item = [new Item("Aged Brie", 0, 0)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2)
    })

    it("Aged Brie will increase in quality by 1 when SellIn date is a positive integer", () => {
      var item = [new Item("Aged Brie", 1, 2)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3)
    })
    
    it("Aged Brie will increase in quality when the SellIn date has gone down to 0", () => {
      var item = [new Item("Aged Brie", 0, 2)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(4)
    })

  })
  
  describe("Any type of food", () => {
    it("any food that has a SellIn of 0 apart from aged brie will have it's quality subtracted by 2", () => {
      var item = [new Item("Could be any food", 0, 9)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(7)
    })
    it("any food that has a positive integer SellIn date will have it's quality decrease by 1", () => {
      var item = [new Item("Could be any food", 1, 40)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(39)
    })
  })

  describe('Aged Blue Cheese', () => {
    it("Aged Blue Cheese quality goes to 0 when SellIn equals 0", () => {
      var item = [new Item("Aged Blue Cheese", 0, 50)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    })

    it('Aged blue cheese quality increases by 3 if SellIn is less than 6', () => {
      var item = [new Item("Aged Blue Cheese", 5, 30)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(33);
    })

    it('Aged blue cheese quality increases by 2 if sellIn date is greater than 5', () => {
      var item = [new Item("Aged Blue Cheese", 6, 30)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(32);
    })
  })
  
});
