import Grid from './grid';

let grid = new Grid();

test('get columns and rows of grid', () => {
    expect(grid.getGrid()).toEqual({columns: 5, rows: 5})
});

test('get number of columns', () => {
    expect(grid.getColumns()).toEqual(5);
});

test('get number of rows', () => {
    expect(grid.getRows()).toEqual(5);
});

test('Check border grid function', () => {
    expect(grid.checkBorderGrid(5, 5)).toEqual(0);
});
