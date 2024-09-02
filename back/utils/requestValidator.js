exports.validatePost = (req) => {
  const {id, title, description} = req.body
  if (!id) {
    throw new Error('Missing id attribute')
  }
  if (!title) {
    throw new Error('Missing title attribute')
  }
  if (!description) {
    throw new Error('Missing description attribute')
  }
  // Example
  if (title.length > 128) {
    throw new Error('Title length should be < 128')
  }

  const idNumber = Number.parseInt(id)
  if (Number.isNaN(idNumber)) {
    throw new Error("id must be a number");
  }

  return {id: idNumber, title, description}
}
