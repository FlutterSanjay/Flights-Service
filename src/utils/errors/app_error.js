class AppError extends Error {
  constructor(message, statusCode) {
    super(message); // call the constructor of the parent class
    this.statusCode = statusCode; // assign statusCode
    this.explanation = message; // assign explanation
  }
}
module.exports = AppError;
