const test = require('node:test')
const assert = require('node:assert')

test('returning monday in japanese', {only: true}, async() => {

    let response = await fetch('https://dateinjson.vercel.app/api/week/1/ja');
        response = await response.json()

    assert.strictEqual(response.day,'にちようび')

});