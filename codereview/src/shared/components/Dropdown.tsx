import './Dropdown.css';

export type DropdownItem = {
  value: any,
  name: string | number
}

function DropdownComponent(props: { data: DropdownItem[] , onSelect: (item: any) => void, label: string}) {
    return (
        <div className="dropdown">
            <label className="dropdown__label"> Filter By {props.label}</label>
            <select className="dropdown__select" onChange={(evt) => props.onSelect(evt.target.value)}>
            {
                props.data.map(item => (
                    <option value={item.value} key={item.value}>{item.name}</option>
                    ))
                }
            </select> 
        </div>
    )
}

export default DropdownComponent;
