import React from 'react'
import { Input, Navbar, Button, InputGroup } from 'reactstrap'
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'
import { getNews, onSearchChange } from '../actions/actions';

const Header = () => {
    const search = useSelector(state => state.search.search)
    const history = useHistory()
    const dispatch = useDispatch()
    
    const onTitleClick = () => {
        history.push('/')
    }

    const onChange = (e) => {
        dispatch(onSearchChange(e.target.value))
    }

    const onSearchClick = () => {
        dispatch(getNews(search))
    }

    return (<Navbar expand >
        <div role="button" onClick={onTitleClick} className="fs-4">News App</div>
        <InputGroup className='w-50'>
            <Input value={search} onChange={onChange} />
            <Button color="primary" onClick={onSearchClick}>Search</Button>
        </InputGroup>
    </Navbar>)
}

export default Header