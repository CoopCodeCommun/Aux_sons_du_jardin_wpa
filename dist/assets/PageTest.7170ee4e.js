import { _ as _export_sfc, u as useRouter, r as ref, o as openBlock, c as createElementBlock, a as createBaseVNode, b as createVNode, d as unref, B as BIconSkipBackwardFill, e as BIconFonts, f as BIconPauseFill, g as createCommentVNode, h as BIconPlayFill, i as BIconHouseFill, n as normalizeStyle, F as Fragment, p as pushScopeId, j as popScopeId, k as _imports_0, l as createTextVNode } from "./index.f39045b3.js";
const backgroundImagePg1 = "/assets/sunset.84fd4e93.jpg";
const PageTest_vue_vue_type_style_index_0_scoped_5c8395e7_lang = "";
const _withScopeId = (n) => (pushScopeId("data-v-5c8395e7"), n = n(), popScopeId(), n);
const _hoisted_1 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("audio", {
  id: "play-audio",
  autoplay: ""
}, [
  /* @__PURE__ */ createBaseVNode("source", { src: _imports_0 })
], -1));
const _hoisted_2 = { class: "d-flex flex-row justify-content-center mt-2 mb-2" };
const _hoisted_3 = {
  key: 0,
  class: "position-relative"
};
const _hoisted_4 = {
  key: 1,
  class: "position-relative"
};
const _hoisted_5 = /* @__PURE__ */ _withScopeId(() => /* @__PURE__ */ createBaseVNode("div", { class: "marquee-wrap" }, [
  /* @__PURE__ */ createBaseVNode("div", { class: "marquee" }, [
    /* @__PURE__ */ createBaseVNode("h1", null, "Page test"),
    /* @__PURE__ */ createBaseVNode("p", { style: { "color": "white", "text-shadow": "3px 3px 4px black" } }, [
      /* @__PURE__ */ createBaseVNode("b", null, " Rogue, inconspicuous motes of rock "),
      /* @__PURE__ */ createTextVNode("and gas descended from astronomers Sea of Tranquility billions upon billions star stuff harvesting star light stirred by starlight, Flatland billions upon billions vastness is bearable only through love great turbulent e muse about! Cambrian explosion dispassionate extraterrestrial observer. "),
      /* @__PURE__ */ createBaseVNode("br"),
      /* @__PURE__ */ createTextVNode(" and gas realm of the galaxies decipherment tendrils of gossamer clouds at the edge of forever? Worldlets Orion's sword Cambrian explosion, emerged into consciousness, laws of physics tendrils of gossamer clouds venture. Flatland paroxysm of global death Jean-Fran\xE7ois Champollion. ")
    ]),
    /* @__PURE__ */ createBaseVNode("br")
  ])
], -1));
const _sfc_main = {
  __name: "PageTest",
  setup(__props) {
    const router = useRouter();
    let buttonAction = ref("scrollTextProgress");
    function toggleAction() {
      if (buttonAction.value === "scrollTextProgress") {
        buttonAction.value = "scrollTextPause";
        document.querySelector(".marquee").style.animationPlayState = "paused";
      } else {
        buttonAction.value = "scrollTextProgress";
        document.querySelector(".marquee").style.animationPlayState = "running";
      }
    }
    function replayAudio() {
      const audioElement = document.querySelector("#play-audio");
      audioElement.currentTime = 0;
      audioElement.play();
    }
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
              class: "d-flex justify-content-center align-items-center container-icons-vue ms-1 me-1",
              role: "button",
              onClick: _cache[0] || (_cache[0] = ($event) => replayAudio())
            }, [
              createVNode(unref(BIconSkipBackwardFill), { class: "icons-vue1 t2-5rem" })
            ]),
            createBaseVNode("div", {
              class: "container-icons-vue ms-1 me-1",
              role: "button",
              onClick: _cache[1] || (_cache[1] = ($event) => toggleAction())
            }, [
              unref(buttonAction) === "scrollTextProgress" ? (openBlock(), createElementBlock("div", _hoisted_3, [
                createVNode(unref(BIconFonts), {
                  class: "position-absolute icons-vue1",
                  style: { "width": "3rem", "height": "3rem", "left": "0.5rem", "top": "0.5rem" }
                }),
                createVNode(unref(BIconPauseFill), {
                  class: "position-absolute icons-vue1",
                  style: { "width": "2rem", "height": "2rem", "right": "0.5rem", "top": "2rem" }
                })
              ])) : createCommentVNode("", true),
              unref(buttonAction) === "scrollTextPause" ? (openBlock(), createElementBlock("div", _hoisted_4, [
                createVNode(unref(BIconFonts), {
                  class: "position-absolute icons-vue1",
                  style: { "width": "3rem", "height": "3rem", "left": "0.5rem", "top": "0.5rem" }
                }),
                createVNode(unref(BIconPlayFill), {
                  class: "position-absolute icons-vue1",
                  style: { "width": "2rem", "height": "2rem", "right": "0.5rem", "top": "2rem" }
                })
              ])) : createCommentVNode("", true)
            ]),
            createBaseVNode("div", {
              class: "d-flex justify-content-center align-items-center container-icons-vue ms-1 me-1",
              role: "button",
              onClick: _cache[2] || (_cache[2] = ($event) => unref(router).push("/"))
            }, [
              createVNode(unref(BIconHouseFill), { class: "icons-vue1 t2-5rem" })
            ])
          ]),
          _hoisted_5
        ], 4)
      ], 64);
    };
  }
};
const PageTest = /* @__PURE__ */ _export_sfc(_sfc_main, [["__scopeId", "data-v-5c8395e7"]]);
export {
  PageTest as default
};
