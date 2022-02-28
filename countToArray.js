/* function countToArray(firstNumber, lastNumber){
    let numbers =[];
    for (let i = firstNumber; i < lastNumber; i++) {
                //lehetséges megoldások//

        // numbers.push(i.toString())

        // numbers.push(""+i)

        // numbers.push(String(i))

        // numbers.push(`${i}`)

        // let stringNumber = i.toString()
        // numbers.push(stringNumber)
    }
    return numbers
}
*/



/* 
const countToArray = (firstNumber, lastNumber) => {
    const numbers =[];
    for (let i = firstNumber; i < lastNumber; i++) {
        numbers.push(`${i}`)
    }
    return numbers
};
 */


const countToArray = (firstNumber, lastNumber) =>  Array.from(Array(lastNumber - firstNumber)).map((item, i) => `${firstNumber + i }`)


console.log(countToArray(10, 30)); 
