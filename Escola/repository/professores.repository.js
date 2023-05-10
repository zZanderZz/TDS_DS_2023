const con = require("../mysql-connection");

module.exports = {
    buscaTodos: () => {
        return con.select().from("professores");
    },
    buscaPorId: (id) => {
        return con.select().from("professores").where("id", "=", id);
    },
    inserir: (professor) => {
        return con.insert(professor).into("professores");
    },
    deletar: (id) => {
        return con("professores").where({ id: id }).del();
    },
    atualizar: (professor, id) => {
        return con("professores").update(professor).where({ id: id });
    },
};