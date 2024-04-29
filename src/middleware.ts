import { stackMiddlewares, withCORS } from '@server/middlewares';
import { withLogs } from '@server/middlewares/withLogs';

const middlewares = [withCORS, withLogs];

export default stackMiddlewares(middlewares);
