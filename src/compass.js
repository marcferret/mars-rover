class Compass {
    constructor() {
        this.axis = ['N','E','S','W'];
    }

    getAxis() {
        return this.axis;
    }

    changeDirection(roverDirection, moveDirection) {
        let index = null;
        const indexDirection = this.axis.indexOf(roverDirection);

        if(moveDirection === 'l') {
            index = indexDirection - 1;
            if (index < 0) {
                index = this.axis.length - 1;
            }
        } else if (moveDirection === 'r'){
            index = indexDirection + 1;
            if (index > this.axis.length -1) {
                index = 0
            }
        }

        return this.axis[index];
    }
}

export default Compass;