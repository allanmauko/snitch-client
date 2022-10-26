import React from 'react'
import Article from './article'

function Articles({articles, removeArticle}) {
  return (
    <>
        <div>
          <h1>What to read next...</h1>
        </div>
        <div>
          {articles.map((article) => {
            return (
              <Article key={article.id} {...article} removeArticle={removeArticle} />
            )
          })}
        </div>
        {/* <Article /> */}
    </>

  )
}

export default Articles


