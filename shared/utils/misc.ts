import { customAlphabet } from 'nanoid';



export function generateId(txt: string, l = 10) {
    const nanoid = customAlphabet('0123456789abcdefghijklmnopqrstuvwxyz', l);
    return `${txt}_${nanoid()}`;
}
