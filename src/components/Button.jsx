function Button({ children, onClick, disabled }) {
  return (
    <button onClick={onClick} disabled={disabled} className="btndesign">
      {children}
    </button>
  );
}

export default Button;
