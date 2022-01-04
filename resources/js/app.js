import { createApp, h } from 'vue'
import { createInertiaApp, Link, Head } from "@inertiajs/inertia-vue3";
import Layout from "./Shared/Layout";

createInertiaApp({
    resolve: name => {
        let page = require(`./Pages/${name}`).default;
        if (!page.layout) {
            page.layout = Layout;
        }
        return page;

    },
    setup({ el, App, props, plugin }) {
        createApp({ render: () => h(App, props) })
            .use(plugin)
            .component("Link", Link)
            .component("Head", Head)
            .mount(el)
    },

    title: title => `My App - ${title}`
})