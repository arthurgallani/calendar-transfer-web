import React, { useEffect, useState } from 'react'
import Head from '../../../node_modules/next/head'
import Link from '../../../node_modules/next/link';
import { Container } from '../../styles/pages/Home'

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

      
      
      <Container>

        <div className='content'>

          <div className='container'>

            <h2 className='mb-5'>Histórico</h2>

          <div className='table-responsive'>
        <table className='custom-table table table-striped'>
        <thead><tr>
                <th scope="col">Tipo tx</th>
                <th scope="col">Conta (de)</th>
                <th scope="col">Conta (para)</th>
                <th scope="col">Valor</th>
                <th scope="col">Tipo vl</th>
                <th scope="col">Taxa</th>
                <th scope="col">Valor total</th>
                <th scope="col">Data transferência</th>
                <th scope="col">Data solicitada</th>
                <th scope="col">Saldo</th>
            </tr></thead>

            <tbody>
                {data.map(tx => (
                    
                    
                      <tr>
                        <td>{tx.transactionType}</td>
                        <td>{tx.accountFrom}</td>
                        <td>{tx.accountTo}</td>
                        <td>{tx.value}</td>
                        <td>{tx.valueType}</td>
                        <td>{tx.valueTax}</td>
                        <td>{tx.sumValue}</td>
                        <td>{tx.dateTransfer}</td>
                        <td>{tx.dateSchedule}</td>
                        <td>{tx.balance}</td>
                        <Link href={{pathname:"/transaction/detail", query: {...tx}}}><td><a className='more'>Detalhes</a></td></Link>
                         </tr>
                   
                
                ))}
            </tbody>
        </table>

        
        </div>
        
        <div className='box-btn' >
          <Link href={'/'}><button className='btn-outline'>Home</button></Link>
          <Link href={'/transaction/create'}><button className='btn-primary'>Nova</button></Link>
        </div>
        
        </div>

                    
        </div>
      </Container>


      

    </Container>


  )
}


export default Find