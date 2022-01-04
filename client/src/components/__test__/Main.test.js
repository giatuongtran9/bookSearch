import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

import Main from '../Main/Main'

it('should render Main component', () => {
    const wrapper = shallow(<Main/>)
    expect(toJson(wrapper)).toMatchSnapshot()

})