import React, { useState } from 'react'

function Article({id, name, info, image, price}) {
  return (
    <div>
        <div class="row row-cols-1 row-cols-md-3 g-4">
<div class="col">
    <div class="card h-100">
    <img src={image} class="card-img-top" alt="..."/>
    <div class="card-body">
        <h5 class="card-title">{name}</h5>
        <p class="card-text">{info}</p>
    </div>
    <div class="card-footer">
        <small class="text-muted">{price}</small>
    </div>
    </div>
</div>
</div>
    </div>
  )
}

export default Article