
import './custom-input.styles.scss';

const CustomInput = ({ inputType, handleChange, ...otherProps }) => (
    <input type={inputType ? inputType : 'text'} onChange={handleChange} className='custom-input' {...otherProps} /> 
);

export default CustomInput;