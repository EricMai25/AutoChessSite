const pg = require('pg');
const config = require('../pg_config');

const client = new pg.Client(config);
client.connect();

module.exports = {
    client
}