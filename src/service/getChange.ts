import {ICoinsResult} from "../store/dashboard";

const getChange = (value: number, arr: Array<number>) => {
    const sortArr = arr.sort((a, b) => a - b).filter(item => value >= item).reverse()
    const result: Array<ICoinsResult> = []
    let remains = value

    for (let i = 0; i < sortArr.length; i++) {
        const count = Math.trunc(remains / sortArr[i]);
        const rem = Math.floor(remains - (count * sortArr[i]));

        if (sortArr[i] >= rem && count) {
            remains = rem
            result.push({
                count: count,
                value: sortArr[i]
            })
        }
    }

    return result
}

export default getChange