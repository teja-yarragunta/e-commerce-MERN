const notFound = (req, res, next) => {
  const error = new Error(`Not Found - ${req.originalUrl}`);
  res.status(404);
  next(error);
};
const errorHandler = (err, req, res, next) => { // eslint-disable-line
  let statusCode = res.statusCode === 200 ? 500 : res.statusCode;
  let message = err.message;
  // check if the error is a validation error;
  if(err.name === 'caseError' && err.kind === 'ObjectId') {
    message = `Resource not found with id of ${err.value}`;
    statusCode = 400;
  }
  res.status(statusCode).json({
    message,
    stack: process.env.NODE_ENV === 'production' ? '🥞' : err.stack,
  });
}
export { notFound, errorHandler };