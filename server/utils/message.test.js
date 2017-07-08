var expect = require('expect');

var {generateMessage} = require('./message');

const from = 'Admin';
const text = 'Hi all users!';

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        const from = 'Admin';
        const text = 'Hi all users!';
        //store res in variable
       const testMessage = generateMessage(from, text);
        //assert from match
        expect(testMessage.from).toBe(from);
        //asset text match
        expect(testMessage.text).toBe(text);
        //assert createdAt -toBeA
        expect(testMessage.createdAt).toBeA('number');
    })

});