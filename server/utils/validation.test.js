const expect = require('expect');
const {isRealString} = require('./validation')


describe('Checks for a real string', () => {
    it('Should reject non-string values', () => {
        const str = 123456;
        const NSV = isRealString(str);

        expect(NSV).toBe(false);

    });

    it('should reject string with only spaces', () => {
        const str = '                     ';
        const NSV = isRealString(str);

        expect(NSV).toBe(false);

    });

    it('should allow strings with non-space characters', () => {
        const str = '      Hello!     ';
        const NSV = isRealString(str);

        expect(NSV).toBe(true);

    });
});


