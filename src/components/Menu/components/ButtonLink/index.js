import React from 'react';

function ButtonLink(props) {
  //props => { 
  // className: "o valor passado",
  // href: "/",
  // children: "texto dentro da tag"
  //}
  return (
    <a className={props.className} href={props.href}>Novo vídeo</a>
  );
}

export default ButtonLink;