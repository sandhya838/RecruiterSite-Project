module.exports = {
  HOSTNAME: 'localhost',
  PORT: process.env.PORT || 3000,
  URL: 'mongodb+srv://jobadmin:jobadmin123@cluster0.cvoxk.mongodb.net/jobportaldb?retryWrites=true&w=majority',
  //URL: 'mongodb://localhost:27017/jobportal?readPreference=primary&appname=MongoDBCompass&directConnection=true&ssl=false',
  OPTIONS: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false,
    autoIndex: true, // Don't build indexes
    poolSize: 10, // Maintain up to 10 socket connections
    serverSelectionTimeoutMS: 5000, // Keep trying to send operations for 5 seconds
    // socketTimeoutMS: 45000, // Close sockets after 45 seconds of inactivity
    family: 4 // Use IPv4, skip trying IPv6
  },
  SECRET: 'SiJIVnYKsw785iHCAZw6QY9hzi573lQnGlToW7LTWaEgtuV00DJFnUSxgMyrXoCgwk0ya1u2PYVRctsYGpJu9oDb1Jitb6gMYOkJujkHK2UNbYv9p8fdcY6dzzfYmRYgiu3mazCwaJXrhqJ7RCVjY7eddfNUFish'
};