import classes from "./CssModules.module.scss";

export default function CssModules() {
  const { container, title, button } = classes;
  return (
    <div className={container}>
      <p className={title}>- CSS Modules -</p>
      <button className={button}>FIGHT !</button>
    </div>
  )
}
