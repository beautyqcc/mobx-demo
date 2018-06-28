import {observable,action} from 'mobx'


class Red{
    @observable color='red';
    @action changeTogreen=()=>{
        this.color='green';

    };
};
const redStore=new Red();
export default redStore;
