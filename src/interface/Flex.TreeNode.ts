export interface IFlexNode {
	icon?: any;
	component?: any;
	name: string;
	path?: string;
	isExact?: boolean;
	nodes?: IFlexNode[];
}
export interface IFlexTree {
	name: string;
	icon?: any;
	component: any;
	nodes?: IFlexNode[];
}
