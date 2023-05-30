// import getAccounts from "../controller/accountController.js";
import {
  getAccounts,
  getAccount,
  putAccounts,
  deleteAccount,
} from "../controller/accountController.js";

const routes = async (fastify, options) => {
  const getAccountsOpts = {
    schema: {
      response: {
        200: {
          type: "array",
          items: {
            type: "object",
            properties: {
              user_id: { type: "number" },
              username: { type: "string" },
              email: { type: "string" },
              phone: { type: "number" },
            },
          },
        },
      },
    },
    handler: getAccounts,
  };
  const getAccountOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            user_id: { type: "number" },
            username: { type: "string" },
            email: { type: "string" },
            phone: { type: "number" },
          },
        },
      },
    },
    handler: getAccount,
  };

  const putAccountsOpts = {
    schema: {
      body: {
        type: "object",
        required: ["username"],
        properties: {
          username: { type: "string" },
        },
      },
      response: {
        200: {
          type: "object",
          properties: {
            msg: { type: "string" },
          },
        },
      },
    },
    handler: putAccounts,
  };
  const deleteAccountOpts = {
    schema: {
      response: {
        200: {
          type: "object",
          properties: {
            msg: { type: "string" },
          },
        },
      },
    },
    handler: deleteAccount,
  };

  fastify.get("/getAccounts", getAccountsOpts);
  fastify.get("/getAccounts/:id", getAccountOpts);
  fastify.put("/getAccounts/:id", putAccountsOpts);
  fastify.delete("/getAccounts/:id", deleteAccountOpts);
};

export default routes;
