const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// Geojson Schema
const GeoJsonSchema = new Schema({
    type: {
        type: String,
        default: 'point',
    },
    coordinates: {
        type: [Number],
        index: '2dsphere'
    }
});
// Create user schema.
const UserSchema = new Schema({
    name: {type: 'string', required: 'name field is required'},
    lname: {type: 'string', required: 'last name is require'},
    email: {type: 'string', required: 'email is required'},
    password: {type: 'string', required: 'passsword is required'},
    created_at: { type: 'date', default: Date},
    updated_at: {type: 'date', default: Date},
    geometry: GeoJsonSchema,
});

// const User = mongoose.model(user, UserSchema);
const User = mongoose.model('user', UserSchema);
module.exports = User;