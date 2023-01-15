import * as uuid from 'uuid';

/**
 * @description function for make id in format hash
 * @example makeId()
*@returns uuuid string
* */
const makeId = (): string => uuid.v4();

export default {
  makeId
}
