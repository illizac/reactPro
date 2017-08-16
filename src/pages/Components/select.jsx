import React from 'react'
import { Select } from 'antd'
const Option = Select.Option

const SelectRen = ({list, defaultKey, width}) => 
	<Select defaultValue={defaultKey ? defaultKey : list[0]} style={{ width: width ? width : 120 }}>
      	{
      		list.map((val, index) => <Option value = {val} key = {index}>{val}</Option>)
      	}
    </Select>

export default SelectRen