import React, { useEffect, useState } from 'react';

import './App.less';
import { useSelector, useDispatch } from 'react-redux';
import { add, addAsync } from '../../store/reducers/counter';
import { AppDispatch, RootState } from '../../store';
import axios from 'axios';

const App = () => {
    const { value, isLoading } = useSelector((state: RootState) => state.counter);
    const dispatch = useDispatch<AppDispatch>();
    const [users, setUsers] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users').then(({data}) => {
            setUsers(data);
        });
    }, []);

    return (
        <div>
            <button onClick={() => dispatch(add(1))}>click {value}</button>
            <button disabled={isLoading} onClick={() => dispatch(addAsync(1))}>click async {value}</button>
            <div>name: {users?.[0]?.name}</div>
        </div>
    );
};

export default App;