import React, { useState } from 'react'
import Head from '../../../node_modules/next/head'
import Link from '../../../node_modules/next/link'
import Router from '../../../node_modules/next/router'

import { Container } from '../../styles/pages/Home'

import Home from '../index'
import { Transaction } from './transaction'


const Create: React.FC = () => {

  const handleSubmit = async (event) => {
    event.preventDefault()

    const data = {
      accountFrom: event.target.accountFrom.value,
      accountTo: event.target.accountTo.value,
      value: event.target.vl.value,
      dateTransfer: event.target.dateTransfer.value
    }
    const JSONdata = JSON.stringify(data)

    const endpoint = 'http://localhost:8080/transfers'

    const options = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSONdata,
    }

    const response = await fetch(endpoint, options)
    const result = await response.json()


    Router.push("/transaction/find");
  }

  return (

    <Container>
      <Head>
        <title>Transações</title>
        <meta name="description" content="Transações" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      
      <h1>Realizar transferência</h1>
      
      <form onSubmit={handleSubmit}>

      <Container>

        <p>Dados para transferência</p>
        <br />
        
        <input id="accountFrom" name="accountFrom" type="text" placeholder="Nr Conta de origem" />
        
        <br />
        
        <input id="accountTo" name="accountTo" type="text" placeholder="Nr Conta de destino" />

        <br />

        <input id="vl" name="vl" type="text" placeholder="Valor da transferência" />

        <br />

        <input id="dateTransfer" name="dateTransfer" type="text" placeholder="Data da transferência" />
        
         <br />

        <button type="submit">Enviar</button>
        <br />
        <Link href={'/transaction/find'}><button>Cancelar</button></Link>

        </Container>
      </form>
      
      
    </Container>


  )
}


export default Create