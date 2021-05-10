import React from 'react';
import { Redirect } from 'react-router';
import AlgorithmTypes from './choose-algorithm-options/algorithm.types';

// import CustomInput from '../custom-input/custom-input.component';
import ChooseAlgorithmOptions from './choose-algorithm-options/choose-algorithm-options.component';
import SortAlgorithmBox from './sort-algorithm-box/sort-algorithm-box.component';

import './choose-algorithm.styles.scss';

class ChooseAlgorithm extends React.Component {

    constructor(props) {
        super(props);
        
        this.state = {
            algTypeError: '',
            algType: '',
            simulatationRunning: false,
            numbers: this.props?.location?.state?.numbers
        }
    }

    handleAlgorithmChange = (event) => {
        const { value } = event.target;
        this.setState({...this.state, algType: value, algTypeError: '', simulatationRunning: false});
    }

    handleSimulate = () => {
        const { algType } = this.state;
        
        if (algType in AlgorithmTypes) {
            this.setState({...this.state, simulatationRunning: true})
        }
        else {
            this.setState({...this.state, algTypeError: 'Algorithm not implemented!', simulatationRunning: false});            
        }
        
    }

    render() {
        const { numbers, algTypeError, algType, simulatationRunning } = this.state;

        return (
                Array.isArray(numbers) ? 
                    <div>
                        <ChooseAlgorithmOptions handleAlgorithmChange={this.handleAlgorithmChange} handleSimulate={this.handleSimulate} />
                        {
                            algTypeError !== '' ? 
                                <div>{algTypeError}</div> :
                                (simulatationRunning ? <SortAlgorithmBox numbers={numbers} algType={algType} /> : null)
                        }
                    </div> : 
                    <Redirect to="/" />
        );
    }
    
}

export default ChooseAlgorithm;