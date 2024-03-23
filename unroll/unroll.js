function unroll(squareArray) {
    let resultArray = [];
    let initMove = squareArray[0].length;


    const findStart = function(move, direction){

        if(direction === 'right'){
            let yVal = (initMove - move)/2
            let xVal = (initMove - move)/2

            return [yVal, xVal];
        }

        if(direction === 'left'){
            let increment = ((initMove - move) + 1)/2

            let yVal = squareArray.length - increment;
            let xVal = squareArray[0].length - increment - 1;

            return [yVal, xVal];
        }

        if(direction === 'down'){
            let increment = ((initMove - move) + 1)/2

            let yVal = increment;
            let xVal = squareArray[0].length - increment;

            return [yVal, xVal];
        }

        if(direction === 'up'){
            let increment = (initMove - move)/2;

            let yVal = squareArray.length - increment - 1;
            let xVal = increment - 1;

            return [yVal, xVal];
        }
    }


    const unrollHelper = function(move, direction='right', status=1){

        if(status === 0){
            move--;
            status = 2;
        }

        if(move === 0){
            return;
        }

        let start = findStart(move, direction);
        let startY = start[0];
        let startX = start[1];

        let i = 0;


        if(direction === 'right'){
            while(i<move){
                resultArray.push(squareArray[startY][startX + i])
                i++;
            }
            return unrollHelper(move, 'down', status - 1);
        }

        if(direction === 'down'){
            while(i<move){
                resultArray.push(squareArray[startY + i][startX])
                i++;
            }
            return unrollHelper(move, 'left', status - 1);
        }

        if(direction === 'left'){
            while(i<move){
                resultArray.push(squareArray[startY][startX - i]);
                i++;
            }
            return unrollHelper(move, 'up', status - 1);
        }

        if(direction === 'up'){
            while(i<move){
                resultArray.push(squareArray[startY - i][startX]);
                i++;
            }
            return unrollHelper(move, 'right', status - 1);
        }
    }

    unrollHelper(initMove);

    return resultArray;
}

module.exports = unroll;
