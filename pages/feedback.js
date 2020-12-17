import React from 'react';
import Navigation from "../components/Navigation";
import Form from "../components/Form"
import SliceZone from "../components/SliceZone";
import { client } from '../prismic-configuration';
import {RichText} from "prismic-reactjs";
import {Column} from "rbx";

const Feedback = ({ feedback, comments }) => (
    <Column.Group centered>
        <Column size="three-quarters">
            <Navigation/>
            <Column.Group multiline centered>
                <Column className="feedback" size="full">
                    <h1 className="title">Feedback</h1>
                    <img src={feedback.data.image.url} alt="Feedback image" />
                </Column>
                <Column className="text" size="full">
                    {RichText.render(feedback.data.text)}
                </Column>
            </Column.Group>
            <Column.Group multiline centered>
                <Column size="full">
                 <Form/>
                    <SliceZone sliceZone={comments.data.body} />
                </Column>
            </Column.Group>
        </Column>
    </Column.Group>
)

export async function getServerSideProps() {
    const feedback = await client.getSingle('feedback')
    const comments = (await client.getSingle('comments'))

    return { props: { feedback, comments } }
}

export default Feedback