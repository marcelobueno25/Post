import server from './src/config/express-config';
import { PORT } from './src/config/consts';
server.listen(PORT, () => {
  console.log(`[SERVER] Running at http://localhost:${PORT}`);
});