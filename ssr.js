const Vue = require("vue");

module.exports = async function ssr(ctx, options) {
  return new Promise((resolve, reject) => {
    const template = require("fs").readFileSync(
      "./index.template.html",
      "utf-8"
    );
    const renderer = require("vue-server-renderer").createRenderer({
      template
    });

    const context = { title: "test", ...ctx };

    const app = new Vue({
      data: {
        list: context.list
      },
      template: `
      <div>
        <div v-for="item in list" v-key="item.id">
          <a :href="item.url">{{ item.title }}</a>
        </div>
      </div>`
    });

    renderer.renderToString(app, context, (err, html) => {
      if (err) reject(err);

      resolve(html);
    });
  });
};
