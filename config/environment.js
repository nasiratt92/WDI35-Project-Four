const dbUri = process.env.MONGODB_URI || 'mongodb://localhost/ripe-tomatoes';
const secret = process.env.SECRET || 'This is the secret';

module.exports = {
  dbUri, secret
};
