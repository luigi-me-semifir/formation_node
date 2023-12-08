import chalk from 'chalk'

export const man = (req, res, next) => {
    console.log(chalk.bgCyan("Bienvenue xavier"))
    next()
}

export const girl = (req, res, next) => {
    console.log(chalk.bgMagenta("Bienvenue Fatima"));
    next()
}

export const all = (req, res, next) => {
    console.log(chalk.bgMagenta("Bienvenue tout le monde"));
    next()
}