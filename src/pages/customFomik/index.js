import React from 'react';
import PropTypes from 'prop-types';
import { Select, FormGroup } from 'reactstrap';

customFomik.propTypes = {
    field: PropTypes.isRequired,
    form: PropTypes.isRequired,

    label: PropTypes.string,
    placeholder: PropTypes.string,
    disabled: PropTypes.bool,
    options: PropTypes.array,
};

customFomik.defaultProps = {
    label: '',
    placeholder: '',
    disabled: false,
    options: [],
};

function customFomik(props) {
    const handleChange = (selectOption) => {
        const selectedValue = selectOption ? selectOption.value : selectOption;

        const changeEvent = {
            target: {
                name: name,
                value: selectedValue,
            },
        };
        field.onChange(changeEvent);
    };
    const { field, form, label, options, placeholder, disabled } = props;

    const { name } = field;
    return (
        <FormGroup>
            <Select
                {...field}
                id={name}
                Placeholder={placeholder}
                options={options}
                isDisabled={disabled}
                onChange={handleChange}
            />
        </FormGroup>
    );
}

export default customFomik;
