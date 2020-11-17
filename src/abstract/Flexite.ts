import { IFlexiteProps } from "../interface/Flexite.Props"

export abstract class AbstractFlexite {
	abstract props: IFlexiteProps
	protected parent: AbstractFlexite | any = undefined

	public setParent(parent: AbstractFlexite | any) {
		this.parent = parent
	}

	public getParent(): AbstractFlexite {
		return this.parent
	}

	public abstract add(component: AbstractFlexite): void

	public abstract remove(component: AbstractFlexite): void

	public isComposite(): boolean {
		return false
	}

	public abstract operation(): { [key: string]: any }
}
