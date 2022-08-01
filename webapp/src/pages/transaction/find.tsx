import React, { useEffect, useState } from 'react'
import Head from '../../../node_modules/next/head'
import Link from '../../../node_modules/next/link';
import { Container } from '../../styles/pages/Home'

import Home from '../index'
import { Transaction } from './transaction';

const Find: React.FC = () => {

    const [data, setData] = useState<Transaction[]>([])

    useEffect(() => {
        fetch('http://localhost:8080/transfers').then(response => {

            response.json().then(transactions => {
                setData(transactions)
            })
        })
    }, [])

  return (

    <Container>
      <Head>
        <title>Transações</title>
        <meta name="description" content="Transações" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <h1>Transferências</h1>
      
      <Container>
        <table>
        <thead><tr>
                <th>Tipo tx</th>
                <th>Conta (de)</th>
                <th>Conta (para)</th>
                <th>Valor</th>
                <th>Tipo vl</th>
                <th>Taxa</th>
                <th>Valor total</th>
                <th>Data transferência</th>
                <th>Data solicitada</th>
                <th>Saldo</th>
            </tr></thead>

            <tbody>
                {data.map(tx => (
                    
                    <Link href={{pathname:"/transaction/detail", query: {...tx}}}><tr>
                        <td>
                        
                                {tx.transactionType}
                                
                        </td>
                        <td>{tx.accountFrom}</td>
                        <td>{tx.accountTo}</td>
                        <td>{tx.value}</td>
                        <td>{tx.valueType}</td>
                        <td>{tx.valueTax}</td>
                        <td>{tx.sumValue}</td>
                        <td>{tx.dateTransfer}</td>
                        <td>{tx.dateSchedule}</td>
                        <td>{tx.balance}</td>
                         </tr></Link>
                   
                
                ))}
            </tbody>
        </table>
                    <br /><br /><br />
        <Link href={'/'}><button>Home</button></Link>
      </Container>


      

    </Container>


  )
}


export default Find