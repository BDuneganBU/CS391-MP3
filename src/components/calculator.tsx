import { useReducer } from "react";

// set the types for the State interface
interface State {
    firstNumber: number;
    secondNumber: number;
    res: number;
  }

// declare types for Action (operators come with no payload)
type Action =
  | { type: 'UPDATE_FIRST'; payload: string }
  | { type: 'UPDATE_SECOND'; payload: string }
  | { type: 'ADDITION' }
  | { type: 'SUBTRACTION' }
  | { type: 'MULTIPLICATION' }
  | { type: 'DIVISION' }
  | { type: 'POWER' };

const initialState = {
    firstNumber: 0,
    secondNumber: 0,
    res: 0,
};

//must declare types for state and action or else typescript throws a fit??
function reducer(state: State, action: Action) : State {
    switch(action.type) {
        case 'UPDATE_FIRST':
            return {
                ...state,
                firstNumber: parseFloat(action.payload)
            };
        case 'UPDATE_SECOND':
            return {
                ...state,
                secondNumber: parseFloat(action.payload)
            };
        case 'ADDITION':
            return {
                ...state,
                res: state.firstNumber + state.secondNumber
            }
        case 'SUBTRACTION':
            return {
                ...state,
                res: state.firstNumber - state.secondNumber
            }
        case 'MULTIPLICATION':
            return {
                ...state,
                res: state.firstNumber * state.secondNumber
            }
        case 'DIVISION':
            return {
                ...state,
                res: state.firstNumber / state.secondNumber
            }
        case 'POWER':
            return {
                ...state,
                res: power(state.firstNumber, state.secondNumber),
            }
        default :
            return state;
    }

}

// function for power operation using a for loop
const power = (first: number, second: number): number => {
    let result = 1;
    
    for (let i = 0; i < second; i++) {
      result *= first;
    }
    
    return result;
};

//Main calculator component
export default function Calculator() {
    const [state, dispatch] = useReducer(reducer, initialState);

    //function to make the result red if it is negative
    const resultStyle = {
        color: 
            state.res < 0 
                ? 
                'red' 
                : 
                'black',
        margin: "1%"
    };
    
    return (
        <div style={{background: "rgb(158, 144, 99)", width: "20%", margin: "1%"}}>
            <h3>Calculator</h3>
            <div style={{margin: "1%"}}>
            <input
                id="first"
                type="number"
                value={state.firstNumber}
                placeholder="First Number"
                onChange={(e) => dispatch({type: 'UPDATE_FIRST', payload: e.target.value})}
                style={{ width: '80%', padding: '1%'}}
            />
            </div>
            <div style={{margin: "1%"}}>
            <input
                id="second"
                type="number"
                value={state.secondNumber}
                placeholder="Second Number"
                onChange={(e) => dispatch({type: 'UPDATE_SECOND', payload: e.target.value})}
                style={{ width: '80%', padding: '1%'}}
            />
            </div>
            <div style={{margin: "1%"}}>
                    <button style={{padding: "2%", margin: "0% 1%"}} onClick={() => dispatch({type: "ADDITION"})}>+</button>
                    <button style={{padding: "2%", margin: "0% 1%"}} onClick={() => dispatch({type: "SUBTRACTION"})}>-</button>
                    <button style={{padding: "2%", margin: "0% 1%"}} onClick={() => dispatch({type: "MULTIPLICATION"})}>*</button>
                    <button style={{padding: "2%", margin: "0% 1%"}} onClick={() => dispatch({type: "DIVISION"})}>/</button>
                    <button style={{padding: "2%", margin: "0% 1%"}} onClick={() => dispatch({type: "POWER"})}>^</button>
            </div>
            <h3 style={resultStyle}>Result: {state.res}</h3>
        </div>
    );
}