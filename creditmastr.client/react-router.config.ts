import type { Config } from "@react-router/dev/config";

export default {
    appDirectory: "src",
    ssr: true,
    allowedActionOrigins: ["localhost:52940", "localhost:7031", "127.0.0.1:52940", "127.0.0.1:7031"],
} satisfies Config;
