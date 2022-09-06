import { u as useRouter, o as openBlock, c as createElementBlock, a as createBaseVNode, b as unref, d as createVNode, B as BIconHouseFill, n as normalizeStyle, F as Fragment, p as pushScopeId, e as popScopeId, f as createTextVNode } from "./index.24efabd1.js";
import { _ as _export_sfc } from "./_plugin-vue_export-helper.cdc0426e.js";
const backgroundImagePg4 = "/assets/Zezer-800x533.e7391d4e.jpeg";
const audioP4 = "/assets/Zezer.b32a864f.mp3";
const Page4_vue_vue_type_style_index_0_scoped_e039ddc7_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-e039ddc7"), n = n(), popScopeId(), n);
const _hoisted_1 = { autoplay: "" };
const _hoisted_2 = ["src"];
const _hoisted_3 = { class: "d-flex flex-row justify-content-center mt-2 mb-2" };
const _hoisted_4 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "marquee-wrap-test" }, [
  /* @__PURE__ */ createBaseVNode("p", { style: { "color": "white", "text-shadow": "3px 3px 4px black" } }, [
    /* @__PURE__ */ createBaseVNode("b", null, " Zezer (fonnker ek zoizo): "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Artiste engag\xE9 de par mes textes et mes choix musicaux, "),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" j\u2019ai voulu dans cette oeuvre alerter en cr\xE9ole du danger que nous sommes, nous les \xEAtres humains,"),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" pour les oiseaux et en g\xE9n\xE9ral pour l\u2019\xE9cosyst\xE8me de la Terre."),
    /* @__PURE__ */ createBaseVNode("br"),
    /* @__PURE__ */ createTextVNode(" Les sons du jardin accompagnent ma voix et mes id\xE9es musicales s\u2019harmonisent aux id\xE9es rythmiques des oiseaux (Merle maurice, martin). "),
    /* @__PURE__ */ createBaseVNode("br")
  ]),
  /* @__PURE__ */ createBaseVNode("br")
], -1));
const _sfc_main = {
  __name: "Page4",
  setup(__props) {
    const router = useRouter();
    return (_ctx, _cache) => {
      return openBlock(), createElementBlock(Fragment, null, [
        createBaseVNode("audio", _hoisted_1, [
          createBaseVNode("source", { src: unref(audioP4) }, null, 8, _hoisted_2)
        ]),
        createBaseVNode("section", {
          id: "pg4",
          class: "overflow-hidden",
          style: normalizeStyle({ backgroundImage: `url(${unref(backgroundImagePg4)})` })
        }, [
          createBaseVNode("div", _hoisted_3, [
            createBaseVNode("div", {
              class: "d-flex flex-column justify-content-center align-items-center container-icons-vue",
              role: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => unref(router).push("/"))
            }, [
              createVNode(unref(BIconHouseFill), { class: "icons-vue1 t2-5rem" })
            ])
          ]),
          _hoisted_4
        ], 4)
      ], 64);
    };
  }
};
const Page4 = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-e039ddc7"]]);
export {
  Page4 as default
};
