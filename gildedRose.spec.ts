import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GildedRose } from './gildedRose.component';
import { Item } from "./Item";

describe('GildedRose', () => {
  let gildedRose: GildedRose;
  let fixture: ComponentFixture<GildedRose>;
  let helper: Helper;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GildedRose ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GildedRose);
    gildedRose = fixture.componentInstance;
    helper = new Helper();
    fixture.detectChanges();
  });


  describe("test element updateQuality  function", () => {
    it("test Aged Brie element", () => {
      gildedRose.items=[]
      gildedRose.items = helper.getItems('Aged Brie', 15, 40);
      let expectedGildedRose =helper.getItems('Aged Brie', 14, 41);
      let newGildedRose = gildedRose.updateQuality()
      expect(newGildedRose).toEqual(expectedGildedRose);
    });
    it("test Conjured element", () => {
      gildedRose.items =[]
      gildedRose.items = helper.getItems('Conjured', 15, 40);
      let expectedConjured = helper.getItems('Conjured', 14, 38);
      let newConjured = gildedRose.updateQuality()
      expect(newConjured).toEqual(expectedConjured);
    });

    it("test Sulfuras element", () => {
      gildedRose.items =[]
      gildedRose.items = helper.getItems('Sulfuras, Hand of Ragnaros', 20, 40);
      let expectedSulfuras = helper.getItems('Sulfuras, Hand of Ragnaros', 20, 40);
      let newSulfuras = gildedRose.updateQuality();
      expect(newSulfuras).toEqual(expectedSulfuras);
    });
    it("test Backstage element", () => {
      gildedRose.items =[]
      gildedRose.items = helper.getItems('Backstage passes to a TAFKAL80ETC concert', 20, 40);
      let expectedBackstage = helper.getItems('Backstage passes to a TAFKAL80ETC concert', 19, 41);
      let newBackstage = gildedRose.updateQuality();
      expect(newBackstage).toEqual(expectedBackstage);
    });

    it("test Backstage element sellIn < 10", () => {
      gildedRose.items =[]
      gildedRose.items = helper.getItems('Backstage passes to a TAFKAL80ETC concert', 9, 40);
      let expectedBackstage = helper.getItems('Backstage passes to a TAFKAL80ETC concert', 8, 42);
      let newBackstage = gildedRose.updateQuality();
      expect(newBackstage).toEqual(expectedBackstage);
    });
    it("test Backstage element sellIn < 5", () => {
      gildedRose.items =[]
      gildedRose.items = helper.getItems('Backstage passes to a TAFKAL80ETC concert', 5, 40);
      let expectedBackstage = helper.getItems('Backstage passes to a TAFKAL80ETC concert', 4, 43);
      let newBackstage = gildedRose.updateQuality();
      expect(newBackstage).toEqual(expectedBackstage);
    });
  })
});
class Helper {
  items:Item[] = [];
  getItems(name: string, sellIn: number, quality: number) {
    this.items=[]
    for (let i = 0; i < 1; i++) {
      this.items.push({
        name: name,
        sellIn: sellIn,
        quality: quality
      });
    }
    return this.items;
  }
}
