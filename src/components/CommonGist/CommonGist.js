import React from 'react'
import ReactEmbedGist from 'react-embed-gist';

export default function CommonGist({ uri, }) {
  return (
    <ReactEmbedGist gist={uri}/>
  )
}
