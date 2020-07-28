import React from "react";
import login from "./login";
import cleanup from "@testing-library/react";
//import { cleanup } from 'react-testing-library';
//import { shallow } from 'enzyme';
import shallow from "enzyme";

afterEach(cleanup);
let wrapper;

beforeEach(() => {
  wrapper = shallow(<login></login>);
});

it("should render my component", () => {
  const wrapper = shallow(<login />);
  expect(wrapper).toMatchSnapshot();
});

it("username should update the state when a value is input", () => {
  const username = "abc";
  const input = wrapper.find("form").childAt(1);
  input.simulate("change", {
    target: {
      name: "username"
    }
  });
  expect(wrapper.state.fields.username).toBe(username);
});

it("should load dashboard page on valid credentials", () => {
  const submitbutton = wrapper
    .find("form")
    .childAt(3)
    .childAt(0);
  submitbutton.simulate("submit");
  expect(wrapper.state.isValidForm).toBeTruthy();
});
