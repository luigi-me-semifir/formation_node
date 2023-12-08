export const date = (req, res, next) => {
    const now = new Date()
    console.log(`${now.toLocaleDateString()} et ${now.toLocaleTimeString()} `);
    next()
}
export const pathMethode = (req, res, next) => {
    console.log(`${req.method} \ ${req.path}`);
    next()
}

let click = 0

export const compteurFin = (req, res, next) => {
    click += 1
    console.log(`Nombre de requête effectuer: ${click}`);
    next()
}

export const verifId = (req, res, next) => {
    const id = parseInt(req.params.id)
    console.log(id);
    if (id === 1) {
        res.send(`Hello ${req.params.id} ! `)
    } else {
        res.status(404).send(`l' ${req.params.id} n'existe pas`)
    }
    next()
}

export const errorStatus = (req, res, next) => {
    if (res.statusCode === 404) {
        console.log("Error 404");
    } else {
        console.log("Ok!!");
    }
    next()
}
