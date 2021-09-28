import { FunctionalComponent, h } from 'preact';
import { JsNes } from '../../JsNes/JsNes';
import style from './style.css';

const Home: FunctionalComponent = () => {
    return (
        <div class={style.home}>
            <JsNes></JsNes>
        </div>
    );
};

export default Home;
