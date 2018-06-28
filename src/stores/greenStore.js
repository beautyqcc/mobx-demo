import {observable,action} from 'mobx'
class Green {
    @observable showse='green';
    @action.bound
    changeToRed(){
        this.showse='red'
    }
}
const greenStore=new Green();
export  default greenStore;