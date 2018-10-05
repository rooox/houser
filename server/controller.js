
module.exports = {
    getHouses: (req, res, next) => {
        const dbInstance = req.app.get('db');
        
        dbInstance.get_houses()
        .then(houses => { res.status(200).send(houses); })
        .catch( err => {
          console.log(err);
          res.status(500).send(err);
        });
    },
    addHouse: (req, res) => {
        let { name, address, city, state, zipcode} = req.body;
        console.log(req.body);
        let newHouse = { name, address, city, state, zipcode};
        notes.push(newHouse);
        id++;
        res.status(200).send(houses);
      },
  };
