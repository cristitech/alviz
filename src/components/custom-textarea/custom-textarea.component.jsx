import './custom-textarea.styles.scss';

const CustomTextarea = ({ placeholder, handleChange, ...otherProps }) => (
    <textarea className='custom-textarea' placeholder={`${placeholder ? placeholder : 'Please write some text here...'}`} onChange={handleChange} {...otherProps} />
);

export default CustomTextarea;