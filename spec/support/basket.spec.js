import BobsBagels, { Bagel } from "../../src/basket.js";

describe('Bobs Bagels', () => {
    let bobsBagels
    beforeEach(() => {
        bobsBagels = new BobsBagels()
    })
    it('should exist', () => {
        expect(bobsBagels).toBeInstanceOf(BobsBagels)
    })
    it('should add an item to the basket', () => {
        const bagel = bobsBagels.addToBasket('poppyseed bagel')
        expect(bagel).toBeInstanceOf(Bagel)
        expect(bagel.id).toBe(1)
        expect(bagel.title).toBe('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)
    })
    it('should be allow bagels to be removed from basket', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        expect(bobsBagels.basket.length).toBe(1)

        const removed = bobsBagels.remove(1)
        expect(removed.title).toBe('poppyseed bagel')
        const newBasket = bobsBagels.basket
        expect(newBasket.length).toBe(0)
    })
    it('should alert customer when basket has reached 6 bagel limit', () => {
        bobsBagels.addToBasket('poppyseed bagel')
        bobsBagels.addToBasket('plain bagel')
        bobsBagels.addToBasket('sesame bagel')
        bobsBagels.addToBasket('salmon bagel')
        bobsBagels.addToBasket('cream cheese bagel')
        bobsBagels.addToBasket('meat feast bagel')
        expect(() => bobsBagels.addToBasket()).toThrow("basket is at full capacity")
    })
})