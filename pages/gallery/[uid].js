import React from 'react';
import Head from "next/head";
import { RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';
import {Column} from 'rbx';
import Back from "../../components/Back"



const Photo = ({ photo }) => (

<Column.Group className="is-mobile" centered>
<Column className="detail" size="two-thirds">
<Head>
<title>{RichText.asText(photo.data.title)}</title>
<link rel="stylesheet" href="/lightbox.min.css" />
<script src="/lightbox.js" ></script>

</Head>
<Back/>
<Column.Group multiline centered>
<Column size="full">
<h1>{RichText.asText(photo.data.title)}</h1>
{RichText.render(photo.data.content)}
</Column>
<Column className="image" size="full" data-action="lightbox">
<figure>
<img className="has-ratio" src={photo.data.photo.url} alt={RichText.asText(photo.data.title)} />
</figure>
</Column>
</Column.Group>
</Column>
</Column.Group>

)


export async function getServerSideProps({ query }) {
const photo = await client.getByUID('photo', query.uid)

return { props: { photo } }
}

export default Photo
