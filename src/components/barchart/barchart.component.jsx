import './barchart.styles.scss';

const BarChart = ({ numbers, maxNumber, isArraySorted = false, activePositions = new Set() }) => {
    return (
        <div className='barchart-box'>
            {
                numbers.map((value, index) => {
                        const height = Math.floor(value*100/maxNumber) + '%'
                        const isActive = activePositions.has(index)
                        return <div key={index} className={`bar ${isArraySorted ? 'green' : (isActive ? 'active' : '')}`} style={{height: height}}></div>;
                    }
                )
            }
        </div>
    );
}

export default BarChart;