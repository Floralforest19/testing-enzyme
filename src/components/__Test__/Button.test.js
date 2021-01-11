import Button from '../Button';
import {shallow, mount} from 'enzyme';

describe("Test App.js", () => {
    it("click on button", () => {
        const wrapper = shallow(<Button />)
        wrapper.find('button').simulate("click")
        exapect(wrapper.find(""))
    })
})