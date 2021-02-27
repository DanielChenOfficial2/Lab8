const myVolume = {
    icon3: 67,
    icon2: 55,
    icon1: 23,
    icon0: -50
}
const formatVolumeIconPath = require('../assets/scripts/main');
describe('my volume', () => {
    test('icon level 3', () => {
        expect(formatVolumeIconPath(myVolume.icon3)).toMatch(/volume-level-3.svg/);
    });
    test('icon level 2', () => {
        expect(formatVolumeIconPath(myVolume.icon2)).toMatch(/volume-level-2.svg/);
    });
    test('icon level 1', () => {
        expect(formatVolumeIconPath(myVolume.icon1)).toMatch(/volume-level-1.svg/);
    })
    test('icon level 0', () => {
        expect(formatVolumeIconPath(myVolume.icon0)).toMatch(/volume-level-0.svg/);
    })
})