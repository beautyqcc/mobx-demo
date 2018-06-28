import React ,{Component} from 'react'
import {observable,action} from 'mobx'
class Test {
    @observable num=1;
    @action.bound  changeNum(){
        this.num=250;
    }
}
const test=new Test();
export default test;