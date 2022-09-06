import { u as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, b as unref, d as createVNode, B as BIconHouseFill, n as normalizeStyle, F as Fragment, p as pushScopeId, e as popScopeId, f as createTextVNode } from "./index.24efabd1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _imports_0 = "/assets/Le_vent_et_son_instrument.5e9178e4.mp3";
const backgroundImagePg5 = "/assets/LeVent-800x537.a8284b21.jpg";
const Page5_vue_vue_type_style_index_0_scoped_087b9864_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-087b9864"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("audio", { autoplay: "" }, [
  /* @__PURE__ */ createBaseVNode("source", { src: _imports_0 })
], -1));
const _hoisted_2 = { class: "d-flex flex-row justify-content-center mt-2 mb-2" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "marquee-wrap-test" }, [
  /* @__PURE__ */ createBaseVNode("p", { style: { "color": "white", "text-shadow": "3px 3px 4px red" } }, [
    /* @__PURE__ */ createBaseVNode("b", null, " Le vent et son instrument : "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Le son du vent n\u2019existe que s\u2019 il est en contact avec une autre mati\xE8re. Les arbres, les bambous\u2026 "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" La violoncelliste, Julia Colmet Da\xE2ge, se laisse conduire par le vent,"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" son archet est influenc\xE9 par l\u2019intensit\xE9 du vent, les deux forment un duo musical unique. "),
    /* @__PURE__ */ createBaseVNode("br")
  ]),
  /* @__PURE__ */ createBaseVNode("br")
], -1));
const _sfc_main = {
  __name: "Page5",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("section", {
          id: "pg5",
          class: "overflow-hidden",
          style: normalizeStyle({ backgroundImage: `url(${unref(backgroundImagePg5)})` })
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
const Page5 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-087b9864"]]);
export {
  Page5 as default
};
