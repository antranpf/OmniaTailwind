import { Composer } from '@omnia/tooling/composers';
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("dda1c1d1-37c2-4298-9659-bc45b8a845b8"), "tailwind.ux")
    .registerResources({resourcePaths:["./output.css"]})
    .withLoadRules()
    .loadByUrlMatching({ startsWith: '/' });