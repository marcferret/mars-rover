import Compass from './compass';
import Grid from './grid'

class MarsRover {
    constructor(){
        this.position = {x: 0, y: 0};
        this.direction = 'E';
        this.compass = new Compass();
        this.grid = new Grid();
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
        this.setDirection(this.compass.changeDirection(this.direction, moveDirection));
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
            x: this.grid.checkBorderGrid(newPosition.x, this.grid.getColumns()),
            y: this.grid.checkBorderGrid(newPosition.y, this.grid.getRows())
        };

        this.setPosition(checkedPosition);
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