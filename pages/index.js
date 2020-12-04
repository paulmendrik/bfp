import Head from 'next/head';
import {Column, Content, Navbar} from "rbx";
import Forward from "../components/Forward";
import React from "react";


export default function Home() {
  return (
      <main>
      <Head>
          <title>Bill Funk Photography Intro</title>
          <script src="https://imouse.net/js/tools.js" async></script>
          <script src="https://imouse.net/js/script.js" async></script>
      </Head>
          <Column.Group centered>
              <Column size="two-thirds page">
                  <Navbar>
                      <Navbar.Brand><Navbar.Item href="/"><h1 className="logo">Bill Funk</h1></Navbar.Item></Navbar.Brand>
                      <Navbar.Menu><Navbar.Segment align="end"></Navbar.Segment></Navbar.Menu>
                  </Navbar>
                  <Content className="intro">
                     <Forward/>

                          <p>&copy; Bill Funk Photography. All rights reserved.</p>
                  </Content>
              </Column>
          </Column.Group>
      </main>



  )
}
