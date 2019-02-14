// var {Shop, Item} = require('../src/gilded_rose.js');
describe("Gilded Rose", function() {
var shop;
  beforeEach( () => {
    shop = new Shop
  })

  it("looks for aged brie in Item object via its property name", function() {
    const gildedRose = new Shop([ new Item("Aged Brie", 0, 0) ]);
    const items = gildedRose.updateQuality();
    expect(items[0].name).toEqual("Aged Brie");
  });

  it("will check for property sellIn to be an integer", () => {
    var item = [new Item("Could be any food", 0, 0)]
    const gildedRose = new Shop(item);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })

  it("will check for property sellIn to be an integer", () => {
    var item = [new Item("Could be any food", 0, 2)]
    const gildedRose = new Shop(item);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(0)
  })

  it("will check for property sellIn to be an integer", () => {
    var item = [new Item("Aged Brie", 0, 0)]
    const gildedRose = new Shop(item);
    const items = gildedRose.updateQuality();
    expect(items[0].quality).toEqual(2)
  })

});
