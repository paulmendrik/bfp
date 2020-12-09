import React from 'react';
import { RichText } from 'prismic-reactjs';
import { client } from '../../prismic-configuration';
import {Column} from 'rbx';
import Back from "../../components/Back"


const Photo = ({ photo }) => (

<Column.Group className="is-mobile" centered>
<Column className="detail" size="two-thirds">
<Back/>
<Column.Group multiline centered>
<Column size="full">
<h1>{RichText.asText(photo.data.title)}</h1>
{RichText.render(photo.data.content)}
</Column>
<Column className="image" size="full" uk-lightbox>
<img className="has-ratio" src={photo.data.photo.url} alt="image" />
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
