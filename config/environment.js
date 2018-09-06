const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/bottle-it';
const secret = process.env.SECRET || 'Miracle tonic';

module.exports = {
  dbUri, secret
};
