import { Component, Watch, Prop } from 'vue-property-decorator';
import { vueCustomElement, IWebComponentInstance, WebComponentBootstrapper, Localize, Inject } from "@omnia/fx";
import { StyleFlow, VueComponentBase } from '@omnia/fx/ux';
import { IHelloOmniaFxComponent, HelloOmniaFxComponentData } from './IHelloOmniaFxComponent';
import { HelloOmniaFxComponentStyles } from './HelloOmniaFxComponent.css';

@Component
export default class HelloOmniaFxComponent extends VueComponentBase implements IWebComponentInstance, IHelloOmniaFxComponent {

    @Prop({ default: false }) required: boolean;
    @Prop({ default: { title: 'Hello from HelloOmniaFxComponent!' } }) data?: HelloOmniaFxComponentData
    @Prop() styles?: typeof HelloOmniaFxComponentStyles;
    tailwind
    private HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles);

    created() {
        if (this.styles) {
            this.HelloOmniaFxComponentClasses = StyleFlow.use(HelloOmniaFxComponentStyles, this.styles);
        }
    }

    mounted() {
        WebComponentBootstrapper
            .registerElementInstance(this, this.$el);
    }

    render(h) {
        return (
            <div class={this.HelloOmniaFxComponentClasses.container}>
                <div class="text-3xl font-bold underline">{this.data.title}</div>
                {this.required ? <div>Im required</div> : null}
            </div>
        )
    }
}

WebComponentBootstrapper.registerElement((manifest) => {
    vueCustomElement(manifest.elementName, HelloOmniaFxComponent);
    document.body.appendChild(document.createElement(manifest.elementName));
});