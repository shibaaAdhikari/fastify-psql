// ESM
import Fastify from "fastify";
import db from "./plugin/db.js";
import routes from "./routes/accounts.js";
const fastify = Fastify({
  logger: true,
});

fastify.register(db);
fastify.register(routes);

/**
 * Run the server!
 */
const start = async () => {
  try {
    await fastify.listen({ port: 3000 });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};
start();
