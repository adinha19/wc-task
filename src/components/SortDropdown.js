import React, { useState } from "react";
import { Dropdown, DropdownItem, DropdownMenu, DropdownToggle } from "reactstrap";

const SortDropdown = ({ setSort }) => {

    const [dropdown, setDropdown] = useState(false)

    const onDropdownItemClick = (e) => setSort(e.target.value)

    const toggle = () => setDropdown(!dropdown)

    const dropdownItems = [
        { value: "popularity", name: "Popularity" },
        { value: "relevancy", name: "Relevancy" },
        { value: "publishedAt", name: "Date Published" }
    ]

    return (<Dropdown isOpen={dropdown} toggle={toggle}>
        <DropdownToggle color="link" caret style={{ textDecoration: "none" }}>Sort By Section</DropdownToggle>
        <DropdownMenu>
            {dropdownItems?.map((item) => {
                return <DropdownItem key={item.name} value={item.value} onClick={(e) => onDropdownItemClick(e)}>{item.name}</DropdownItem>
            })}
        </DropdownMenu>
    </Dropdown>)
}

export default SortDropdown