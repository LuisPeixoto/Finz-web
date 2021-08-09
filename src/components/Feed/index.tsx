import React from 'react'
import Card from './Card'

const Feed: React.FunctionComponent = () => {
  return (
    <>
      <Card img="https://images.unsplash.com/photo-1519501025264-65ba15a82390?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=700&q=80" />
      <Card />
      <Card />
      <Card img="https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1071&q=80" />
      <Card />
      {/* <CardNoThumbnail /> */}
    </>
  )
}

export default Feed
