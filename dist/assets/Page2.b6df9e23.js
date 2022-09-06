import { u as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, b as unref, d as createVNode, B as BIconHouseFill, n as normalizeStyle, F as Fragment, p as pushScopeId, e as popScopeId, f as createTextVNode } from "./index.24efabd1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const _imports_0 = "/assets/La_pluie_en_mantra.a2ca06d3.mp3";
const backgroundImagePg2 = "/assets/LaPluie-800x878.c8fa1222.jpg";
const Page2_vue_vue_type_style_index_0_scoped_4ddf8b8f_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-4ddf8b8f"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("audio", { autoplay: "" }, [
  /* @__PURE__ */ createBaseVNode("source", { src: _imports_0 })
], -1));
const _hoisted_2 = { class: "d-flex flex-row justify-content-center mt-2 mb-2" };
const _hoisted_3 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "marquee-wrap-test" }, [
  /* @__PURE__ */ createBaseVNode("p", { style: { "color": "white", "text-shadow": "3px 3px 4px black" } }, [
    /* @__PURE__ */ createBaseVNode("b", null, " La pluie en mantra: "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Les mains d\u2019un percussionniste sont silencieuses jusqu'au moment de leurs rencontres avec la peau des instruments, "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" ici les gouttes sont les mains et le feuillage les instruments."),
    /* @__PURE__ */ createBaseVNode("br")
  ]),
  /* @__PURE__ */ createBaseVNode("br")
], -1));
const _sfc_main = {
  __name: "Page2",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        _hoisted_1,
        createBaseVNode("section", {
          id: "pg2",
          class: "overflow-hidden",
          style: normalizeStyle({ backgroundImage: `url(${unref(backgroundImagePg2)})` })
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
const Page2 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-4ddf8b8f"]]);
export {
  Page2 as default
};
