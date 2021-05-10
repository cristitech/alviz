import React from 'react';
import CustomButton from '../custom-button/custom-button.component';

import './choose-array.styles.scss';

const ChooseArray = ({ history }) => (
    <div>
        <div className="choose-array-box">
            <div className='options-text-box'>
                Do you want to customize your input array?
            </div>
            <div className='option-box'>
                <CustomButton style={{minWidth: '250px'}} onClick={() => history.push('/choose/custom')}>Customize</CustomButton>
            </div>
            <div className='option-box'>
                <CustomButton style={{minWidth: '250px'}} onClick={() => history.push('/choose/random')}>Randomly generate</CustomButton>
            </div>
        </div>
    </div>
);

export default ChooseArray;