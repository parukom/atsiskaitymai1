/* ------------------------------ TASK 8 --------------------------------------------
Sukurkite klasę "Calculator", kuri sukuria objektus su 4 metodais:
sum() - priima du skaičius ir grąžina jų sumą;
subtraction() - priima du skaičius ir grąžina jų skirtumą;
multiplication() - priima du skaičius ir grąžina jų daugybos rezultatą;
division() - priima du skaičius ir grąžina jų dalybos rezultatą;
------------------------------------------------------------------------------------ */

class Calculator {
    sum = (a, b) => {
        let answer1 = a + b;
        return answer1;
    };
    subtraction = (a, b) => {
        let answer2 = a - b;
        return answer2;
    };
    multiplication = (a, b) => {
        let answer3 = a * b;
        return answer3;
    };
    division = (a, b) => {
        let answer4 = a / b;
        return answer4;
    };
}
let skaiciuokle = new Calculator();
console.log(`sudeties veiksmas 20 + 13 = ${skaiciuokle.sum(20, 13)}`);
console.log(`atimties veiksmas 20 - 13 = ${skaiciuokle.subtraction(20, 13)}`);
console.log(`daugybos veiksmas 20 * 13 = ${skaiciuokle.multiplication(20, 13)}`);
console.log(`dalybos veiksmas 20 / 13 = ${skaiciuokle.division(20, 13)}`);