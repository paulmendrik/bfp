import React from 'react';
import Head from "next/head";
import Link from "next/link";
import Navigation from "../../components/Navigation";
import Prismic from 'prismic-javascript';
import { client, linkResolver, hrefResolver } from '../../prismic-configuration';
import {RichText} from "prismic-reactjs";
import {Column, Content, Footer, Card, Image, Title, Pagination} from "rbx";


const Gallery = ({ photos }) => (

<Column.Group className="is-mobile" centered>
<Column size="four-fifths">

<Head>
<title>Bill Funk Photography Gallery</title>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/uikit@3.5.10/dist/css/uikit.min.css" />
<script src="https://cdn.jsdelivr.net/npm/uikit@3.5.10/dist/js/uikit.min.js"></script>
</Head>

<Navigation/>
    <h1 className="title">Gallery</h1>
<Column.Group className="gallery is-mobile" uk-grid="masonry: true">
{ photos.results.map((photo) => (
<Column size="one-third" className="is-full-mobile">
<Card>
<Link href={hrefResolver(photo)} as={linkResolver(photo)} passHref key={photo.uid}>
<a>
<Image.Container>
<img src={photo.data.photo.small.url} alt="gallery image" />
</Image.Container>
<Card.Content>
<Title>{RichText.asText(photo.data.title)}</Title>
</Card.Content>
</a>
</Link>
</Card>
</Column>
))}

</Column.Group>

        <Pagination>
            <Pagination.List>
                <Pagination.Link><Link href="/gallery">1</Link></Pagination.Link>
                <Pagination.Link><Link href="/gallery/2">2</Link></Pagination.Link>
                <Pagination.Link> <Link href="/gallery/3">3</Link></Pagination.Link>
                <Pagination.Link> <Link href="/gallery/4">4</Link></Pagination.Link>
            </Pagination.List>
        </Pagination>

</Column>
</Column.Group>


    )

export async function getServerSideProps() {
    const photos = await client.query(
        Prismic.Predicates.at('document.type', 'photo'),
        { orderings : '[document.last_publication_date desc]' , pageSize : 24, page : 2},
    )

    return { props: { photos } }
}

export default Gallery

