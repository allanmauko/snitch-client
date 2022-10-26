import React from 'react'
import Article from './article'

function Articles({articles}) {
  return (
    <>
        <div>
          <h1>What to read next...</h1>
        </div>
        <div>
          {articles.map((article) => {
              return(
                 <Article key={article.id} {...article} /> 
              )
          }
        )}
        </div>
        {/* <Article /> */}
    </>

  )
}

export default Articles


