// @ts-nocheck
import React from "react";
import { configure, shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import NavigationItems from "./NavigationItems";
import NavigationItem from "./NavigationItem/NavigationItem";
configure({ adapter: new Adapter() });

describe("<NavigationItems />", () => {
  let wrapper;
  beforeEach(() => {
    wrapper = shallow(<NavigationItems />);
  });
  it("should render one <NavigationItem /> element if not authenticated", () => {
    expect(wrapper.find(NavigationItem)).toHaveLength(1);
  });
  it("should render three <NavigationItem /> element if not authenticated", () => {
    wrapper.setProps({
      isLogged: true,
    });
    expect(wrapper.find(NavigationItem)).toHaveLength(3);
  });
  it("should should an exact logout component", () => {
    wrapper.setProps({
      isLogged: true,
    });
    expect(
      wrapper.contains(<NavigationItem link="/logout">Logout</NavigationItem>)
    ).toEqual(true);
  });
});
