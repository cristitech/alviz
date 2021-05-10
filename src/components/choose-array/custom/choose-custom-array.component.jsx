import React from 'react';
import { arrayToString } from '../../../utils/string.utils';
import CustomBox from '../../custom-box/custom-box.component';
import CustomButton from '../../custom-button/custom-button.component';
import CustomTextarea from '../../custom-textarea/custom-textarea.component';

import './choose-custom-array.styles.scss';

class ChooseCustomArray extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
            submitErrorMsg: '',
            numbers: []
        }
    }

    handleArrayChange = (event) => {
        const numbersStr = event.target.value;

        // remove all 
        const numbers = numbersStr
            .replaceAll(/[^0-9,]+/g, '')
            .split(',')
            .filter(num => num.length > 0)
            .map(num => Number(num));
        
        this.setState({...this.state, submitErrorMsg: '', numbers: numbers});
    }

    handleNext = () => {
        const { numbers } = this.state;
        const { history } = this.props;

        if (numbers.length < 2) {
            this.setState({...this.state, submitErrorMsg: 'This array is already sorted!'})
            return;
        }

        history.push({pathname: '/choose/algorithms', state: { numbers }})
    }
    
    render() {
        const { submitErrorMsg, numbers } = this.state;
        const numbersArr = arrayToString(numbers)

        return (
            <div className='choose-custom-array-box'>
                <div className='input-array-box'>
                    <CustomTextarea
                        placeholder='e.g. 1, 2, 3, 10, 6'
                        handleChange={this.handleArrayChange} 
                        style={{minWidth: '500px', minHeight: '200px'}} 
                    />
                </div>
                <div>
                    <CustomBox
                        title={'Array interpreted as'}
                        content={numbersArr} 
                    />
                </div>
                <div style={{padding: '20px'}}>
                    <CustomButton clickHandler={this.handleNext}>Next</CustomButton>
                </div>
                {submitErrorMsg !== '' ? <div>{submitErrorMsg}</div> : null}
            </div>
        );
    }
}

export default ChooseCustomArray;