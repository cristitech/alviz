import React from 'react';
import { bubbleSort, selectionSort, insertionSort } from './sort.utils';
import { sleepMs } from '../../../utils/time.utils';

import BarChart from '../../barchart/barchart.component';

import './sort-algorithm-box.styles.scss';
import AlgorithmTypes from '../choose-algorithm-options/algorithm.types';

class SortAlgorithmBox extends React.Component {
    constructor(props) {
        super(props);

        const { numbers, algType } = this.props;

        this.state = {
            algorithm: algType,
            numbersArray: [...numbers],
            maxNumber: Math.max(...numbers),
            activePositions: new Set(),
            isArraySorted: false
        }
    }

    componentDidMount() {
        const { numbersArray, algorithm } = this.state;
        // const { data, rand}
        switch (AlgorithmTypes[algorithm]) {
            case AlgorithmTypes.BUBBLE_SORT: {
                this.bubbleSortWrapper(numbersArray)
                break
            }
            case AlgorithmTypes.SELECTION_SORT: {
                this.selectionSortWrapper(numbersArray)
                break
            }
            case AlgorithmTypes.INSERTION_SORT: {
                this.insertionSortWrapper(numbersArray)
                break
            }
            default: {
                break;
            }
        }
    }

    componentWillUnmount() {
        this.cancelSortingProcess()
    }

    cancelSortingProcess = () => {
        this.setState({...this.state, isArraySorted: true})
    }

    // O(N^2) time, O(1) space
    bubbleSortWrapper = (numbersArray) => {
        bubbleSort(
            numbersArray, 
            (activePositions, afterHook) => {
                if (this.state.isArraySorted) {
                    return;
                }
                else {
                    this.setState({...this.state, numbersArray: [...numbersArray], activePositions: activePositions}, () => afterHook())
                }
            },
            () => sleepMs(0),
            () => {
                this.setState({...this.state, isArraySorted: true})
            }
        );
    }

    // O(N^2) time, O(1) space
    selectionSortWrapper = (numbersArray) => {
        selectionSort(
            numbersArray,
            (activePositions, afterHook) => {
                if (this.state.isArraySorted) {
                    return;
                }
                else {
                    this.setState({...this.state, numbersArray: [...numbersArray], activePositions: activePositions}, () => afterHook())
                }
            },
            () => sleepMs(0),
            () => {
                this.setState({...this.state, isArraySorted: true})
            }
        );
    }

    // O(N^2) time, O(1) space
    insertionSortWrapper = (numbersArray) => {
        insertionSort(
            numbersArray,
            (activePositions, afterHook) => {
                if (this.state.isArraySorted) {
                    return;
                }
                else {
                    this.setState({...this.state, numbersArray: [...numbersArray], activePositions: activePositions}, () => afterHook())
                }
            },
            () => sleepMs(0),
            () => {
                this.setState({...this.state, isArraySorted: true})
            }
        )
    }

    render() {
        const { numbersArray, maxNumber, activePositions, isArraySorted } = this.state;
        return (
            <div>
                <BarChart numbers={numbersArray} maxNumber={maxNumber} activePositions={activePositions} isArraySorted={isArraySorted} />
            </div>
        );
    }
}

export default SortAlgorithmBox;