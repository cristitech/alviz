import { Component } from 'react';
import { arrayToString } from '../../../utils/string.utils';

import CustomBox from '../../custom-box/custom-box.component';
import CustomButton from '../../custom-button/custom-button.component';
import CustomInput from '../../custom-input/custom-input.component';

import './choose-random-array.styles.scss';


class ChooseRandomArray extends Component {

    constructor(props) {
        super(props);
        
        this.state = {
            genArrSize: 50,
            genMaxNumber: 100,
            numbers: this.generateArray(50),
            submitErrorMsg: ''
        }
    }

    generateArray = (size, maxNumber = 100) => {
        let numbers = []
        for (let currentSize = 0; currentSize < size; currentSize++) {
            numbers.push(Math.floor(Math.random() * maxNumber))
        }
        return numbers;
    }

    handleArrSizeChange = (event) => {
        const { value } = event.target;
        this.setState({...this.state, genArrSize: value});
    }

    handleMaxSizeChange = (event) => {
        const { value } = event.target;
        this.setState({...this.state, genMaxNumber: value});
    }

    handleGenerate = () => {
        const { genArrSize, genMaxNumber } = this.state;
        this.setState({...this.state, numbers: this.generateArray(genArrSize, genMaxNumber)});
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
    
    arrayToString

    render() {
        const { numbers, genArrSize, genMaxNumber, submitErrorMsg } = this.state;
        const numbersStr = arrayToString(numbers);

        return (
            <div className='choose-random-array-box'>
                <div className='choose-random-settings-box'>
                    <div>
                        <div className='settings-row'>
                            <label>Array size</label>
                            <CustomInput inputType='number' value={genArrSize} min={0} max={1000} style={{width: '100px', margin: '0px 10px'}} handleChange={this.handleArrSizeChange} />
                        </div>
                        <div className='settings-row'>
                            <label>Max Number</label>
                            <CustomInput inputType='number' value={genMaxNumber} min={0} max={10000} style={{width: '100px', margin: '0px 10px'}} handleChange={this.handleMaxSizeChange} />
                        </div>
                    </div>
                    <div>
                        <CustomButton clickHandler={this.handleGenerate}>Regenerate</CustomButton>
                    </div>
                </div>
                <div>
                    <CustomBox
                        title={'Generated array is'}
                        content={numbersStr} 
                    />
                </div>
                <div style={{padding: '20px'}}>
                    <CustomButton clickHandler={this.handleNext}>Next</CustomButton>
                </div>
                {submitErrorMsg === '' ? null : <div>This array is already sorted!</div>}
            </div>
        );
    }
}

export default ChooseRandomArray;