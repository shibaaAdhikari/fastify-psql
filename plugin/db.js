import fastifyPlugin from "fastify-plugin";
import fastifyPostgres from "@fastify/postgres";

async function dbConnector(fastify, options) {
  fastify.register(fastifyPostgres, {
    connectionString: "postgres://shiba:shiba@localhost/shiba",
  });
}

export default fastifyPlugin(dbConnector);
