import React,{Component} from 'react'
import {Input,Select,Icon} from 'antd'
const Option = Select.Option;
const Search = Input.Search;

class InputDemo extends Component{
    // const selectBefore = (
    //     <Select defaultValue="Http://" style={{ width: 90 }}>
    //         <Option value="Http://">Http://</Option>
    //         <Option value="Https://">Https://</Option>
    //     </Select>
    // );
    // const selectAfter = (
    //     <Select defaultValue=".com" style={{ width: 80 }}>
    //         <Option value=".com">.com</Option>
    //         <Option value=".jp">.jp</Option>
    //         <Option value=".cn">.cn</Option>
    //         <Option value=".org">.org</Option>
    //     </Select>
    // );
    render(){
        return (
            <div>
                <Search
                    placeholder="input search text"
                    onSearch={value => console.log(value)}
                    style={{ width: 200 }}
                />
                <Input addonAfter='.com' addonBefore='http://'/><br/>
                <Input addonAfter='after'/>
            </div>
        );
    }

}
export default InputDemo;