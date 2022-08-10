import React from 'react'
import GridItem from "../GridItem";
import * as C from './styles'

/*
const onDelete :
é passado por um parametro ID. 
que sera feito um filtro para carregar todas as transactions onde o ID é diferente desse passado por parametro (transaction.id !== ID))
Após eu vou setar esse id ( setItens(newArray); )
E vou setar tambem o localStorage ( localStorage.setItem ), onde o array é sem o id da exclusão. Dessa forma ele remove o item do nosso banco ( ("transactions", JSON.stringify(newArray)); ) 
*/ 

const Grid = ({itens, setItens}) => {

    const onDelete = (ID) => {
        const newArray = itens.filter((transaction) => transaction.id !== ID);
        setItens(newArray);
        localStorage.setItem("transactions", JSON.stringify(newArray));
    };

  return (
    <C.Table>
        <C.Thead>
            <C.Tr>
                <C.Th width={40}>Descrição</C.Th>
                <C.Th width={40}>Valor</C.Th>
                <C.Th width={10} alignCenter>
                    Tipo
                </C.Th>
                <C.Th width={10}></C.Th>
            </C.Tr>
        </C.Thead>
        <C.Tbody>
            {itens?.map((item, index) => (
                <GridItem key={index} item={item} onDelete={onDelete} />
            ))}
        </C.Tbody>
    </C.Table>
  )
}

export default Grid

/*
obs: coo foi determinado no style do Grid uma porcentagem para width, ele recebe essa porcetagem em C.Th width={40}. fica 40%
*/