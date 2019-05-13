class Grid {
    constructor(){
        this.columns = 5;
        this.rows = 5;
    }

    getGrid(){
        return {columns: this.columns, rows: this.rows};
    };

    getColumns() {
        return this.columns;
    }

    getRows() {
        return this.rows;
    }

    checkBorderGrid(axis, num) {
        let value = axis;

        if (axis < 0) {
            value = num - 1;
        }
        if (axis >= num) {
            value = 0;
        }

        return value;
    }
}

export default Grid;