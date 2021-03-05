import React from 'react';
import Head from 'next/head'
import { Jumbotron, Container } from 'reactstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Menu from '../components/Menu';
import Rodape from '../components/Rodape';

library.add(fas);

function Home() {
    return (
        <div>
            <Head>
                <title>Home - Mfcbentes</title>
            </Head>

            <Menu />

            <Jumbotron fluid className="descr-top">
                <style>
                    {`.descr-top{
                        background-color: #050c3d;
                        color: #00a1fc;
                        margin-bottom: 0rem !important;
                    }`}
                </style>
                <Container className="text-center">
                    <h1 className="display-4">Temos a solução que sua empresa precisa!</h1>
                    <p className="lead">This is a simple hero unit, a simple Jumbotron-style
                    componet from calling extra attetion to featured content or information.</p>
                    <p className="lead">
                        <a href="/orcamento" className="btn btn-outline-primary btn-lg mt-4">Orçamento</a>
                    </p>
                </Container>
            </Jumbotron>

            <Jumbotron fluid className="servicos">
                <style>
                    {`.servicos{
                        background-color: #fff;
                        margin-bottom: 0rem !important;
                    }
                    .circulo{
                        width: 140px;
                        height: 140px;
                        background-color: #0a197d;
                        font-size: 52px;
                        color: #fff;
                        padding-top: 24px;
                    }
                    .centralizar{
                        margin: 0 auto !important;
                        float: none !important;
                    }`}
                </style>
                <Container className="text-center">
                    <div>
                        <h2 className="display-4">Serviços</h2>
                        <p className="lead pb-4">Mauris vitae metus id felis blandit cursus. Donec non rhoncus erat. Nulla scelerisque eleifend libero, eget accumsan odio auctor in.</p>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="laptop-code" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço um</h2>
                            <p>
                                Duis dapibus volutpat nisl in consectetur. Quisque in convallis lorem.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="mobile-alt" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço dois</h2>
                            <p>
                                Donec lacus nunc, faucibus sit amet rutrum vel, consectetur sit amet erat.
                            </p>
                        </div>
                        <div className="col-md-4">
                            <div className="rounded-circle circulo centralizar">
                                <FontAwesomeIcon icon="network-wired" />
                            </div>
                            <h2 className="mt-4 mb-4">Serviço três</h2>
                            <p>
                                Nulla elementum porta nulla, a venenatis dolor eleifend suscipit.
                            </p>
                        </div>
                    </div>
                </Container>
            </Jumbotron>

            <Rodape />

        </div>
    )
}

export default Home;