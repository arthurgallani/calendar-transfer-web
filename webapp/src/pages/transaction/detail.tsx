import React, { useEffect, useState } from 'react'
import Head from '../../../node_modules/next/head'
import { useRouter } from '../../../node_modules/next/router';


import { Container } from '../../styles/pages/Home'

import Home from '../index'
import { Transaction } from './transaction';


const Detail: React.FC = () => {

  const router = useRouter();
  const query = router.query;
  const id = query.id;

    const [data, setData] = useState<Transaction>()

    useEffect(() => {
        fetch(`http://localhost:8080/transfers/${id}`).then(response => {
            response.json().then(transaction => {
                setData(transaction)
            })
        })
    }, [id])

  return (
    <Container>
      <Head>
        <title>Transações</title>
        <meta name="description" content="Transações" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <h1>Detalhe da transferência</h1>
      
      <Container>
        <p>Tipo tx: {data?.transactionType}</p>
        <p>Conta (de): {data?.accountFrom}</p>
        <p>Conta (para): {data?.accountTo}</p>
        <p>Valor: {data?.value}</p>
        <p>Tipo vl: {data?.valueType}</p>
        <p>Taxa: {data?.valueTax}</p>
        <p>Valor total: {data?.sumValue}</p>
        <p>Data transferência: {data?.dateTransfer}</p>
        <p>Data solicitada: {data?.dateSchedule}</p>
        <p>Saldo atual: {data?.balance}</p>
      </Container>
      
    </Container>

  )
}

export default Detail