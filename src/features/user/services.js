const db = require('../../db/models');

module.exports = {
    create: payload => db.User.create(payload)
}