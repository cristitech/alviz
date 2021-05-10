import './custom-box.styles.scss';

const CustomBox = ({ title, content }) => (
    <div className='custom-wrapper-box'>
        <div className='title-box'>{title}</div>
        <div className='content-box' style={{backgroundColor: '#27272C'}}>
            <pre className='pre-box'>{content}</pre>
        </div>
    </div>
);

export default CustomBox;