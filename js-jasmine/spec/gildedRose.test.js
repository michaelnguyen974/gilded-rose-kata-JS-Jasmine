const { Item } = require('../src/gilded_rose.js')
const { Shop } = require('../src/gilded_rose.js')

describe("Gilded Rose", function() {

  beforeEach( () => {
    shop = new Shop
  })
  describe("Aged Brie", () => {

    test("looks for aged brie in Item object via its property name", function() {
      var gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
      var items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Aged Brie");
    });

    test("Aged brie will increase quality by 2 when SellIn date is 0", () => {
      var item = [new Item("Aged Brie", 0, 0)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(2);
    })

    test("Aged Brie does not increase in quality when quality is already at the threshold of 50", () => {
      var item = [new Item("Aged Brie", 0, 50)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })

    test("Aged Brie will increase in quality by 1 when SellIn date is a positive integer", () => {
      var item = [new Item("Aged Brie", 1, 2)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(3);
    })

    test("Aged Brie sellIn decreases by 1 regardless of quality", () => {
      var item = [new Item("Aged Brie", 9, 0)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(8);
    })

  })
  
  describe("Any type of food", () => {

    test("looks for Could be any food in Item object via its property name", function() {
      var gildedRose = new Shop([ new Item("Could be any food", 0, 0) ]);
      var items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("Could be any food");
    });

    test("any food that has a positive integer SellIn date will have it's quality decrease by 1", () => {
      var item = [new Item("Could be any food", 50, 50)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(49);
    })

    test("any food that has a SellIn of 0 apart from aged brie will have it's quality subtracted by 2", () => {
      var item = [new Item("Could be any food", 0, 9)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(7);
    })

    test("any food sellIn decreases by 1 regardless of quality", () => {
      var item = [new Item("Could be any food", 9, 0)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(8);
    })
    
  })

  describe('tickets', () => {

    test("looks for tickets in Item object via its property name", function() {
      var gildedRose = new Shop([ new Item("tickets", 0, 0) ]);
      var items = gildedRose.updateQuality();
      expect(items[0].name).toEqual("tickets");
    });

    test("tickets quality goes to 0 when SellIn equals 0", () => {
      var item = [new Item("tickets", 0, 100)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(0);
    })

    test("tickets quality increases by 1 when sellIn <11, quality <50", () => {
      var item = [new Item("tickets", 10, 49)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(11);
    })

    test('tickets quality increases by 3 if SellIn is less than 6', () => {
      var item = [new Item("tickets", 5, 30)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(33);
    })

    test('tickets quality increases by 2 if sellIn date is greater than 5', () => {
      var item = [new Item("tickets", 6, 30)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(32);
    })

    test("tickets quality increases by 1 if SellIn is greater or equal to 11", () => {
      var item = [new Item("tickets", 11, 30)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(31);
    })

    test("ticket quality does not depreciate if quality >= 50 AND sellIn is a positive integer ", () => {
      var item = [new Item("tickets", 1, 50)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })

    test("tickets quality does not change when quality >= 50", () => {
      var item = [new Item("tickets", 50, 50)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(50);
    })

    test("tickets sellIn decreases by 1 regardless of quality", () => {
      var item = [new Item("tickets", 9, 90)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].sellIn).toEqual(8);
    })
    
  })

  describe("Sulfuras", () => {

    test("Sulfuras quality not affected by SellIn date, quality is preserved", () => {
      var item = [new Item("Sulfuras", -900, 10000)]
      var gildedRose = new Shop(item);
      var items = gildedRose.updateQuality();
      expect(items[0].quality).toEqual(10000);
    })

  })

  // describe("Conjured items", () => {
  //   test("conjured item", () => {
  //     var item = [new Item("Conjured items", 50, 50)]
  //     var gildedRose = new Shop(item);
  //     var items = gildedRose.updateQuality();
  //     expect(items[0].quality).toEqual(49);
  //   });
  // })
  
});