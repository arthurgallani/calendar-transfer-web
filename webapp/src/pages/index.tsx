import React from 'react'
import Head from '../../node_modules/next/head'
import Link from '../../node_modules/next/link';
import { Container } from '../styles/pages/Home'
import Create from './transaction/create';
import Find from './transaction/find';

const Home: React.FC = () => {
  return (




    <Container>
      <Head>
        <title>Home</title>
        <meta name="description" content="Transações" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container>


      <div className='content'>

        <div className='container'>

           
            
            

            <div className='container-box-card'>

              <div className='box-description'>

                <h1>Transações</h1>

                <p>Selecione uma das opções</p>  

              </div>

        <div className='box-btn box-btn-out' >
          <Link href={'/transaction/find'}><button className='btn-primary'>Minhas transações</button></Link>
          <Link href={'/transaction/create'}><button className='btn-primary'>Nova transação</button></Link>
        </div>

        </div>
        
        </div>

        </div>

        </Container>
      
    </Container>






  )
}


export default Home