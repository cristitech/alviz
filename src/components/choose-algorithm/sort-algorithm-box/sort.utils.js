const swap = (array, i, j) => {
    array[i] ^= array[j]
    array[j] ^= array[i]
    array[i] ^= array[j]
}

export const bubbleSort = async (array, activePositionsHandler = () => {}, onIterationHook = () => new Promise(), onFinishHook = () => new Promise()) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = 1; j < array.length; j++) {
            await onIterationHook()
            activePositionsHandler(new Set([j - 1, j]), () => {
                if (array[j - 1] > array[j]) {
                    swap(array, j - 1, j);
                }
            })
        }
    }
    // activePositionsHandler(new Set(), () => {});
    onFinishHook()
}

export const selectionSort = async (array, activePositionsHandler = () => {}, onIterationHook = () => new Promise(), onFinishHook = () => new Promise()) => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            await onIterationHook()
            activePositionsHandler(new Set([i, j]), () => {
                if (array[i] > array[j]) {
                    swap(array, i, j)
                }
            })
        }
    }
    onFinishHook()
}

export const insertionSort = async (array, activePositionsHandler = () => {}, onIterationHook = () => new Promise(), onFinishHook = () => new Promise()) => {
    for (let i = 1; i < array.length; i++) {
        let j = i
        while (j > 0) {
            const activePositions = new Set([j])
            const pos = j
            await onIterationHook()
            activePositionsHandler(activePositions, () => {
                if (array[pos] < array[pos - 1]) {
                    swap(array, pos, pos - 1)
                }
                else {
                    // j = 0 // break
                    return
                }
            })

            j--;
        }
    }
    onFinishHook()
}

// const mergeSortMerge = ()

export const mergeSort = async (array, activePositionsHandler = () => {}, onIterationHook = () => new Promise(), onFinishHook = () => new Promise()) => {

}