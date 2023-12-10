const app = require('./app');
const dotenv = require('dotenv');


dotenv.config({ path: 'config.env' });

const port = process.env.RUNNING_PORT;


app.listen(port, () => {
    console.log(`Listening on port http://localhost:${port}`);
}).on('error', (err) => {
    console.error('Server startup error:', err.message);
});
