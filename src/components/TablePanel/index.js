import React, { useState, useEffect } from 'react';

import api from '../../services/api';

import './styles.css';

const TablePanel = (props) => {
  const tableName = props.tableName;
  const [data, setData] = useState([]);
  const [keysTable, setKeysTable] = useState([]);

  useEffect(() => {
    api.get('/list-table', {
      headers: {
        table_name: tableName
      }
    }).then(response => {
      setData(response.data);
    })
    if(data[0]) {
      setKeysTable(Object.keys(data[0]));
    }
  }, [data, tableName]);

  // verifica se a tabela selecionada contém o campo "descricao".
  function hasFieldDescription() {
    if (tableName === 'Cor' || tableName === 'Cota' || tableName === 'Deficiencia'
    || tableName === 'Escola' || tableName === 'EstadoCivil' || tableName === 'Genero'
    || tableName === 'Horario' || tableName === 'Ingresso' || tableName === 'Nacionalidade'
    || tableName === 'SituacaoDiscente' || tableName === 'SituacaoDisciplina'
    || tableName === 'SituacaoVinculo') {
      return true;
    }
    return false;
  }

  // verifica se a tabela selecionada contém o campo "nome".
  function hasFieldName() {
    if (tableName === 'Curso' || tableName === 'Pais' || tableName === 'Sala') {
      return true;
    }
    return false;
  }

  function checkFields(object, index) {
    if (hasFieldDescription()) {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.descricao }</td>
        </>
      )
    }
    else if (hasFieldName()) {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.nome }</td>
        </>
      )
    }
    else if (tableName === 'Discente') {
      return (
        <>
          <td key={index+1}>{ object.cpf }</td>
          <td key={index+2}>{ object.nome }</td>
          <td key={index+3}>{ object.id_situacao }</td>
          <td key={index+4}>{ object.semestre_situacao }</td>
          <td key={index+5}>{ object.id_ingresso }</td>
          <td key={index+6}>{ object.semestre_ingresso }</td>
          <td key={index+7}>{ object.ano_nascimento }</td>
          <td key={index+8}>{ object.id_cota }</td>
          <td key={index+9}>{ object.id_tipo_escola }</td>
          <td key={index+10}>{ object.ano_conclusao_ensino_medio }</td>
          <td key={index+11}>{ object.email }</td>
          <td key={index+12}>{ object.id_genero }</td>
          <td key={index+13}>{ object.id_estado_civil }</td>
          <td key={index+14}>{ object.id_nacionalidade }</td>
          <td key={index+15}>{ object.id_pais_origem }</td>
          <td key={index+16}>{ object.id_naturalidade }</td>
          <td key={index+17}>{ object.id_cor }</td>
        </>
      )
    } 
    else if (tableName === 'DiscenteDeficiencia') {
      return (
        <>
          <td key={index+1}>{ object.cpf }</td>
          <td key={index+2}>{ object.id_deficiencia }</td>
        </>
      )
    }
    else if (tableName === 'DiscenteDisciplina') {
      return (
        <>
          <td key={index+1}>{ object.matricula }</td>
          <td key={index+2}>{ object.id_turma }</td>
          <td key={index+3}>{ object.num_faltas }</td>
          <td key={index+4}>{ object.nota1 }</td>
          <td key={index+5}>{ object.nota2 }</td>
          <td key={index+6}>{ object.nota3 }</td>
          <td key={index+7}>{ object.nota4 }</td>
          <td key={index+8}>{ object.nota5 }</td>
          <td key={index+9}>{ object.nota6 }</td>
          <td key={index+10}>{ object.nota7 }</td>
          <td key={index+11}>{ object.nota8}</td>
          <td key={index+12}>{ object.media_parcial }</td>
          <td key={index+13}>{ object.prova_final }</td>
          <td key={index+14}>{ object.media_final }</td>
          <td key={index+15}>{ object.id_situacao }</td>
        </>
      )
    }
    else if (tableName === 'DiscenteVinculo') {
      return (
        <>
          <td key={index+1}>{ object.cpf }</td>
          <td key={index+2}>{ object.matricula }</td>
          <td key={index+3}>{ object.id_curso }</td>
          <td key={index+4}>{ object.id_situacao_vinculo }</td>
          <td key={index+5}>{ object.semestre_vinculo }</td>
        </>
      )
    }
    else if (tableName === 'Disciplina') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.codigo }</td>
          <td key={index+3}>{ object.creditos }</td>
          <td key={index+4}>{ object.horas }</td>
          <td key={index+5}>{ object.nome }</td>
        </>
      )
    }
    else if (tableName === 'Falta') {
      return (
        <>
          <td key={index+1}>{ object.matricula }</td>
          <td key={index+2}>{ object.id_turma }</td>
          <td key={index+3}>{ object.num_aula }</td>
        </>
      )
    }
    else if (tableName === 'Naturalidade') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.municipio }</td>
          <td key={index+3}>{ object.estado }</td>
        </>
      )
    }
    else if (tableName === 'Professor') {
      return (
        <>
          <td key={index+1}>{ object.siape }</td>
        </>
      )
    }
    else if (tableName === 'Turma') {
      return (
        <>
          <td key={index+1}>{ object.id }</td>
          <td key={index+2}>{ object.id_disciplina }</td>
          <td key={index+3}>{ object.turma }</td>
          <td key={index+4}>{ object.periodo }</td>
          <td key={index+5}>{ object.id_horario }</td>
          <td key={index+6}>{ object.id_sala }</td>
        </>
      )
    }
    else if (tableName === 'TurmaProfessor') {
      return (
        <>
          <td key={index+1}>{ object.id_turma }</td>
          <td key={index+2}>{ object.siape }</td>
        </>
      )
    }
  }

  return (
    <div className="container-tablepanel">
      <h2 className="title-panel">{ tableName }</h2>
      <table>
        <thead>
          <tr>
            { keysTable.map((key, index) => (
              <th key={index}>{ key }</th>
            )) }
          </tr>
        </thead>
        <tbody>
          { data.map((object, index) => ( 
            <tr>
              {
                checkFields(object, index)
              }
            </tr>
          )) }
        </tbody>
      </table>
    </div>
  )
}

export default TablePanel;