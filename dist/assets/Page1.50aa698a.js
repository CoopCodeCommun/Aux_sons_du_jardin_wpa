import { u as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, b as unref, d as createVNode, B as BIconHouseFill, n as normalizeStyle, F as Fragment, p as pushScopeId, e as popScopeId, f as createTextVNode } from "./index.24efabd1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _imports_0 = "/assets/Maloya_Zoizo.10ead659.mp3";
const backgroundImagePg1 = "/assets/Zozio.0b413f7d.jpg";
const Page1_vue_vue_type_style_index_0_scoped_5623221d_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5623221d"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("audio", { autoplay: "" }, [
  /* @__PURE__ */ createBaseVNode("source", { src: _imports_0 })
], -1));
const _hoisted_2 = { class: "d-flex flex-row justify-content-center mt-2 mb-2" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "marquee-wrap-test" }, [
  /* @__PURE__ */ createBaseVNode("p", { style: { "color": "white", "text-shadow": "3px 3px 4px black" } }, [
    /* @__PURE__ */ createBaseVNode("b", null, " Maloya Zoizo: "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Ils sont l\xE0, ils chantent, ce sont des oiseaux r\xE9unionnais, chantent ils en cr\xE9ole ? Faisons un maloya avec eux."),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Il y a les couplets et refrains comme un maloya des humains "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" mais celui la c\u2019est un Maloya Zoizo!!!"),
    /* @__PURE__ */ createBaseVNode("br")
  ]),
  /* @__PURE__ */ createBaseVNode("br")
], -1));
const _sfc_main = {
  __name: "Page1",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("section", {
          id: "pg1",
          class: "overflow-hidden",
          style: normalizeStyle({ backgroundImage: `url(${unref(backgroundImagePg1)})` })
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
const Page1 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5623221d"]]);
export {
  Page1 as default
};
