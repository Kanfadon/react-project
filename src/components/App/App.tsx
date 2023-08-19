import React from 'react';
import './App.less';
import { useSelector, useDispatch } from 'react-redux';
import { add, addAsync } from '../../store/reducers/counter';
import { AppDispatch, RootState } from '../../store';

const App = () => {
    const {value, isLoading} = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();

    return (
        <div>
            <button onClick={() => dispatch(add(1))}>click {value}</button>
            <button disabled={isLoading} onClick={() => dispatch(addAsync(1))}>click async {value}</button>
        </div>
    );
};

export default App;