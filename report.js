const newman = require('newman');
require('dotenv').config();

newman.run({
    //collection: `https://api.postman.com/collections/44303613-2a262cf0-1b90-41d6-bdd2-1a478e679a87?access_key=${process.env.access_key}`,
    collection: require('./collection/dmoney-users-api-collection.json'),
    reporters: 'htmlextra',
    iterationCount: 1,
    reporter: {
        htmlextra: {
            export: './Reports/report.html', // If not specified, the file will be written to `newman/ in the current working directory.
        } 
    }
}, function (err) {
    if (err) { throw err; }
    console.log('collection run complete!');
});
    