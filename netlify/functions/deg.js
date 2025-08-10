exports.handler = async (event) => {
  const [x1, x2] = event.path.split('/').filter(Boolean).slice(-2);
  const result = Math.pow(Number(x1), Number(x2));
  return {
    statusCode: 200,
    body: String(result)
  };
};
