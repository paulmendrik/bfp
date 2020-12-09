import React from 'react';
import Navigation from "../components/Navigation";
import { client } from '../prismic-configuration';
import {RichText} from "prismic-reactjs";
import {Column} from "rbx";

const About = ({ about }) => (
        <Column.Group centered>
        <Column size="four-fifths">
            <Navigation/>
        <Column.Group centered>
        <Column size="one-third">
            <img src={about.data.image.url} alt="about image" />
        </Column>
        <Column className="about" size="two-thirds">
            <h1 className="title">About Me</h1>
            {RichText.render(about.data.text)}
        </Column>
        </Column.Group>
        </Column>
        </Column.Group>
    )

export async function getServerSideProps() {
    const about = await client.getSingle('about')

    return { props: { about } }
}

export default About