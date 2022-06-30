import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("56559943-f61e-400a-8371-17bc7b636f9d"), "HelloOmniaFxComponent")
    .registerWebComponent({
        elementName: "hello-omnia-fx-component",
        entryPoint: "./HelloOmniaFxComponent.jsx"
    })
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });