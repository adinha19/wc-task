import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";
import { setSort, clearSearch } from "../../actions/actions";
import { dropdownItems } from "../../assets/dropdownItems";

const SortAndClear = () => {

    const [dropdown, setDropdown] = useState(false)

    const dispatch = useDispatch()

    const onDropdownItemClick = (e) => dispatch(setSort(e.target.value))

    const toggle = () => setDropdown(!dropdown)

    const onClearSearch = () => dispatch(clearSearch())

    return (<div className="d-flex flex-row justify-content-between m-1" >
        <Button color="link" onClick={onClearSearch}>Clear Search</Button>
        <Dropdown isOpen={dropdown} toggle={toggle}>
            <DropdownToggle color="link" caret style={{ textDecoration: "none" }}>Sort By Section</DropdownToggle>
            <DropdownMenu>
                {dropdownItems?.map((item) => {
                    return <DropdownItem key={item.name} value={item.value} onClick={(e) => onDropdownItemClick(e)}>{item.name}</DropdownItem>
                })}
            </DropdownMenu>
        </Dropdown>
    </div >)
}

export default SortAndClear