const InputControl = (props) => {
  return (
    <div className="flex flex-col">
      {props.label && (
        <label className="font-medium text-base mb-2">{props.label}</label>
      )}
      <input
        type="text"
        className="rounded-md px-4 py-2 outline-none border-solid border border-black"
        {...props}
      ></input>
    </div>
  );
};

export default InputControl;
