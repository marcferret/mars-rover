import Compass from './compass'

const compass = new Compass();

test('Compass have axis N,E,S and W', () => {
    expect(compass.getAxis()).toEqual(['N','E','S','W']);
});

test('Check the position after rotate to left', () => {
    expect(compass.changeDirection('E','l')).toEqual('N');
});

test('Check the position after rotate to right', () => {
    expect(compass.changeDirection('E', 'r')).toEqual('S');
});