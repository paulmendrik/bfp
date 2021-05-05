import Head from 'next/head';
import Image from 'next/image';
import {Column, Content, Navbar, Footer} from "rbx";
import Forward from "../components/Forward";
import React from "react";
import Particles from 'react-particles-js';



export default function Home() {
  return (
      <main>
      <Head>
          <title>Bill Funk Photography Intro</title>
          <link rel="manifest" href="/manifest.json" />  
      </Head>
        <Column.Group centered>
        <Column size="two-thirds page">
        <Navbar>
        <Navbar.Brand><Navbar.Item href="/"><h1 className="logo">Bill Funk</h1></Navbar.Item></Navbar.Brand>
        <Navbar.Menu><Navbar.Segment align="end"></Navbar.Segment></Navbar.Menu>
        </Navbar>
        <Column.Group centered>
        <Column className="main" size="full">
        <Particles />
        </Column>
        </Column.Group>
        <Column.Group>
        <Column size="full">
        <Footer>
        <Content textAlign="centered">
            <Forward />
        <p className="is-size-7">&copy; Bill Funk Photography. All rights reserved.</p>
        </Content>
        </Footer>  
        </Column>
        </Column.Group>
        </Column>
        </Column.Group> 
      </main>



  )
}
