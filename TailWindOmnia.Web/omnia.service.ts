import { Composer, DevelopmentEnvironment } from "@omnia/tooling/composers";
import { Guid } from '@omnia/fx/models';

Composer
    .registerManifest(new Guid("9b125e35-483a-4e71-8cca-4db902cacb25"), "TailWindOmnia.Web")
    .registerService({ description: "Description of TailWindOmnia.Web" })
    .AsWebApp()
    .withBuildOptions({
        include: ["client"],
        moduleOptions: {
            enableTransformResourcePath: true
        },
        bundleOptions: {
            commonsChunk: {
                name: new Guid("df0c106c-826d-4af4-a3b1-939a12bcae06"),
                minChunks: 2
            }
        }
    });
    
   