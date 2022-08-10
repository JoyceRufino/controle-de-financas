import React, { useState, useEffect } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Resume from "./components/Resume";
import Global from "./styles/Global";

/* 
data ? JSON.parse(data) : [] 
vai verificar se existe um item no meu localStorage, 
se existe vai parsiar para JSON para eu poder tratar esses dados, 
caso não, ele vai retornar uma lista vazia

const [income, setIncome] = useState(0); São as entradas nos states
const [expense, setExpense] = useState(0); São as saidas
const [total, setTotal] = useState(0); São Para o total

*/
function App(){
    const data = localStorage.getItem("transactions");
    const [transactionsList, setTransactionsList] = useState(
        data ? JSON.parse(data) : []
    )
    const [income, setIncome] = useState(0);
    const [expense, setExpense] = useState(0);
    const [total, setTotal] = useState(0);

/*
o useEffect tem como dependencia o transactionsList. Ou seja quando mudar essa lista de transação ele vai efeturar os calculos novamente. 
-Como funciona a soma dos totais: 
ao declarar a const amountExpense que vai pegar da transactionsList, ele vai filtrar os itens que tem o expense true (que são saídas), e dentro dessas saídas ele vai mapear os itens que são os amount(valor). 
Ou seja,  ele esta pegando o valor das saídas. 
No const amountInCome acontece a mesma lógica porém no filter ele vai pegar o que são diferentes de saídas(!item.expense // as entradas)
No const expense, ele vai fazer um reduce amountExpense, para pegar a soma de todas as saídas. e o mesmo com o amountInCome para todas as entradas. 


*/     
    useEffect(() => {
        const amountExpense = transactionsList
        .filter((item) => item.expense)
        .map((transaction) => Number(transaction.amount));

        const amountInCome = transactionsList
        .filter((item) => !item.expense)
        .map((transaction) => Number(transaction.amount));

        const expense = amountExpense.reduce((acc, cur) => acc + cur, 0).toFixed(2);
        const income = amountInCome.reduce((acc, cur) => acc + cur, 0).toFixed(2);

        const total = Math.abs(income - expense).toFixed(2);

        setIncome(`R$ ${income}`);
        setExpense(`R$ ${expense}`);
        setTotal(`${Number(income) < Number(expense) ? "-" : ""} R$ ${total}`)
    }, [transactionsList])


    const handleAdd = (transaction) => {
      const newArrayTransactions = [...transactionsList, transaction]  
      setTransactionsList(newArrayTransactions);

      localStorage.setItem("transactions", JSON.stringify(newArrayTransactions));
        
    };


    return(
        <>
            <Header />
            <Resume income={income} expense={expense} total={total} />
            <Form   handleAdd={handleAdd}
                    transactionsList={transactionsList}
                    setTransactionsList={setTransactionsList} />
            <Global />
        </>
    )
}

export default App