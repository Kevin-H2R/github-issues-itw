exports.validatePost = (req) => {
  const {id, title, description} = req.body
  if (!id) {
    throw Error('Missing id attribute')
  }
  if (!title) {
    throw Error('Missing title attribute')
  }
  if (!description) {
    throw Error('Missing description attribute')
  }
  // Example
  if (title.length > 128) {
    throw Error('Title length should be < 128')
  }
}
