const selectStyles2 = {
  option: (provided, state) => ({
    ...provided,
    borderBottom: '1px dotted pink',
    color: state.isSelected ? 'blue' : '',
    fontSize: 16,
    backgroundColor: state.isSelected ? '#eee' : '',
    textAlign: 'left',
    cursor: 'pointer',
  }),
  container: base => ({
    ...base,
    width: '150px',
  }),
  control: base => ({
    ...base,
    height: 32,
    minHeight: 32,
    fontSize: 16,
    borderRadius: 0,
    width: '100%',
    textAlign: 'left',
    cursor: 'pointer',
    borderTop: '0px',
    borderLeft: '0px',
    borderRight: '0px',
  }),
  dropdownIndicator: base => ({
    ...base,
    display: 'none',
  }),
  indicatorSeparator: base => ({
    ...base,
    display: 'none',
  }),
  valueContainer: base => ({
    ...base,
    padding: 0,
    paddingLeft: 2,
  }),
};

export default selectStyles2;
