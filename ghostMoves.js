import {DIRECTIONS, OBJECT_TYPE} from './setup';

//Primitive Movement, feel free to upgrade Ghost Movement! LOL

export function randomMovement(position, direction, objectExist){
    let dir = direction;
    let nextMovePos = position + dir.movement;
    //Create an array from the directions object keys
    const keys = Object.keys(DIRECTIONS);

    while(objectExist(nextMovePos, OBJECT_TYPE.WALL) || objectExist(nextMovePos, OBJECT_TYPE.GHOST)){
        //Get a random key from the key array aka Primitive Movement
        const key = keys[Math.floor(Math.random() * keys.length)];
        //Setting the new move
        dir = DIRECTIONS[key];
        //Set the next move
        nextMovePos = position + dir.movement;
    }
    return {nextMovePos, direction: dir};
}