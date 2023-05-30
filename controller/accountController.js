const getAccounts = async (req, reply) => {
  const conn = await req.server.pg.connect();
  try {
    const { rows } = await conn.query("SELECT * FROM accounts");
    return rows;
  } catch (error) {
    console.log(error);
    reply.code(500).send({ error: "Internal Server Error" });
  } finally {
    conn.release();
  }
};

const getAccount = async (req, reply) => {
  const conn = await req.server.pg.connect();
  try {
    const { rows } = await conn.query(
      "SELECT * FROM accounts WHERE user_id=$1",
      [req.params.id]
    );
    reply.send(rows[0]);
  } catch (error) {
    reply.send(error);
  }
};

const putAccounts = async (request, reply) => {
  const conn = await request.server.pg.connect();
  try {
    const { rows } = await conn.query(
      "UPDATE accounts  SET  username= $1 WHERE user_id=$2",
      [request.body.username, request.params.id]
    );
    reply.code(200).send({ msg: "userName updated", accounts: rows[0] });
  } catch (error) {
    reply.send(error);
  }
};

const deleteAccount = async (request, reply) => {
  const conn = await request.server.pg.connect();
  try {
    const { rows } = await conn.query("DELETE FROM accounts WHERE user_id=$1", [
      request.params.id,
    ]);
    reply.code(200).send({ msg: "Item deleted", accounts: rows[0] });
  } catch (error) {
    reply.send(error);
  }
};

export { getAccounts, getAccount, putAccounts, deleteAccount };
