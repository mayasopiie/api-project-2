//---LEVEL 1

const single = {
    displayAPI: (req, res) => {
        const dataAPI = {
            name: `API Project 2`,
            version: `1.0.0`,
            author: `Maya Sopiah Lubis`
        }
        res.status(200).send(dataAPI)
    }
}

module.exports = single;