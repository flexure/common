import React from "react";

export interface IFnToggle {
	toggle?: boolean;
	children: (toggle: boolean, setToggle: (args: boolean) => void) => any;
}


export const FnToggle: React.FC<IFnToggle> = (props) => {
	const [toggle, setToggle] = React.useState<any>(props.toggle);

	return props.children(toggle, setToggle);
};

FnToggle.defaultProps = {
	toggle: false,
};