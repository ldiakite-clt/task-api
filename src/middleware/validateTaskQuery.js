// Middleware to validate query parameters for GET /tasks
export const validateTaskQuery = (req, res, next) => {
  const { completed } = req.query;

  // If no completed parameter is provided, proceed
  if (completed === undefined) {
    req.completedFilter = undefined;
    return next();
  }

  // Validate that completed is either "true" or "false"
  if (completed !== 'true' && completed !== 'false') {
    return res.status(400).json({
      error: 'Invalid query parameter',
      details: ['completed must be "true" or "false"'],
    });
  }

  // Convert string to boolean and attach to req object
  req.completedFilter = completed === 'true';

  next();
};
