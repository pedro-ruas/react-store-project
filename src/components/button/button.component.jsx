import "./button.styles.scss";

export function Button(props) {
  const {
    className = "",
    text,
    onClick,
    type = "button",
  } = props;

  return (
    <button type={type} className={`Button ${className}`} onClick={onClick}>{text}</button>
  )
}

export function SecondaryButton(props) {
  return (
    <Button {...props} className="Button-Inverted" />
  )
}