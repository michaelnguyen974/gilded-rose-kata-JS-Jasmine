const { Item } = require('../src/item.js')
const { Shop } = require('../src/gilded_rose.js')
const { AgedBrie } = require('../src/AgedBrie.js')
const { NormalItem} = require('../src/NormalItem')
const { Sulfuras } = require('../src/LegendaryItems')
const { Tickets } = require('../src/Tickets.js')
describe("Shop", function() {

  beforeEach( () => {
    shop = new Shop
  })
  describe("Aged Brie", () => {

    test("Aged brie will increase quality by 2 and quality starts < 50 when SellIn date is 0", () => {
      var item = [new AgedBrie(0, 0)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(2);
    })

    test("Aged Brie does not increase in quality when quality is already at the threshold of 50", () => {
      var item = [new AgedBrie(0, 50)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(50);
    })

    test("Aged Brie will increase in quality by 1 when SellIn date is a positive integer", () => {
      var item = [new AgedBrie(1, 2)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(3);
    })

    test("Aged Brie sellIn decreases by 1 regardless of quality", () => {
      var item = [new AgedBrie(9, 0)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].sellIn).toEqual(8);
    })

  })
  
  describe("Normal item", () => {

    test("any normal item that has a positive integer SellIn date will have it's quality decrease by 1", () => {
      var item = [new NormalItem(50, 50)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(49);
    })

    test("any normal item that has a SellIn of 0 will have it's quality subtracted by 2", () => {
      var item = [new NormalItem(0, 9)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(7);
    })

    test("any normal item sellIn decreases by 1 regardless of quality", () => {
      var item = [new NormalItem(9, 0)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].sellIn).toEqual(8);
    })
    
  })

  describe('tickets', () => {

    test("tickets quality goes to 0 when SellIn equals 0", () => {
      var item = [new Tickets(0, 50)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(0);
    })

    test("tickets quality increases by 1 when sellIn <11, quality <50", () => {
      var item = [new Tickets(10, 49)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(50);
    })

  //   test("tickets quality increases by 2 when sellIn <6, quality threshold hits 50", () => {
  //     var item = [new Item("tickets", 4, 48)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(50);
  //   })

  //   test('tickets quality increases by 3 if SellIn is less than 6 and quality < 50', () => {
  //     var item = [new Item("tickets", 5, 30)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(33);
  //   })

  //   test('tickets quality increases by 2 if sellIn date is less than 11', () => {
  //     var item = [new Item("tickets", 6, 30)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(32);
  //   })

  //   test("tickets quality increases by 1 if SellIn is greater or equal to 11", () => {
  //     var item = [new Item("tickets", 11, 30)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(31);
  //   })

  //   test("ticket quality does not depreciate if quality >= 50 AND sellIn is a positive integer ", () => {
  //     var item = [new Item("tickets", 1, 50)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(50);
  //   })

  //   test("tickets quality does not change when quality >= 50", () => {
  //     var item = [new Item("tickets", 50, 50)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(50);
  //   })

  //   test("tickets sellIn decreases by 1 regardless of quality", () => {
  //     var item = [new Item("tickets", 9, 90)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].sellIn).toEqual(8);
  //   })
    
  })

  describe("Sulfuras", () => {

    test("Sulfuras quality always stays at 80", () => {
      var item = [new Sulfuras(9, 10)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].quality).toEqual(80);
    })

    test("Sulfuras SellIn remains the same", () => {
      var item = [new Sulfuras(9, 10)]
      var shop = new Shop(item);
      shop.updateQuality();
      expect(shop.items[0].sellIn).toEqual(9);
    })

  })

  // describe("Conjured items", () => {
  //   test("conjured item", () => {
  //     var item = [new Item("Conjured items", 50, 50)]
  //     var shop = new Shop(item);
  //     var items = shop.updateQuality();
  //     expect(items[0].quality).toEqual(49);
  //   });
  // })
  
});