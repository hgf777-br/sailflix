import React from 'react';
import propTypes from 'prop-types';

function FormField({
  label, type, name, value, onChange,
}) {
  const fieldID = 'id_$(name)';
  return (
    <div>
      <label htmlFor={fieldID}>
        {label}
        <input
          id={fieldID}
          type={type}
          value={value}
          name={name}
          onChange={onChange}
        />
      </label>
    </div>
  );
}

FormField.defaultProps = {
  type: 'text',
  value: '',
  onChange: () => {},
};

FormField.propTypes = {
  label: propTypes.string.isRequired,
  type: propTypes.string,
  name: propTypes.string.isRequired,
  value: propTypes.string,
  onChange: propTypes.func,

};

export default FormField;
