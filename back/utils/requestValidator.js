const validatePost = (req) => {
  const {id} = req.body
  if (!id) {
    throw new Error('Missing id attribute')
  }
  // I think this lacks clarity, though, for code duplication sake, I used the existing function
  const {title, description} = validatePut(req)
  const idNumber = Number.parseInt(id)
  if (Number.isNaN(idNumber)) {
    throw new Error("id must be a number");
  }

  return {id: idNumber, title, description}
}

const validatePut = (req) => {
  const {title, description} = req.body
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

  return {title, description}
}

exports.validatePost = validatePost
exports.validatePut = validatePut
