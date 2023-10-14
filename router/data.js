const express = require('express');
const getServiceData = require('../controller/serviceData');
const router = express.Router();

function convertToTitleCase(name) {
    return name.toLowerCase().replace(/(?:^|\s)\w/g, function(match) {
        return match.toUpperCase();
    });
}

router.get("/:name", async (req, res) => {
    try {
        let name = req.params.name.toLowerCase();
        name = convertToTitleCase(name);

        const data = await getServiceData(name);

        if (!data) {
            res.status(404).send('Data not found');
        } else {
            res.send({ data });
        }
    } catch (error) {
        console.error('Error occurred in the route:', error);
        res.status(500).send('Internal Server Error');
    }
});

module.exports = router;
