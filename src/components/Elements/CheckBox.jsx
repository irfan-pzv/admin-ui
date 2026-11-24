function CheckBox(props) {
  const { label, id, ...rest } = props;
  return (
    <>
      <input
        type="checkbox"
        className="text-sm accent-primary"
        name="status"
        id={id}
        {...rest}
      />
      <label htmlFor="status" className="text-sm text-gray-01 ml-3">
        {label}
      </label>
    </>
  );
}

export default CheckBox;
