module.exports = {
    mutipleMongooseToObject: function (mongooses) {
        return mongooses.map((mongoose) => mongoose.toObject());
    },
    mongooseToObject: function (mongooses) {
        return mongoose ? mongoose.toObject() : mongoose;
    },
};
