const greetController = (req, res) => {
  const urlObj = new URL(req.url, 'http://localhost:3000');
  const name = urlObj.searchParams.get('name') || 'Attorney Valois NIYIGABA';

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(`Hello, ${name}!`);
};

module.exports = greetController;
