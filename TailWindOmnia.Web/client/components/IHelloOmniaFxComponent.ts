import { TsxAllowUnknowProperties } from '@omnia/fx/ux';
import { HelloOmniaFxComponentStyles } from './HelloOmniaFxComponent.css';

export interface HelloOmniaFxComponentData {
    title: string;
}

export interface IHelloOmniaFxComponent {

    required: boolean;

    data?: HelloOmniaFxComponentData;

    styles?: typeof HelloOmniaFxComponentStyles;
}

declare global {
    namespace JSX {
        interface Element { }
        interface ElementClass { }
        interface ElementAttributesProperty { }
        interface IntrinsicElements {
            "hello-omnia-fx-component": TsxAllowUnknowProperties<IHelloOmniaFxComponent>
        }
    }
}