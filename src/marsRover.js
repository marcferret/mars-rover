class MarsRover {
    constructor(){
        this.position = {x: 0, y: 0};
        this.direction = 'E';
        this.points = ['N','E','S','W'];
        this.grid = {columns: 5, rows: 5};
    }

    setPosition = (position) => {
        this.position = position;
    };

    getPosition = () => {
        return this.position;
    };

    setDirection = (direction) => {
        this.direction = direction;
    };

    getDirection = () => {
        return this.direction;
    };

    changeDirection = (moveDirection) => {
        let index = null;
        const indexDirection = this.points.indexOf(this.direction);

        if(moveDirection === 'l') {
            index = indexDirection - 1;
            if (index < 0) {
                index = this.points.length - 1;
            }
        } else if (moveDirection === 'r'){
            index = indexDirection + 1;
            if (index > this.points.length -1) {
                index = 0
            }
        }

        this.setDirection(this.points[index]);
    };

    moveForward = () => {
        let newPosition;

        if(this.direction === 'E') {
            newPosition = {x: this.position.x + 1, y: this.position.y};
        } else if (this.direction === 'S') {
            newPosition = {x: this.position.x, y: this.position.y - 1};
        } else if (this.direction === 'W'){
            newPosition = {x: this.position.x - 1, y: this.position.y};
        } else {
            newPosition = {x: this.position.x, y: this.position.y + 1};
        }

        const checkedPosition = {
            x: this.checkBorderGrid(newPosition.x, this.grid.columns),
            y: this.checkBorderGrid(newPosition.y, this.grid.rows)
        };

        this.setPosition(checkedPosition);
    };

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

    getGrid = () => {
        return this.grid;
    };

    getStatus = () => {
        return `${this.position.x}:${this.position.y}:${this.direction}`;
    };

    inputCommands(commands) {
        const commandsList = commands.toLowerCase().split('');

        commandsList.map(command => {
            command === 'm' ?
                this.moveForward() :
                this.changeDirection(command);
        });
    }
}

export default MarsRover;