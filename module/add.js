import chalk from "chalk";

export const add = (a, b) => {
    return a + b
}

export const soustraction = (a, b) => {
    return a - b
}

export const color = (parametre) => {
    let result;
    if (parametre > 0) {
        result = chalk.green(parametre)
    } else {
        result = chalk.red(parametre)
    }
    return result
}

