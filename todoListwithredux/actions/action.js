import axios from 'axios'

let id = 0;
export function addTodo() {
    return {
        type: 'ADD_TODO',
        id: id++,
    }
}

export function saveInfo(content) {
    return {
        type: 'INPUT_CHANGE',
        content,
    }
}


export function deleteTask(id) {
    return {
        type: 'DELETE_TASK',
        id,
    }
}

export function changeColor() {
    return {
        type: 'COLOR'
    }
}

function asyncInfo() {
    return {
        type: 'REQUEST'
    }
}

function asyncInfoSuccess(data) {
    return {
        type: 'SUCCESS',
        data,
        id: id++
    }
}

function asyncInfoErr(data) {
    return {
        type: 'ERROR',
        data
    }
}



export default {
    fetchInfo: () => {
        return async (dispatch) => {
            dispatch(asyncInfo());
            let response = '';
            try {
                response = await axios.get('https://cnodejs.org/api/v1/topics1');
                dispatch(asyncInfoSuccess(response))
            } catch (e) {
                console.log(response)
                dispatch(asyncInfoErr(response))
            }

        }

    }
}