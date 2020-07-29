import React, { Children } from 'react';

export default function ButtonLink(props) {
  // props => { className: "o que alguém passar "}
  return (
    <a href={props.href} className={props.className} >
      {props.children}
    </a>
  );
}