import styled from "styled-components";

export const Table = styled.table`
    width: 98%;
    background-color: #fff;
    padding: 20px;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    max-width: 1120px;
    margin: 20px auto;
`;

export const Thead = styled.thead``;

export const Tbody = styled.tbody``;

export const Tr = styled.tr``;

/*
Passando propriedades:
em text-align, para que quando ele receber alignCenter como propriedade ele vai centralizar, se não ele vai ficar no start
em width, ele vai receber algumas propriedades para ficar responsivo as colunas 
*/ 
export const Th = styled.th`
    border-bottom: inset;
    padding-bottom: 6px;
    text-align: ${(props) => (props.alignCenter ? "center" : "start")};
    width: ${(props) => (props.width ? props.width + "%" : "auto")};
`;