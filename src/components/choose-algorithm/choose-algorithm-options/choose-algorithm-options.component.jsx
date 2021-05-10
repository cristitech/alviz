import AlgorithmTypes from './algorithm.types';

import CustomInput from '../../custom-input/custom-input.component';
import CustomButton from '../../custom-button/custom-button.component';

import './choose-algorith-options.styles.scss';

const ChooseAlgorithmOptions = ({ handleAlgorithmChange, handleSimulate }) => (
    <div className='choose-algorithm-options-box' onChange={handleAlgorithmChange}>
        {Object.keys(AlgorithmTypes).map((type, index) => (
            <div key={index} className='alg-option-box'>
                <CustomInput inputType='radio' value={type} name='sortalgo' /> {AlgorithmTypes[type]}
            </div>
        ))}
        <div className='alg-option-box'>
            <CustomButton onClick={handleSimulate}>Simulate</CustomButton>
        </div>
    </div>
);

export default ChooseAlgorithmOptions;