import { createRef } from "preact";
import { Component, Fragment, h } from "preact";

interface IProps {

}

interface IState {

}

export class JsNes extends Component<IProps, IState> {
    refMainCanvas  =  createRef<HTMLCanvasElement>()

    render() {
        return (<Fragment>
            <div style="margin: auto; width: 75%;">
                <canvas id="nes-canvas" width="256" height="240" style="width: 100%" ref={this.refMainCanvas}/>
            </div>
            <p>DPad: Arrow keys<br />Start: Return, Select: Tab<br />A Button: A, B Button: S</p>
        </Fragment>)
    }

}

