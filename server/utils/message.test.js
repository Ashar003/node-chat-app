var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');


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

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        const from = 'Admin';
        const latitude = 70;
        const longitude = 44;
        const URL = `https://www.google.com/maps?q=${latitude},${longitude}`;

        const testMessage = generateLocationMessage(from, latitude, longitude);

        expect(testMessage.from).toBe(from);
        expect(testMessage.url).toBe(URL);
        expect(testMessage.createdAt).toBeA('number');

    });
});