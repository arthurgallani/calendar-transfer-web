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


      <Container>
      
      <div className='content'>

        <div className='container'>

          <h2 className='mb-5'>Realizar transferência</h2>

          <div className='container-box-card'>

          <div className='box-card'>


        <form className='form-box-card' onSubmit={handleSubmit}>

        <p>Dados para transação</p>
       
        
        <input className='input-box-card' id="accountFrom" name="accountFrom" type="text" placeholder="Nr Conta de origem" />
        
        <input className='input-box-card' id="accountTo" name="accountTo" type="text" placeholder="Nr Conta de destino" />

        <input className='input-box-card' id="vl" name="vl" type="text" placeholder="Valor da transferência" />

        <input className='input-box-card' id="dateTransfer" name="dateTransfer" type="text" placeholder="Data da transferência" />


        <button className='btn-primary' type="submit">Enviar</button>

        <Link href={'/transaction/find'}><button className='btn-outline'>Cancelar</button></Link>

      </form>

      </div>

      </div>

      </div>

      </div>

      </Container>
      
      
    </Container>


  )
}


export default Create