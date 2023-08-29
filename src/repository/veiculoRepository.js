import {conexao} from "./connection.js";

export async function inserir(veiculo){
    let sql =`insert into TB_veiculo 
               (id_tipo_Veiculo,
                ds_modelo,
                ds_marca,
                nr_ano,
                ds_placa  
                )
        Values (?,?,?,?,?)
    `;

    let resp = await conexao.query(sql, [
        veiculo.idTipoVeiculo,
        veiculo.modelo,
        veiculo.marca,
        veiculo.ano,
        veiculo.placa
    ]);
    let dados= resp[0];

    veiculo.id= dados.insertId;
    return dados;
};

export async function consultar(busca) {
    try {
      let comando = `
        SELECT
          ve.id AS id,
          tv.id_tipo_veiculo AS idTipoVeiculo,
          tv.ds_tipo AS tipo,
          ve.ds_modelo AS modelo,
          ve.ds_marca AS marca,
          ve.nr_ano AS ano,
          ve.ds_placa AS placa
        FROM
          tb_veiculo AS ve
        INNER JOIN
          tb_tipo_veiculo AS tv ON tv.id_tipo_veiculo = ve.id_tipo_veiculo
        WHERE
          ve.ds_modelo LIKE ? OR
          ve.ds_marca LIKE ? OR
          ve.ds_placa LIKE ?
        ORDER BY
          ve.id
      `;
  
      let [resp] = await con.query(comando, [`%${busca}%`, `%${busca}%`, `%${busca}%`]);
  
      return resp;

    } 
    catch (erro) {
      console.error("Erro ao executar a consulta:", erro);
      throw erro;
    }
};


  