import Prismic from "prismic-javascript";

export const apiEndpoint = 'https://funk.cdn.prismic.io/api/v2'
export const accessToken = process.env.PRISMIC_TOKEN;
export const client = Prismic.client(apiEndpoint, { accessToken })


export const linkResolver = (doc) => {

  if (doc.type === 'photo') {
    return `/gallery/${doc.uid}`
  }

  if (doc.type === 'about') {
    return `/about`
  }


if (doc.type === 'feedback') {
  return `/feedback`
}

return '/'

}


export const hrefResolver = (doc) => {

  if (doc.type === 'photo') {
    return `/gallery/${doc.uid}`
  }

  if (doc.type === 'about') {
    return `/about`
  }


if (doc.type === 'feedback') {
  return `/feedeback`
}
  return '/'
}
