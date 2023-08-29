import {conexao} from "./connection.js";

export async function listarcliente(){
    let sql = 'select * from TB_cliente';

    let resp= await conexao.query(sql);
    let dados=resp[0];

    return dados;
}

export async function inserir(cliente){
    let sql =`insert into TB_Cliente 
            (nm_nome    as nome,
            ds_email    as email,
            ds_telefone as telefone ,
            nr_cpf      as cpf,
            nr_cnh      as cnh)
        Values (?,?,?,?,?)
    `;

    let resp = await conexao.query(sql, [
        cliente.nome,
        cliente.email,
        cliente.telefone,
        cliente.cpf,
        cliente.cnh
    ]);
    let dados= resp[0];

    cliente.id= dados.insertId;
    return dados;
}

export async function filtrarnome(){
    let sql =`
    SELECT  id_cliente  as id,
            nm_nome     as nome,
            ds_email    as email,
            ds_telefone as telefone,
            nr_cpf      as cpf,
            nr_cnh      as cnh
    FROM TB_Cliente WHERE nm_nome LIKE ?
    `

    let [dados] =await conexao.query(sql,['%'+nome+'%']);
    return dados;
}

export async function alterar(cliente){
    
    let sql=
    `update tb_agenda set 
        nm_nome = ?,
        ds_email  = ?,
        ds_telefone = ?,
        nr_cpf =?,
        nr_cnh  = ?
    `
    
    let [dados] = await connection.query(sql,[
    cliente.nome,
    cliente.email,
    cliente.telefone,
    cliente.cpf,
    cliente.cnh,
    id
    ]);
    let linhasAfetadas = dados.affectedRows;
    return linhasAfetadas;
}

export async function deletar(){
    let sql =`delete from TB_cliente  where id_cliente = ?` 
    let [dados] = await connection.query(sql, [id]);
    let linhasAfetadas = dados.affectedRows; 
    return linhasAfetadas;
}