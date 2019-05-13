import MarsRover from './marsRover';

describe('Mars Rover Test', () => {
    let marsRover;
    beforeEach(() => {
        marsRover = new MarsRover;
    });

    test('mars rover position', () => {
        expect(marsRover.getPosition()).toEqual({x: 0, y: 0});
    });

    test('Check the position of rover', () => {
        expect(marsRover.getDirection()).toEqual('E');
    });

    test('Check the position after rotate to left', () => {
        marsRover.changeDirection('l');
        expect(marsRover.getDirection()).toEqual('N');
    });

    test('Check the position after rotate to right', () => {
        marsRover.changeDirection('r');
        expect(marsRover.getDirection()).toEqual('S');
    });

    test('Check set direction', () => {
        marsRover.setDirection('N');
        expect(marsRover.getDirection()).toEqual('N');
    });

    test('Check the position other direction rotate', () => {
        marsRover.setDirection('N');
        marsRover.changeDirection('l');
        expect(marsRover.getDirection()).toEqual('W');
    });

    test('Check the position when the movement is forward', () => {
        marsRover.moveForward();
        expect(marsRover.getPosition()).toEqual({x: 1, y: 0});
    });

    test('Check the position when the movement is forward to sud', () => {
        marsRover.setDirection('S');
        marsRover.moveForward();
        expect(marsRover.getPosition()).toEqual({x: 0, y: 4});
    });

    test('Check set position', () => {
        marsRover.setPosition({x: 1, y: 1});
        expect(marsRover.getPosition()).toEqual({x: 1, y: 1});
    });

    test('Define grid', () => {
        expect(marsRover.getGrid()).toEqual({columns: 5, rows: 5});
    });

    test('Check border grid function', () => {
        expect(marsRover.checkBorderGrid(5, 5)).toEqual(0);
    });

    test('Check border grid', () => {
        marsRover.setPosition({x: 4, y: 0});
        marsRover.setDirection('E');
        marsRover.moveForward();
        expect(marsRover.getPosition()).toEqual({x: 0, y: 0})
    });

    test('Check get status', () => {
        expect(marsRover.getStatus()).toEqual('0:0:E');
    });

    test('Check multiple control', () => {
        marsRover.inputCommands('MMLMMRM');
        expect(marsRover.getStatus()).toEqual('3:2:E');
    });
});
