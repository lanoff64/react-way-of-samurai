import React from "react";
import { create } from "react-test-renderer";
import ProfileStatus from "../components/Profile/ProfileStatus/ProfileStatus";

describe("ProfileStatusComponent", () => {
    test("status form props should be in state", () => {
        const component = create(<ProfileStatus status="92 lesson" />);
        const instance = component.getInstance();
        expect(instance.state.status).toBe("92 lesson");
    });
    test("span should be in component", () => {
        const component = create(<ProfileStatus status="92 lesson" />);
        const root = component.root;
        let span = root.findByType("span");
        expect(span.children[0]).toBe('92 lesson');
    });
    test("input shouldn't be in component", () => {
        const component = create(<ProfileStatus status="92 lesson" />);
        const root = component.root;

        expect(() => {
            let input = root.findByType("input");
        } ).toThrow();
    });

    test("input after click", () => {
        const component = create(<ProfileStatus  status="92 lesson" />);
        const root = component.root;
        let span = root.findByType("span");
        span.props.onDoubleClick();
        let input = root.findByType("input");
        expect( input.props.value).toBe('92 lesson');
    });
    test("callback", () => {
        const fakeFun = jest.fn();
        const component = create(<ProfileStatus updateStatus={fakeFun}  status="92 lesson" />);
        const instance = component.getInstance();
        instance.deActiveEditMode();
        expect(fakeFun.mock.calls.length).toBe(1);
    });
});