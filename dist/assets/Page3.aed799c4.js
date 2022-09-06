import { u as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, b as unref, d as createVNode, B as BIconHouseFill, n as normalizeStyle, F as Fragment, p as pushScopeId, e as popScopeId, f as createTextVNode } from "./index.24efabd1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _imports_0 = "/assets/La_nuit_et_la_Kora.4a44777d.mp3";
const backgroundImagePg3 = "/assets/LaNuit-800x1067.c18cf5de.jpg";
const Page3_vue_vue_type_style_index_0_scoped_43284d53_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-43284d53"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("audio", { autoplay: "" }, [
  /* @__PURE__ */ createBaseVNode("source", { src: _imports_0 })
], -1));
const _hoisted_2 = { class: "d-flex flex-row justify-content-center mt-2 mb-2" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "marquee-wrap-test" }, [
  /* @__PURE__ */ createBaseVNode("p", { style: { "color": "white", "text-shadow": "3px 3px 4px black" } }, [
    /* @__PURE__ */ createBaseVNode("b", null, " La nuit et la kora 2.0:"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Les \xEAtres \xE9veill\xE9s de la nuit ont leur univers sonore depuis des si\xE8cles et des si\xE8cles,"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" j\u2019ai voulu accompagner ces sons familiers de la nuit avec un son qui n\u2019existe pas. "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Pour cela j ai fait appel \xE0 Sami Pageaux Waro et sa kora \xE9lectrique pour nous livrer un \xE9change musical des plus original."),
    /* @__PURE__ */ createBaseVNode("br")
  ]),
  /* @__PURE__ */ createBaseVNode("br")
], -1));
const _sfc_main = {
  __name: "Page3",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("section", {
          id: "pg3",
          class: "overflow-hidden",
          style: normalizeStyle({ backgroundImage: `url(${unref(backgroundImagePg3)})` })
        }, [
          createBaseVNode("div", _hoisted_2, [
            createBaseVNode("div", {
              class: "d-flex flex-column justify-content-center align-items-center container-icons-vue",
              role: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/"))
            }, [
              createVNode(unref(BIconHouseFill), { class: "icons-vue1 t2-5rem" })
            ])
          ]),
          _hoisted_3
        ], 4)
      ], 64);
    };
  }
};
const Page3 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-43284d53"]]);
export {
  Page3 as default
};
