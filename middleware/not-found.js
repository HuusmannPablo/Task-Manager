// Handling the 404
const notFound = (req,res) => res.status(404).send('The route you are looking for does not exists')

module.exports = notFound
