import React, { useEffect, useState } from 'react'
import Head from '../../../node_modules/next/head'
import Link from '../../../node_modules/next/link';
import { useRouter } from '../../../node_modules/next/router';
import { CardDetail } from '../../styles/pages/detail';


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

      <Container>

      <div className='content'>

        <div className='container'>

            <h2>Detalhes da transação</h2>

            <div className='container-box-card'>

              <div className='box-card'>

                <div className='form-box-card'>

<div className='label-box-card'>
  <p>Tipo da transação:</p>
  <p className='result'>{data?.transactionType}</p>
</div> 

<div className='label-box-card'>
<p> Conta de origem: </p> 
<p className='result'>{data?.accountFrom}</p>
</div>

<div className='label-box-card'>
<p> Conta de destino: </p> 
<p className='result'>{data?.accountTo}</p>
</div>

<div className='label-box-card'>
<p> Valor da transação: </p> 
<p className='result'>{data?.value}</p>
</div>

<div className='label-box-card'>
<p> Tipo do valor: </p> 
<p className='result'>{data?.valueType}</p>
</div>

<div className='label-box-card'>
<p> Taxa cobrada: </p> 
<p className='result'>{data?.valueTax}</p>
</div>

<div className='label-box-card'>
<p> Valor com taxa: </p> 
<p className='result'>{data?.sumValue}</p>
</div>

<div className='label-box-card'>
<p> Data da transferência: </p> 
<p className='result'>{data?.dateTransfer}</p>
</div>

<div className='label-box-card'>
<p> Data da solicitação: </p> 
<p className='result'>{data?.dateSchedule}</p>
</div>

<div className='label-box-card'>
<p> Saldo atual: </p> 
<p className='result'>{data?.balance}</p>
</div>

        </div>

        </div>

        <div className='box-btn box-btn-out' >
          <Link href={'/transaction/find'}><button className='btn-outline'>Voltar</button></Link>
          <Link href={'/transaction/create'}><button className='btn-primary'>Nova</button></Link>
        </div>

        </div>
        
        </div>

        </div>

        </Container>
      
    </Container>

  )
}

export default Detail