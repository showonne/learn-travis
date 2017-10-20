const add = require('../index.js')

describe('The first test', () => {
    it('test add method', () => {
        expect(add(1, 2)).toBe(3)
    })
})