import React from 'react';

export default ({ data }) => (
  <div className="label-box">
    <ul>
      <li>Title: {data.title}</li>
      <li>Size: {data.size}</li>
      <li>Category: {data.category}</li>
      <li>Medium: {data.medium}</li>
      <li>Genre: {data.genre}</li>
      <li>Price: {data.price}</li>
    </ul> 
    <span class='post-labels'>
      Labels:  &nbsp;
      <a href='/search/label/{data.title}' rel='tag'>{data.title}</a>, &nbsp;
      <a href='/search/label/{data.size}' rel='tag'>{data.size}</a>, &nbsp;
      <a href='/search/label/{data.genre}' rel='tag'>{data.genre}</a>, &nbsp;
      <a href='/search/label/{data.category}' rel='tag'>{data.category}</a>, &nbsp;
      <a href='/search/label/{data.medium}' rel='tag'>{data.medium}</a>, &nbsp;
      <a href='/search/label/{data.price}' rel='tag'>price {data.price}</a>
    </span>
  </div>
);
