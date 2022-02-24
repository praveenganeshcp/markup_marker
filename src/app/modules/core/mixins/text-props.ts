
type ITextProps = Pick<HTMLElement, 'innerText'>

export class TextProps {
    [x: string]: any;

    setProps(props: ITextProps) {
        this.applyProps(props);
    }

    getProps(): ITextProps {
        const { innerText } = this.fetchProps()
        return { innerText }
    }

}