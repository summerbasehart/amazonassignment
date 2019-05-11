const { createConnection } = require('mysql2')

const { prompt } = require('inquirer')

const db = createConnection({
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'Phil!1993',
    database: 'bamazon'
})

async function getProducts (columns) {
    let response = await new Promise((resolve, reject) => {
        db.query(`SELECT ${columns} FROM products`, (e, r) => {
            if (e) {
                reject(e)
            } else {
                resolve(r)
            }
        })
    })    
    return response
}

const getAction = _ => {
    getProducts()
        .then (r=> {
            prompt([
                {
                    type: 'list',
                    name: 'item_id',
                    message: 'Which item would you like to buy? (please list Item ID)',
                    choices: r.map(({ item_id }) => ID)
                },
            ])
            .then (({ title, choice }) => {
                if (choice) {
                    db.query('How many would you like to buy?', {stock_quantity}, e => {
                        if(e) throw e
                        console.log('Purchase successfull')
                        getAction()
                    })
                } else {
                    getAction()
                }
            })
            .catch(e => console.log(e))
                
        })
        .catch(e => console.log(e))
}

db.connect(e => e ? console.log(e) : getProducts())