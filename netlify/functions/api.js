exports.handler = async (event) => {
  const path = event.path;
  const method = event.httpMethod;

  // Маршрут /login
  if (path === '/.netlify/functions/api/login' && method === 'GET') {
    return {
      statusCode: 200,
      body: 'efv', // Ваш логин
    };
  }

  // Маршрут /deg/{x1}/{x2}
  if (path.startsWith('/.netlify/functions/api/deg/') && method === 'GET') {
    const [, , , x1, x2] = path.split('/');
    const result = Math.pow(parseFloat(x1), parseFloat(x2));
    return {
      statusCode: 200,
      body: result.toString(),
    };
  }

  return { statusCode: 404, body: 'Not Found' };
};
