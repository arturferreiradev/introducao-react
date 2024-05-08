import style from "./Conteudo.module.css";

/* eslint-disable react/prop-types */
const Conteudo = (props) => {
  const { children } = props;
  return <div className={style.Conteudo}>{children}</div>;
};

export { Conteudo };
