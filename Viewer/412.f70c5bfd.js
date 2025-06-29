"use strict";
(self.webpackChunkwebgi = self.webpackChunkwebgi || []).push([
  [412],
  {
    3356: function (e, t, i) {
      var r = i(352),
        a = i.n(r)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        ".loader{width:48px;height:48px;border:5px solid #333;border-bottom-color:rgba(0,0,0,0);border-radius:50%;display:inline-block;box-sizing:border-box;animation:rotation 1s linear infinite}@keyframes rotation{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}",
        "",
      ]),
        (t.Z = a);
    },
    1027: function (e, t, i) {
      var r = i(352),
        a = i.n(r)()(function (e) {
          return e[1];
        });
      a.push([
        e.id,
        '#assetManagerLoadingScreen{z-index:300;position:absolute;bottom:0;right:0;min-width:100%;min-height:100%;color:#333;font-size:1rem;gap:1rem;display:flex;align-content:center;justify-content:center;align-items:center;flex-direction:column;opacity:1;transition:opacity .5s ease-in-out,min-width .5s,min-height .5s,bottom .5s,right .5s;overflow:hidden;background:rgba(0,0,0,0);-webkit-backdrop-filter:blur(16px);backdrop-filter:blur(16px);background-blend-mode:luminosity;--b-opacity: 0.8;--b-background: #ffffff}#assetManagerLoadingScreen::before{content:"";position:absolute;top:0;left:0;width:100%;height:100%;z-index:-1;opacity:var(--b-opacity);background:var(--b-background)}#assetManagerLoadingScreenContent{padding-top:.5rem}.loadingScreenProcessState{font-weight:bold}#assetManagerLoadingScreen.minimizedLoadingScreen{top:unset;left:unset;bottom:2rem;right:2rem;min-width:0;min-height:0;max-width:80vw;max-height:80vh;width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content;padding:1.5rem;border-radius:.5rem}.loadingScreenFilesElement{min-height:4rem;padding:1rem}.loadingScreenLogoElement{margin-bottom:.5rem;max-width:80%}.loadingScreenLogoElement img{min-height:3rem;max-height:5rem;max-width:100%}.loadingScreenLogoImage{width:-moz-max-content;width:max-content;height:-moz-max-content;height:max-content}.minimizedLoadingScreen .loadingScreenLoadingElement{display:none}.minimizedLoadingScreen .loadingScreenFilesElement{min-height:0}.minimizedLoadingScreen .loadingScreenLogoElement{min-height:0;display:none}.minimizedLoadingScreen #assetManagerLoadingScreenContent{display:none}',
        "",
      ]),
        (t.Z = a);
    },
    9879: function (e, t, i) {
      i.d(t, {
        M: function () {
          return l;
        },
      });
      var r = i(3995),
        a = i(5551),
        s = i(9008),
        n = i(4107),
        o = i(4821);
      class l extends r.Q {
        _onEnabledChange() {
          this.enabled || (this._mainDiv.style.display = "none");
        }
        constructor(e, t) {
          super(),
            (this.container = t),
            (this.enabled = !0),
            (this.dependencies = [o.k]),
            (this.processState = new Map()),
            (this._mainDiv = (0, s.createDiv)({
              id: "assetManager" + e,
              addToBody: !1,
              innerHTML: "",
            })),
            (this._contentDiv = (0, s.createDiv)({
              id: "assetManager" + e + "Content",
              addToBody: !1,
              innerHTML: "",
            })),
            this.enabled || (this._mainDiv.style.display = "none"),
            this._mainDiv.appendChild(this._contentDiv);
        }
        async onAdded(e) {
          await super.onAdded(e),
            (this.container ?? e.container).appendChild(this._mainDiv),
            this._updateMainDiv(this.processState),
            e.getManager()?.importer?.addEventListener("importFile", (e) => {
              "done" !== e.state
                ? this.processState.set(e.path, {
                    state: e.state,
                    progress: e.progress ? 100 * e.progress : void 0,
                  })
                : this.processState.delete(e.path),
                this._updateMainDiv(this.processState);
            }),
            e
              .getManager()
              ?.importer?.addEventListener("processFileStart", (e) => {
                this.processState.set(e.path, {
                  state: "processing",
                  progress: void 0,
                }),
                  this._updateMainDiv(this.processState);
              }),
            e
              .getManager()
              ?.importer?.addEventListener("processFileEnd", (e) => {
                this.processState.delete(e.path),
                  this._updateMainDiv(this.processState);
              }),
            e.getManager()?.exporter?.addEventListener("exportFile", (e) => {
              "done" !== e.state
                ? this.processState.set(e.obj.name, {
                    state: e.state,
                    progress: e.progress ? 100 * e.progress : void 0,
                  })
                : this.processState.delete(e.obj.name),
                this._updateMainDiv(this.processState);
            }),
            e
              .getPluginByType("FileTransferPlugin")
              ?.addEventListener("transferFile", (e) => {
                "done" !== e.state
                  ? this.processState.set(e.path, {
                      state: e.state,
                      progress: e.progress ? 100 * e.progress : void 0,
                    })
                  : this.processState.delete(e.path),
                  this._updateMainDiv(this.processState);
              }),
            e
              .getPluginByType("MaterialConfiguratorPlugin")
              ?.addEventListener("progress", (e) => {
                "done" !== e.state
                  ? this.processState.set("MatpreviewGeneration", {
                      state: e.state,
                      progress: 0,
                    })
                  : this.processState.delete("MatpreviewGeneration"),
                  this._updateMainDiv(this.processState);
              }),
            e
              .getPluginByType("SwitchNodePlugin")
              ?.addEventListener("progress", (e) => {
                "done" !== e.state
                  ? this.processState.set("SwitchNodeGeneration", {
                      state: e.state,
                      progress: 0,
                    })
                  : this.processState.delete("SwitchNodeGeneration"),
                  this._updateMainDiv(this.processState);
              }),
            e
              .getPluginByType("ThemePlugin")
              ?.addEventListener("progress", (e) => {
                "done" !== e.state
                  ? this.processState.set("ThemeInit", {
                      state: e.state,
                      progress: 0,
                    })
                  : this.processState.delete("ThemeInit"),
                  this._updateMainDiv(this.processState);
              });
        }
        async onRemove(e) {
          return (
            this._mainDiv.remove(),
            this._contentDiv?.remove(),
            this.processState.clear(),
            super.onRemove(e)
          );
        }
      }
      !(function (e, t, i, r) {
        var a,
          s = arguments.length,
          n =
            s < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          n = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) &&
              (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
        s > 3 && n && Object.defineProperty(t, i, n);
      })(
        [
          (0, a.Q7)("Enabled"),
          (0, s.onChange)(l.prototype._onEnabledChange),
          (0, n.qC)(),
        ],
        l.prototype,
        "enabled",
        void 0
      );
    },
    8366: function (e, t, i) {
      i.d(t, {
        N: function () {
          return O;
        },
      });
      var r = i(9008),
        a = i(5701),
        s = i.n(a),
        n = i(8236),
        o = i.n(n),
        l = i(6850),
        c = i.n(l),
        u = i(7182),
        d = i.n(u),
        p = i(9213),
        h = i.n(p),
        m = i(1027),
        f = {};
      m.Z && m.Z.locals && (f.locals = m.Z.locals);
      var g,
        v = 0,
        _ = {};
      (_.styleTagTransform = h()),
        (_.setAttributes = c()),
        (_.insert = function (e, t) {
          (t.target || document.head).appendChild(e);
        }),
        (_.domAPI = o()),
        (_.insertStyleElement = d()),
        (f.use = function (e) {
          return (_.options = e || {}), v++ || (g = s()(m.Z, _)), f;
        }),
        (f.unuse = function () {
          v > 0 && !--v && (g(), (g = null));
        });
      var y = f,
        b = i(3356),
        x = {};
      b.Z && b.Z.locals && (x.locals = b.Z.locals);
      var S,
        C = 0,
        D = {};
      (D.styleTagTransform = h()),
        (D.setAttributes = c()),
        (D.insert = function (e, t) {
          (t.target || document.head).appendChild(e);
        }),
        (D.domAPI = o()),
        (D.insertStyleElement = d()),
        (x.use = function (e) {
          return (D.options = e || {}), C++ || (S = s()(b.Z, D)), x;
        }),
        (x.unuse = function () {
          C > 0 && !--C && (S(), (S = null));
        });
      var w,
        P = x,
        M = i(5551),
        T = i(9879),
        E = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let O = (w = class extends T.M {
        refresh() {
          this._updateMainDiv(
            this._isPreviewing ? this._previewState : this.processState,
            !1
          );
        }
        togglePreview() {
          this.maximize(),
            (this._isPreviewing = !this._isPreviewing),
            this.refresh(),
            this._isPreviewing ? this.show() : this.hideWithDelay();
        }
        constructor(e) {
          super("LoadingScreen", e),
            (this.styles = y),
            (this.spinners = [
              { styles: P, html: '<span class="loader"></span>' },
            ]),
            (this.loader = 0),
            (this.loadingTextHeader = "Loading Files"),
            (this.errorTextHeader = "Error Loading Files"),
            (this.showFileNames = !0),
            (this.showProcessStates = !0),
            (this.showProgress = !0),
            (this.hideOnOnlyErrors = !0),
            (this.hideOnFilesLoad = !0),
            (this.hideOnSceneObjectLoad = !1),
            (this.minimizeOnSceneObjectLoad = !0),
            (this.showOnFilesLoading = !0),
            (this.showOnSceneEmpty = !0),
            (this.hideDelay = 500),
            (this.backgroundOpacity = 0.5),
            (this.backgroundBlur = 24),
            (this.background = "#ffffff"),
            (this.textColor = "#222222"),
            (this.logoImage = ""),
            (this._isPreviewing = !1),
            (this._previewState = new Map([
              ["file.glb", { state: "downloading", progress: 50 }],
              ["environment.hdr", { state: "adding" }],
            ])),
            (this.loadingElement = (0, r.createDiv)({
              classList: ["loadingScreenLoadingElement"],
              addToBody: !1,
            })),
            (this.filesElement = (0, r.createDiv)({
              classList: ["loadingScreenFilesElement"],
              addToBody: !1,
            })),
            (this.logoElement = (0, r.createDiv)({
              classList: ["loadingScreenLogoElement"],
              addToBody: !1,
            })),
            (this._isHidden = !1),
            (this._sceneUpdate = (e) => {
              if (!this._viewer) return;
              if (!e.hierarchyChanged) return;
              const t = this._viewer.scene.modelRoot.children;
              0 === t.length && this.showOnSceneEmpty && this.show(),
                t.length > 0
                  ? this.hideOnSceneObjectLoad
                    ? this.hideWithDelay()
                    : this.minimizeOnSceneObjectLoad &&
                      this._viewer.scene.environment &&
                      (0, r.timeout)(this.hideDelay + 300).then(() =>
                        this.minimize()
                      )
                  : this.minimizeOnSceneObjectLoad && this.maximize();
            }),
            this._mainDiv.prepend(this.loadingElement),
            this._mainDiv.prepend(this.logoElement),
            this._mainDiv.appendChild(this.filesElement);
        }
        async hide() {
          (this._isHidden = !0),
            (this._mainDiv.style.opacity = "0"),
            await (0, r.timeout)(502),
            this._isHidden &&
              ((this._mainDiv.style.display = "none"), this._showMainDiv());
        }
        async hideWithDelay() {
          if (
            ((this._isHidden = !0),
            await (0, r.timeout)(this.hideDelay),
            this._isHidden)
          )
            return this.hide();
        }
        show() {
          this._isHidden &&
            ((this._isHidden = !1),
            this._showMainDiv(),
            (this._mainDiv.style.display = "flex"));
        }
        _showMainDiv() {
          this._mainDiv.style.opacity = "1";
        }
        minimize() {
          this._mainDiv.classList.add("minimizedLoadingScreen"),
            this.showFileNames || (this.loadingElement.style.display = "block");
        }
        maximize() {
          this._mainDiv.classList.remove("minimizedLoadingScreen"),
            (this.loadingElement.style.display = "");
        }
        _setHTML(e, t) {
          e.innerHTML !== t && (e.innerHTML = t);
        }
        _updateMainDiv(e, t = !0) {
          if (!this._viewer) return;
          if (!this._contentDiv) return;
          if (!this.enabled) return void (this._mainDiv.style.display = "none");
          if (this.showFileNames) {
            let t = "";
            e.forEach((e, i) => {
              t +=
                (this.showProcessStates
                  ? `<span class="loadingScreenProcessState">${e.state}</span>: `
                  : "") +
                (i || "").split("/").pop() +
                (this.showProgress && e.progress
                  ? " - " + e.progress.toFixed(0) + "%"
                  : "") +
                "<br>";
            }),
              this._setHTML(this.filesElement, t);
          } else this._setHTML(this.filesElement, "");
          const i = [...e.values()].filter((e) => "error" === e.state);
          i.length > 0 && i.length === e.size && !this.hideOnOnlyErrors
            ? this._setHTML(this._contentDiv, this.errorTextHeader)
            : this._setHTML(this._contentDiv, this.loadingTextHeader),
            this._setHTML(this.loadingElement, this.spinners[this.loader].html),
            this._mainDiv.style.setProperty(
              "--b-opacity",
              this.backgroundOpacity.toString()
            ),
            this._mainDiv.style.setProperty("--b-background", this.background),
            (this._mainDiv.style.backdropFilter = `blur(${this.backgroundBlur}px)`),
            (this._mainDiv.style.color = this.textColor),
            this._setHTML(
              this.logoElement,
              this.logoImage
                ? `<img class="loadingScreenLogoImage" src="${this.logoImage}"/>`
                : ""
            ),
            t &&
              (this.hideOnFilesLoad &&
              (0 === e.size || (i.length === e.size && this.hideOnOnlyErrors))
                ? this.hideDelay
                  ? this.hideWithDelay()
                  : this.hide()
                : e.size > 0 && this.showOnFilesLoading && this.show());
        }
        async onAdded(e) {
          this.styles.use({ target: this.container ?? e.container }),
            this.spinners.forEach((t) => {
              t.styles.use({ target: this.container ?? e.container });
            }),
            e.scene.addEventListener("sceneUpdate", this._sceneUpdate),
            await super.onAdded(e);
        }
        async onRemove(e) {
          e.scene.removeEventListener("sceneUpdate", this._sceneUpdate),
            await super.onRemove(e);
        }
      });
      (O.PluginType = "LoadingScreenPlugin"),
        E(
          [
            (0, M.vI)(
              "Loader",
              ["Spinner 1"].map((e, t) => ({ value: t, label: e }))
            ),
            (0, r.serialize)(),
          ],
          O.prototype,
          "loader",
          void 0
        ),
        E(
          [
            (0, M.ri)("Loading text header"),
            (0, r.onChange)(w.prototype.refresh),
            (0, r.serialize)(),
          ],
          O.prototype,
          "loadingTextHeader",
          void 0
        ),
        E(
          [(0, M.ri)("Error text header"), (0, r.serialize)()],
          O.prototype,
          "errorTextHeader",
          void 0
        ),
        E(
          [
            (0, M.Q7)("Show file names"),
            (0, r.serialize)(),
            (0, r.onChange)(w.prototype.refresh),
          ],
          O.prototype,
          "showFileNames",
          void 0
        ),
        E(
          [
            (0, M.Q7)("Show process states"),
            (0, r.serialize)(),
            (0, r.onChange)(w.prototype.refresh),
          ],
          O.prototype,
          "showProcessStates",
          void 0
        ),
        E(
          [
            (0, M.Q7)("Show progress"),
            (0, r.serialize)(),
            (0, r.onChange)(w.prototype.refresh),
          ],
          O.prototype,
          "showProgress",
          void 0
        ),
        E(
          [(0, M.Q7)("Hide on only errors"), (0, r.serialize)()],
          O.prototype,
          "hideOnOnlyErrors",
          void 0
        ),
        E(
          [(0, M.Q7)("Hide on files load"), (0, r.serialize)()],
          O.prototype,
          "hideOnFilesLoad",
          void 0
        ),
        E(
          [(0, M.Q7)("Hide on scene object load"), (0, r.serialize)()],
          O.prototype,
          "hideOnSceneObjectLoad",
          void 0
        ),
        E(
          [(0, M.Q7)("Minimize on scene object load"), (0, r.serialize)()],
          O.prototype,
          "minimizeOnSceneObjectLoad",
          void 0
        ),
        E(
          [(0, M.Q7)("Show when files start loading"), (0, r.serialize)()],
          O.prototype,
          "showOnFilesLoading",
          void 0
        ),
        E(
          [(0, M.Q7)("Show when scene empty"), (0, r.serialize)()],
          O.prototype,
          "showOnSceneEmpty",
          void 0
        ),
        E(
          [(0, M.ri)("Hide delay (ms)"), (0, r.serialize)()],
          O.prototype,
          "hideDelay",
          void 0
        ),
        E(
          [
            (0, M.t8)("Background Opacity", [0, 1]),
            (0, r.onChange)(w.prototype.refresh),
            (0, r.serialize)(),
          ],
          O.prototype,
          "backgroundOpacity",
          void 0
        ),
        E(
          [
            (0, M.t8)("Background Blur", [0, 100]),
            (0, r.onChange)(w.prototype.refresh),
            (0, r.serialize)(),
          ],
          O.prototype,
          "backgroundBlur",
          void 0
        ),
        E(
          [
            (0, M.ri)("Background Color"),
            (0, r.onChange)(w.prototype.refresh),
            (0, r.serialize)(),
          ],
          O.prototype,
          "background",
          void 0
        ),
        E(
          [
            (0, M.ri)("Text Color"),
            (0, r.onChange)(w.prototype.refresh),
            (0, r.serialize)(),
          ],
          O.prototype,
          "textColor",
          void 0
        ),
        E(
          [
            (0, M.ri)("Logo Image"),
            (0, r.onChange)(w.prototype.refresh),
            (0, r.serialize)(),
          ],
          O.prototype,
          "logoImage",
          void 0
        ),
        E([(0, M.M)("Toggle preview")], O.prototype, "togglePreview", null),
        E([(0, M.M)("Minimize")], O.prototype, "minimize", null),
        E([(0, M.M)("Maximize")], O.prototype, "maximize", null),
        (O = w = E([(0, M.Sp)("Loading Screen")], O));
    },
    6689: function (e, t, i) {
      i.d(t, {
        O: function () {
          return l;
        },
      });
      var r = i(2681),
        a = i(2354),
        s = i(2562),
        n = i(9008),
        o = i(4821);
      class l extends n.SimpleEventDispatcher {
        constructor() {
          super(...arguments), (this.dependencies = [o.k]);
        }
        async onAdded(e) {
          this._importer ||
            (this._importer = new a.q(
              class extends s.I {
                constructor(t) {
                  super(t),
                    this.setDataType((0, r.g)(e.renderer.rendererObject));
                }
              },
              ["exr"],
              !1
            )),
            e.getManager()?.importer?.Importers.push(this._importer);
        }
        async onDispose(e) {
          this._importer = void 0;
        }
        async onRemove(e) {
          this._importer &&
            e.getManager()?.importer?.Importers &&
            e
              .getManager()
              .importer.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer),
                1
              ),
            (this._importer = void 0);
        }
      }
      l.PluginType = "EXRLoadPlugin";
    },
    7283: function (e, t, i) {
      i.d(t, {
        k: function () {
          return o;
        },
      });
      var r = i(2354),
        a = i(4329),
        s = i(9008),
        n = i(4821);
      class o extends s.SimpleEventDispatcher {
        constructor() {
          super(...arguments),
            (this.dependencies = [n.k]),
            (this._importer = new r.q(a.y, ["fbx"], !0));
        }
        async onAdded(e) {
          e.getManager()?.importer?.Importers.push(this._importer);
        }
        async onDispose(e) {}
        async onRemove(e) {
          e.getManager()?.importer?.Importers &&
            e
              .getManager()
              ?.importer?.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer),
                1
              );
        }
      }
      o.PluginType = "FBXLoadPlugin";
    },
    8712: function (e, t, i) {
      i.d(t, {
        B: function () {
          return s;
        },
      });
      var r = i(9008),
        a = i(4821);
      class s extends r.SimpleEventDispatcher {
        constructor() {
          super(...arguments), (this.dependencies = [a.k]);
        }
        async onAdded(e) {
          const t = document.createElement("script");
          (t.type = "module"),
            (t.innerHTML =
              "\nimport { MeshoptDecoder } from 'https://cdn.jsdelivr.net/gh/zeux/meshoptimizer@master/js/meshopt_decoder.module.js'\nwindow.MeshoptDecoder = MeshoptDecoder\n"),
            document.head.appendChild(t),
            (this._script = t);
        }
        async onDispose(e) {}
        async onRemove(e) {
          this._script &&
            (document.head.removeChild(this._script), (this._script = void 0));
        }
      }
      s.PluginType = "GLTFMeshOptPlugin";
    },
    3898: function (e, t, i) {
      i.d(t, {
        B: function () {
          return S;
        },
      });
      var r = i(2354),
        a = i(2988);
      class s extends a.aNw {
        constructor(e) {
          super(e);
        }
        load(e, t, i, r) {
          const s = this,
            n = "" === this.path ? a.Zp0.extractUrlBase(e) : this.path,
            o = new a.hH6(this.manager);
          o.setPath(this.path),
            o.setRequestHeader(this.requestHeader),
            o.setWithCredentials(this.withCredentials),
            o.load(
              e,
              function (i) {
                try {
                  t(s.parse(i, n));
                } catch (t) {
                  r ? r(t) : console.error(t), s.manager.itemError(e);
                }
              },
              i,
              r
            );
        }
        setMaterialOptions(e) {
          return (this.materialOptions = e), this;
        }
        parse(e, t) {
          const i = e.split("\n");
          let r = {};
          const a = /\s+/,
            s = {};
          for (let e = 0; e < i.length; e++) {
            let t = i[e];
            if (((t = t.trim()), 0 === t.length || "#" === t.charAt(0)))
              continue;
            const n = t.indexOf(" ");
            let o = n >= 0 ? t.substring(0, n) : t;
            o = o.toLowerCase();
            let l = n >= 0 ? t.substring(n + 1) : "";
            if (((l = l.trim()), "newmtl" === o)) (r = { name: l }), (s[l] = r);
            else if ("ka" === o || "kd" === o || "ks" === o || "ke" === o) {
              const e = l.split(a, 3);
              r[o] = [parseFloat(e[0]), parseFloat(e[1]), parseFloat(e[2])];
            } else r[o] = l;
          }
          const o = new n(this.resourcePath || t, this.materialOptions);
          return (
            o.setCrossOrigin(this.crossOrigin),
            o.setManager(this.manager),
            o.setMaterials(s),
            o
          );
        }
      }
      class n {
        constructor(e = "", t = {}) {
          (this.baseUrl = e),
            (this.options = t),
            (this.materialsInfo = {}),
            (this.materials = {}),
            (this.materialsArray = []),
            (this.nameLookup = {}),
            (this.crossOrigin = "anonymous"),
            (this.side =
              void 0 !== this.options.side ? this.options.side : a.Wl3),
            (this.wrap =
              void 0 !== this.options.wrap ? this.options.wrap : a.rpg);
        }
        setCrossOrigin(e) {
          return (this.crossOrigin = e), this;
        }
        setManager(e) {
          this.manager = e;
        }
        setMaterials(e) {
          (this.materialsInfo = this.convert(e)),
            (this.materials = {}),
            (this.materialsArray = []),
            (this.nameLookup = {});
        }
        convert(e) {
          if (!this.options) return e;
          const t = {};
          for (const i in e) {
            const r = e[i],
              a = {};
            t[i] = a;
            for (const e in r) {
              let t = !0,
                i = r[e];
              const s = e.toLowerCase();
              switch (s) {
                case "kd":
                case "ka":
                case "ks":
                  this.options &&
                    this.options.normalizeRGB &&
                    (i = [i[0] / 255, i[1] / 255, i[2] / 255]),
                    this.options &&
                      this.options.ignoreZeroRGBs &&
                      0 === i[0] &&
                      0 === i[1] &&
                      0 === i[2] &&
                      (t = !1);
              }
              t && (a[s] = i);
            }
          }
          return t;
        }
        async preload() {
          for (const e in this.materialsInfo) await this.create(e);
        }
        getIndex(e) {
          return this.nameLookup[e];
        }
        async getAsArray() {
          let e = 0;
          for (const t in this.materialsInfo)
            (this.materialsArray[e] = await this.create(t)),
              (this.nameLookup[t] = e),
              e++;
          return this.materialsArray;
        }
        async create(e) {
          return (
            void 0 === this.materials[e] && (await this.createMaterial_(e)),
            this.materials[e]
          );
        }
        async createMaterial_(e) {
          const t = this,
            i = this.materialsInfo[e],
            r = { name: e, side: this.side };
          async function s(e, i) {
            if (r[e]) return;
            const s = t.getTextureParams(i, r);
            return new Promise((i, n) => {
              let o = !1,
                l = () => !o && (o = !0) && i();
              const c = t.loadTexture(
                ((u = t.baseUrl),
                "string" != typeof (d = s.url) || "" === d
                  ? ""
                  : /^https?:\/\//i.test(d)
                  ? d
                  : u + d),
                void 0,
                (t) => {
                  (r[e] = t), l();
                },
                void 0,
                l
              );
              var u, d;
              setTimeout(l, 50),
                c.repeat.copy(s.scale),
                c.offset.copy(s.offset),
                (c.wrapS = t.wrap),
                (c.wrapT = t.wrap),
                ("map" !== e && "emissiveMap" !== e) || (c.colorSpace = a.KI_);
            });
          }
          const n = Array.from(Object.keys(i || {}));
          let o = n.includes("d") || n.includes("D");
          for (const e of n) {
            const t = i[e];
            let n;
            if ("" !== t)
              switch (e.toLowerCase()) {
                case "kd":
                  r.color = new a.Ilk().fromArray(t).convertSRGBToLinear();
                  break;
                case "ks":
                  r.specular = new a.Ilk().fromArray(t).convertSRGBToLinear();
                  break;
                case "ke":
                  r.emissive = new a.Ilk().fromArray(t).convertSRGBToLinear();
                  break;
                case "map_kd":
                  await s("map", t);
                  break;
                case "map_ks":
                  await s("specularMap", t);
                  break;
                case "map_ke":
                  await s("emissiveMap", t);
                  break;
                case "norm":
                  await s("normalMap", t);
                  break;
                case "map_bump":
                case "bump":
                  await s("bumpMap", t);
                  break;
                case "map_d":
                  await s("alphaMap", t), (r.transparent = !0);
                  break;
                case "ns":
                  r.shininess = parseFloat(t);
                  break;
                case "d":
                  (n = parseFloat(t)),
                    n < 1 && ((r.opacity = n), (r.transparent = !0));
                  break;
                case "tr":
                  if (o) break;
                  (n = parseFloat(t)),
                    this.options &&
                      this.options.invertTrProperty &&
                      (n = 1 - n),
                    n > 0 && ((r.opacity = 1 - n), (r.transparent = !0));
              }
          }
          return (this.materials[e] = new a.xoR(r)), this.materials[e];
        }
        getTextureParams(e, t) {
          const i = { scale: new a.FM8(1, 1), offset: new a.FM8(0, 0) },
            r = e.split(/\s+/);
          let s;
          return (
            (s = r.indexOf("-bm")),
            s >= 0 && ((t.bumpScale = parseFloat(r[s + 1])), r.splice(s, 2)),
            (s = r.indexOf("-s")),
            s >= 0 &&
              (i.scale.set(parseFloat(r[s + 1]), parseFloat(r[s + 2])),
              r.splice(s, 4)),
            (s = r.indexOf("-o")),
            s >= 0 &&
              (i.offset.set(parseFloat(r[s + 1]), parseFloat(r[s + 2])),
              r.splice(s, 4)),
            (i.url = r.join(" ").trim()),
            i
          );
        }
        loadTexture(e, t, i, r, s) {
          const n = void 0 !== this.manager ? this.manager : a.tEQ;
          let o = n.getHandler(e);
          null === o && (o = new a.dpR(n)),
            o.setCrossOrigin && o.setCrossOrigin(this.crossOrigin);
          const l = o.load(e, i, r, s);
          return void 0 !== t && (l.mapping = t), l;
        }
      }
      const o = /^[og]\s*(.+)?/,
        l = /^mtllib /,
        c = /^usemtl /,
        u = /^usemap /,
        d = /\s+/,
        p = new a.Pa4(),
        h = new a.Pa4(),
        m = new a.Pa4(),
        f = new a.Pa4(),
        g = new a.Pa4(),
        v = new a.Ilk();
      function _() {
        const e = {
          objects: [],
          object: {},
          vertices: [],
          normals: [],
          colors: [],
          uvs: [],
          materials: {},
          materialLibraries: [],
          startObject: function (e, t) {
            if (this.object && !1 === this.object.fromDeclaration)
              return (
                (this.object.name = e),
                void (this.object.fromDeclaration = !1 !== t)
              );
            const i =
              this.object && "function" == typeof this.object.currentMaterial
                ? this.object.currentMaterial()
                : void 0;
            if (
              (this.object &&
                "function" == typeof this.object._finalize &&
                this.object._finalize(!0),
              (this.object = {
                name: e || "",
                fromDeclaration: !1 !== t,
                geometry: {
                  vertices: [],
                  normals: [],
                  colors: [],
                  uvs: [],
                  hasUVIndices: !1,
                },
                materials: [],
                smooth: !0,
                startMaterial: function (e, t) {
                  const i = this._finalize(!1);
                  i &&
                    (i.inherited || i.groupCount <= 0) &&
                    this.materials.splice(i.index, 1);
                  const r = {
                    index: this.materials.length,
                    name: e || "",
                    mtllib:
                      Array.isArray(t) && t.length > 0 ? t[t.length - 1] : "",
                    smooth: void 0 !== i ? i.smooth : this.smooth,
                    groupStart: void 0 !== i ? i.groupEnd : 0,
                    groupEnd: -1,
                    groupCount: -1,
                    inherited: !1,
                    clone: function (e) {
                      const t = {
                        index: "number" == typeof e ? e : this.index,
                        name: this.name,
                        mtllib: this.mtllib,
                        smooth: this.smooth,
                        groupStart: 0,
                        groupEnd: -1,
                        groupCount: -1,
                        inherited: !1,
                      };
                      return (t.clone = this.clone.bind(t)), t;
                    },
                  };
                  return this.materials.push(r), r;
                },
                currentMaterial: function () {
                  if (this.materials.length > 0)
                    return this.materials[this.materials.length - 1];
                },
                _finalize: function (e) {
                  const t = this.currentMaterial();
                  if (
                    (t &&
                      -1 === t.groupEnd &&
                      ((t.groupEnd = this.geometry.vertices.length / 3),
                      (t.groupCount = t.groupEnd - t.groupStart),
                      (t.inherited = !1)),
                    e && this.materials.length > 1)
                  )
                    for (let e = this.materials.length - 1; e >= 0; e--)
                      this.materials[e].groupCount <= 0 &&
                        this.materials.splice(e, 1);
                  return (
                    e &&
                      0 === this.materials.length &&
                      this.materials.push({ name: "", smooth: this.smooth }),
                    t
                  );
                },
              }),
              i && i.name && "function" == typeof i.clone)
            ) {
              const e = i.clone(0);
              (e.inherited = !0), this.object.materials.push(e);
            }
            this.objects.push(this.object);
          },
          finalize: function () {
            this.object &&
              "function" == typeof this.object._finalize &&
              this.object._finalize(!0);
          },
          parseVertexIndex: function (e, t) {
            const i = parseInt(e, 10);
            return 3 * (i >= 0 ? i - 1 : i + t / 3);
          },
          parseNormalIndex: function (e, t) {
            const i = parseInt(e, 10);
            return 3 * (i >= 0 ? i - 1 : i + t / 3);
          },
          parseUVIndex: function (e, t) {
            const i = parseInt(e, 10);
            return 2 * (i >= 0 ? i - 1 : i + t / 2);
          },
          addVertex: function (e, t, i) {
            const r = this.vertices,
              a = this.object.geometry.vertices;
            a.push(r[e + 0], r[e + 1], r[e + 2]),
              a.push(r[t + 0], r[t + 1], r[t + 2]),
              a.push(r[i + 0], r[i + 1], r[i + 2]);
          },
          addVertexPoint: function (e) {
            const t = this.vertices;
            this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
          },
          addVertexLine: function (e) {
            const t = this.vertices;
            this.object.geometry.vertices.push(t[e + 0], t[e + 1], t[e + 2]);
          },
          addNormal: function (e, t, i) {
            const r = this.normals,
              a = this.object.geometry.normals;
            a.push(r[e + 0], r[e + 1], r[e + 2]),
              a.push(r[t + 0], r[t + 1], r[t + 2]),
              a.push(r[i + 0], r[i + 1], r[i + 2]);
          },
          addFaceNormal: function (e, t, i) {
            const r = this.vertices,
              a = this.object.geometry.normals;
            p.fromArray(r, e),
              h.fromArray(r, t),
              m.fromArray(r, i),
              g.subVectors(m, h),
              f.subVectors(p, h),
              g.cross(f),
              g.normalize(),
              a.push(g.x, g.y, g.z),
              a.push(g.x, g.y, g.z),
              a.push(g.x, g.y, g.z);
          },
          addColor: function (e, t, i) {
            const r = this.colors,
              a = this.object.geometry.colors;
            void 0 !== r[e] && a.push(r[e + 0], r[e + 1], r[e + 2]),
              void 0 !== r[t] && a.push(r[t + 0], r[t + 1], r[t + 2]),
              void 0 !== r[i] && a.push(r[i + 0], r[i + 1], r[i + 2]);
          },
          addUV: function (e, t, i) {
            const r = this.uvs,
              a = this.object.geometry.uvs;
            a.push(r[e + 0], r[e + 1]),
              a.push(r[t + 0], r[t + 1]),
              a.push(r[i + 0], r[i + 1]);
          },
          addDefaultUV: function () {
            const e = this.object.geometry.uvs;
            e.push(0, 0), e.push(0, 0), e.push(0, 0);
          },
          addUVLine: function (e) {
            const t = this.uvs;
            this.object.geometry.uvs.push(t[e + 0], t[e + 1]);
          },
          addFace: function (e, t, i, r, a, s, n, o, l) {
            const c = this.vertices.length;
            let u = this.parseVertexIndex(e, c),
              d = this.parseVertexIndex(t, c),
              p = this.parseVertexIndex(i, c);
            if (
              (this.addVertex(u, d, p),
              this.addColor(u, d, p),
              void 0 !== n && "" !== n)
            ) {
              const e = this.normals.length;
              (u = this.parseNormalIndex(n, e)),
                (d = this.parseNormalIndex(o, e)),
                (p = this.parseNormalIndex(l, e)),
                this.addNormal(u, d, p);
            } else this.addFaceNormal(u, d, p);
            if (void 0 !== r && "" !== r) {
              const e = this.uvs.length;
              (u = this.parseUVIndex(r, e)),
                (d = this.parseUVIndex(a, e)),
                (p = this.parseUVIndex(s, e)),
                this.addUV(u, d, p),
                (this.object.geometry.hasUVIndices = !0);
            } else this.addDefaultUV();
          },
          addPointGeometry: function (e) {
            this.object.geometry.type = "Points";
            const t = this.vertices.length;
            for (let i = 0, r = e.length; i < r; i++) {
              const r = this.parseVertexIndex(e[i], t);
              this.addVertexPoint(r), this.addColor(r);
            }
          },
          addLineGeometry: function (e, t) {
            this.object.geometry.type = "Line";
            const i = this.vertices.length,
              r = this.uvs.length;
            for (let t = 0, r = e.length; t < r; t++)
              this.addVertexLine(this.parseVertexIndex(e[t], i));
            for (let e = 0, i = t.length; e < i; e++)
              this.addUVLine(this.parseUVIndex(t[e], r));
          },
        };
        return e.startObject("", !1), e;
      }
      class y extends a.aNw {
        constructor(e) {
          super(e), (this.materials = null);
        }
        load(e, t, i, r) {
          const s = this,
            n = new a.hH6(this.manager);
          n.setPath(this.path),
            n.setRequestHeader(this.requestHeader),
            n.setWithCredentials(this.withCredentials),
            n.load(
              e,
              async function (i) {
                try {
                  t(await s.parse(i));
                } catch (t) {
                  r ? r(t) : console.error(t), s.manager.itemError(e);
                }
              },
              i,
              r
            );
        }
        setMaterials(e) {
          return (this.materials = e), this;
        }
        async parse(e) {
          const t = new _();
          -1 !== e.indexOf("\r\n") && (e = e.replace(/\r\n/g, "\n")),
            -1 !== e.indexOf("\\\n") && (e = e.replace(/\\\n/g, ""));
          const i = e.split("\n");
          let r = [];
          for (let e = 0, a = i.length; e < a; e++) {
            const a = i[e].trimStart();
            if (0 === a.length) continue;
            const s = a.charAt(0);
            if ("#" !== s)
              if ("v" === s) {
                const e = a.split(d);
                switch (e[0]) {
                  case "v":
                    t.vertices.push(
                      parseFloat(e[1]),
                      parseFloat(e[2]),
                      parseFloat(e[3])
                    ),
                      e.length >= 7
                        ? (v
                            .setRGB(
                              parseFloat(e[4]),
                              parseFloat(e[5]),
                              parseFloat(e[6])
                            )
                            .convertSRGBToLinear(),
                          t.colors.push(v.r, v.g, v.b))
                        : t.colors.push(void 0, void 0, void 0);
                    break;
                  case "vn":
                    t.normals.push(
                      parseFloat(e[1]),
                      parseFloat(e[2]),
                      parseFloat(e[3])
                    );
                    break;
                  case "vt":
                    t.uvs.push(parseFloat(e[1]), parseFloat(e[2]));
                }
              } else if ("f" === s) {
                const e = a.slice(1).trim().split(d),
                  i = [];
                for (let t = 0, r = e.length; t < r; t++) {
                  const r = e[t];
                  if (r.length > 0) {
                    const e = r.split("/");
                    i.push(e);
                  }
                }
                const r = i[0];
                for (let e = 1, a = i.length - 1; e < a; e++) {
                  const a = i[e],
                    s = i[e + 1];
                  t.addFace(
                    r[0],
                    a[0],
                    s[0],
                    r[1],
                    a[1],
                    s[1],
                    r[2],
                    a[2],
                    s[2]
                  );
                }
              } else if ("l" === s) {
                const e = a.substring(1).trim().split(" ");
                let i = [];
                const r = [];
                if (-1 === a.indexOf("/")) i = e;
                else
                  for (let t = 0, a = e.length; t < a; t++) {
                    const a = e[t].split("/");
                    "" !== a[0] && i.push(a[0]), "" !== a[1] && r.push(a[1]);
                  }
                t.addLineGeometry(i, r);
              } else if ("p" === s) {
                const e = a.slice(1).trim().split(" ");
                t.addPointGeometry(e);
              } else if (null !== (r = o.exec(a))) {
                const e = (" " + r[0].slice(1).trim()).slice(1);
                t.startObject(e);
              } else if (c.test(a))
                t.object.startMaterial(
                  a.substring(7).trim(),
                  t.materialLibraries
                );
              else if (l.test(a)) {
                t.materialLibraries.push(a.substring(7).trim());
                const e = a.substring(7).trim(),
                  i = this.manager.getHandler(e);
                if (i) {
                  const t = await i.loadAsync(e).catch((e) => {
                    console.warn(e);
                  });
                  t && this.setMaterials(t);
                } else
                  console.warn(
                    "OBJLoader2: Set MTLLoader to loading manager to load materials."
                  );
              } else if (u.test(a))
                console.warn(
                  'OBJLoader2: Rendering identifier "usemap" not supported. Textures must be defined in MTL files.'
                );
              else if ("s" === s) {
                if (((r = a.split(" ")), r.length > 1)) {
                  const e = r[1].trim().toLowerCase();
                  t.object.smooth = "0" !== e && "off" !== e;
                } else t.object.smooth = !0;
                const e = t.object.currentMaterial();
                e && (e.smooth = t.object.smooth);
              } else {
                if ("\0" === a) continue;
                console.warn('THREE.OBJLoader: Unexpected line: "' + a + '"');
              }
          }
          t.finalize();
          const s = new a.ZAu();
          if (
            ((s.materialLibraries = [].concat(t.materialLibraries)),
            !0 ==
              !(
                1 === t.objects.length &&
                0 === t.objects[0].geometry.vertices.length
              ))
          )
            for (let e = 0, i = t.objects.length; e < i; e++) {
              const i = t.objects[e],
                r = i.geometry,
                n = i.materials,
                o = "Line" === r.type,
                l = "Points" === r.type;
              let c = !1;
              if (0 === r.vertices.length) continue;
              const u = new a.u9r();
              u.setAttribute("position", new a.a$l(r.vertices, 3)),
                r.normals.length > 0 &&
                  u.setAttribute("normal", new a.a$l(r.normals, 3)),
                r.colors.length > 0 &&
                  ((c = !0), u.setAttribute("color", new a.a$l(r.colors, 3))),
                !0 === r.hasUVIndices &&
                  u.setAttribute("uv", new a.a$l(r.uvs, 2));
              const d = [];
              for (let e = 0, i = n.length; e < i; e++) {
                const i = n[e],
                  r = i.name + "_" + i.smooth + "_" + c;
                let s = t.materials[r];
                if (null !== this.materials)
                  if (
                    ((s = await this.materials.create(i.name)),
                    !o || !s || s instanceof a.nls)
                  ) {
                    if (l && s && !(s instanceof a.UY4)) {
                      const e = new a.UY4({ size: 10, sizeAttenuation: !1 });
                      a.F5T.prototype.copy.call(e, s),
                        e.color.copy(s.color),
                        (e.map = s.map),
                        (s = e);
                    }
                  } else {
                    const e = new a.nls();
                    a.F5T.prototype.copy.call(e, s),
                      e.color.copy(s.color),
                      (s = e);
                  }
                void 0 === s &&
                  ((s = o
                    ? new a.nls()
                    : l
                    ? new a.UY4({ size: 1, sizeAttenuation: !1 })
                    : new a.xoR()),
                  (s.name = i.name),
                  (s.flatShading = !i.smooth),
                  (s.vertexColors = c),
                  (t.materials[r] = s)),
                  d.push(s);
              }
              let p;
              if (d.length > 1) {
                for (let e = 0, t = n.length; e < t; e++) {
                  const t = n[e];
                  u.addGroup(t.groupStart, t.groupCount, e);
                }
                p = o ? new a.ejS(u, d) : l ? new a.woe(u, d) : new a.Kj0(u, d);
              } else
                p = o
                  ? new a.ejS(u, d[0])
                  : l
                  ? new a.woe(u, d[0])
                  : new a.Kj0(u, d[0]);
              (p.name = i.name), s.add(p);
            }
          else if (t.vertices.length > 0) {
            const e = new a.UY4({ size: 1, sizeAttenuation: !1 }),
              i = new a.u9r();
            i.setAttribute("position", new a.a$l(t.vertices, 3)),
              t.colors.length > 0 &&
                void 0 !== t.colors[0] &&
                (i.setAttribute("color", new a.a$l(t.colors, 3)),
                (e.vertexColors = !0));
            const r = new a.woe(i, e);
            s.add(r);
          }
          return s;
        }
      }
      var b = i(9008),
        x = i(4821);
      class S extends b.SimpleEventDispatcher {
        constructor() {
          super(...arguments),
            (this.dependencies = [x.k]),
            (this._importer1 = new r.q(y, ["obj"], !0)),
            (this._importer2 = new r.q(s, ["mtl"], !1));
        }
        async onAdded(e) {
          e.getManager()?.importer?.Importers.push(this._importer1),
            e.getManager()?.importer?.Importers.push(this._importer2);
        }
        async onDispose(e) {}
        async onRemove(e) {
          e.getManager()?.importer?.Importers &&
            (e
              .getManager()
              .importer.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer1),
                1
              ),
            e
              .getManager()
              .importer.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer2),
                1
              ));
        }
      }
      S.PluginType = "ObjMtlLoadPlugin";
    },
    2295: function (e, t, i) {
      i.d(t, {
        P: function () {
          return p;
        },
      });
      var r,
        a = i(2354),
        s = i(9008),
        n = i(4821),
        o = i(398),
        l = i(2988),
        c = i(5551),
        u = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      class d extends o.Z {
        constructor(e) {
          super(e), (this.materials = []), this.setLibraryPath(d.LIBRARY_PATH);
        }
        _createMaterial(e) {
          return d.ImportMaterials
            ? super._createMaterial(e)
            : this.materials[0] ||
                new l.Wid({
                  color: new l.Ilk(1, 1, 1),
                  metalness: 0.8,
                  name: "default",
                  side: l.ehD,
                });
        }
        async loadAsync(e, t) {
          const i = await super.loadAsync(e, t);
          i.rotateX(-Math.PI / 2),
            i.userData.materials && delete i.userData.materials;
          const r = i.userData.layers;
          return (
            i.traverse((e) => {
              const t = e.userData.attributes?.castsShadows,
                a = e.userData.attributes?.receivesShadows;
              (e.castShadow = t), (e.receiveShadow = a);
              const s =
                  e.userData.attributes?.layerIndex ??
                  e.userData.defAttributes?.layerIndex,
                n = r[s];
              n && (e.userData.rhinoLayer = n),
                (e.userData.rhino3dmRoot = i.uuid),
                this._hideLineMesh(e),
                this._useInstancedMesh(e),
                this._useMaterialSource(e, n);
            }),
            (this.materials = []),
            i
          );
        }
        _useMaterialSource(e, t) {
          if (!d.ImportMaterials) return;
          const i = e;
          if ("default" === i.material?.name || d.ForceLayerMaterials) {
            const e =
                i.userData.attributes?.materialSource ||
                i.userData.defAttributes?.materialSource,
              r =
                i.userData.attributes?.colorSource ||
                i.userData.defAttributes?.colorSource;
            if (!d.ForceLayerMaterials && !e && !r) return;
            d.ForceLayerMaterials ||
            0 === e?.value ||
            (1 === e?.value && 0 === r?.value)
              ? t &&
                (i.material = this._compareMaterials(
                  this._createMaterial({
                    diffuseColor: t.color,
                    name: t.name,
                    transparency: 0,
                    textures: [],
                  })
                ))
              : 3 === e?.value || (1 === e?.value && 3 === r?.value)
              ? i.traverseAncestors((e) => {
                  e?.material && (i.material = e.material);
                })
              : e &&
                1 !== e.value &&
                console.warn(
                  "Unknown material source",
                  e,
                  i,
                  i.userData.attributes
                );
          }
        }
        _useInstancedMesh(e) {
          if (!d.ReplaceWithInstancedMesh) return;
          if (e.children.length <= 0) return;
          const t = e.children,
            i = t.map((e) => e.geometry);
          i.filter((e, t) => i.indexOf(e) === t).forEach((i) => {
            const r = t.filter((e) => e.geometry === i),
              a =
                r.length > 0
                  ? r.filter((e) => e.material === r[0].material)
                  : [];
            if (a.length > 1) {
              const t = new l.SPe(i, a[0].material, a.length);
              (t.userData = { ...a[0].userData }),
                (t.userData.instanceUserData = []),
                (t.userData.attributes =
                  t.userData.defAttributes || t.userData.attributes),
                t.userData.defAttributes && delete t.userData.defAttributes,
                (t.name = t.userData.attributes?.name || a[0].name),
                a.forEach((i, r) => {
                  t.setMatrixAt(r, i.matrix),
                    e.remove(i),
                    t.userData.instanceUserData.push(i.userData);
                }),
                e.add(t);
            }
          });
        }
        _hideLineMesh(e) {
          if (!d.HideLineMesh) return;
          if (e.children.length <= 0) return;
          const t = [];
          e.traverse((e) => {
            e && (e.isLine || e.isLineSegments || e.isPoints) && t.push(e);
          }),
            t.forEach((e) => {
              (e.userData.visible_3dm = e.visible), (e.visible = !1);
            });
        }
      }
      (d.LIBRARY_PATH = "https://cdn.jsdelivr.net/npm/rhino3dm@7.15.0/"),
        (d.ImportMaterials = !0),
        (d.ForceLayerMaterials = !1),
        (d.ReplaceWithInstancedMesh = !1),
        (d.HideLineMesh = !1);
      let p = (r = class extends s.SimpleEventDispatcher {
        constructor() {
          super(...arguments),
            (this.dependencies = [n.k]),
            (this._importer = new a.q(d, ["3dm"], !0)),
            (this.importMaterials = !0),
            (this.forceLayerMaterials = !1),
            (this.replaceWithInstancedMesh = !1),
            (this.hideLineMesh = !1);
        }
        _refresh() {
          (d.ImportMaterials = this.importMaterials),
            (d.ForceLayerMaterials = this.forceLayerMaterials),
            (d.ReplaceWithInstancedMesh = this.replaceWithInstancedMesh),
            (d.HideLineMesh = this.hideLineMesh);
        }
        async onAdded(e) {
          e.getManager()?.importer?.Importers.push(this._importer),
            this._refresh();
        }
        async onDispose(e) {}
        async onRemove(e) {
          e.getManager()?.importer?.Importers &&
            e
              .getManager()
              .importer.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer),
                1
              );
        }
      });
      (p.PluginType = "Rhino3dmLoadPlugin"),
        u(
          [(0, s.onChange)(r.prototype._refresh), (0, c.Q7)()],
          p.prototype,
          "importMaterials",
          void 0
        ),
        u(
          [(0, s.onChange)(r.prototype._refresh), (0, c.Q7)()],
          p.prototype,
          "forceLayerMaterials",
          void 0
        ),
        u(
          [(0, s.onChange)(r.prototype._refresh), (0, c.Q7)()],
          p.prototype,
          "replaceWithInstancedMesh",
          void 0
        ),
        u(
          [(0, s.onChange)(r.prototype._refresh), (0, c.Q7)()],
          p.prototype,
          "hideLineMesh",
          void 0
        ),
        (p = r = u([(0, c.Sp)("Rhino 3dm loader")], p));
    },
    1744: function (e, t, i) {
      i.d(t, {
        v: function () {
          return o;
        },
      });
      var r = i(9008),
        a = i(4821),
        s = i(2354),
        n = i(4625);
      class o extends r.SimpleEventDispatcher {
        constructor() {
          super(...arguments), (this.dependencies = [a.k]);
        }
        async onAdded(e) {
          this._importer || (this._importer = new s.q(n.j, ["stl"], !0)),
            e.getManager()?.importer?.Importers.push(this._importer);
        }
        async onDispose(e) {
          this._importer = void 0;
        }
        async onRemove(e) {
          this._importer &&
            e.getManager()?.importer?.Importers &&
            e
              .getManager()
              .importer.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer),
                1
              ),
            (this._importer = void 0);
        }
      }
      o.PluginType = "STLLoadPlugin";
    },
    5942: function (e, t, i) {
      i.d(t, {
        j: function () {
          return h;
        },
      });
      var r = i(3995),
        a = i(4821);
      const s = (e, t) => {
          const i = {};
          for (const r of e.mappings)
            for (const e of r.variants)
              i[t[e]] = { material: null, gltfMaterialIndex: r.material };
          return i;
        },
        n = "KHR_materials_variants";
      class o {
        constructor(e) {
          (this.parser = e), (this.name = n);
        }
        async afterRoot(e) {
          const t = this.parser,
            i = t.json;
          if (!i.extensions || !i.extensions[this.name]) return;
          const r = ((e) => {
            const t = [],
              i = new Set();
            for (const r of e) {
              let e = r,
                a = 0;
              for (; i.has(e); ) e = r + "." + ++a;
              i.add(e), t.push(e);
            }
            return t;
          })((i.extensions[this.name].variants || []).map((e) => e.name));
          for (const a of e.scenes)
            a.traverse((e) => {
              const a = t.associations.get(e);
              if (!a || void 0 === a.meshes || void 0 === a.primitives) return;
              const n = i.meshes[a.meshes].primitives[a.primitives].extensions;
              n &&
                n[this.name] &&
                (e.userData._variantMaterials = s(n[this.name], r));
            });
          await Promise.all(
            e.scenes.map(async (e) => {
              const i = [];
              return (
                e.traverse((e) => {
                  return (
                    void 0 !== (r = e).material &&
                    r.userData &&
                    r.userData._variantMaterials &&
                    i.push(
                      (async (e) => {
                        const i = e.material,
                          r = e.userData._variantMaterials,
                          a = [];
                        for (const i in r) {
                          const s = r[i];
                          if (s.material) continue;
                          const n = s.gltfMaterialIndex;
                          a.push(
                            t.getDependency("material", n).then((a) => {
                              (e.material = a),
                                t.assignFinalMaterial(e),
                                (r[i].material = e.material);
                            })
                          );
                        }
                        return Promise.all(a).then(() => {
                          e.material = i;
                        });
                      })(e)
                    )
                  );
                  var r;
                }),
                e.userData.__importData || (e.userData.__importData = {}),
                (e.userData.__importData[n] = { names: r }),
                Promise.all(i)
              );
            })
          );
        }
      }
      var l = i(9008);
      const c = (e) =>
          void 0 !== e.material &&
          e.userData &&
          e.userData._variantMaterials &&
          !!Object.values(e.userData._variantMaterials).filter((e) =>
            u(e?.material)
          ),
        u = (e) => e && e.isMaterial && !Array.isArray(e);
      class d {
        constructor(e) {
          (this.writer = e), (this.name = n), (this.variantNames = []);
        }
        beforeParse(e) {
          const t = new Set();
          for (const i of e)
            i.traverse((e) => {
              if (!c(e)) return;
              const i = e.userData._variantMaterials;
              for (const e in i) {
                const r = i[e];
                u(r.material) && t.add(e);
              }
            });
          t.forEach((e) => this.variantNames.push(e));
        }
        writeMesh(e, t) {
          if (!c(e)) return;
          const i = e.userData,
            r = i._variantMaterials,
            a = {};
          for (const e in r) {
            const t = r[e].material;
            if (!u(t)) continue;
            const i = this.variantNames.indexOf(e),
              s = this.writer.processMaterial(t);
            a[s] || (a[s] = { material: s, variants: [] }),
              a[s].variants.push(i);
          }
          const s = Object.values(a)
            .map((e) => e.variants.sort((e, t) => e - t) && e)
            .sort((e, t) => e.material - t.material);
          if (0 === s.length) return;
          const n = u(i._originalMaterial)
            ? this.writer.processMaterial(i._originalMaterial) ?? -1
            : -1;
          for (const e of t.primitives)
            n >= 0 && (e.material = n),
              (e.extensions = e.extensions || {}),
              (e.extensions[this.name] = { mappings: s });
        }
        afterParse(e) {
          if (0 === this.variantNames.length) return;
          const t = this.writer.json;
          t.extensions = t.extensions || {};
          const i = this.variantNames.map((e) => ({ name: e }));
          (t.extensions[this.name] = { variants: i }),
            (this.writer.extensionsUsed[this.name] = !0);
        }
      }
      function p(e) {
        return new d(e);
      }
      class h extends r.Q {
        constructor() {
          super(),
            (this.enabled = !0),
            (this.toJSON = void 0),
            (this.dependencies = [a.k]),
            (this.variants = {}),
            (this.selectedVariant = ""),
            (this._objectAdded = (e) => {
              const t = e.object;
              "model" === t?.assetType &&
                t.modelObject &&
                this._viewer &&
                (t.modelObject.traverse((e) => {
                  if (e.userData._variantMaterials)
                    for (const t of Object.values(e.userData._variantMaterials))
                      t?.material &&
                        (t.material =
                          this._viewer
                            ?.getManager()
                            ?.materials?.processMaterial(t.material, {}) ||
                          t.material);
                  const t = e.userData?.__importData?.[n];
                  if (!t) return;
                  const i = t.names || [];
                  for (const t of i)
                    this.variants[t] || (this.variants[t] = []),
                      this.variants[t].push(e);
                  delete e.userData.__importData[n];
                }),
                this.uiConfig.uiRefresh?.());
            }),
            (this.uiConfig = {
              type: "folder",
              label: "KHR Material Variants",
              children: [
                () => ({
                  children: [null, ...Object.keys(this.variants)].map((e) =>
                    e ? { label: e } : { label: "none", value: "" }
                  ),
                  type: "dropdown",
                  label: "Variant",
                  property: [this, "selectedVariant"],
                }),
              ],
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e),
            e.scene.addEventListener("addSceneObject", this._objectAdded);
          const t = e.getPlugin(a.k);
          t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(p);
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new o(e));
        }
        async onRemove(e) {
          e.scene.removeEventListener("addSceneObject", this._objectAdded);
          const t = e.getPlugin(a.k);
          t.importer?.removeEventListener("loaderCreate", this._loaderCreate);
          const i = t.exporter
            ?.getExporter("gltf", "glb")
            ?.extensions?.indexOf(p);
          return (
            void 0 !== i &&
              -1 !== i &&
              t.exporter.getExporter("gltf", "glb")?.extensions?.splice(i, 1),
            (this.variants = {}),
            super.onRemove(e)
          );
        }
        _variantChanged() {
          this.applyVariant(this.selectedVariant || "", !0);
        }
        applyVariant(e, t = !1, i, r = !0) {
          if (!t && !i && this.selectedVariant === e) return;
          if (!e) return;
          i || (this.selectedVariant = e);
          const a = i
            ? Array.isArray(i)
              ? i
              : [i]
            : e
            ? this.variants[e] || []
            : Object.values(this.variants).flat();
          for (const t of a) {
            const i = new Set(),
              a = (t) => {
                if (!t.userData._variantMaterials || i.has(t)) return;
                const r = e
                  ? t.userData._variantMaterials[e]?.material
                  : t.userData._originalMaterial;
                r &&
                  (t.userData._originalMaterial ||
                    (t.userData._originalMaterial = t.material),
                  t?.setMaterial?.(r)),
                  i.add(t);
              };
            r ? t.traverse(a) : a(t);
          }
        }
      }
      (h.PluginType = "GLTFKHRMaterialVariantsPlugin"),
        (function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          s > 3 && n && Object.defineProperty(t, i, n);
        })(
          [(0, l.onChange)(h.prototype._variantChanged)],
          h.prototype,
          "selectedVariant",
          void 0
        );
    },
    2412: function (e, t, i) {
      i.d(t, {
        h: function () {
          return ce;
        },
        B: function () {
          return ue;
        },
      });
      var r = i(3269),
        a = i(4821),
        s = i(8112),
        n = i(2278),
        o = i(5571),
        l = i(7697),
        c = i(5254),
        u = i(6882),
        d = i(5220),
        p = i(6695),
        h = i(7821),
        m = i(6667),
        f = i(439),
        g = i(1233),
        v = i(922),
        _ = i(1531),
        y = i(4388),
        b = i(6493),
        x = i(4722),
        S = i(7256),
        C = i(1213),
        D = i(2875),
        w = i(418),
        P = i(3036),
        M = i(9483),
        T = i(3316),
        E = i(5133),
        O = i(1755),
        L = i(529),
        F = i(8505),
        B = i(4352),
        j = i(1672),
        U = i(1134),
        R = i(5942),
        A = i(5454),
        I = i(6757),
        N = i(5008),
        k = i(939),
        z = i(2714),
        G = i(1321),
        V = i(2354),
        H = i(1732),
        W = i(9008),
        q = i(4107);
      const Q = "KHR_texture_basisu";
      class X extends W.SimpleEventDispatcher {
        constructor() {
          super(...arguments), (this.dependencies = [a.k]);
        }
        async onAdded(e) {
          this._importer ||
            (this._importer = new V.q(
              class extends H.a {
                constructor(t) {
                  super(t),
                    this.setTranscoderPath(
                      X.TRANSCODER_LIBRARY_PATH
                    ).detectSupport(e.renderer.rendererObject);
                }
                async createTexture(e, t) {
                  const i = new Uint8Array(e.slice(0)),
                    r = await super.createTexture(e, t);
                  return (
                    (r.source._sourceImgBuffer = i),
                    (r.userData.mimeType = "image/ktx2"),
                    (r.toJSON = (e) => (0, q.Rg)(r, e, r.name, "image/ktx2")),
                    (r.clone = () => {
                      throw new Error("ktx2 texture cloning not supported");
                    }),
                    r
                  );
                }
              },
              ["ktx2"],
              !1
            )),
            e.getManager()?.importer?.Importers.push(this._importer),
            e
              .getManager()
              ?.exporter?.getExporter("gltf", "glb")
              ?.extensions?.push(Z);
        }
        async onDispose(e) {
          this._importer = void 0;
        }
        async onRemove(e) {
          this._importer &&
            e.getManager()?.importer?.Importers &&
            e
              .getManager()
              .importer.Importers.splice(
                e.getManager().importer.Importers.indexOf(this._importer),
                1
              ),
            (this._importer = void 0);
        }
      }
      (X.PluginType = "KTX2LoadPlugin"),
        (X.TRANSCODER_LIBRARY_PATH =
          "https://cdn.jsdelivr.net/gh/BinomialLLC/basis_universal@master/webgl/transcoder/build/");
      const Z = (e) => ({
        writeTexture: (t, i) => {
          if ("image/ktx2" !== t.userData.mimeType) return;
          if (void 0 !== i.source && null !== i.source)
            return void console.warn("ktx2 export: source already set");
          const r = t.source._sourceImgBuffer || t.userData.__sourceBuffer;
          if (!r)
            return void console.warn("ktx2 export: no source buffer for ktx2");
          i.extensions = i.extensions || {};
          const a = {},
            s = new Blob([r], { type: "image/ktx2" });
          (a.source = e.processImageBlob(s, t)),
            (i.extensions[Q] = a),
            (e.extensionsUsed[Q] = !0);
        },
      });
      var K = i(7398),
        $ = i(3898),
        Y = i(7283),
        J = i(9923),
        ee = i(1948),
        te = i(1358),
        ie = i(9280),
        re = i(6689),
        ae = i(2295),
        se = i(1744),
        ne = i(8712),
        oe = i(8366),
        le = i(5808);
      class ce extends r.o {
        constructor(e) {
          super(e);
        }
        async initialize({
          caching: e = !0,
          ground: t = !0,
          bloom: i = !0,
          depthTonemap: r = !0,
          enableDrop: s = !1,
          importPopup: n = !0,
          debug: o = !1,
          interactionPrompt: l = !0,
        } = {}) {
          return (
            o && (await this.addPlugin(K.z)),
            this.getPlugin(a.k) ||
              this.addPluginSync(a.k, void 0, void 0, {
                storage:
                  e && window.caches
                    ? await caches.open("webgi-cache-storage")
                    : void 0,
              }),
            await ue(this, {
              ground: t,
              bloom: i,
              depthTonemap: r,
              enableDrop: s,
              importPopup: n,
              interactionPrompt: l,
            }),
            await this.addPlugin(J.z),
            await this.addPlugin(ee.e),
            await this.addPlugin(te.M),
            this
          );
        }
      }
      async function ue(
        e,
        {
          ground: t = !0,
          bloom: i = !0,
          depthTonemap: r = !0,
          enableDrop: V = !1,
          importPopup: H = !1,
          interactionPrompt: W = !0,
        } = {}
      ) {
        await e.getOrAddPlugin(a.k),
          H && (await e.getOrAddPlugin(oe.N)),
          await e.getOrAddPlugin(I.m),
          await e.getOrAddPlugin(U.D),
          V && (await e.getOrAddPlugin(s.y)),
          await e.addPlugin(new f.E(32)),
          await e.getOrAddPlugin(N.x),
          await e.getOrAddPlugin(o._),
          await e.addPlugin(new n.I(r || !e.useRgbm)),
          await e.getOrAddPlugin(O.v),
          await e.getOrAddPlugin(M.Q),
          await e.getOrAddPlugin(h.k),
          await e.getOrAddPlugin(k.s),
          await e.getOrAddPlugin(b.i),
          await e.getOrAddPlugin(l.i),
          await e.getOrAddPlugin(w.h),
          await e.getOrAddPlugin(j.$),
          await e.getOrAddPlugin(g.L),
          await e.getOrAddPlugin(x.$),
          await e.getOrAddPlugin(z.z),
          await e.getOrAddPlugin(d.w),
          await e.getOrAddPlugin(S.D),
          await e.getOrAddPlugin(F.T),
          await e.getOrAddPlugin(m.D),
          await e.getOrAddPlugin(G.w),
          await e.getOrAddPlugin(R.j),
          await e.getOrAddPlugin(E.l, !1),
          await e.getOrAddPlugin(B.N),
          await e.getOrAddPlugin(P.qK),
          await e.getOrAddPlugin(y.F, !1),
          await e.getOrAddPlugin(C.h, !1),
          await e.getOrAddPlugin(u.H, !1),
          await e.getOrAddPlugin(D.j, !1),
          await e.getOrAddPlugin(v.s, !1),
          await e.getOrAddPlugin(_.R, !1),
          await e.getOrAddPlugin(A.r, !1),
          await e.getOrAddPlugin(X),
          await e.getOrAddPlugin($.B),
          await e.getOrAddPlugin(Y.k),
          await e.getOrAddPlugin(ae.P),
          await e.getOrAddPlugin(se.v),
          await e.getOrAddPlugin(re.O),
          await e.getOrAddPlugin(ne.B),
          await e.getOrAddPlugin(p._),
          await e.getOrAddPlugin(T.E),
          await e.getOrAddPlugin(L.o),
          i && (await e.getOrAddPlugin(c.d)),
          t && (await e.getOrAddPlugin(ie.C)),
          W && (await e.getOrAddPlugin(le.L)),
          e.renderer.refreshPipeline();
      }
    },
    1321: function (e, t, i) {
      i.d(t, {
        w: function () {
          return c;
        },
      });
      var r = i(3995),
        a = i(4821),
        s = i(4107),
        n = i(5551),
        o = i(2988),
        l = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let c = class extends r.Q {
        addClearcoatTint(e) {
          return u(e.materialObject);
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new d(e));
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [a.k]),
            (this._defines = {}),
            (this._uniforms = {
              ccTintColor: { value: new o.Ilk() },
              ccThickness: { value: 0 },
              ccIor: { value: 0 },
            }),
            (this.materialExtension = {
              parsFragmentSnippet: (e, t) =>
                this.enabled &&
                t?.materialObject.userData._clearcoatTint?.enableTint &&
                t.materialObject.clearcoat > 0
                  ? "\nuniform vec3 ccTintColor;\nuniform float ccThickness;\nuniform float ccIor;\nvec3 clearcoatTint(const in float dotNV, const in float dotNL, const in float clearcoat) {\n    vec3 tint = ( ccThickness > 0. ? 1. - ccTintColor : ccTintColor); // Set thickness < 0 for glow.\n    tint = exp(tint * -(ccThickness * ((dotNL + dotNV) / max(dotNL * dotNV, 1e-3)))); // beer's law\n    return mix(vec3(1.0), tint, clearcoat);\n}\n        "
                  : "",
              shaderExtender: (e, t, i) => {
                if (
                  !(
                    this.enabled &&
                    t?.materialObject.userData._clearcoatTint?.enableTint &&
                    t.materialObject.clearcoat > 0
                  )
                )
                  return;
                const r =
                    "outgoingLight = outgoingLight * ( 1.0 - material.clearcoat * Fcc ) + clearcoatSpecular * material.clearcoat;",
                  a =
                    "float dotNVcc = saturate( dot( geometry.clearcoatNormal, geometry.viewDir ) );";
                (e.fragmentShader.includes(a) &&
                  e.fragmentShader.includes(r)) ||
                  console.error(
                    "ClearcoatTintPlugin: shaderExtender cannot patch shader, version changed?"
                  ),
                  (e.fragmentShader = e.fragmentShader.replace(
                    a,
                    "\n            float dotNVcc = saturate( dot( geometry.clearcoatNormal, -refract(geometry.viewDir, geometry.clearcoatNormal, 1./ccIor) ) );\n            "
                  )),
                  (e.fragmentShader = e.fragmentShader.replace(
                    r,
                    "\n            outgoingLight *= clearcoatTint(dotNVcc, dotNVcc, material.clearcoat);\n            " +
                      r
                  )),
                  (e.defines.USE_UV = "");
              },
              onObjectRender: (e, t) => {
                const i = t.materialObject.userData?._clearcoatTint;
                if (!i?.enableTint) return;
                this._uniforms.ccTintColor.value.set(i.tintColor),
                  (this._uniforms.ccThickness.value = i.thickness),
                  (this._uniforms.ccIor.value = i.ior);
                const r = this.enabled ? 1 : 0;
                t.materialObject.defines.CLEARCOAT_TINT_ENABLED !== r &&
                  ((t.materialObject.defines.CLEARCOAT_TINT_ENABLED = r),
                  (t.materialObject.needsUpdate = !0));
              },
              extraUniforms: { ...this._uniforms },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._clearcoatTint?.enableTint
                  ? "1"
                  : "0") +
                (e.materialObject.clearcoat > 0 ? "1" : "0"),
              isCompatible: (e) => e.isMeshStandardMaterial2,
              updaters: () => [],
              getUiConfig: (e) => {
                const t = this._viewer,
                  i = {
                    type: "folder",
                    label: "ClearcoatTint",
                    children: [
                      {
                        type: "checkbox",
                        label: "Enabled",
                        get value() {
                          return (
                            e.materialObject.userData._clearcoatTint
                              ?.enableTint || !1
                          );
                        },
                        set value(r) {
                          r !==
                            e.materialObject.userData._clearcoatTint
                              ?.enableTint &&
                            (r
                              ? u(e.materialObject) ||
                                t.alert("Cannot add clearcoat tint.")
                              : e.materialObject.userData._clearcoatTint &&
                                ((e.materialObject.userData._clearcoatTint.enableTint =
                                  !1),
                                (e.materialObject.needsUpdate = !0)),
                            i.uiRefresh?.("postFrame", !0));
                        },
                        onChange: this.setDirty,
                      },
                      () => ({
                        type: "color",
                        label: "Tint color",
                        hidden: () =>
                          !e.materialObject.userData._clearcoatTint?.enableTint,
                        property: [
                          e.materialObject.userData._clearcoatTint,
                          "tintColor",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "input",
                        label: "Thickness",
                        hidden: () =>
                          !e.materialObject.userData._clearcoatTint?.enableTint,
                        property: [
                          e.materialObject.userData._clearcoatTint,
                          "thickness",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        bounds: [0.8, 2.5],
                        label: "IOR",
                        hidden: () =>
                          !e.materialObject.userData._clearcoatTint?.enableTint,
                        property: [
                          e.materialObject.userData._clearcoatTint,
                          "ior",
                        ],
                        onChange: this.setDirty,
                      }),
                    ],
                  };
                return i;
              },
            }),
            (this.setDirty = () => {
              this.materialExtension.setDirty?.(), this._viewer?.setDirty();
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(a.k);
          t?.materials?.registerMaterialExtension(this.materialExtension),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(p);
        }
        async onRemove(e) {
          return (
            e
              .getPlugin(a.k)
              ?.materials?.unregisterMaterialExtension(this.materialExtension),
            e
              .getPlugin(a.k)
              ?.importer?.removeEventListener(
                "loaderCreate",
                this._loaderCreate
              ),
            super.onRemove(e)
          );
        }
      };
      function u(e) {
        const t = e?.userData;
        if (!t) return !1;
        t._clearcoatTint || (t._clearcoatTint = {});
        const i = t._clearcoatTint;
        return (
          (i.enableTint = !0),
          void 0 === i.tintColor && (i.tintColor = 16777215),
          void 0 === i.thickness && (i.thickness = 0.1),
          void 0 === i.ior && (i.ior = 1.5),
          e.isMaterial && (e.needsUpdate = !0),
          !0
        );
      }
      (c.PluginType = "ClearcoatTintPlugin"),
        (c.CLEARCOAT_TINT_GLTF_EXTENSION = "WEBGI_materials_clearcoat_tint"),
        l(
          [
            (0, n.Q7)("Enabled", (e) => ({ onChange: e.setDirty })),
            (0, s.qC)(),
          ],
          c.prototype,
          "enabled",
          void 0
        ),
        (c = l([(0, n.Sp)("ClearcoatTint Materials")], c));
      class d {
        constructor(e) {
          (this.parser = e), (this.name = c.CLEARCOAT_TINT_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          const r = i.extensions[this.name];
          return (
            t.userData || (t.userData = {}),
            u(t),
            (0, s.Hx)(r, t.userData._clearcoatTint, !1, {}),
            Promise.resolve()
          );
        }
      }
      const p = (e) => ({
        writeMaterial: (t, i) => {
          if (!t.isMeshStandardMaterial || !t.userData._clearcoatTint) return;
          if (!t.userData._clearcoatTint.enableTint) return;
          i.extensions = i.extensions || {};
          const r = (0, s.HD)(t.userData._clearcoatTint, !1);
          (i.extensions[c.CLEARCOAT_TINT_GLTF_EXTENSION] = r),
            (e.extensionsUsed[c.CLEARCOAT_TINT_GLTF_EXTENSION] = !0);
        },
      });
    },
    6667: function (e, t, i) {
      i.d(t, {
        D: function () {
          return m;
        },
      });
      var r,
        a = i(3995),
        s = i(2988),
        n = i(4821),
        o = i(2095),
        l = i(4107),
        c = i(5551),
        u = i(8670),
        d = i(6533),
        p = i(2860),
        h = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let m = (r = class extends a.Q {
        enableCustomBump(e, t, i) {
          const r = e.materialObject?.userData;
          if (!r) return !1;
          if (void 0 === r._hasCustomBump) {
            const e = r.__appliedMeshes;
            let t = !0;
            if (e)
              for (const { geometry: i } of e)
                !i ||
                  (i.attributes.position &&
                    i.attributes.normal &&
                    i.attributes.uv) ||
                  (t = !1);
            if (!t) return !1;
          }
          return (
            (r._hasCustomBump = !0),
            (r._customBumpScale = i ?? r._customBumpScale ?? 0.001),
            (r._customBumpMap = t ?? r._customBumpMap),
            (e.materialObject.needsUpdate = !0),
            !0
          );
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new f(e));
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [n.k]),
            (this.bicubicFiltering = !0),
            (this._defines = {
              CUSTOM_BUMP_MAP_DEBUG: !1,
              CUSTOM_BUMP_MAP_BICUBIC: !0,
            }),
            (this._uniforms = {
              customBumpUvTransform: { value: new s.Vkp() },
              customBumpScale: { value: 0.001 },
              customBumpMap: { value: null },
            }),
            (this.materialExtension = {
              parsFragmentSnippet: (e, t) =>
                this.enabled && t?.materialObject.userData._hasCustomBump
                  ? "#if defined(CUSTOM_BUMP_MAP_ENABLED) && CUSTOM_BUMP_MAP_ENABLED > 0\n#if CUSTOM_BUMP_MAP_BICUBIC > 0  \nvec4 cubic_cb(float v){vec4 n=vec4(1.,2.,3.,4.)-v;vec4 s=n*n*n;float x=s.x;float y=s.y-4.*s.x;float z=s.z-4.*s.y+6.*s.x;float w=6.-x-y-z;return vec4(x,y,z,w)*(1./6.);}vec4 textureBicubic_cb(sampler2D sampler,vec2 texCoords){vec2 texSize=vec2(textureSize(sampler,0));vec2 invTexSize=1./texSize;texCoords=texCoords*texSize-0.5;vec2 fxy=fract(texCoords);texCoords-=fxy;vec4 xcubic=cubic_cb(fxy.x);vec4 ycubic=cubic_cb(fxy.y);vec4 c=texCoords.xxyy+vec2(-0.5,+1.5).xyxy;vec4 s=vec4(xcubic.xz+xcubic.yw,ycubic.xz+ycubic.yw);vec4 offset=c+vec4(xcubic.yw,ycubic.yw)/s;offset*=invTexSize.xxyy;vec4 sample0=texture(sampler,offset.xz);vec4 sample1=texture(sampler,offset.yz);vec4 sample2=texture(sampler,offset.xw);vec4 sample3=texture(sampler,offset.yw);float sx=s.x/(s.x+s.y);float sy=s.z/(s.z+s.w);return mix(mix(sample3,sample2,sx),mix(sample1,sample0,sx),sy);}\n#endif\nvarying vec2 vCustomBumpUv;uniform sampler2D customBumpMap;uniform float customBumpScale;vec2 dHdxy_fwd_cb(){vec2 dSTdx=dFdx(vCustomBumpUv);vec2 dSTdy=dFdy(vCustomBumpUv);\n#if CUSTOM_BUMP_MAP_BICUBIC > 0\nfloat Hll=customBumpScale*textureBicubic_cb(customBumpMap,vCustomBumpUv).x;float dBx=customBumpScale*textureBicubic_cb(customBumpMap,vCustomBumpUv+dSTdx).x-Hll;float dBy=customBumpScale*textureBicubic_cb(customBumpMap,vCustomBumpUv+dSTdy).x-Hll;\n#else\nfloat Hll=customBumpScale*texture2D(customBumpMap,vCustomBumpUv).x;float dBx=customBumpScale*texture2D(customBumpMap,vCustomBumpUv+dSTdx).x-Hll;float dBy=customBumpScale*texture2D(customBumpMap,vCustomBumpUv+dSTdy).x-Hll;\n#endif\nreturn vec2(dBx,dBy);}\n#ifndef USE_BUMPMAP\nvec3 perturbNormalArb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=dFdx(surf_pos.xyz);vec3 vSigmaY=dFdy(surf_pos.xyz);vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n#endif\n#endif\n"
                  : "",
              shaderExtender: (e, t, i) => {
                if (!this.enabled || !t.materialObject.userData._hasCustomBump)
                  return;
                const r = t.materialObject.userData?._customBumpMap;
                r &&
                  ((e.fragmentShader = (0, u.p)(
                    e.fragmentShader,
                    "#glMarker beforeAccumulation",
                    "\n#if defined(CUSTOM_BUMP_MAP_ENABLED) && CUSTOM_BUMP_MAP_ENABLED > 0\n    normal = perturbNormalArb( - vViewPosition, normal, dHdxy_fwd_cb(), faceDirection );\n#endif\n                ",
                    { prepend: !0 }
                  )),
                  (e.vertexShader = (0, u.p)(
                    e.vertexShader,
                    "#include <uv_pars_vertex>",
                    "\n#if defined(CUSTOM_BUMP_MAP_ENABLED) && CUSTOM_BUMP_MAP_ENABLED > 0\n                varying vec2 vCustomBumpUv;\n                uniform mat3 customBumpUvTransform;\n#endif\n                ",
                    { prepend: !0 }
                  )),
                  (e.vertexShader = (0, u.p)(
                    e.vertexShader,
                    "#include <uv_vertex>",
                    "\n#if defined(CUSTOM_BUMP_MAP_ENABLED) && CUSTOM_BUMP_MAP_ENABLED > 0\n                vCustomBumpUv = ( customBumpUvTransform * vec3( uv, 1 ) ).xy;\n#endif\n                ",
                    { prepend: !0 }
                  )),
                  (e.defines.USE_UV = ""));
              },
              onObjectRender: (e, t) => {
                const i = t.materialObject.userData;
                if (!i?._hasCustomBump) return;
                const r = e;
                if (!r.isMesh || !r.geometry) return;
                const a = i._customBumpMap?.isTexture ? i._customBumpMap : null;
                (this._uniforms.customBumpMap.value = a),
                  (this._uniforms.customBumpScale.value = a
                    ? i._customBumpScale
                    : 0),
                  a &&
                    (a.updateMatrix(),
                    this._uniforms.customBumpUvTransform.value.copy(a.matrix));
                let s = this.enabled && a ? 1 : 0;
                t.materialObject.defines.CUSTOM_BUMP_MAP_ENABLED !== s &&
                  ((t.materialObject.defines.CUSTOM_BUMP_MAP_ENABLED = s),
                  (t.materialObject.needsUpdate = !0)),
                  (s = +this._defines.CUSTOM_BUMP_MAP_DEBUG),
                  t.materialObject.defines.CUSTOM_BUMP_MAP_DEBUG !== s &&
                    ((t.materialObject.defines.CUSTOM_BUMP_MAP_DEBUG = s),
                    (t.materialObject.needsUpdate = !0)),
                  (s = +this._defines.CUSTOM_BUMP_MAP_BICUBIC),
                  t.materialObject.defines.CUSTOM_BUMP_MAP_BICUBIC !== s &&
                    ((t.materialObject.defines.CUSTOM_BUMP_MAP_BICUBIC = s),
                    (t.materialObject.needsUpdate = !0));
              },
              extraUniforms: { ...this._uniforms },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._hasCustomBump ? "1" : "0") +
                e.materialObject.userData?._customBumpMap?.uuid,
              isCompatible: (e) => e.isMeshStandardMaterial2,
              updaters: () => [],
              getUiConfig: (e) => {
                const t = this._viewer,
                  i = this.enableCustomBump,
                  r = {
                    type: "folder",
                    label: "CustomBumpMap",
                    children: [
                      {
                        type: "checkbox",
                        label: "Enabled",
                        get value() {
                          return e.materialObject.userData._hasCustomBump || !1;
                        },
                        set value(a) {
                          a !== e.materialObject.userData._hasCustomBump &&
                            (a
                              ? i(e) ||
                                t.alert(
                                  "One or more geometries cannot be made anisotropic."
                                )
                              : ((e.materialObject.userData._hasCustomBump =
                                  !1),
                                (e.materialObject.needsUpdate = !0)),
                            r.uiRefresh?.("postFrame", !0));
                        },
                        onChange: this.setDirty,
                      },
                      {
                        type: "slider",
                        label: "Bump Scale",
                        bounds: [-1, 1],
                        hidden: () => !e.materialObject.userData._hasCustomBump,
                        property: [
                          e.materialObject.userData,
                          "_customBumpScale",
                        ],
                        onChange: this.setDirty,
                      },
                      {
                        type: "image",
                        label: "Bump Map",
                        hidden: () => !e.materialObject.userData._hasCustomBump,
                        property: [e.materialObject.userData, "_customBumpMap"],
                        onChange: () => {
                          (e.materialObject.needsUpdate = !0), this.setDirty();
                        },
                      },
                      (0, p.xX)(e.materialObject.userData, "_customBumpMap"),
                    ],
                  };
                return r;
              },
            }),
            (this.setDirty = () => {
              this.materialExtension.setDirty?.(), this._viewer?.setDirty();
            }),
            (this.enableCustomBumpSelected = () => {
              const e = this._viewer
                ?.getPlugin(o.l)
                ?.getSelectedObject()?.material;
              return "material" === e?.assetType && this.enableCustomBump(e);
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(n.k);
          t?.materials?.registerMaterialExtension(this.materialExtension),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(g);
        }
        async onRemove(e) {
          e
            .getPlugin(n.k)
            ?.materials?.unregisterMaterialExtension(this.materialExtension),
            e
              .getPlugin(n.k)
              ?.importer?.removeEventListener(
                "loaderCreate",
                this._loaderCreate
              );
          const t = e
            .getPlugin(n.k)
            ?.exporter?.getExporter("gltf", "glb")
            ?.extensions?.indexOf(g);
          return (
            void 0 !== t &&
              -1 !== t &&
              e
                .getPlugin(n.k)
                ?.exporter?.getExporter("gltf", "glb")
                ?.extensions?.splice(t, 1),
            super.onRemove(e)
          );
        }
      });
      (m.PluginType = "CustomBumpMapPlugin"),
        (m.CUSTOM_BUMP_MAP_GLTF_EXTENSION = "WEBGI_materials_custom_bump_map"),
        h(
          [
            (0, c.Q7)("Enabled", (e) => ({ onChange: e.setDirty })),
            (0, l.qC)(),
          ],
          m.prototype,
          "enabled",
          void 0
        ),
        h(
          [
            (0, c.Q7)("Bicubic", (e) => ({ onChange: e.setDirty })),
            (0, d.lD)(
              "CUSTOM_BUMP_MAP_BICUBIC",
              void 0,
              !0,
              r.prototype.setDirty
            ),
            (0, l.qC)(),
          ],
          m.prototype,
          "bicubicFiltering",
          void 0
        ),
        h(
          [
            (0, c.M)("Enable CustomBumpMap", (e) => ({
              hidden: () => !e._viewer?.getPlugin(o.l),
            })),
          ],
          m.prototype,
          "enableCustomBumpSelected",
          void 0
        ),
        (m = r = h([(0, c.Sp)("CustomBumpMap Materials")], m));
      class f {
        constructor(e) {
          (this.parser = e), (this.name = m.CUSTOM_BUMP_MAP_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser,
            r = i.json.materials[e];
          if (!r.extensions || !r.extensions[this.name])
            return Promise.resolve();
          const a = [],
            n = r.extensions[this.name];
          t.userData || (t.userData = {}),
            (t.userData._hasCustomBump = !0),
            (t.userData._customBumpScale = n.customBumpScale ?? 0);
          const o = n.customBumpMap;
          return (
            o &&
              a.push(
                i.assignTexture(t.userData, "_customBumpMap", o).then((e) => {
                  e.colorSpace = s.KI_;
                })
              ),
            Promise.all(a)
          );
        }
      }
      const g = (e) => ({
        writeMaterial: (t, i) => {
          if (!t.isMeshStandardMaterial || !t.userData._hasCustomBump) return;
          if ((t.userData._customBumpScale || 0) < 0.001) return;
          i.extensions = i.extensions || {};
          const r = {};
          if (
            ((r.customBumpScale = t.userData._customBumpScale || 1),
            t.userData._customBumpMap)
          ) {
            const i = { index: e.processTexture(t.userData._customBumpMap) };
            e.applyTextureTransform(i, t.userData._customBumpMap),
              (r.customBumpMap = i);
          }
          (i.extensions[m.CUSTOM_BUMP_MAP_GLTF_EXTENSION] = r),
            (e.extensionsUsed[m.CUSTOM_BUMP_MAP_GLTF_EXTENSION] = !0);
        },
      });
    },
    6882: function (e, t, i) {
      i.d(t, {
        H: function () {
          return b;
        },
      });
      var r = i(4895),
        a = i(2988),
        s = i(7245),
        n = i(7320),
        o = i(9033),
        l = i(3198),
        c = i(9389),
        u = i(6533),
        d = i(4107),
        p = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      const h = {
          uniforms: {
            colorTexture: { value: null },
            tNormalDepth: { value: null },
            blurTexture: { value: null },
            cocTexture: { value: null },
            cocTextureSize: { value: new a.FM8() },
            cameraNearFar: { value: new a.FM8() },
          },
          vertexShader: n.Z,
          fragmentShader:
            o.Z +
            "\n#include <common>\n#include <packing>\nvarying vec2 vUv;uniform vec2 cocTextureSize;uniform vec2 nearFarBlurScale;uniform vec2 cameraNearFar;uniform vec2 focalDepthRange;uniform vec2 crossCenter;uniform float crossRadius;uniform float crossAlpha;uniform vec3 crossColor;float smoothBoundary(float d,float smooothFactor){smooothFactor*=0.5;float value=smoothstep(-smooothFactor,smooothFactor,d);return value;}float circle(vec2 p,float r){return min((length(p)-r),-(length(p)-r-0.01));}float computeCoc(){float depth=getDepth(vUv);if(depth>1.-0.01)return max(nearFarBlurScale.x,nearFarBlurScale.y);depth=mix(cameraNearFar.x,cameraNearFar.y,depth);float coc=(depth-focalDepthRange.x)/focalDepthRange.y;coc=clamp(coc,-1.,1.);return(coc>0.?coc*nearFarBlurScale.y:coc*nearFarBlurScale.x);}void main(){vec4 blur=blurTextureTexelToLinear(texture2D(blurTexture,vUv));float scale=0.5;blur+=blurTextureTexelToLinear(texture2D(blurTexture,vUv+scale*vec2(1.,1.)/cocTextureSize));blur+=blurTextureTexelToLinear(texture2D(blurTexture,vUv+scale*vec2(-1.,1.)/cocTextureSize));blur+=blurTextureTexelToLinear(texture2D(blurTexture,vUv+scale*vec2(-1.,-1.)/cocTextureSize));blur+=blurTextureTexelToLinear(texture2D(blurTexture,vUv+scale*vec2(1.,-1.)/cocTextureSize));blur/=5.;vec2 uvNearest=(floor(vUv*cocTextureSize)+0.5)/cocTextureSize;float coc=abs(min(2.*cocTextureTexelToLinear(texture2D(cocTexture,uvNearest)).a-1.,computeCoc()));float cocLower=0.005;float cocHigher=0.3;vec4 outColor=vec4(mix(colorTextureTexelToLinear(texture2D(colorTexture,vUv)).rgb,blur.rgb,smoothstep(cocLower,cocHigher,coc)),1.);vec2 d=vUv-crossCenter;if(length(d)>crossRadius+0.05){float dist=circle(d,crossRadius);gl_FragColor=outColor;}else{d.x*=cocTextureSize.x/cocTextureSize.y;float dist=circle(d,crossRadius);dist=smoothBoundary(dist,2.*fwidth(dist));vec4 color=outColor;vec3 dofCircleColor=mix(crossColor,color.rgb,1.-crossAlpha);gl_FragColor=vec4(mix(color.rgb,dofCircleColor,dist),color.a);}\n#include <encodings_fragment>\n}",
        },
        m =
          ((0, s._y)(
            {
              uniforms: {
                cocTexture: { value: null },
                colorTexture: { value: null },
                colorTextureSize: { value: new a.FM8() },
                direction: { value: new a.FM8() },
              },
              vertexShader: n.Z,
              fragmentShader:
                "#include <common>\nvarying vec2 vUv;uniform vec2 colorTextureSize;uniform vec2 direction;const float MAXIMUM_BLUR_SIZE=16.;const float SIGMA=5.;const int NUM_SAMPLES=4;float normpdf(in float x,in float sigma){return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;}vec3 weightedBlur(){float cocIn=2.*cocTextureTexelToLinear(texture2D(cocTexture,vUv)).a-1.;float kernelRadius=MAXIMUM_BLUR_SIZE*cocIn;vec2 invSize=1./colorTextureSize;cocIn*=cocIn*cocIn;float centreSpaceWeight=normpdf(0.,SIGMA)*abs(cocIn);float weightSum=centreSpaceWeight;vec3 centreSample=colorTextureTexelToLinear(texture2D(colorTexture,vUv)).rgb;vec3 diffuseSum=centreSample*weightSum;vec2 delta=invSize*kernelRadius/float(NUM_SAMPLES);for(int i=1;i<=NUM_SAMPLES;i++){float spaceWeight=normpdf(float(i),SIGMA);vec2 texcoord=direction*delta*float(i);vec4 rightSample=colorTextureTexelToLinear(texture2D(colorTexture,vUv+texcoord));vec4 leftSample=colorTextureTexelToLinear(texture2D(colorTexture,vUv-texcoord));float leftCocWeight=abs(2.*cocTextureTexelToLinear(texture2D(cocTexture,vUv-texcoord)).a-1.);float rightCocWeight=abs(2.*cocTextureTexelToLinear(texture2D(cocTexture,vUv+texcoord)).a-1.);leftCocWeight*=leftCocWeight*leftCocWeight;rightCocWeight*=rightCocWeight*rightCocWeight;diffuseSum+=((leftSample.rgb*leftCocWeight)+(rightSample.rgb*rightCocWeight))*spaceWeight;weightSum+=(spaceWeight*(leftCocWeight+rightCocWeight));}return diffuseSum/weightSum;}void main(){gl_FragColor=vec4(weightedBlur(),1.);\n#include <encodings_fragment>\n}",
            },
            "colorTexture",
            "cocTexture"
          ),
          (0, s._y)(
            {
              uniforms: {
                colorTexture: { value: null },
                colorTextureSize: { value: new a.FM8() },
                direction: { value: new a.FM8() },
                frameCount: { value: 0 },
                blurRadius: { value: 16 },
              },
              vertexShader: n.Z,
              fragmentShader:
                l.Z +
                "\n" +
                c.Z +
                "\n#include <common>\nvarying vec2 vUv;uniform vec2 colorTextureSize;uniform float blurRadius;vec4 CircularBlur(){vec4 color=colorTextureTexelToLinear(texture2D(colorTexture,vUv));\n#ifdef DOF_MODE\nfloat blurDist=blurRadius*(2.*color.a-1.);\n#else\nfloat blurDist=blurRadius*color.a;\n#endif\nfloat rnd=PI2*random3(vec3(vUv,frameCount*0.1));float costheta=cos(rnd);float sintheta=sin(rnd);vec4 rotationMatrix=vec4(costheta,-sintheta,sintheta,costheta);vec3 colorSum=vec3(0.);float weightSum=0.001;vec2 ofs;vec4 sampleColor;setPds();\n#pragma unroll_loop_start\nfor(int i=0;i<16;i++){ofs=poisson_disk_samples[UNROLLED_LOOP_INDEX];ofs=vec2(dot(ofs,rotationMatrix.xy),dot(ofs,rotationMatrix.zw));sampleColor=colorTextureTexelToLinear(texture2D(colorTexture,vUv+blurDist*ofs/colorTextureSize.xy));\n#ifdef DOF_MODE\nsampleColor.a=abs(sampleColor.a*2.-1.);sampleColor.a*=sampleColor.a*sampleColor.a;\n#endif\ncolorSum+=sampleColor.rgb*sampleColor.a;weightSum+=sampleColor.a;}\n#pragma unroll_loop_end\ncolorSum/=weightSum;return vec4(min(vec3(72.),max(vec3(0.),colorSum)),1.);}void main(){gl_FragColor=CircularBlur();\n#include <encodings_fragment>\n}",
              defines: { DOF_MODE: 1 },
            },
            "colorTexture"
          ));
      class f extends s.Hl {
        constructor() {
          super(h, "colorTexture", "cocTexture", "blurTexture"),
            (this.dofBlurMaterial = m),
            (this.nearFarBlurScale = new a.FM8(0.25, 0.25)),
            (this.focalDepthRange = new a.FM8(0.5, 1.5)),
            (this.crossCenter = new a.FM8(0.5, 0.5)),
            (this.crossRadius = 0.04),
            (this.crossAlpha = 1),
            (this.crossColor = new a.Ilk(16750848)),
            (this.uiConfig = {
              type: "folder",
              label: "Depth of Field",
              children: [
                {
                  type: "checkbox",
                  label: "Enabled",
                  limitedUi: !0,
                  property: [this, "enabled"],
                },
                {
                  type: "slider",
                  label: "Depth Range",
                  bounds: [0.5, 3],
                  property: [this.focalDepthRange, "y"],
                },
                {
                  type: "slider",
                  label: "Near Blur scale",
                  bounds: [0, 1],
                  property: [this.nearFarBlurScale, "x"],
                },
                {
                  type: "slider",
                  label: "Far Blur scale",
                  bounds: [0, 1],
                  property: [this.nearFarBlurScale, "y"],
                },
              ],
            }),
            (this.material.extensions.derivatives = !0),
            (this.computeCocMaterial = (0, s._y)(
              {
                uniforms: {
                  colorTexture: { value: null },
                  tNormalDepth: this.uniforms.tNormalDepth,
                  cameraNearFar: this.uniforms.cameraNearFar,
                  nearFarBlurScale: this.uniforms.nearFarBlurScale,
                  focalDepthRange: this.uniforms.focalDepthRange,
                },
                vertexShader: n.Z,
                fragmentShader:
                  o.Z +
                  "\n#include <common>\n#include <packing>\nvarying vec2 vUv;uniform vec2 nearFarBlurScale;uniform vec2 cameraNearFar;uniform vec2 focalDepthRange;float computeCoc(){float depth=getDepth(vUv);if(depth==1.)return max(nearFarBlurScale.x,nearFarBlurScale.y);depth=mix(cameraNearFar.x,cameraNearFar.y,depth);float coc=(depth-focalDepthRange.x)/focalDepthRange.y;coc=clamp(coc,-1.,1.);return(coc>0.?coc*nearFarBlurScale.y:coc*nearFarBlurScale.x);}void main(){gl_FragColor=vec4(colorTextureTexelToLinear(texture2D(colorTexture,vUv)).rgb,0.5*computeCoc()+0.5);\n#include <encodings_fragment>\n}",
              },
              "colorTexture"
            )),
            (this.expandCocMaterial = (0, s._y)(
              {
                uniforms: {
                  colorTexture: { value: null },
                  colorTextureSize: { value: new a.FM8() },
                  direction: { value: new a.FM8() },
                  tNormalDepth: this.uniforms.tNormalDepth,
                  nearFarBlurScale: this.uniforms.nearFarBlurScale,
                },
                vertexShader: n.Z,
                fragmentShader:
                  o.Z +
                  "\n#include <common>\nvarying vec2 vUv;uniform vec2 colorTextureSize;uniform vec2 direction;uniform vec2 nearFarBlurScale;const float MAXIMUM_BLUR_SIZE=4.;float expandNear(const in vec2 offset,const in bool isBackground){float coc=0.;vec2 sampleOffsets=MAXIMUM_BLUR_SIZE*offset/5.;float coc0=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv)).a-1.;float coc1=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv-5.*sampleOffsets)).a-1.;float coc2=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv-4.*sampleOffsets)).a-1.;float coc3=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv-3.*sampleOffsets)).a-1.;float coc4=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv-2.*sampleOffsets)).a-1.;float coc5=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv-1.*sampleOffsets)).a-1.;float coc6=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv+1.*sampleOffsets)).a-1.;float coc7=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv+2.*sampleOffsets)).a-1.;float coc8=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv+3.*sampleOffsets)).a-1.;float coc9=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv+4.*sampleOffsets)).a-1.;float coc10=2.*colorTextureTexelToLinear(texture2D(colorTexture,vUv+5.*sampleOffsets)).a-1.;if(isBackground){coc=abs(coc0)*0.095474+(abs(coc1)+abs(coc10))*0.084264+(abs(coc2)+abs(coc9))*0.088139+(abs(coc3)+abs(coc8))*0.091276+(abs(coc4)+abs(coc7))*0.093585+(abs(coc5)+abs(coc6))*0.094998;}else{coc=min(coc0,0.);coc=min(coc1*0.3,coc);coc=min(coc2*0.5,coc);coc=min(coc3*0.75,coc);coc=min(coc4*0.8,coc);coc=min(coc5*0.95,coc);coc=min(coc6*0.95,coc);coc=min(coc7*0.8,coc);coc=min(coc8*0.75,coc);coc=min(coc9*0.5,coc);coc=min(coc10*0.3,coc);if(abs(coc0)>abs(coc))coc=coc0;}return coc;}void main(){vec2 offset=2.*direction/colorTextureSize;bool isBackground=getDepth(vUv)>1.-0.001;float coc=expandNear(offset,isBackground);gl_FragColor=vec4(colorTextureTexelToLinear(texture2D(colorTexture,vUv)).rgb,0.5*coc+0.5);\n#include <encodings_fragment>\n}",
              },
              "colorTexture"
            ));
        }
        render(e, t, i, r, s) {
          if (!this.enabled) return;
          const n = e.baseRenderer,
            o = {
              minFilter: a.TyD,
              magFilter: a.TyD,
              type: a.cLu,
              colorSpace: a.GUF,
              sizeMultiplier: 0.5,
              format: a.wk1,
              depthBuffer: !1,
              generateMipmaps: !1,
            },
            l = n.getTempTarget(o),
            c = n.getTempTarget(o);
          if (
            ((this.computeCocMaterial.uniforms.colorTexture.value = i.texture),
            n.blit(void 0, l, { material: this.computeCocMaterial }),
            (this.expandCocMaterial.uniforms.colorTexture.value = l.texture),
            this.expandCocMaterial.uniforms.direction.value.set(1, 0),
            n.blit(void 0, c, { material: this.expandCocMaterial }),
            (this.expandCocMaterial.uniforms.colorTexture.value = c.texture),
            this.expandCocMaterial.uniforms.direction.value.set(0, 1),
            n.blit(void 0, l, { material: this.expandCocMaterial }),
            this.dofBlurMaterial.uniforms.frameCount)
          )
            (this.dofBlurMaterial.uniforms.colorTexture.value = l.texture),
              n.blit(void 0, c, { material: this.dofBlurMaterial });
          else {
            const e = n.getTempTarget(o);
            (this.dofBlurMaterial.uniforms.cocTexture.value = l.texture),
              (this.dofBlurMaterial.uniforms.colorTexture.value = l.texture),
              this.dofBlurMaterial.uniforms.direction.value.set(1, 0),
              n.blit(void 0, e, { material: this.dofBlurMaterial }),
              (this.dofBlurMaterial.uniforms.colorTexture.value = e.texture),
              this.dofBlurMaterial.uniforms.direction.value.set(0, 1),
              n.blit(void 0, c, { material: this.dofBlurMaterial }),
              n.releaseTempTarget(e);
          }
          (this.material.uniforms.blurTexture.value = c.texture),
            (this.material.uniforms.cocTexture.value = l.texture),
            super.render(e, t, i, r, s),
            n.releaseTempTarget(l),
            n.releaseTempTarget(c);
        }
      }
      p([(0, d.qC)(), (0, u.e5)()], f.prototype, "nearFarBlurScale", void 0),
        p([(0, d.qC)(), (0, u.e5)()], f.prototype, "focalDepthRange", void 0),
        p([(0, u.e5)()], f.prototype, "crossCenter", void 0),
        p([(0, u.e5)()], f.prototype, "crossRadius", void 0),
        p([(0, u.e5)()], f.prototype, "crossAlpha", void 0),
        p([(0, u.e5)()], f.prototype, "crossColor", void 0);
      var g = i(6757),
        v = i(9008),
        _ = i(1672),
        y = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      class b extends r.G {
        passCtor(e) {
          return new f();
        }
        constructor(e = !0, t = !1) {
          super(),
            (this.passId = "depthOfField"),
            (this._beforeFilters = ["progressive", "tonemap", "screen"]),
            (this._afterFilters = ["render"]),
            (this._requiredFilters = ["render"]),
            (this.dependencies = [g.m]),
            (this.enableEdit = !1),
            (this._focalPointHit = new a.Pa4(0, 0, 0)),
            (this.crossFadeTime = 200),
            (this._focalPointHitTime = 0),
            (this._tempVec = new a.Pa4()),
            (this.enabled = e),
            (this.enableEdit = t),
            (this._onObjectHit = this._onObjectHit.bind(this)),
            (this.setDirty = this.setDirty.bind(this));
        }
        setFocalPoint(e, t = !0, i = !1) {
          this._focalPointHit.copy(e),
            t &&
              this._viewer
                ?.getPlugin(_.$)
                ?.startTransition(this._frameFadeTime),
            i && (this._focalPointHitTime = (0, v.now)()),
            this.setDirty();
        }
        getFocalPoint() {
          return this._focalPointHit;
        }
        get depthRange() {
          return this.pass?.passObject.focalDepthRange.y ?? 0;
        }
        set depthRange(e) {
          this.pass && (this.pass.passObject.focalDepthRange.y = e),
            this.setDirty();
        }
        get nearBlurScale() {
          return this.pass?.passObject.nearFarBlurScale.x ?? 0;
        }
        set nearBlurScale(e) {
          this.pass && (this.pass.passObject.nearFarBlurScale.x = e),
            this.setDirty();
        }
        get farBlurScale() {
          return this.pass?.passObject.nearFarBlurScale.y ?? 0;
        }
        set farBlurScale(e) {
          this.pass && (this.pass.passObject.nearFarBlurScale.y = e),
            this.setDirty();
        }
        get _frameFadeTime() {
          return 2.5 * this.crossFadeTime;
        }
        _onObjectHit(e) {
          this._pass &&
            e.intersects.intersect &&
            this.enabled &&
            this.enableEdit &&
            (this._focalPointHit.copy(e.intersects.intersect.point),
            (this._focalPointHitTime = e.time),
            (e.intersects.selectedObject = null),
            this._viewer?.getPlugin(_.$)?.startTransition(this._frameFadeTime),
            this.setDirty());
        }
        async onAdded(e) {
          await super.onAdded(e),
            e
              .getPluginByType("Picking")
              ?.addEventListener("hitObject", this._onObjectHit);
        }
        async onRemove(e) {
          return (
            e
              .getPluginByType("Picking")
              ?.removeEventListener("hitObject", this._onObjectHit),
            super.onRemove(e)
          );
        }
        setDirty() {
          this._viewer?.setDirty();
        }
        _update(e) {
          if (!super._update(e)) return !1;
          const t = this.pass?.passObject;
          if (!t) return !1;
          const i = e.getPlugin(g.m);
          i?.updateShaderProperties(t.material),
            t.dofBlurMaterial.uniforms.frameCount &&
              e.renderer?.updateShaderProperties(t.dofBlurMaterial);
          const r = e.scene.renderCamera;
          if (!r) return !1;
          r.cameraObject.updateMatrixWorld(!0),
            r.updateShaderProperties(t.material),
            r.cameraObject.getWorldPosition(this._tempVec),
            this._tempVec.subVectors(this._focalPointHit, this._tempVec),
            (t.focalDepthRange.x = this._tempVec.length()),
            (t.focalDepthRange.x *= r.cameraObject
              .getWorldDirection(new a.Pa4())
              .dot(this._tempVec.normalize()));
          let s = ((0, v.now)() - this._focalPointHitTime) / this.crossFadeTime;
          if (
            ((s = 1 - Math.min(1, Math.max(0, s))),
            Math.abs(s - t.crossAlpha) > 0.01 &&
              ((t.crossAlpha = s), this.setDirty()),
            s > 0)
          ) {
            const e = this._tempVec
              .copy(this._focalPointHit)
              .project(r.cameraObject)
              .addScalar(1)
              .divideScalar(2);
            t.crossCenter.set(e.x, e.y),
              (t.computeCocMaterial.uniformsNeedUpdate = !0),
              (t.expandCocMaterial.uniformsNeedUpdate = !0);
          }
          return !0;
        }
        get uiConfig() {
          if (this._uiConfig) return this._uiConfig;
          const e = this._pass?.passObject?.uiConfig;
          return e
            ? (e.children
                ?.map((e) => (0, v.getOrCall)(e))
                ?.flat(2)
                .forEach((e) => e && (e.onChange = this.setDirty)),
              e.children?.push({
                type: "checkbox",
                label: "Enable Edit",
                limitedUi: !0,
                property: [this, "enableEdit"],
              }),
              (this._uiConfig = e),
              e)
            : {};
        }
      }
      (b.PluginType = "DepthOfField"),
        y([(0, d.qC)()], b.prototype, "enableEdit", void 0),
        y([(0, d.qC)("focalPoint")], b.prototype, "_focalPointHit", void 0),
        y([(0, d.qC)()], b.prototype, "crossFadeTime", void 0);
    },
    7256: function (e, t, i) {
      i.d(t, {
        D: function () {
          return m;
        },
      });
      var r,
        a = i(3995),
        s = i(2988),
        n = i(4821),
        o = i(4107),
        l = i(5551),
        c = i(9008),
        u = i(8670),
        d = i(5130),
        p = i(6757),
        h = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let m = (r = class extends a.Q {
        static AddFragmentClipping(e, t, i, r, a) {
          const s = e.materialObject?.userData;
          if (!s) return !1;
          s._fragmentClippingExt || (s._fragmentClippingExt = {});
          const n = s._fragmentClippingExt;
          return (
            (n.clipEnabled = !0),
            void 0 === n.clipPosition &&
              (n.clipPosition = t?.toArray() ?? [0, 0, 0, 0]),
            void 0 === n.clipParams &&
              (n.clipParams = i?.toArray() ?? [1, 0, 0, 0]),
            void 0 === n.clipMode && (n.clipMode = r ?? f.Circle),
            void 0 === n.clipInvert && (n.clipInvert = a ?? !1),
            e.materialObject.isMaterial && (e.needsUpdate = !0),
            !0
          );
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new g(e));
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [n.k, p.m]),
            (this._plane = new s.JOQ()),
            (this._viewNormalMatrix = new s.Vkp()),
            (this._defines = { FRAG_CLIPPING_DEBUG: !1 }),
            (this._uniforms = {
              fragClippingPosition: { value: new s.Ltg() },
              fragClippingParams: { value: new s.Ltg() },
              fragClippingCamAspect: { value: 1 },
            }),
            (this.materialExtension = {
              parsFragmentSnippet: (e, t) =>
                this.enabled &&
                t?.materialObject.userData._fragmentClippingExt?.clipEnabled
                  ? d.Z +
                    c.glsl`
uniform vec4 fragClippingPosition;
uniform vec4 fragClippingParams;
uniform float fragClippingCamAspect;
#if FRAG_CLIPPING_MODE == ${f.Circle}
float fragClippingCircle(){
    vec2 pos = viewToScreen(vViewPosition.xyz).xy;
    float radius = fragClippingParams.x;
    vec2 center = fragClippingPosition.xy;
    pos.y /= fragClippingCamAspect;
    center.y /= fragClippingCamAspect;
    return length(pos - center) - radius;
}
#elif FRAG_CLIPPING_MODE == ${f.Ellipse}
float fragClippingEllipse(){
    vec2 pos = viewToScreen(vViewPosition.xyz).xy;
    vec2 radius = fragClippingParams.xy;
    vec2 center = fragClippingPosition.xy;
    pos.y /= fragClippingCamAspect;
    center.y /= fragClippingCamAspect;
    return length((pos - center) / radius) - 1.0;
}
#elif FRAG_CLIPPING_MODE == ${f.Rectangle}
float fragClippingRectangle(){
    vec2 pos = viewToScreen(vViewPosition.xyz).xy;
    vec2 radius = fragClippingParams.xy;
    vec2 center = fragClippingPosition.xy;
    pos.y /= fragClippingCamAspect;
    center.y /= fragClippingCamAspect;
    vec2 d = abs(pos - center) - radius;
    return min(max(d.x,d.y),0.0) + length(max(d,0.0));
}
#elif FRAG_CLIPPING_MODE == ${f.Plane}
float fragClippingPlane(){
    vec3 pos = vViewPosition.xyz;
    vec3 normal = fragClippingParams.xyz;
    float d = dot(pos, normal) - fragClippingParams.w;
    return d;
}
#elif FRAG_CLIPPING_MODE == ${f.Sphere}
float fragClippingSphere(){
    vec3 pos = vViewPosition.xyz;
    vec3 center = fragClippingPosition.xyz;
    float radius = fragClippingParams.x;
    pos.y /= fragClippingCamAspect;
    center.y /= fragClippingCamAspect;
    return length(pos - center) - radius;
}
#endif
        `
                  : "",
              shaderExtender: (e, t, i) => {
                this.enabled &&
                  t.materialObject.userData._fragmentClippingExt?.clipEnabled &&
                  (e.fragmentShader = (0, u.p)(
                    e.fragmentShader,
                    "#glMarker mainStart",
                    c.glsl`
    float fragClippingDist = 0.0;
    #if FRAG_CLIPPING_MODE == ${f.Circle}
    fragClippingDist = fragClippingCircle();
    #elif FRAG_CLIPPING_MODE == ${f.Ellipse}
    fragClippingDist = fragClippingEllipse();
    #elif FRAG_CLIPPING_MODE == ${f.Rectangle}
    fragClippingDist = fragClippingRectangle();
    #elif FRAG_CLIPPING_MODE == ${f.Plane}
    fragClippingDist = fragClippingPlane();
    #elif FRAG_CLIPPING_MODE == ${f.Sphere}
    fragClippingDist = fragClippingSphere();
    #endif
    #if FRAG_CLIPPING_DEBUG
    gl_FragColor = vec4(max(fragClippingDist, 0.0), 0.0, 0.0, 1.0); 
//    gl_FragColor = vec4(vViewPosition.xyz, 1.0);
    #include <encodings_fragment>
    return;
    #endif
    
    #if FRAG_CLIPPING_INVERSE == 1
    if (fragClippingDist > 0.0) discard;
    #else
    if (fragClippingDist < 0.0) discard;
    #endif
            `,
                    { append: !0 }
                  ));
              },
              onObjectRender: (e, t) => {
                let i = t.materialObject.userData?._fragmentClippingExt;
                if (
                  (t.materialObject.userData.isGBufferMaterial &&
                    e &&
                    (i = e.material?.userData?._fragmentClippingExt),
                  !i?.clipEnabled)
                )
                  return;
                if (
                  (this._uniforms.fragClippingPosition.value.fromArray(
                    i.clipPosition
                  ),
                  i.clipMode === f.Plane)
                ) {
                  const e =
                    this._viewer?.scene.activeCamera.cameraObject
                      .matrixWorldInverse;
                  this._plane.normal.set(
                    i.clipParams[0],
                    i.clipParams[1],
                    i.clipParams[2]
                  ),
                    (this._plane.constant = i.clipParams[3]),
                    this._viewNormalMatrix.getNormalMatrix(e),
                    this._plane.applyMatrix4(e, this._viewNormalMatrix),
                    this._uniforms.fragClippingParams.value.set(
                      this._plane.normal.x,
                      this._plane.normal.y,
                      this._plane.normal.z,
                      this._plane.constant
                    );
                } else
                  this._uniforms.fragClippingParams.value.fromArray(
                    i.clipParams
                  );
                this._viewer?.scene.activeCamera.cameraObject instanceof s.cPb
                  ? (this._uniforms.fragClippingCamAspect.value =
                      this._viewer?.scene.activeCamera.cameraObject.aspect)
                  : (this._uniforms.fragClippingCamAspect.value = 1);
                let r = this.enabled ? 1 : 0;
                (r = +this._defines.FRAG_CLIPPING_DEBUG),
                  t.materialObject.defines.FRAG_CLIPPING_DEBUG !== r &&
                    ((t.materialObject.defines.FRAG_CLIPPING_DEBUG = r),
                    (t.materialObject.needsUpdate = !0)),
                  (r = +i.clipMode),
                  t.materialObject.defines.FRAG_CLIPPING_MODE !== r &&
                    ((t.materialObject.defines.FRAG_CLIPPING_MODE = r),
                    (t.materialObject.needsUpdate = !0)),
                  (r = +i.clipInvert),
                  t.materialObject.defines.FRAG_CLIPPING_INVERSE !== r &&
                    ((t.materialObject.defines.FRAG_CLIPPING_INVERSE = r),
                    (t.materialObject.needsUpdate = !0));
              },
              extraUniforms: { ...this._uniforms },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._fragmentClippingExt?.clipEnabled
                  ? "1"
                  : "0"),
              isCompatible: (e) =>
                e.isMeshStandardMaterial2 || e.userData.isGBufferMaterial,
              updaters: () => [],
              getUiConfig: (e) => {
                const t = this._viewer,
                  i = {
                    type: "folder",
                    label: "FragmentClipping",
                    children: [
                      {
                        type: "checkbox",
                        label: "Enabled",
                        getValue: () =>
                          e.materialObject.userData._fragmentClippingExt
                            ?.clipEnabled || !1,
                        setValue: (a) => {
                          a !==
                            e.materialObject.userData._fragmentClippingExt
                              ?.clipEnabled &&
                            (a
                              ? r.AddFragmentClipping(e.materialObject) ||
                                t.alert(
                                  "Cannot add fragment clipping extension."
                                )
                              : e.materialObject.userData
                                  ._fragmentClippingExt &&
                                ((e.materialObject.userData._fragmentClippingExt.clipEnabled =
                                  !1),
                                (e.materialObject.needsUpdate = !0)),
                            i.uiRefresh?.("postFrame", !0));
                        },
                        onChange: this.setDirty,
                      },
                      () => ({
                        type: "dropdown",
                        label: "Mode",
                        children: Object.entries(f).map((e) => ({
                          label: e[0],
                          value: e[1],
                        })),
                        hidden: () =>
                          !e.materialObject.userData._fragmentClippingExt
                            ?.clipEnabled,
                        property: [
                          e.materialObject.userData._fragmentClippingExt,
                          "clipMode",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "vec4",
                        label: "Position",
                        hidden: () =>
                          !e.materialObject.userData._fragmentClippingExt
                            ?.clipEnabled,
                        property: [
                          e.materialObject.userData._fragmentClippingExt,
                          "clipPosition",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "vec4",
                        label: "Params",
                        hidden: () =>
                          !e.materialObject.userData._fragmentClippingExt
                            ?.clipEnabled,
                        property: [
                          e.materialObject.userData._fragmentClippingExt,
                          "clipParams",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "toggle",
                        label: "Invert",
                        hidden: () =>
                          !e.materialObject.userData._fragmentClippingExt
                            ?.clipEnabled,
                        property: [
                          e.materialObject.userData._fragmentClippingExt,
                          "clipInvert",
                        ],
                        onChange: this.setDirty,
                      }),
                    ],
                  };
                return i;
              },
            }),
            (this.setDirty = () => {
              this.materialExtension.setDirty?.(), this._viewer?.setDirty();
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(n.k);
          t?.materials?.registerMaterialExtension(this.materialExtension),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(v),
            e
              .getPlugin(p.m)
              ?.material?.registerMaterialExtensions([this.materialExtension]);
        }
        async onRemove(e) {
          return (
            e
              .getPlugin(n.k)
              ?.materials?.unregisterMaterialExtension(this.materialExtension),
            e
              .getPlugin(n.k)
              ?.importer?.removeEventListener(
                "loaderCreate",
                this._loaderCreate
              ),
            super.onRemove(e)
          );
        }
      });
      var f;
      (m.PluginType = "FragmentClippingExtensionPlugin1"),
        (m.FRAGMENT_CLIPPING_EXTENSION_GLTF_EXTENSION =
          "WEBGI_materials_fragment_clipping_extension"),
        h(
          [
            (0, l.Q7)("Enabled", (e) => ({ onChange: e.setDirty })),
            (0, o.qC)(),
          ],
          m.prototype,
          "enabled",
          void 0
        ),
        (m = r = h([(0, l.Sp)("FragmentClipping Materials")], m)),
        (function (e) {
          (e[(e.Circle = 0)] = "Circle"),
            (e[(e.Ellipse = 1)] = "Ellipse"),
            (e[(e.Rectangle = 2)] = "Rectangle"),
            (e[(e.Plane = 3)] = "Plane"),
            (e[(e.Sphere = 4)] = "Sphere");
        })(f || (f = {}));
      class g {
        constructor(e) {
          (this.parser = e),
            (this.name = m.FRAGMENT_CLIPPING_EXTENSION_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          const r = i.extensions[this.name];
          return (
            t.userData || (t.userData = {}),
            m.AddFragmentClipping(t),
            (t.userData._fragmentClippingExt = (0, o.Hx)(
              r,
              t.userData._fragmentClippingExt,
              !1,
              {}
            )),
            Promise.resolve()
          );
        }
      }
      const v = (e) => ({
        writeMaterial: (t, i) => {
          if (!t.isMeshStandardMaterial || !t.userData._fragmentClippingExt)
            return;
          if (!t.userData._fragmentClippingExt.clipEnabled) return;
          i.extensions = i.extensions || {};
          const r = (0, o.HD)(t.userData._fragmentClippingExt, !1);
          (i.extensions[m.FRAGMENT_CLIPPING_EXTENSION_GLTF_EXTENSION] = r),
            (e.extensionsUsed[m.FRAGMENT_CLIPPING_EXTENSION_GLTF_EXTENSION] =
              !0);
        },
      });
    },
    1134: function (e, t, i) {
      i.d(t, {
        D: function () {
          return n;
        },
      });
      var r = i(3995),
        a = i(5551),
        s = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let n = class extends r.Q {
        constructor() {
          super(),
            (this.toJSON = void 0),
            (this.enabled = !0),
            (this._lastSize = ["100%", "100%"]),
            (this._lastFsElement = null),
            (this._fsChangeHandler = (e) => {
              if (this.isFullScreen()) this.dispatchEvent({ type: "enter" });
              else {
                const e = this._lastFsElement || this._viewer?.canvas;
                e &&
                  ((e.style.width = this._lastSize[0]),
                  (e.style.height = this._lastSize[1])),
                  document.removeEventListener(
                    "webkitfullscreenchange",
                    this._fsChangeHandler,
                    !1
                  ),
                  document.removeEventListener(
                    "mozfullscreenchange",
                    this._fsChangeHandler,
                    !1
                  ),
                  document.removeEventListener(
                    "fullscreenchange",
                    this._fsChangeHandler,
                    !1
                  ),
                  document.removeEventListener(
                    "MSFullscreenChange",
                    this._fsChangeHandler,
                    !1
                  ),
                  this.dispatchEvent({ type: "exit" });
              }
            }),
            (this.enter = this.enter.bind(this)),
            (this.exit = this.exit.bind(this));
        }
        async enter(e) {
          if (this.isFullScreen()) return;
          const t = e || this._viewer?.canvas;
          return t
            ? ((this._lastFsElement = t),
              document.addEventListener &&
                (document.addEventListener(
                  "webkitfullscreenchange",
                  this._fsChangeHandler,
                  !1
                ),
                document.addEventListener(
                  "mozfullscreenchange",
                  this._fsChangeHandler,
                  !1
                ),
                document.addEventListener(
                  "fullscreenchange",
                  this._fsChangeHandler,
                  !1
                ),
                document.addEventListener(
                  "MSFullscreenChange",
                  this._fsChangeHandler,
                  !1
                )),
              (this._lastSize = [t.style.width, t.style.height]),
              (t.style.width = "100%"),
              (t.style.height = "100%"),
              t.requestFullscreen
                ? t.requestFullscreen()
                : t.mozRequestFullScreen
                ? t.mozRequestFullScreen()
                : t.webkitRequestFullscreen
                ? t.webkitRequestFullscreen()
                : t.msRequestFullscreen
                ? t.msRequestFullscreen()
                : void 0)
            : void 0;
        }
        async exit() {
          return document.exitFullscreen
            ? document.exitFullscreen()
            : document.mozCancelFullScreen
            ? document.mozCancelFullScreen()
            : document.webkitExitFullscreen
            ? document.webkitExitFullscreen()
            : document.msExitFullscreen
            ? document.msExitFullscreen()
            : void 0;
        }
        async toggle(e) {
          return this.isFullScreen() ? this.exit() : this.enter(e);
        }
        isFullScreen() {
          return (
            document.webkitIsFullScreen ||
            document.mozFullScreen ||
            void 0 !== document.msFullscreenElement
          );
        }
      };
      (n.PluginType = "FullScreenPlugin"),
        s([(0, a.M)("Enter FullScreen")], n.prototype, "enter", null),
        s([(0, a.M)("Exit FullScreen")], n.prototype, "exit", null),
        s([(0, a.M)("Toggle FullScreen")], n.prototype, "toggle", null),
        (n = s([(0, a.Sp)("Full Screen")], n));
    },
    5808: function (e, t, i) {
      i.d(t, {
        L: function () {
          return l;
        },
      });
      var r = i(2988),
        a = i(3995),
        s = i(9008),
        n = i(5551),
        o = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let l = class extends a.Q {
        constructor(e = !0) {
          super(),
            (this.animationRunning = !1),
            (this.interactionsDisabled = !1),
            (this.animationDuration = 2e3),
            (this.animationDistance = 80),
            (this.animationPauseDuration = 6e3),
            (this.rotationDistance = 0.3),
            (this.yOffset = 0),
            (this.autoStart = !0),
            (this.autoStartDelay = 3e4),
            (this.autoStop = !0),
            (this.autoStartOnObjectLoad = !0),
            (this.autoStartOnObjectLoadDelay = 3e3),
            (this.currentTime = 0),
            (this.lastActionTime = 1 / 0),
            (this._xDamper = new s.Damper(50)),
            (this.pointerIcon =
              '<svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="25" height="36">\n    <defs>\n        <path id="A" d="M.001.232h24.997V36H.001z"></path>\n    </defs>\n    <g transform="translate(-11 -4)" fill="none" fill-rule="evenodd">\n        <path fill-opacity="0" fill="#fff" d="M0 0h44v44H0z"></path>\n        <g transform="translate(11 3)">\n            <path d="M8.733 11.165c.04-1.108.766-2.027 1.743-2.307a2.54 2.54 0 0 1 .628-.089c.16 0 .314.017.463.044 1.088.2 1.9 1.092 1.9 2.16v8.88h1.26c2.943-1.39 5-4.45 5-8.025a9.01 9.01 0 0 0-1.9-5.56l-.43-.5c-.765-.838-1.683-1.522-2.712-2-1.057-.49-2.226-.77-3.46-.77s-2.4.278-3.46.77c-1.03.478-1.947 1.162-2.71 2l-.43.5a9.01 9.01 0 0 0-1.9 5.56 9.04 9.04 0 0 0 .094 1.305c.03.21.088.41.13.617l.136.624c.083.286.196.56.305.832l.124.333a8.78 8.78 0 0 0 .509.953l.065.122a8.69 8.69 0 0 0 3.521 3.191l1.11.537v-9.178z" fill-opacity=".5" fill="#e4e4e4"></path>\n            <path d="M22.94 26.218l-2.76 7.74c-.172.485-.676.8-1.253.8H12.24c-1.606 0-3.092-.68-3.98-1.82-1.592-2.048-3.647-3.822-6.11-5.27-.095-.055-.15-.137-.152-.23-.004-.1.046-.196.193-.297.56-.393 1.234-.6 1.926-.6a3.43 3.43 0 0 1 .691.069l4.922.994V10.972c0-.663.615-1.203 1.37-1.203s1.373.54 1.373 1.203v9.882h2.953c.273 0 .533.073.757.21l6.257 3.874c.027.017.045.042.07.06.41.296.586.77.426 1.22M4.1 16.614c-.024-.04-.042-.083-.065-.122a8.69 8.69 0 0 1-.509-.953c-.048-.107-.08-.223-.124-.333l-.305-.832c-.058-.202-.09-.416-.136-.624l-.13-.617a9.03 9.03 0 0 1-.094-1.305c0-2.107.714-4.04 1.9-5.56l.43-.5c.764-.84 1.682-1.523 2.71-2 1.058-.49 2.226-.77 3.46-.77s2.402.28 3.46.77c1.03.477 1.947 1.16 2.712 2l.428.5a9 9 0 0 1 1.901 5.559c0 3.577-2.056 6.636-5 8.026h-1.26v-8.882c0-1.067-.822-1.96-1.9-2.16-.15-.028-.304-.044-.463-.044-.22 0-.427.037-.628.09-.977.28-1.703 1.198-1.743 2.306v9.178l-1.11-.537C6.18 19.098 4.96 18 4.1 16.614M22.97 24.09l-6.256-3.874c-.102-.063-.218-.098-.33-.144 2.683-1.8 4.354-4.855 4.354-8.243 0-.486-.037-.964-.104-1.43a9.97 9.97 0 0 0-1.57-4.128l-.295-.408-.066-.092a10.05 10.05 0 0 0-.949-1.078c-.342-.334-.708-.643-1.094-.922-1.155-.834-2.492-1.412-3.94-1.65l-.732-.088-.748-.03a9.29 9.29 0 0 0-1.482.119c-1.447.238-2.786.816-3.94 1.65a9.33 9.33 0 0 0-.813.686 9.59 9.59 0 0 0-.845.877l-.385.437-.36.5-.288.468-.418.778-.04.09c-.593 1.28-.93 2.71-.93 4.222 0 3.832 2.182 7.342 5.56 8.938l1.437.68v4.946L5 25.64a4.44 4.44 0 0 0-.888-.086c-.017 0-.034.003-.05.003-.252.004-.503.033-.75.08a5.08 5.08 0 0 0-.237.056c-.193.046-.382.107-.568.18-.075.03-.15.057-.225.1-.25.114-.494.244-.723.405a1.31 1.31 0 0 0-.566 1.122 1.28 1.28 0 0 0 .645 1.051C4 29.925 5.96 31.614 7.473 33.563a5.06 5.06 0 0 0 .434.491c1.086 1.082 2.656 1.713 4.326 1.715h6.697c.748-.001 1.43-.333 1.858-.872.142-.18.256-.38.336-.602l2.757-7.74c.094-.26.13-.53.112-.794s-.088-.52-.203-.76a2.19 2.19 0 0 0-.821-.91" fill-opacity=".6" fill="#000"></path>\n            <path d="M22.444 24.94l-6.257-3.874a1.45 1.45 0 0 0-.757-.211h-2.953v-9.88c0-.663-.616-1.203-1.373-1.203s-1.37.54-1.37 1.203v16.643l-4.922-.994a3.44 3.44 0 0 0-.692-.069 3.35 3.35 0 0 0-1.925.598c-.147.102-.198.198-.194.298.004.094.058.176.153.23 2.462 1.448 4.517 3.22 6.11 5.27.887 1.14 2.373 1.82 3.98 1.82h6.686c.577 0 1.08-.326 1.253-.8l2.76-7.74c.16-.448-.017-.923-.426-1.22-.025-.02-.043-.043-.07-.06z" fill="#fff"></path>\n            <g transform="translate(0 .769)">\n                <mask id="B" fill="#fff">\n                    <use xlink:href="#A"></use>\n                </mask>\n                <path d="M23.993 24.992a1.96 1.96 0 0 1-.111.794l-2.758 7.74c-.08.22-.194.423-.336.602-.427.54-1.11.87-1.857.872h-6.698c-1.67-.002-3.24-.633-4.326-1.715-.154-.154-.3-.318-.434-.49C5.96 30.846 4 29.157 1.646 27.773c-.385-.225-.626-.618-.645-1.05a1.31 1.31 0 0 1 .566-1.122 4.56 4.56 0 0 1 .723-.405l.225-.1a4.3 4.3 0 0 1 .568-.18l.237-.056c.248-.046.5-.075.75-.08.018 0 .034-.003.05-.003.303-.001.597.027.89.086l3.722.752V20.68l-1.436-.68c-3.377-1.596-5.56-5.106-5.56-8.938 0-1.51.336-2.94.93-4.222.015-.03.025-.06.04-.09.127-.267.268-.525.418-.778.093-.16.186-.316.288-.468.063-.095.133-.186.2-.277L3.773 5c.118-.155.26-.29.385-.437.266-.3.544-.604.845-.877a9.33 9.33 0 0 1 .813-.686C6.97 2.167 8.31 1.59 9.757 1.35a9.27 9.27 0 0 1 1.481-.119 8.82 8.82 0 0 1 .748.031c.247.02.49.05.733.088 1.448.238 2.786.816 3.94 1.65.387.28.752.588 1.094.922a9.94 9.94 0 0 1 .949 1.078l.066.092c.102.133.203.268.295.408a9.97 9.97 0 0 1 1.571 4.128c.066.467.103.945.103 1.43 0 3.388-1.67 6.453-4.353 8.243.11.046.227.08.33.144l6.256 3.874c.37.23.645.55.82.9.115.24.185.498.203.76m.697-1.195c-.265-.55-.677-1.007-1.194-1.326l-5.323-3.297c2.255-2.037 3.564-4.97 3.564-8.114 0-2.19-.637-4.304-1.84-6.114-.126-.188-.26-.37-.4-.552-.645-.848-1.402-1.6-2.252-2.204C15.472.91 13.393.232 11.238.232A10.21 10.21 0 0 0 5.23 2.19c-.848.614-1.606 1.356-2.253 2.205-.136.18-.272.363-.398.55C1.374 6.756.737 8.87.737 11.06c0 4.218 2.407 8.08 6.133 9.842l.863.41v3.092l-2.525-.51c-.356-.07-.717-.106-1.076-.106a5.45 5.45 0 0 0-3.14.996c-.653.46-1.022 1.202-.99 1.983a2.28 2.28 0 0 0 1.138 1.872c2.24 1.318 4.106 2.923 5.543 4.772 1.26 1.62 3.333 2.59 5.55 2.592h6.698c1.42-.001 2.68-.86 3.134-2.138l2.76-7.74c.272-.757.224-1.584-.134-2.325" fill-opacity=".05" fill="#000" mask="url(#B)"></path>\n            </g>\n        </g>\n    </g>\n</svg>'),
            (this._activeCameraUpdate = (e) => {
              this.isDisabled() ||
                ("deserialize" === e.change
                  ? (this.stopAnimation(), this.startAnimation())
                  : (this.lastActionTime = (0, s.now)()));
            }),
            (this._addSceneObject = () => {
              this.autoStartOnObjectLoad &&
                (this.lastActionTime =
                  (0, s.now)() -
                  this.autoStartDelay +
                  this.autoStartOnObjectLoadDelay);
            }),
            (this.onlyOnOrbitControls = !0),
            (this._orbitWarning = !1),
            (this.startAnimation = () => {
              if (this._viewer && this.cursorEl && !this.isDisabled())
                return "OrbitControls" !==
                  this._viewer.scene.activeCamera.controls?.type &&
                  this.onlyOnOrbitControls
                  ? (this._orbitWarning ||
                      console.warn(
                        "InteractionPromptPlugin requires OrbitControls, to run anyway, set onlyOnOrbitControls to false"
                      ),
                    void (this._orbitWarning = !0))
                  : void (
                      0 !== this._viewer.scene.modelRoot.children.length &&
                      ((this.currentSphericalPosition =
                        new r.$V().setFromVector3(
                          new r.Pa4().subVectors(
                            this._viewer.scene.activeCamera.position,
                            this._viewer.scene.activeCamera.target
                          )
                        )),
                      (this.cursorEl.style.opacity = "1"),
                      (this.currentTime = 0),
                      (this.animationRunning = !0),
                      this._viewer.scene.activeCamera.interactionsEnabled &&
                        ((this.interactionsDisabled = !0),
                        (this._viewer.scene.activeCamera.interactionsEnabled =
                          !1)))
                    );
            }),
            (this.stopAnimation = () => {
              this._viewer &&
                this.cursorEl &&
                ((this.animationRunning = !1),
                (this.cursorEl.style.opacity = "0"),
                this.interactionsDisabled &&
                  ((this._viewer.scene.activeCamera.interactionsEnabled = !0),
                  (this.interactionsDisabled = !1)));
            }),
            (this._pointerDown = () => {
              this.isDisabled() ||
                (this.autoStop && this.stopAnimation(),
                (this.lastActionTime = (0, s.now)()));
            }),
            (this._x = 0),
            (this._preFrame = async (e) => {
              if (!this._viewer || !this.cursorEl) return;
              if (
                (this.isDisabled() &&
                  this.animationRunning &&
                  this.stopAnimation(),
                this.isDisabled())
              )
                return;
              if (
                (!this.animationRunning &&
                  this.autoStart &&
                  this.lastActionTime + this.autoStartDelay < (0, s.now)() &&
                  this.startAnimation(),
                !this.animationRunning)
              )
                return;
              if (this.currentTime <= this.animationDuration) {
                this.cursorEl.style.opacity = "1";
                const e = this.currentTime / this.animationDuration;
                (this._x = Math.sin(2 * Math.PI * e)),
                  (e < 0.25 || e > 0.75) &&
                    (this._x *= this._x * Math.sign(this._x));
              } else (this.cursorEl.style.opacity = "0"), (this._x = 0);
              if (this.currentTime <= this.animationDuration + 50) {
                const e = this.currentSphericalPosition.clone();
                (e.theta += this._x * this.rotationDistance),
                  this._viewer.scene.activeCamera.position
                    .setFromSpherical(e)
                    .add(this._viewer.scene.activeCamera.target),
                  this._viewer.scene.activeCamera.positionUpdated();
              }
              const t = this._viewer.canvas.getBoundingClientRect(),
                i =
                  t.width / 2 +
                  -this._x * Math.min(this.animationDistance, t.width / 4),
                r = t.height / 2 + (this.yOffset * t.height) / 2;
              (this.cursorEl.style.transform = `translate(${Math.floor(
                i
              )}px, ${Math.floor(r)}px)`),
                (this.currentTime += e.deltaTime),
                this.currentTime >
                  this.animationDuration + this.animationPauseDuration &&
                  (this.currentTime = 0);
            }),
            (this._disabledBy = new Set()),
            (this.disable = (e) => {
              this._disabledBy.size, this._disabledBy.add(e);
            }),
            (this.enable = (e) => {
              this._disabledBy.size, this._disabledBy.delete(e);
            }),
            (this.isDisabled = () =>
              this._disabledBy.size > 0 || !this.enabled),
            (this.enabled = e);
        }
        async onAdded(e) {
          await super.onAdded(e),
            (this.lastActionTime = 1 / 0),
            e.addEventListener("preFrame", this._preFrame),
            e.container.addEventListener("pointerdown", this._pointerDown, !0),
            e.container.addEventListener("wheel", this._pointerDown, !0),
            e.scene.addEventListener("addSceneObject", this._addSceneObject),
            e.scene.addEventListener(
              "activeCameraUpdate",
              this._activeCameraUpdate
            ),
            this._initializeCursor();
        }
        async onRemove(e) {
          return (
            this.stopAnimation(),
            e.removeEventListener("preFrame", this._preFrame),
            e.container.removeEventListener(
              "pointerdown",
              this._pointerDown,
              !0
            ),
            e.container.removeEventListener("wheel", this._pointerDown, !0),
            e.scene.removeEventListener("addSceneObject", this._addSceneObject),
            e.scene.removeEventListener(
              "activeCameraUpdate",
              this._activeCameraUpdate
            ),
            this.cursorEl && this.cursorEl.remove(),
            super.onRemove(e)
          );
        }
        _initializeCursor() {
          (this.cursorEl = document.createElement("div")),
            (this.cursorEl.style.position = "absolute"),
            (this.cursorEl.style.top = "0"),
            (this.cursorEl.style.left = "0"),
            (this.cursorEl.style.width = "10px"),
            (this.cursorEl.style.height = "10px"),
            (this.cursorEl.style.opacity = "0"),
            (this.cursorEl.innerHTML = this.pointerIcon),
            this._viewer.container.appendChild(this.cursorEl);
        }
      };
      (l.PluginType = "InteractionPointerPlugin"),
        o([(0, s.serialize)(), (0, n.Q7)()], l.prototype, "enabled", void 0),
        o(
          [(0, s.serialize)(), (0, n.ri)()],
          l.prototype,
          "animationDuration",
          void 0
        ),
        o(
          [(0, s.serialize)(), (0, n.ri)()],
          l.prototype,
          "animationDistance",
          void 0
        ),
        o(
          [(0, s.serialize)(), (0, n.ri)()],
          l.prototype,
          "animationPauseDuration",
          void 0
        ),
        o(
          [(0, s.serialize)(), (0, n.ri)()],
          l.prototype,
          "rotationDistance",
          void 0
        ),
        o([(0, s.serialize)(), (0, n.ri)()], l.prototype, "yOffset", void 0),
        o([(0, s.serialize)(), (0, n.Q7)()], l.prototype, "autoStart", void 0),
        o(
          [(0, s.serialize)(), (0, n.ri)()],
          l.prototype,
          "autoStartDelay",
          void 0
        ),
        o([(0, s.serialize)(), (0, n.Q7)()], l.prototype, "autoStop", void 0),
        o(
          [(0, s.serialize)(), (0, n.Q7)()],
          l.prototype,
          "autoStartOnObjectLoad",
          void 0
        ),
        o(
          [(0, s.serialize)(), (0, n.Q7)()],
          l.prototype,
          "autoStartOnObjectLoadDelay",
          void 0
        ),
        o([(0, n.Kb)()], l.prototype, "currentTime", void 0),
        o([(0, n.Kb)()], l.prototype, "lastActionTime", void 0),
        o([(0, s.serialize)()], l.prototype, "onlyOnOrbitControls", void 0),
        o([(0, n.M)()], l.prototype, "startAnimation", void 0),
        o([(0, n.M)()], l.prototype, "stopAnimation", void 0),
        (l = o([(0, n.Sp)("Interaction Prompt")], l));
    },
    8505: function (e, t, i) {
      i.d(t, {
        T: function () {
          return u;
        },
      });
      var r = i(3995),
        a = i(2988),
        s = i(4821),
        n = i(4107),
        o = i(5551),
        l = i(3198),
        c = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let u = class extends r.Q {
        addNoiseBumpMaterial(e) {
          return d(e.materialObject);
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new p(e));
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [s.k]),
            (this._uniforms = {
              noiseBumpParams: { value: new a.FM8() },
              noiseBumpScale: { value: 0.05 },
              noiseBumpFlakeScale: { value: 1e3 },
              noiseFlakeClamp: { value: 1 },
              noiseFlakeRadius: { value: 0.5 },
              flakeParams: { value: new a.Ltg(0, 1, 3, 0) },
              flakeFallOffParams: { value: new a.Pa4(0, 1, 0) },
              useColorFlakes: { value: !1 },
            }),
            (this.materialExtension = {
              parsFragmentSnippet: (e, t) =>
                this.enabled &&
                t?.materialObject.userData._noiseBumpMat?.hasBump
                  ? l.Z +
                    "\n#ifndef VORONOI_HELPER\n#define VORONOI_HELPER \nfloat voronoi_distance(vec2 a,vec2 b,float metric){return distance(a,b);}float voronoi_f1_2d(in vec2 coord,in float randomness,in float flakeClamp,in float flakeRadius,inout vec3 outColor){vec2 cellPosition=floor(coord);vec2 localPosition=coord-cellPosition;float minDistance=8.;vec2 targetOffset,targetPosition;for(int j=-1;j<=1;j++){for(int i=-1;i<=1;i++){vec2 cellOffset=vec2(i,j);vec2 pointPosition=cellOffset+hash3(cellPosition+cellOffset).xy*randomness;float distanceToPoint=voronoi_distance(pointPosition,localPosition,1.);if(distanceToPoint<minDistance){targetOffset=cellOffset;minDistance=distanceToPoint;targetPosition=pointPosition;}}}float outDistance=minDistance;float dist=step(flakeRadius,outDistance);outColor=hash3(cellPosition+hash3(cellPosition+targetOffset).xy*randomness+targetOffset);vec3 outColor1=minDistance<flakeRadius?outColor:vec3(0.5,0.5,1.);outDistance=mix(dist,minDistance,flakeClamp);outColor=mix(outColor1,outColor,flakeClamp);return outDistance;}\n#endif\n\nuniform vec2 noiseBumpParams;uniform float noiseBumpScale;uniform float noiseBumpFlakeScale;uniform float noiseFlakeClamp;uniform float noiseFlakeRadius;uniform bool useColorFlakes;uniform vec4 flakeParams;uniform vec3 flakeFallOffParams;vec3 perturbNormalArb_nb(vec3 surf_pos,vec3 surf_norm,vec2 dHdxy,float faceDirection){vec3 vSigmaX=dFdx(surf_pos.xyz);vec3 vSigmaY=dFdy(surf_pos.xyz);vec3 vN=surf_norm;vec3 R1=cross(vSigmaY,vN);vec3 R2=cross(vN,vSigmaX);float fDet=dot(vSigmaX,R1)*faceDirection;vec3 vGrad=sign(fDet)*(dHdxy.x*R1+dHdxy.y*R2);return normalize(abs(fDet)*surf_norm-vGrad);}\n"
                  : "",
              shaderExtender: (e, t, i) => {
                if (
                  !this.enabled ||
                  !t.materialObject.userData._noiseBumpMat?.hasBump
                )
                  return;
                const r = "#glMarker beforeAccumulation";
                (e.fragmentShader = e.fragmentShader.replace(
                  r,
                  "vec3 outColor,outColor1,outColor2,outColor3,outColor4,outColor5;float distFac=length(vViewPosition.xyz);float level=1.;vec2 uvMod=noiseBumpFlakeScale*noiseBumpParams.xy*vUv*level;float voronoiDist=clamp(voronoi_f1_2d(uvMod,1.,noiseFlakeClamp,noiseFlakeRadius,outColor),0.,1.);vec3 oldNormal=normal;normal=perturbNormalArb_nb(-vViewPosition,normal,(2.*outColor.xy-1.)*noiseBumpScale,faceDirection);float oldRoughnessFactor=roughnessFactor;float oldMetalnessFactor=metalnessFactor;roughnessFactor=mix(roughnessFactor,flakeParams.x,1.-voronoiDist);metalnessFactor=mix(metalnessFactor,flakeParams.y,1.-voronoiDist);\n#if defined( USE_ENVMAP ) && defined( RE_IndirectSpecular )\nvec3 sparkleRadiance=getIBLRadiance(normalize(vViewPosition),normal,roughnessFactor);float sparkleIntensity=length(sparkleRadiance);float sparkleIntensityMultiplier=sparkleIntensity>1.3?flakeParams.z:1.;vec3 oldDiffuseColor=diffuseColor.rgb;vec2 cellPosition_=floor(uvMod);vec3 colorRGB=useColorFlakes?hash3(cellPosition_):vec3(1.);float fallOff_=mix(1.,1./(1.+flakeFallOffParams.y*distFac+flakeFallOffParams.z*distFac*distFac),flakeFallOffParams.x);diffuseColor.rgb*=mix(vec3(1.),sparkleIntensityMultiplier*colorRGB*fallOff_,vec3(1.-voronoiDist));if(sparkleIntensity<flakeParams.w){float mixFactor=1.;roughnessFactor=mix(roughnessFactor,oldRoughnessFactor,mixFactor);metalnessFactor=mix(metalnessFactor,oldMetalnessFactor,mixFactor);normal=normalize(mix(normal,oldNormal,mixFactor));diffuseColor.rgb=mix(diffuseColor.rgb,oldDiffuseColor,mixFactor);}\n#endif\n\n" +
                    r
                )),
                  (e.defines.USE_UV = ""),
                  (e.extensionDerivatives = !0);
              },
              onObjectRender: (e, t) => {
                const i = t.materialObject.userData?._noiseBumpMat;
                if (!i?.hasBump) return;
                this._uniforms.noiseBumpParams.value.fromArray(
                  i.bumpNoiseParams
                ),
                  (this._uniforms.noiseBumpScale.value = i.bumpScale),
                  (this._uniforms.noiseBumpFlakeScale.value = i.flakeScale),
                  (this._uniforms.noiseFlakeClamp.value = i.flakeClamp),
                  (this._uniforms.noiseFlakeRadius.value = i.flakeRadius),
                  i.flakeParams &&
                    this._uniforms.flakeParams.value.copy(i.flakeParams),
                  i.flakeFallOffParams &&
                    this._uniforms.flakeFallOffParams.value.copy(
                      i.flakeFallOffParams
                    ),
                  (this._uniforms.useColorFlakes.value = i.useColorFlakes);
                const r = this.enabled ? 1 : 0;
                t.materialObject.defines.NOISE_BUMP_MATERIAL_ENABLED !== r &&
                  ((t.materialObject.defines.NOISE_BUMP_MATERIAL_ENABLED = r),
                  (t.materialObject.needsUpdate = !0));
              },
              extraUniforms: { ...this._uniforms },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._noiseBumpMat?.hasBump ? "1" : "0"),
              isCompatible: (e) => e.isMeshStandardMaterial2,
              updaters: () => [],
              getUiConfig: (e) => {
                const t = this._viewer,
                  i = {
                    type: "folder",
                    label: "SparkleBump (NoiseBump)",
                    children: [
                      {
                        type: "checkbox",
                        label: "Enabled",
                        get value() {
                          return (
                            e.materialObject.userData._noiseBumpMat?.hasBump ||
                            !1
                          );
                        },
                        set value(r) {
                          r !==
                            e.materialObject.userData._noiseBumpMat?.hasBump &&
                            (r
                              ? d(e.materialObject) ||
                                t.alert("Cannot add noise bump.")
                              : e.materialObject.userData._noiseBumpMat &&
                                ((e.materialObject.userData._noiseBumpMat.hasBump =
                                  !1),
                                (e.materialObject.needsUpdate = !0)),
                            i.uiRefresh?.("postFrame", !0));
                        },
                        onChange: this.setDirty,
                      },
                      () => ({
                        type: "vec4",
                        label: "Bump Noise Params",
                        bounds: [0, 1],
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat,
                          "bumpNoiseParams",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Bump Scale",
                        bounds: [0, 0.001],
                        stepSize: 1e-5,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat,
                          "bumpScale",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Scale",
                        bounds: [100, 1e4],
                        stepSize: 1e-4,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat,
                          "flakeScale",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Clamp",
                        bounds: [0, 1],
                        stepSize: 1,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat,
                          "flakeClamp",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Radius",
                        bounds: [0.01, 1],
                        stepSize: 0.001,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat,
                          "flakeRadius",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Roughness",
                        bounds: [0, 1],
                        stepSize: 0.01,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat?.flakeParams,
                          "x",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Metalness",
                        bounds: [0, 1],
                        stepSize: 0.01,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat?.flakeParams,
                          "y",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Strength",
                        bounds: [0, 100],
                        stepSize: 0.001,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat?.flakeParams,
                          "z",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Flake Threshold",
                        bounds: [0.1, 10],
                        stepSize: 0.001,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat?.flakeParams,
                          "w",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Falloff",
                        stepSize: 1,
                        bounds: [0, 1],
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat
                            ?.flakeFallOffParams,
                          "x",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Linear falloff factor",
                        bounds: [0, 10],
                        stepSize: 0.001,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat
                            ?.flakeFallOffParams,
                          "y",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        label: "Quadratic falloff factor",
                        bounds: [0, 10],
                        stepSize: 0.001,
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat
                            ?.flakeFallOffParams,
                          "z",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "checkbox",
                        label: "Colored Flakes",
                        hidden: () =>
                          !e.materialObject.userData._noiseBumpMat?.hasBump,
                        property: [
                          e.materialObject.userData._noiseBumpMat,
                          "useColorFlakes",
                        ],
                        onChange: this.setDirty,
                      }),
                    ],
                  };
                return i;
              },
            }),
            (this.setDirty = () => {
              this.materialExtension.setDirty?.(), this._viewer?.setDirty();
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(s.k);
          t?.materials?.registerMaterialExtension(this.materialExtension),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(h);
        }
        async onRemove(e) {
          return (
            e
              .getPlugin(s.k)
              ?.materials?.unregisterMaterialExtension(this.materialExtension),
            e
              .getPlugin(s.k)
              ?.importer?.removeEventListener(
                "loaderCreate",
                this._loaderCreate
              ),
            super.onRemove(e)
          );
        }
      };
      function d(e) {
        const t = e?.userData;
        if (!t) return !1;
        t._noiseBumpMat || (t._noiseBumpMat = {});
        const i = t._noiseBumpMat;
        return (
          (i.hasBump = !0),
          void 0 === i.bumpNoiseParams && (i.bumpNoiseParams = [0.5, 0.5]),
          void 0 === i.bumpScale && (i.bumpScale = 0.05),
          void 0 === i.flakeScale && (i.flakeScale = 0.05),
          void 0 === i.flakeClamp && (i.flakeClamp = 1),
          void 0 === i.flakeRadius && (i.flakeRadius = 0.3),
          void 0 === i.useColorFlakes && (i.useColorFlakes = !1),
          void 0 === i.flakeParams && (i.flakeParams = new a.Ltg(0, 1, 3, 0)),
          void 0 === i.flakeFallOffParams &&
            (i.flakeFallOffParams = new a.Pa4(0, 1, 0)),
          e.isMaterial && (e.needsUpdate = !0),
          !0
        );
      }
      (u.PluginType = "NoiseBumpMaterialPlugin"),
        (u.NOISE_BUMP_MATERIAL_GLTF_EXTENSION = "WEBGI_materials_noise_bump"),
        c(
          [
            (0, o.Q7)("Enabled", (e) => ({ onChange: e.setDirty })),
            (0, n.qC)(),
          ],
          u.prototype,
          "enabled",
          void 0
        ),
        (u = c([(0, o.Sp)("NoiseBump Materials")], u));
      class p {
        constructor(e) {
          (this.parser = e), (this.name = u.NOISE_BUMP_MATERIAL_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          const r = i.extensions[this.name];
          return (
            t.userData || (t.userData = {}),
            d(t),
            (t.userData._noiseBumpMat = (0, n.Hx)(
              r,
              t.userData._noiseBumpMat,
              !1,
              {}
            )),
            Promise.resolve()
          );
        }
      }
      const h = (e) => ({
        writeMaterial: (t, i) => {
          if (!t.isMeshStandardMaterial || !t.userData._noiseBumpMat) return;
          if (!t.userData._noiseBumpMat.hasBump) return;
          i.extensions = i.extensions || {};
          const r = (0, n.HD)(t.userData._noiseBumpMat, !1);
          (i.extensions[u.NOISE_BUMP_MATERIAL_GLTF_EXTENSION] = r),
            (e.extensionsUsed[u.NOISE_BUMP_MATERIAL_GLTF_EXTENSION] = !0);
        },
      });
    },
    1531: function (e, t, i) {
      i.d(t, {
        R: function () {
          return u;
        },
      });
      var r = i(2988),
        a = i(4895),
        s = i(6533),
        n = i(4915),
        o = i(5551);
      let l = class extends n.C {
        constructor(e, t, i) {
          super(e, t, i ?? new c(), new r.Ilk(0, 0, 0), 1),
            (this.enabled = !0),
            (this._firstCall = !0);
        }
        render(e, t, i, r, a) {
          this.enabled && super.render(e, t, i, r, a);
        }
      };
      l = (function (e, t, i, r) {
        var a,
          s = arguments.length,
          n =
            s < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          n = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) &&
              (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
        return s > 3 && n && Object.defineProperty(t, i, n), n;
      })([(0, o.Sp)("High Precision Normal Buffer")], l);
      class c extends r.RSm {
        constructor() {
          super();
        }
        onBeforeRender(e, t, i, a, s) {
          let n = s.material;
          Array.isArray(n) && (n = n[0]),
            (this.normalMap = n?.normalMap ?? null),
            (this.bumpMap = n?.bumpMap ?? null),
            (this.bumpScale = n?.bumpScale),
            n?.normalScale && this.normalScale.copy(n?.normalScale),
            (this.needsUpdate = !0),
            (this.side = n.side ?? r.ehD);
        }
      }
      class u extends a.G {
        passCtor(e) {
          (this._normalTarget = e.renderer.createTarget({
            depthBuffer: !0,
            type: r.cLu,
            minFilter: r.TyD,
            magFilter: r.TyD,
            generateMipmaps: !1,
          })),
            (this._normalTarget.texture.name = "normalBuffer"),
            (this._normalTarget.texture.generateMipmaps = !1);
          const t = this._normalTarget,
            i = new Set(),
            a = new Set();
          return new (class extends l {
            render(e, r, n, o, l) {
              const c = e.getRenderTarget(),
                u = e.getActiveCubeFace(),
                d = e.getActiveMipmapLevel();
              this.scene &&
                (this.scene.traverse(({ material: e }) => {
                  e &&
                    (((e.transparent && e.userData.renderToDepth) ||
                      (!e.transparent &&
                        0 === e.transmission &&
                        !1 === e.userData.renderToDepth)) &&
                      (i.add(e), (e.transparent = !e.transparent)),
                    Math.abs(e.transmission || 0) > 0 &&
                      e.userData.renderToDepth &&
                      (a.add([e, e.transmission]), (e.transmission = 0)));
                }),
                (0, s.of)(
                  e,
                  {
                    shadowMapRender: !1,
                    backgroundRender: !1,
                    opaqueRender: !0,
                    transparentRender: !1,
                    transmissionRender: !1,
                    mainRenderPass: !1,
                  },
                  () => super.render(e, r, t, o, l)
                ),
                i.forEach((e) => (e.transparent = !e.transparent)),
                i.clear(),
                a.forEach(([e, t]) => (e.transmission = t)),
                a.clear(),
                e.setRenderTarget(c, u, d));
            }
          })();
        }
        _update(e) {
          if (!super._update(e)) return !1;
          const t = this.pass.passObject;
          return (
            (t.scene = e.scene.modelObject),
            (t.camera = e.scene.activeCamera.cameraObject),
            !0
          );
        }
        constructor(e = !0) {
          super(),
            (this.passId = "normalBuffer"),
            (this._beforeFilters = ["render"]),
            (this._afterFilters = []),
            (this._requiredFilters = ["render"]),
            (this.enabled = e);
        }
        getNormalBuffer() {
          return this._normalTarget;
        }
        async onDispose(e) {}
        async onRemove(e) {
          return (
            e.renderer.disposeTarget(this._normalTarget?.dispose?.()),
            super.onRemove(e)
          );
        }
        updateShaderProperties(e) {
          return (
            e.uniforms.tNormalBuffer
              ? (e.uniforms.tNormalBuffer.value = this.enabled
                  ? this.getNormalBuffer()?.texture ?? null
                  : null)
              : console.warn("BaseRenderer: no uniform: tNormalBuffer"),
            this
          );
        }
        get uiConfig() {
          return this.pass?.passObject.uiConfig;
        }
      }
      u.PluginType = "NormalBufferPlugin";
    },
    529: function (e, t, i) {
      i.d(t, {
        o: function () {
          return p;
        },
      });
      var r = i(2988),
        a = i(3995);
      class s {
        constructor(e) {
          (this._zee = new r.Pa4(0, 0, 1)),
            (this._euler = new r.USm()),
            (this._q0 = new r._fP()),
            (this._q1 = new r._fP(-Math.sqrt(0.5), 0, 0, Math.sqrt(0.5))),
            (this._q2 = new r._fP()),
            (this._initQuaternionDest = new r._fP()),
            (this.onScreenOrientationChangeEvent = () => {
              this.screenOrientation = screen.orientation;
            }),
            (this.onDeviceOrientationChangeEvent = (e) => {
              this.deviceOrientation = e;
            }),
            (this._isConnected = !1),
            (this._viewer = e);
        }
        getOffsetFromCenter(e = !0) {
          if (!this.deviceOrientation) return new r.FM8();
          this.getQuaternion(e, this._q2);
          const t = new r.Pa4(0, 0, 1);
          return t.applyQuaternion(this._q2), new r.FM8(t.x, t.y);
        }
        getQuaternion(e, t) {
          if ((t || (t = new r._fP()), !this.deviceOrientation))
            return t.identity();
          const i = this.deviceOrientation,
            a = null !== i.alpha ? r.M8C.degToRad(i.alpha) : 0,
            s = null !== i.beta ? r.M8C.degToRad(i.beta) : 0,
            n = null !== i.gamma ? r.M8C.degToRad(i.gamma) : 0,
            o = this.screenOrientation
              ? r.M8C.degToRad(this.screenOrientation.angle)
              : 0;
          return this._toQuaternion(t, a, s, n, o, e), t;
        }
        _toQuaternion(e, t, i, r, a, s) {
          this._euler.set(i, t, -r, "YXZ"),
            e.setFromEuler(this._euler),
            e.multiply(this._q1);
          const n = document.getElementById("debug");
          return (
            n && (n.textContent = a + ""),
            e.multiply(this._q0.setFromAxisAngle(this._zee, -a)),
            this._initQuaternionDest.__init ||
              (this._initQuaternionDest.copy(e).invert(),
              (this._initQuaternionDest.__init = !0)),
            s && e.premultiply(this._initQuaternionDest),
            e
          );
        }
        static IsCompatible() {
          return (
            void 0 !== window.DeviceOrientationEvent && "ontouchstart" in window
          );
        }
        addPermissionMessage() {
          (this.permissionMessage = document.createElement("div")),
            (this.permissionMessage.innerHTML =
              "Tap on the screen to allow gyroscope"),
            (this.permissionMessage.style.visibility = "visible"),
            (this.permissionMessage.style.width = "100%"),
            (this.permissionMessage.style.height = "40px"),
            (this.permissionMessage.style.color = "black"),
            (this.permissionMessage.style.position = "absolute"),
            (this.permissionMessage.style.textAlign = "center"),
            (this.permissionMessage.style.fontSize = "12px"),
            (this.permissionMessage.style.bottom = "20%"),
            this._viewer.container.appendChild(this.permissionMessage);
        }
        connect() {
          if (!this._isConnected)
            return (
              (this._isConnected = !0),
              this.onScreenOrientationChangeEvent(),
              !!window.DeviceOrientationEvent &&
                (this.askPermission(),
                this._viewer?.renderer.rendererObject.domElement.addEventListener(
                  "click",
                  this.askPermission.bind(this)
                ),
                window.addEventListener(
                  "orientationchange",
                  this.onScreenOrientationChangeEvent
                ),
                window.addEventListener(
                  "deviceorientation",
                  this.onDeviceOrientationChangeEvent
                ),
                !0)
            );
        }
        askPermission() {
          this.onScreenOrientationChangeEvent(),
            "function" == typeof DeviceMotionEvent.requestPermission &&
              (this.addPermissionMessage(),
              DeviceOrientationEvent.requestPermission()
                .then((e) => {
                  "granted" == e &&
                    (window.addEventListener(
                      "orientationchange",
                      this.onScreenOrientationChangeEvent
                    ),
                    window.addEventListener(
                      "deviceorientation",
                      this.onDeviceOrientationChangeEvent
                    ),
                    this._viewer.container.removeChild(this.permissionMessage));
                })
                .catch((e) => {
                  console.error(
                    "DeviceOrientationControls2: Unable to use DeviceOrientation API:",
                    e
                  );
                }));
        }
        disconnect() {
          this._isConnected &&
            ((this._isConnected = !1),
            window.removeEventListener(
              "orientationchange",
              this.onScreenOrientationChangeEvent
            ),
            window.removeEventListener(
              "deviceorientation",
              this.onDeviceOrientationChangeEvent
            ),
            (this._initQuaternionDest = new r._fP()));
        }
      }
      var n = i(4107),
        o = i(5551),
        l = i(9008);
      class c {
        constructor() {
          (this._mousePos = new r.FM8(0, 0)), (this._isConnected = !1);
        }
        getOffsetFromCenter() {
          return new r.FM8(
            (this._mousePos.x / window.innerWidth) * 2 - 1,
            -((this._mousePos.y / window.innerHeight) * 2 - 1)
          );
        }
        connect() {
          this._isConnected ||
            ((this._isConnected = !0),
            window.addEventListener("mousemove", this._onMouseMove.bind(this)));
        }
        disconnect() {
          this._isConnected &&
            ((this._isConnected = !1),
            window.removeEventListener(
              "mousemove",
              this._onMouseMove.bind(this)
            ));
        }
        _onMouseMove(e) {
          this._mousePos.set(e.clientX, e.clientY);
        }
      }
      var u,
        d = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let p = (u = class extends a.Q {
        constructor() {
          super(),
            (this.enabled = !1),
            (this.enableEdit = !1),
            (this.invert = !1),
            (this.sensitivity = 0.5),
            (this.focalPointHit = new r.Pa4(0, 0, 0)),
            (this.damping = 0.5),
            (this.cameraView = ""),
            (this._target = new r.Pa4()),
            (this._center = new r.Pa4()),
            (this._pointerDown = !1),
            (this._focalDistance = 100),
            (this._updateProjectionMatrix = () => {
              if (!this.enabled)
                return void this._object._updateProjectionMatrixParallax?.();
              const e = this._object,
                t = e.near;
              let i = (t * Math.tan(0.5 * r.M8C.DEG2RAD * e.fov)) / e.zoom,
                a = 2 * i,
                s = e.aspect * a,
                n = -0.5 * s;
              if (null !== e.view && e.view.enabled) {
                const t = e.view.fullWidth,
                  r = e.view.fullHeight;
                (n += (e.view.offsetX * s) / t),
                  (i -= (e.view.offsetY * a) / r),
                  (s *= e.view.width / t),
                  (a *= e.view.height / r);
              }
              (n -= (this._offX * t) / this._focalDistance),
                (i -= (this._offY * t) / this._focalDistance);
              const o = e.filmOffset;
              0 !== o && (n += (t * o) / e.getFilmWidth()),
                e.projectionMatrix.makePerspective(
                  n,
                  n + s,
                  i,
                  i - a,
                  t,
                  e.far
                ),
                e.projectionMatrixInverse.copy(e.projectionMatrix).invert();
            }),
            (this._preFrame = (e) => {
              this.update(e.deltaTime);
            }),
            (this._offX = 0),
            (this._offY = 0),
            (this._xDamper = new l.Damper()),
            (this._yDamper = new l.Damper()),
            (this._onEnabledChange = this._onEnabledChange.bind(this)),
            (this._onDampingChange = this._onDampingChange.bind(this)),
            (this._onObjectHit = this._onObjectHit.bind(this)),
            (this._onActiveCameraChange =
              this._onActiveCameraChange.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e),
            s.IsCompatible()
              ? (this._input = new s(e))
              : (this._input = new c()),
            e.scene.addEventListener(
              "activeCameraChange",
              this._onActiveCameraChange
            ),
            this.addIndicator(),
            e.addEventListener("preFrame", this._preFrame),
            this._viewer?.container.addEventListener(
              "pointerdown",
              this.onPointerDown.bind(this)
            ),
            this._viewer?.container.addEventListener(
              "pointerup",
              this.onPointerUp.bind(this)
            ),
            e
              .getPluginByType("Picking")
              ?.addEventListener("hitObject", this._onObjectHit),
            this._onEnabledChange();
        }
        _onActiveCameraChange() {
          this._object &&
            this._object?._updateProjectionMatrixParallax &&
            ((this._object.updateProjectionMatrix =
              this._object._updateProjectionMatrixParallax),
            delete this._object._updateProjectionMatrixParallax),
            (this._focalDistance = 0.01),
            (this._object = this._viewer?.scene.activeCamera.cameraObject),
            this._object?.isOrthographicCamera
              ? this._viewer?.console.warn(
                  "ParallaxCameraControllerPlugin: Orthographic camera is not supported"
                )
              : this.enabled &&
                ((this._object._updateProjectionMatrixParallax =
                  this._object.updateProjectionMatrix),
                (this._object.updateProjectionMatrix =
                  this._updateProjectionMatrix));
        }
        addIndicator() {
          this._viewer &&
            (this._indicator && this._indicator.remove(),
            (this._indicator = document.createElement("div")),
            (this._indicator.style.width = "40px"),
            (this._indicator.style.height = "40px"),
            (this._indicator.style.borderRadius = "100%"),
            (this._indicator.style.border = "4px solid #ff4444"),
            (this._indicator.style.transform = "translate(-50%, -50%)"),
            (this._indicator.style.position = "absolute"),
            (this._indicator.style.top = "0"),
            (this._indicator.style.left = "0"),
            (this._indicator.style.zIndex = "10000"),
            (this._indicator.style.opacity = "0"),
            (this._indicator.style.transition = "opacity 0.5s"),
            (this._indicator.style.pointerEvents = "none"),
            this._viewer?.container.appendChild(this._indicator));
        }
        onPointerDown(e) {
          this.enabled &&
            this._viewer &&
            ((this._pointerDown = !0),
            this.enableEdit &&
              this._indicator &&
              ((this._indicator.style.top =
                e.clientY - this._viewer.container.offsetTop + "px"),
              (this._indicator.style.left =
                e.clientX - this._viewer.container.offsetLeft + "px")));
        }
        onPointerUp() {
          this._pointerDown = !1;
        }
        update(e) {
          if (
            !this.enabled ||
            this._pointerDown ||
            !this._input ||
            !this._object ||
            !this._viewer
          )
            return;
          (this._viewer.scene.activeCamera.interactionsEnabled = !1),
            this._updateFocalDistance();
          const t = this._object.matrixWorld.elements,
            i = new r.Pa4(t[0], t[1], t[2]),
            a = new r.Pa4(t[4], t[5], t[6]);
          this._object.position.copy(this._center),
            this._viewer.scene.activeCamera.positionUpdated();
          let s = this.sensitivity;
          this.invert && (s *= -1),
            (this._offX = this._xDamper.update(
              this._offX,
              this._input.getOffsetFromCenter().x * s,
              e,
              1
            )),
            (this._offY = this._yDamper.update(
              this._offY,
              this._input.getOffsetFromCenter().y * s,
              e,
              1
            ));
          const n = this._object;
          n.position
            .add(a.multiplyScalar(this._offY))
            .add(i.multiplyScalar(this._offX)),
            n.updateProjectionMatrix(),
            n.updateMatrixWorld(),
            (this._dirty = !0);
        }
        _onObjectHit(e) {
          e.intersects.intersect &&
            this.enableEdit &&
            (this.focalPointHit.copy(e.intersects.intersect.point),
            (e.intersects.selectedObject = null),
            this.uiConfig?.uiRefresh?.("postFrame", !0),
            this._indicator &&
              ((this._indicator.style.display = "block"),
              (this._indicator.style.opacity = "1"),
              setTimeout(() => {
                (this._indicator.style.opacity = "0"),
                  setTimeout(
                    () => (this._indicator.style.display = "none"),
                    600
                  ),
                  this.uiConfig?.uiRefresh?.("postFrame", !0);
              }, 200)));
        }
        _updateFocalDistance() {
          if (!this._object) return;
          const e = this._object,
            t = new r.Pa4();
          e.getWorldDirection(t),
            t.normalize(),
            (this._focalDistance = this.focalPointHit
              .clone()
              .sub(e.position)
              .dot(t));
        }
        _onEnabledChange() {
          if (this._viewer) {
            if (this.enabled) {
              if (
                (this._input?.connect(),
                this._onActiveCameraChange(),
                !this._object)
              )
                return;
              this._viewer.scene.activeCamera.interactionsEnabled = !1;
              const e = this._viewer.getPluginByType("CameraViews"),
                t = e?.camViews.find((e) => e.name === this.cameraView);
              e && t && e.setCurrentCameraView(t),
                this._updateFocalDistance(),
                this._center.copy(this._object.position),
                this._object.lookAt(this._viewer.scene.activeCamera.target);
            } else if (this._object) {
              this._onActiveCameraChange(),
                (this._viewer.scene.activeCamera.interactionsEnabled = !0),
                this._object.position.copy(this._center),
                this._object.lookAt(this._viewer.scene.activeCamera.target);
              const e = this._object;
              e.updateProjectionMatrix(), e.updateMatrixWorld();
            }
            this.uiConfig?.uiRefresh?.("postFrame", !0);
          }
        }
        _onDampingChange() {
          this._xDamper &&
            this._yDamper &&
            (this._xDamper.setDecayTime(100 * this.damping),
            this._yDamper.setDecayTime(100 * this.damping));
        }
        dispose() {
          this._input?.disconnect();
        }
      });
      (p.PluginType = "ParallaxCameraControllerPlugin"),
        d(
          [
            (0, l.onChange)(u.prototype._onEnabledChange),
            (0, n.qC)(),
            (0, o.Q7)("Enabled"),
          ],
          p.prototype,
          "enabled",
          void 0
        ),
        d(
          [(0, n.qC)(), (0, o.Q7)("enableEdit")],
          p.prototype,
          "enableEdit",
          void 0
        ),
        d([(0, n.qC)(), (0, o.Q7)("Invert")], p.prototype, "invert", void 0),
        d(
          [(0, n.qC)(), (0, o.t8)("Sensitivity", [0.1, 2], 0.01)],
          p.prototype,
          "sensitivity",
          void 0
        ),
        d(
          [
            (0, n.qC)("focalPoint"),
            (0, o.KG)("Focal Point Hit", void 0, 0.001),
          ],
          p.prototype,
          "focalPointHit",
          void 0
        ),
        d(
          [
            (0, l.onChange)(u.prototype._onDampingChange),
            (0, n.qC)(),
            (0, o.t8)("Damping", [0, 1], 0.001),
          ],
          p.prototype,
          "damping",
          void 0
        ),
        d(
          [(0, n.qC)(), (0, o.ri)("Camera View")],
          p.prototype,
          "cameraView",
          void 0
        ),
        (p = u = d([(0, o.Sp)("Parallax Camera Controller")], p));
    },
    6695: function (e, t, i) {
      i.d(t, {
        _: function () {
          return p;
        },
      });
      var r = i(3995),
        a = i(9008),
        s = i(2988);
      class n {
        async apply(e, t, i) {
          if (!t) return void (this.selected = void 0);
          let r = this.presets.find((e) =>
            (function (e, t) {
              return (
                ("string" == typeof e ? e : e.path) ===
                ("string" == typeof t ? t : t.path)
              );
            })(e, t)
          );
          return (
            r || (this.presets.push(t), (r = t)),
            (this.selected = r),
            "string" != typeof r
              ? e.getManager()?.importer?.importAsset(r, i)
              : e.getManager()?.importer?.importPath(r, i)
          );
        }
        constructor(e) {
          (this.presets = []),
            (this.name = ""),
            (this.selected = void 0),
            e && (this.name = e);
        }
      }
      class o extends n {
        constructor() {
          super(...arguments), (this.name = "Background");
        }
        async apply(e, t) {
          const i = await super.apply(e, t),
            r = i?.[0];
          return r && ((r.colorSpace = s.KI_), (e.scene.background = r)), r;
        }
      }
      class l extends n {
        constructor() {
          super(...arguments), (this.name = "Environment");
        }
        async apply(e, t) {
          const i = await super.apply(e, t),
            r = i?.[0];
          return r && (e.scene.environment = r), r;
        }
      }
      class c extends n {
        constructor(e = "envMap") {
          super(),
            (this.key = e),
            (this.name = "GemEnvironment"),
            (this.name += e.split("Map")[1]);
        }
        async apply(e, t) {
          const i = await super.apply(e, t),
            r = i?.[0];
          return (
            (0, a.safeSetProperty)(e.getPluginByType("Diamond"), this.key, r), r
          );
        }
      }
      class u extends n {
        async apply(e, t) {
          const i = await super.apply(e, t, { processImported: !1 });
          return i ? e.getManager()?.importer?.processImported(i) : void 0;
        }
      }
      class d extends u {
        constructor() {
          super(...arguments), (this.name = "MaterialLibraries");
        }
        async apply(e, t) {
          const i = await super.apply(e, t);
          return (
            i && (await e.alert("Material Library successfully imported.")), i
          );
        }
      }
      class p extends r.Q {
        constructor() {
          super(...arguments),
            (this.toJSON = null),
            (this.enabled = !0),
            (this.presetGroups = []),
            (this.uiConfig = {
              type: "folder",
              label: "Presets",
              expanded: !0,
              limitedUi: !0,
              children: [
                () =>
                  this.presetGroups.map((e) => ({
                    type: "dropdown",
                    label: e.name,
                    limitedUi: !0,
                    children: [
                      { value: "", label: "none" },
                      ...e.presets.map((e) => ({
                        label: h(e)?.split("/").pop() || "",
                        value: h(e),
                      })),
                    ],
                    getValue: () => h(e.selected) || "",
                    setValue: (t) => {
                      e.apply(
                        this._viewer,
                        e.presets.find((e) => h(e) === t)
                      );
                    },
                  })),
                {
                  type: "button",
                  label: "Download Selection",
                  limitedUi: !0,
                  value: () => {
                    const e = this.exportPresets();
                    (0, a.downloadFile)(
                      new File(
                        [JSON.stringify(e, null, 2)],
                        "preset.template.json",
                        { type: "application/json" }
                      )
                    );
                  },
                },
                {
                  type: "button",
                  label: "Export Preset Groups",
                  limitedUi: !1,
                  value: () => {
                    const e = this.exportPresetGroups();
                    (0, a.downloadFile)(
                      new File(
                        [JSON.stringify(e, null, 2)],
                        "presetGroups.json",
                        { type: "application/json" }
                      )
                    );
                  },
                },
              ],
            });
        }
        async onAdded(e) {
          await super.onAdded(e),
            this.presetGroups.push(new o()),
            this.presetGroups.push(new l()),
            this.presetGroups.push(new c()),
            this.presetGroups.push(new c("envMap2")),
            this.presetGroups.push(new c("envMap3")),
            this.presetGroups.push(new u("Ground")),
            this.presetGroups.push(new u("CameraViews")),
            this.presetGroups.push(new u("MaterialConfiguration")),
            this.presetGroups.push(new d()),
            this.uiConfig.uiRefresh?.("postFrame", !0);
        }
        exportPresets() {
          const e = Object.fromEntries(
            this.presetGroups
              .map((e) => [e.name, h(e.selected) || void 0])
              .filter(([, e]) => e)
          );
          return (e.type = p.PluginType), e;
        }
        async fromJSON(e, t) {
          if (!super.fromJSON(e, t)) return null;
          const i = { ...e };
          delete i.type;
          const r = [];
          for (const [e, t] of Object.entries(i)) {
            const i = this.presetGroups.find((t) => t.name === e),
              a = i?.presets;
            if (!i || !a) continue;
            const s = "string" == typeof t ? { path: t } : t;
            r.push(i.apply(this._viewer, s));
          }
          return (
            await Promise.all(r),
            this.uiConfig.uiRefresh?.("postFrame", !0),
            this
          );
        }
        async loadPresetGroups(e) {
          "string" == typeof e &&
            e.startsWith("http") &&
            (e = await fetch(e).then(async (e) => e.json()));
          for (const [t, i] of Object.entries(e)) {
            const e = this.presetGroups.find((e) => e.name === t)?.presets;
            e?.push(...i);
          }
        }
        exportPresetGroups() {
          return Object.fromEntries(
            this.presetGroups
              .map((e) => [e.name, e.presets.map(h)])
              .filter(([, e]) => e.length > 0)
          );
        }
      }
      function h(e) {
        return e && "string" != typeof e ? e.path : e;
      }
      p.PluginType = "PresetLibraryPlugin";
    },
    4388: function (e, t, i) {
      i.d(t, {
        F: function () {
          return l;
        },
      });
      var r = i(2988),
        a = i(8160),
        s = i(4107),
        n = i(3995),
        o = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      class l extends n.Q {
        get cameraHelper() {
          return this._cameraHelper;
        }
        constructor(e = !0) {
          super(),
            (this.enabled = !0),
            (this.light = new a.B("#cceeff", 1)),
            (this.lightLayers = 1),
            (this._preRender = () => {
              if (!this.enabled) return void (this.light.layers.mask = 0);
              const e = this._viewer?.renderer.frameCount ?? 0;
              this.light.randomizePosition(e < 5 ? 0 : e),
                (this.light.layers.mask = this.lightLayers),
                this.light.updateShadowParams(),
                this._cameraHelper?.update();
            }),
            (this._setDirty = this._setDirty.bind(this)),
            (this.enabled = e);
        }
        async onAdded(e) {
          await super.onAdded(e),
            (this._cameraHelper = new r.Rki(this.light.shadow.camera)),
            (this._cameraHelper.visible = !1),
            (this._cameraHelper.userData.bboxVisible = !1),
            e.scene.add(this._cameraHelper),
            e.scene.addLight(this.light, { addToRoot: !0 }),
            e.addEventListener("preRender", this._preRender);
        }
        async onRemove(e) {
          return (
            e.removeEventListener("preRender", this._preRender),
            this.light.removeFromParent(),
            super.onRemove(e)
          );
        }
        _setDirty(e = !1) {
          e ? this._viewer?.scene.setDirty() : this._viewer?.setDirty();
        }
        get uiConfig() {
          return this._uiConfig
            ? this._uiConfig
            : (this._uiConfig = {
                type: "folder",
                label: "Progressive Shadow",
                children: [
                  {
                    type: "checkbox",
                    label: "Enabled",
                    property: [this, "enabled"],
                    onChange: this._setDirty,
                  },
                  {
                    type: "folder",
                    label: "Directional Light",
                    children: [
                      {
                        type: "checkbox",
                        label: "Visible",
                        property: [this.light, "visible"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "slider",
                        label: "Intensity",
                        bounds: [0, 10],
                        property: [this.light, "intensity"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "color",
                        label: "Color",
                        property: [this.light, "color"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "checkbox",
                        label: "Shadow Enabled",
                        property: [this.light.shadowParams, "enabled"],
                        onChange: [
                          this.light.updateShadowParams,
                          this._setDirty,
                        ],
                      },
                      {
                        type: "slider",
                        bounds: [0, 1],
                        property: [this.light.randomParams, "focus"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "slider",
                        bounds: [0, 1],
                        property: [this.light.randomParams, "spread"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "slider",
                        bounds: [0.01, 60],
                        property: [this.light.randomParams, "distanceScale"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "vec3",
                        bounds: [-5, 5],
                        property: [this.light.randomParams, "direction"],
                        onChange: this._setDirty,
                      },
                      {
                        type: "slider",
                        bounds: [0.01, 10],
                        property: [this.light.shadowParams, "radius"],
                        onChange: [
                          this.light.updateShadowParams,
                          this._setDirty,
                        ],
                      },
                      {
                        type: "slider",
                        bounds: [0.01, 30],
                        property: [this.light.shadowParams, "frustumSize"],
                        onChange: [
                          this.light.updateShadowParams,
                          this._setDirty,
                        ],
                      },
                      {
                        type: "slider",
                        bounds: [-0.01, 0.01],
                        property: [this.light.shadowParams, "bias"],
                        onChange: [
                          this.light.updateShadowParams,
                          this._setDirty,
                        ],
                      },
                      {
                        type: "slider",
                        bounds: [-0.05, 0.05],
                        property: [this.light.shadowParams, "normalBias"],
                        onChange: [
                          this.light.updateShadowParams,
                          this._setDirty,
                        ],
                      },
                    ],
                  },
                ],
              });
        }
      }
      (l.PluginType = "RandomizedDirectionalLight"),
        o([(0, s.qC)()], l.prototype, "enabled", void 0),
        o([(0, s.qC)("rdLight")], l.prototype, "light", void 0),
        o([(0, s.qC)()], l.prototype, "lightLayers", void 0);
    },
    5454: function (e, t, i) {
      i.d(t, {
        r: function () {
          return y;
        },
      });
      var r = i(6757),
        a = i(7245),
        s = i(2988),
        n = i(7320),
        o = i(3198),
        l = i(5130),
        c = i(9008),
        u = i(1531),
        d = i(5551),
        p = i(8670);
      function h(e) {
        const t = e?.userData;
        if (!t) return !1;
        t._ssBevel || (t._ssBevel = {});
        const i = t._ssBevel;
        return (
          (i.hasSSBevel = !0),
          void 0 === i.radius && (i.radius = 0),
          e.isMaterial && (e.needsUpdate = !0),
          !0
        );
      }
      let m = class extends a.Hl {
        constructor(e, t, i, r) {
          super(
            {
              defines: { NUM_SAMPLES: 16 },
              uniforms: {
                tNormalDepth: { value: null },
                tNormalBuffer: { value: null },
                tGBufferFlags: { value: null },
                edgeMaskBuffer: { value: null },
                screenSize: { value: new s.FM8() },
                radius: { value: 1 },
                samples: { value: null },
                frameCount: { value: 0 },
                cameraPositionWorld: { value: new s.Pa4(1, 1, 1) },
              },
              vertexShader: n.Z,
              fragmentShader: `\n\n            ${i}\n\n            ${o.Z}\n\n            uniform sampler2D tNormalBuffer;uniform sampler2D edgeMaskBuffer;uniform vec2 screenSize;const float depthStep=0.02;uniform vec2 samples[NUM_SAMPLES];uniform vec3 cameraPositionWorld;varying vec2 vUv;\n#include <common>\nfloat getBevelRadius(in float number){return floor(number/8.);}vec3 smoothNormal(){vec2 uv=gl_FragCoord.xy/screenSize;vec4 texel=texture2D(tNormalDepth,uv);vec4 edgeMask=texture2D(edgeMaskBuffer,uv);vec3 avgNormal=2.*texture2D(tNormalBuffer,uv).rgb-1.;float depth=pow(unpack16(texel.xy),2.);vec2 invScreenSize=vec2(1.)/screenSize;vec4 mask=texture2D(tGBufferFlags,uv);float weightSum=0.;float radius=getBevelRadius(mask.g*255.)*2.;float randomAngle=6.2*random(frameCount*0.1);float theta=randomAngle;float snTheta=sin(theta);float csTheta=cos(theta);mat2 randomRotationMatrix=mat2(csTheta,snTheta,-snTheta,csTheta);float d_=dot(cameraPositionWorld,cameraPositionWorld);float radiusModifier=clamp(1./(1.+pow(d_,0.5)),0.,1.);for(int i=0;i<5;i++){float x=float(i)-2.;for(int j=0;j<5;j++){float y=float(j)-2.;vec2 offset=randomRotationMatrix*vec2(x,y)*radius*radiusModifier*invScreenSize;vec4 texel=texture2D(tNormalDepth,uv+offset);float offsetDepth=pow(unpack16(texel.xy),2.);float depthWeight=abs(offsetDepth-depth);depthWeight=(1.-step(depthStep,depthWeight));vec3 offsetNormal=2.*texture2D(tNormalBuffer,uv+offset).rgb-1.;if(dot(offsetNormal,offsetNormal)>0.){avgNormal+=offsetNormal*depthWeight;}}}return normalize(avgNormal);}void main(){vec2 uv=gl_FragCoord.xy/screenSize;vec4 edgeMask=texture2D(edgeMaskBuffer,uv);vec3 normal=vec3(0.);if(edgeMask.x>0.){normal=smoothNormal();}else{normal=2.*texture2D(tNormalBuffer,uv).rgb-1.;}gl_FragColor=vec4(vec3(0.5*normal+0.5),1.);}\n            \n            `,
            },
            "tDiffuse"
          ),
            (this.uiConfig = void 0),
            (this.materialExtension = {
              shaderExtender: (e, t, i) => {
                this.enabled &&
                  t.materialObject.userData?._ssBevel?.hasSSBevel &&
                  (e.fragmentShader = (0, p.p)(
                    e.fragmentShader,
                    "#include <normal_fragment_maps>",
                    " \n                normal = 2. * texture2D(tSSBevelMap, viewToScreen(vViewPosition.xyz).xy).rgb - 1.;\n                normal = normalize(normal);\n                //geometryNormal = normal;\n            "
                  ));
              },
              onObjectRender: (e, t, i) => {
                if (
                  !this.enabled ||
                  !t.materialObject.userData?._ssBevel?.hasSSBevel
                )
                  return;
                const r = t.materialObject,
                  a = this._target.texture;
                this.materialExtension.extraUniforms.tSSBevelMap.value !== a &&
                  ((this.materialExtension.extraUniforms.tSSBevelMap.value = a),
                  (r.needsUpdate = !0));
              },
              getUiConfig: (e) => {
                const t = {
                  type: "folder",
                  label: "SSBevel (Dev)",
                  children: [
                    {
                      type: "checkbox",
                      label: "Enabled",
                      get value() {
                        return (
                          e.materialObject.userData._ssBevel?.hasSSBevel || !1
                        );
                      },
                      set value(i) {
                        i !== e.materialObject.userData._ssBevel?.hasSSBevel &&
                          (i
                            ? h(e.materialObject) ||
                              alert("Cannot add screen space bevel.")
                            : e.materialObject.userData._ssBevel &&
                              ((e.materialObject.userData._ssBevel.hasSSBevel =
                                !1),
                              (e.materialObject.needsUpdate = !0)),
                          t.uiRefresh?.("postFrame", !0));
                      },
                      onChange: this.setDirty,
                    },
                    () => ({
                      type: "slider",
                      bounds: [0, 8],
                      label: "radius",
                      hidden: () =>
                        !e.materialObject.userData._ssBevel?.hasSSBevel,
                      property: [e.materialObject.userData._ssBevel, "radius"],
                      onChange: this.setDirty,
                    }),
                  ],
                };
                return t;
              },
              parsFragmentSnippet: (e, t) =>
                this.enabled && t?.materialObject.userData?._ssBevel?.hasSSBevel
                  ? c.glsl`
            uniform sampler2D tSSBevelMap;
            ${l.Z}
            `
                  : "",
              extraUniforms: { tSSBevelMap: { value: null } },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._ssBevel?.hasSSBevel ? "1" : "0"),
              isCompatible: (e) => e.isMeshStandardMaterial2,
            }),
            (this._target = t),
            (this.needsSwap = !1),
            (this.clear = !0),
            (this._viewerApp = r),
            (this._edgeMaterial = new a.mT({
              uniforms: {
                tNormalDepth: { value: null },
                tNormalBuffer: { value: null },
                tGBufferFlags: { value: null },
                screenSize: { value: null },
                radius: { value: 10 },
                cameraNearFar: { value: new s.FM8(1, 1) },
                cameraPositionWorld: { value: new s.Pa4(1, 1, 1) },
              },
              vertexShader: n.Z,
              fragmentShader:
                "uniform vec2 screenSize;uniform sampler2D tNormalDepth;uniform sampler2D tNormalBuffer;uniform sampler2D tGBufferFlags;uniform float radius;uniform vec2 cameraNearFar;uniform vec3 cameraPositionWorld;const float depthStep=0.2;const float normalThreshold=0.9;float unpack16(vec2 value){return(value.x*0.996108949416342426275150501169264316558837890625+value.y*0.00389105058365758760263730664519243873655796051025390625);}vec3 unpackNormal(vec2 enc){vec2 fenc=enc*4.-2.;float f=dot(fenc,fenc);float g=sqrt(1.-f/4.);return vec3(fenc*g,1.-f/2.);}void lookupNormalDepth(out float depth,out vec3 normal,vec2 off){vec2 uv=(gl_FragCoord.st+off)/screenSize;vec4 texel=texture2D(tNormalDepth,uv);depth=mix(cameraNearFar.x,cameraNearFar.y,pow(unpack16(texel.xy),2.));normal=2.*texture2D(tNormalBuffer,uv).rgb-1.;}float getBorderWeight(){float depth1,depth2,depth3,depth4;vec3 normal1,normal2,normal3,normal4;float d_=dot(cameraPositionWorld,cameraPositionWorld);float radiusModifier=clamp(3./(1.+pow(d_,0.5)),0.,1.);float modRad=radius;lookupNormalDepth(depth1,normal1,vec2(0.,modRad));lookupNormalDepth(depth2,normal2,vec2(0.,-modRad));lookupNormalDepth(depth3,normal3,vec2(modRad,0.));lookupNormalDepth(depth4,normal4,vec2(-modRad,0.));vec2 uv=(gl_FragCoord.st)/screenSize;float mask=step(0.0001,texture2D(tGBufferFlags,uv).g);float mask1=texture2D(tGBufferFlags,uv+vec2(0.,modRad)/screenSize).b*255.;float mask2=texture2D(tGBufferFlags,uv+vec2(0.,-modRad)/screenSize).b*255.;float mask3=texture2D(tGBufferFlags,uv+vec2(modRad,0.)/screenSize).b*255.;float mask4=texture2D(tGBufferFlags,uv+vec2(-modRad,0.)/screenSize).b*255.;float maskWeight=max(abs(mask1-mask2),abs(mask3-mask4))*255.;maskWeight=(step(maskWeight,0.01));float a1=dot(normal1,normal2);float a2=dot(normal3,normal4);float normalWeight=min(abs(a1),abs(a2));normalWeight=1.-step(normalThreshold,normalWeight);float depthWeight=max(abs(depth1-depth2),abs(depth3-depth4));depthWeight=(step(depthWeight,depthStep));return normalWeight*depthWeight*maskWeight*mask;}void main(){float weight=getBorderWeight();vec2 uv=gl_FragCoord.st/screenSize;vec4 texel=texture2D(tNormalDepth,uv);float depth=pow(unpack16(texel.xy),2.);vec3 outColor=vec3(0.);if(depth>0.999){weight=0.;}else{outColor=vec3(weight);}gl_FragColor=vec4(outColor,1.);}",
            })),
            (this._separableBlurMaterial = new a.mT({
              defines: { KERNEL_RADIUS: 3, SIGMA: 3 },
              uniforms: {
                colorTexture: { value: null },
                maskTexture: { value: null },
                texSize: { value: new s.FM8(0.5, 0.5) },
                direction: { value: new s.FM8(0.5, 0.5) },
              },
              vertexShader: n.Z,
              fragmentShader:
                "varying vec2 vUv;uniform sampler2D colorTexture;uniform sampler2D maskTexture;uniform vec2 texSize;uniform vec2 direction;float gaussianPdf(in float x,in float sigma){return 0.39894*exp(-0.5*x*x/(sigma*sigma))/sigma;}void main(){vec2 invSize=1./texSize;float fSigma=float(SIGMA);float weightSum=gaussianPdf(0.,fSigma);vec4 mask=texture2D(maskTexture,vUv);vec3 diffuseSum=texture2D(colorTexture,vUv).rgb*weightSum;for(int i=1;i<KERNEL_RADIUS;i++){float x=float(i);float w=gaussianPdf(x,fSigma);vec2 uvOffset=direction*invSize*x;vec3 sample1=texture2D(colorTexture,vUv+uvOffset).rgb;vec3 sample2=texture2D(colorTexture,vUv-uvOffset).rgb;diffuseSum+=(sample1+sample2)*w;weightSum+=2.*w;}gl_FragColor=vec4(diffuseSum/weightSum,1.);}",
            }));
        }
        render(e, t, i, a, n) {
          if (!this.enabled) return;
          const o = e.baseRenderer,
            l = {
              minFilter: s.wem,
              magFilter: s.wem,
              isAntialiased: !1,
              format: s.wk1,
              depthBuffer: !1,
              generateMipmaps: !1,
            },
            c = o.getTempTarget(l);
          this._renderEdges(o, c),
            this._blurEdges(o, c),
            this._viewerApp.scene.renderCamera.updateShaderProperties(
              this.material
            ),
            this._viewerApp
              .getPlugin(r.m)
              ?.updateShaderProperties(this.material),
            this._viewerApp
              .getPlugin(u.R)
              ?.updateShaderProperties(this.material),
            this._viewerApp.renderer.updateShaderProperties(this.material),
            (this.uniforms.edgeMaskBuffer.value = c.texture),
            super.render(e, this._target, c, a, n),
            o.releaseTempTarget(c);
        }
        _initsamples() {
          const e = [],
            t = 1 / 8;
          return (
            e.push(new s.FM8(-8, 0).multiplyScalar(t)),
            e.push(new s.FM8(-6, -4).multiplyScalar(t)),
            e.push(new s.FM8(-3, -2).multiplyScalar(t)),
            e.push(new s.FM8(-2, -6).multiplyScalar(t)),
            e.push(new s.FM8(1, -1).multiplyScalar(t)),
            e.push(new s.FM8(2, -5).multiplyScalar(t)),
            e.push(new s.FM8(6, -7).multiplyScalar(t)),
            e.push(new s.FM8(5, -3).multiplyScalar(t)),
            e.push(new s.FM8(4, 1).multiplyScalar(t)),
            e.push(new s.FM8(7, 4).multiplyScalar(t)),
            e.push(new s.FM8(3, 5).multiplyScalar(t)),
            e.push(new s.FM8(0, 7).multiplyScalar(t)),
            e.push(new s.FM8(-1, 3).multiplyScalar(t)),
            e.push(new s.FM8(-4, 6).multiplyScalar(t)),
            e.push(new s.FM8(-7, 8).multiplyScalar(t)),
            e.push(new s.FM8(-5, 2).multiplyScalar(t)),
            e
          );
        }
        _blurEdges(e, t) {
          const i = {
              minFilter: s.wem,
              magFilter: s.wem,
              isAntialiased: !1,
              format: s.wk1,
              depthBuffer: !1,
              generateMipmaps: !1,
              sizeMultiplier: 0.5,
            },
            r = e.getTempTarget(i),
            a = t.texture.image?.width || 1,
            n = t.texture.image?.height || 1;
          (this._separableBlurMaterial.uniforms.texSize.value = new s.FM8(
            a,
            n
          )),
            (this._separableBlurMaterial.uniforms.colorTexture.value =
              t.texture),
            (this._separableBlurMaterial.uniforms.direction.value = new s.FM8(
              1,
              0
            )),
            e.blit(void 0, r, { material: this._separableBlurMaterial }),
            (this._separableBlurMaterial.uniforms.texSize.value = new s.FM8(
              a / 2,
              n / 2
            )),
            (this._separableBlurMaterial.uniforms.colorTexture.value =
              r.texture),
            (this._separableBlurMaterial.uniforms.direction.value = new s.FM8(
              0,
              1
            )),
            e.blit(void 0, t, { material: this._separableBlurMaterial }),
            e.releaseTempTarget(r);
        }
        _renderEdges(e, t) {
          const i = t.texture.image?.width || 1,
            a = t.texture.image?.height || 1;
          (this._edgeMaterial.uniforms.screenSize.value = new s.FM8(i, a)),
            this._viewerApp.scene.renderCamera.updateShaderProperties(
              this._edgeMaterial
            ),
            this._viewerApp
              .getPlugin(r.m)
              ?.updateShaderProperties(this._edgeMaterial),
            this._viewerApp
              .getPlugin(u.R)
              ?.updateShaderProperties(this._edgeMaterial),
            e.blit(void 0, t, { material: this._edgeMaterial });
        }
      };
      m = (function (e, t, i, r) {
        var a,
          s = arguments.length,
          n =
            s < 3
              ? t
              : null === r
              ? (r = Object.getOwnPropertyDescriptor(t, i))
              : r;
        if ("object" == typeof Reflect && "function" == typeof Reflect.decorate)
          n = Reflect.decorate(e, t, i, r);
        else
          for (var o = e.length - 1; o >= 0; o--)
            (a = e[o]) &&
              (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
        return s > 3 && n && Object.defineProperty(t, i, n), n;
      })([(0, d.Sp)("SSBevel")], m);
      var f = i(4821),
        g = i(4895),
        v = i(4107),
        _ = i(9354);
      class y extends g.G {
        get bevelTarget() {
          return this._bevelTarget;
        }
        constructor(e = !0) {
          super(),
            (this.passId = "ssBevel"),
            (this._beforeFilters = ["render"]),
            (this._afterFilters = ["gbuffer", "normalBuffer"]),
            (this._requiredFilters = ["render", "gbuffer", "normalBuffer"]),
            (this._lastEnabled = !1),
            (this.dependencies = [f.k, r.m, u.R]),
            (this.enabled = e),
            (this.setDirty = this.setDirty.bind(this)),
            (this._loaderCreate = this._loaderCreate.bind(this)),
            (this.updateGBuffer = this.updateGBuffer.bind(this));
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new b(e));
        }
        passCtor(e) {
          return (
            (this._bevelTarget = e.renderer.createTarget({
              depthBuffer: !0,
              type: s.cLu,
              minFilter: s.TyD,
              magFilter: s.TyD,
              generateMipmaps: !1,
            })),
            (this._bevelTarget.texture.name = "bevelBuffer"),
            (this._bevelTarget.texture.generateMipmaps = !1),
            e.getPluginByType("debug"),
            new m(
              e.renderer,
              this._bevelTarget,
              e.getPlugin(r.m)?.getUnpackSnippet() ?? "",
              e
            )
          );
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(f.k);
          return (
            this.pass?.passObject.materialExtension &&
              t?.materials?.registerMaterialExtension(
                this.pass?.passObject.materialExtension
              ),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(x),
            e.getPlugin(r.m)?.registerGBufferUpdater(this.updateGBuffer),
            super.onAdded(e)
          );
        }
        async onRemove(e) {
          return e.renderer.disposeTarget(this._bevelTarget), super.onRemove(e);
        }
        setDirty() {
          this._viewer?.setDirty(),
            this.pass?.passObject.materialExtension.setDirty?.();
        }
        _update(e) {
          let t = this.enabled;
          if (t && !this._lastEnabled) {
            const e = this._viewer?.getPluginByType("NormalBufferPlugin");
            e && !e.enabled && (e.enabled = !0),
              e ||
                this._viewer?.console.error(
                  "SSBevelPlugin needs NormalBufferPlugin"
                );
          }
          return (this._lastEnabled = t), t;
        }
        get uiConfig() {
          const e = this.pass?.passObject?.uiConfig ?? {};
          return (
            e.children
              ?.map((e) => (0, c.getOrCall)(e))
              ?.flat(2)
              .forEach((e) => e && (e.onChange = this.setDirty)),
            e
          );
        }
        updateGBuffer(e, t) {
          if (e instanceof s.Kj0 && e.material?.userData) {
            for (let e = 3; e < 8; e++) t.y = (0, _.o)(t.y, e);
            let i = e.material?.userData._ssBevel
              ? e.material?.userData._ssBevel.radius
              : 0;
            (i = Math.min(i, 31)), (i <<= 3), (t.y = t.y | i);
          }
        }
      }
      (y.PluginType = "SSBevelPlugin"),
        (y.SSBEVEL_GLTF_EXTENSION = "WEBGI_materials_ssbevel");
      class b {
        constructor(e) {
          (this.parser = e), (this.name = y.SSBEVEL_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          const r = i.extensions[this.name];
          return (
            t.userData || (t.userData = {}),
            h(t),
            (t.userData._ssBevel = (0, v.Hx)(r, t.userData._ssBevel, !1, {})),
            Promise.resolve()
          );
        }
      }
      const x = (e) => ({
        writeMaterial: (t, i) => {
          if (!t.isMeshStandardMaterial || !t.userData._ssBevel) return;
          if (!t.userData._ssBevel.hasSSBevel) return;
          i.extensions = i.extensions || {};
          const r = (0, v.HD)(t.userData._ssBevel, !1);
          (i.extensions[y.SSBEVEL_GLTF_EXTENSION] = r),
            (e.extensionsUsed[y.SSBEVEL_GLTF_EXTENSION] = !0);
        },
      });
    },
    2875: function (e, t, i) {
      i.d(t, {
        j: function () {
          return b;
        },
      });
      var r,
        a = i(3995),
        s = i(2988),
        n = i(9008),
        o = i(5804),
        l = i(3138),
        c = i(9033),
        u = i(3198),
        d = i(7337),
        p = i(6757),
        h = i(439),
        m = i(4821),
        f = i(6533),
        g = i(4107),
        v = i(5551),
        _ = i(8670),
        y = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let b = (r = class extends a.Q {
        constructor(e = !0) {
          super(),
            (this.enabled = !0),
            (this.radius = 0.015),
            (this.intensity = 1),
            (this.tolerance = 1.5),
            (this._defines = {}),
            (this.onlySSCSDebug = !1),
            (this.stepCount = 2),
            (this.dependencies = [p.m, m.k]),
            (this.materialExtension = {
              shaderExtender: (e, t, i) => {
                if (!e.defines.SSCS_ENABLED) return;
                const r = n.glsl`
                #ifndef D_sceneBoundingRadius
                #define D_sceneBoundingRadius
                uniform float sceneBoundingRadius;
                #endif
                float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord, vec3 lightDirection ) {
                    vec3 ray_origin_view = -vViewPosition;
                    float rnd = interleavedGradientNoise(gl_FragCoord.xy, frameCount+34.);
                    float cameraDist = length(cameraPositionWorld);
//                    float radius = mix((cameraNearFar.y) + ray_origin_view.z, -ray_origin_view.z - cameraNearFar.x, rnd * 0.5 + 0.5)*sscsRadius;
                    float radius = mix((cameraDist + sceneBoundingRadius) + ray_origin_view.z, -ray_origin_view.z - max(0.0, cameraDist - sceneBoundingRadius), rnd * 0.5 + 0.5)*sscsRadius;
                    vec3 state = vec3(1.,(rnd+0.5)/float(SSCS_STEP_COUNT),2.);
                    traceRay(ray_origin_view, normalize(lightDirection) * radius, sscsTolerance * radius * 2., state, SSCS_STEP_COUNT);
                    state.z = state.z > 0.99 ? 1. : max(0.,min(state.z * state.z * (1.-sscsIntensity), 1.));
                    
                #if defined(SSCS_DEBUG) && SSCS_DEBUG > 0
                    return state.z;
                #endif
            `,
                  a =
                    `\n#if SSCS_ENABLED\n\n    uniform float sscsIntensity;\n    uniform float sscsRadius;\n    uniform float sscsTolerance;\n\n    ${o.Z}\n    \n    #define THREE_PACKING_INCLUDED\n    ${l.Z}\n    \n    ${c.Z}\n    ${u.Z}\n    \n    ${d.Z}\n\n#endif\n            \n            ` +
                    s.WdD.shadowmap_pars_fragment
                      .replace(
                        "float getShadow( sampler2D shadowMap, vec2 shadowMapSize, float shadowBias, float shadowRadius, vec4 shadowCoord ) {",
                        `${r}\n`
                      )
                      .replace(
                        "return shadow;",
                        "return min(shadow, state.z);"
                      );
                (e.fragmentShader = e.fragmentShader.replace(
                  "#include <shadowmap_pars_fragment>",
                  a
                )),
                  (e.fragmentShader = e.fragmentShader.replace(
                    "#include <lights_fragment_begin>",
                    s.WdD.lights_fragment_begin
                  )),
                  (e.fragmentShader = (0, _.p)(
                    e.fragmentShader,
                    "directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ] ) : 1.0;",
                    "directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( directionalShadowMap[ i ], directionalLightShadow.shadowMapSize, directionalLightShadow.shadowBias, directionalLightShadow.shadowRadius, vDirectionalShadowCoord[ i ], directLight.direction ) : 1.0;"
                  )),
                  (e.fragmentShader = (0, _.p)(
                    e.fragmentShader,
                    "directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ] ) : 1.0;",
                    "directLight.color *= ( directLight.visible && receiveShadow ) ? getShadow( spotShadowMap[ i ], spotLightShadow.shadowMapSize, spotLightShadow.shadowBias, spotLightShadow.shadowRadius, vSpotLightCoord[ i ], directLight.direction ) : 1.0;"
                  ));
              },
              onObjectRender: (e, t, i) => {
                const r = t.materialObject;
                let a =
                  this.enabled &&
                  !1 !== i.userData.screenSpaceRendering &&
                  !r.userData?.sscsDisabled
                    ? 1
                    : 0;
                r.defines.SSCS_ENABLED !== a &&
                  ((r.defines.SSCS_ENABLED = a), (r.needsUpdate = !0)),
                  (a = this._defines.SSCS_STEP_COUNT),
                  r.defines.SSCS_STEP_COUNT !== a &&
                    ((r.defines.SSCS_STEP_COUNT = a), (r.needsUpdate = !0)),
                  (a = +this._defines.SSCS_DEBUG),
                  r.defines.SSCS_DEBUG !== a &&
                    ((r.defines.SSCS_DEBUG = a), (r.needsUpdate = !0));
              },
              parsFragmentSnippet: () => "\n",
              extraUniforms: { ...r._uniforms },
              computeCacheKey: (e) => (this.enabled ? "1" : "0"),
              isCompatible: (e) => e.isMeshStandardMaterial2,
              updaters: () => [
                this._viewer?.getPlugin(p.m),
                this._viewer?.getPlugin(h.E),
                this._viewer?.scene.renderCamera,
                this._viewer?.renderer,
                this._viewer?.scene,
              ],
            }),
            (this.enabled = e),
            (this.userData = {
              setDirty: () => {
                this._viewer?.setDirty();
              },
            });
        }
        async onAdded(e) {
          await super.onAdded(e),
            e
              .getPlugin(m.k)
              ?.materials?.registerMaterialExtension(this.materialExtension);
        }
        async onRemove(e) {
          return (
            e
              .getPlugin(m.k)
              ?.materials?.unregisterMaterialExtension(this.materialExtension),
            super.onRemove(e)
          );
        }
      });
      (b.PluginType = "SSContactShadows"),
        (b._uniforms = {
          tNormalDepth: { value: null },
          frameCount: { value: 0 },
          projection: { value: new s.yGw() },
          cameraPositionWorld: { value: new s.Pa4() },
          cameraNearFar: { value: new s.FM8(0.1, 1e3) },
          sceneBoundingRadius: { value: 0 },
        }),
        y([(0, v.Q7)("Enabled"), (0, g.qC)()], b.prototype, "enabled", void 0),
        y(
          [
            (0, f.e5)({ uniforms: r._uniforms, propKey: "sscsRadius" }),
            (0, v.t8)("Radius", [1e-4, 0.1], 1e-4),
            (0, g.qC)(),
          ],
          b.prototype,
          "radius",
          void 0
        ),
        y(
          [
            (0, f.e5)({ uniforms: r._uniforms, propKey: "sscsIntensity" }),
            (0, v.t8)("Intensity", [1e-4, 1], 1e-4),
            (0, g.qC)(),
          ],
          b.prototype,
          "intensity",
          void 0
        ),
        y(
          [
            (0, f.e5)({ uniforms: r._uniforms, propKey: "sscsTolerance" }),
            (0, v.t8)("Tolerance", [0.1, 5]),
            (0, g.qC)(),
          ],
          b.prototype,
          "tolerance",
          void 0
        ),
        y(
          [
            (0, f.lD)("SSCS_DEBUG", void 0, !0),
            (0, v.Q7)("Debug only SSCS"),
            (0, g.qC)(),
          ],
          b.prototype,
          "onlySSCSDebug",
          void 0
        ),
        y(
          [
            (0, f.lD)("SSCS_STEP_COUNT", void 0, !0),
            (0, v.t8)("Step count", [1, 8], 1),
            (0, g.qC)(),
          ],
          b.prototype,
          "stepCount",
          void 0
        ),
        (b = r = y([(0, v.Sp)("Screen Space Contact Shadows")], b));
    },
    922: function (e, t, i) {
      i.d(t, {
        s: function () {
          return D;
        },
      });
      var r = i(6757),
        a = i(3415),
        s = i(439),
        n = i(7245),
        o = i(7320),
        l = i(3138),
        c = i(3198),
        u = i(9698),
        d = i(7337),
        p = i(5804),
        h = i(5130),
        m = i(2988),
        f = i(9008),
        g = i(6533),
        v = i(5551),
        _ = i(4107),
        y = i(8284),
        b = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      class x extends n.Hl {
        get ssgiEnabled() {
          return parseInt(this.material.defines.SSGI_ENABLED) > 0.5;
        }
        set ssgiEnabled(e) {
          (e = e && this._giActivated),
            (this.material.defines.SSGI_ENABLED = e ? 1 : 0),
            (this.material.needsUpdate = !0);
        }
        constructor(e, t, i, r = !1) {
          super(
            {
              vertexShader: o.Z,
              fragmentShader: `\n\n${p.Z}\n${l.Z}\n${c.Z}\n${u.Z}\n${i}\n\n${d.Z}\n\nvarying vec2 vUv;uniform float frameCount2;uniform float intensity;uniform float objectRadius;uniform float rayCount;uniform float power;uniform float bias;uniform float falloff;uniform float tolerance;uniform bool autoRadius;uniform vec2 screenSize;vec3 ComputeUniformL(vec3 N,vec2 E){vec3 L;L.xy=E;L.z=interleavedGradientNoise(gl_FragCoord.xy,frameCount2*5.);L=L*2.-1.;return L;}vec2 GetRandomE(float seed){vec2 rand_e;rand_e.x=random3(vec3(gl_FragCoord.xy,frameCount2+seed));rand_e.y=random3(vec3(gl_FragCoord.yx,rand_e.x+(frameCount2)*7.));return rand_e;}vec4 calculateGI(in float seed,in vec3 screenPos,in vec3 normal,in float radiusFactor){vec3 viewPos=screenToView(screenPos.xy,screenPos.z);normal=normalize(normal);vec2 E=GetRandomE(seed);vec3 L=ComputeUniformL(normal,E);L=normalize(L);L*=sign(dot(L,normal));float cameraDist=length(cameraPositionWorld);float rayLen=autoRadius?length(viewPos-screenToView(screenPos.xy+objectRadius/10.,screenPos.z)):mix((cameraNearFar.y)+viewPos.z,-viewPos.z-cameraNearFar.x,L.z*0.5+0.5)*objectRadius;rayLen*=radiusFactor;float r=interleavedGradientNoise(gl_FragCoord.xy,frameCount2*14.+seed)+0.05;rayLen=max(rayLen,0.001);vec3 state=vec3(1.,(r+0.5)/float(RTAO_STEP_COUNT),2.);viewPos+=normal*max(-0.01*viewPos.z,0.001);vec3 screenHitP=traceRay(viewPos,L*rayLen,tolerance*rayLen,state,RTAO_STEP_COUNT);vec3 viewHitP=screenToView(screenHitP.xy,screenHitP.z);vec3 LRes=viewHitP-viewPos;if(state.z>1.)LRes=vec3(9999999.);float dist=length(LRes)*falloff;float EPS=0.01;float zBias=(viewPos.z)*bias;float ao=(max(dot(normal,L)+zBias,0.))/(dist*dist+EPS);\n#if defined(SSGI_ENABLED) && SSGI_ENABLED > 0\nvec3 hitColor=tLastFrameTexelToLinear(texture2D(tLastFrame,screenHitP.xy)).rgb;vec3 hitNormal=getViewNormal(screenHitP.xy);float giWeight=1.;giWeight=saturate2(giWeight/(dist+EPS),1.);giWeight*=saturate2((dot(normal,L)),1.);giWeight*=saturate2((dot(hitNormal,-L)),1.);return vec4(hitColor*giWeight,ao);\n#endif\nreturn vec4(0,0,0,ao);}float normpdf(in float x,in float sigma){return exp(-0.5*x*x/(sigma*sigma));}vec4 getLastThis(sampler2D tex,float depth,vec3 normal){vec2 direction=vec2(1,1);vec4 color=clamp(tLastThisTexelToLinear(texture2D(tex,vUv.xy)),0.,5.);return color;}void main(){float depth;vec3 normal;getDepthNormal(vUv,depth,normal);if(depth>0.99){discard;gl_FragColor=getLastThis(tLastThis,depth,normal);return;}float viewZ=depthToViewZ(depth);vec3 screenPos=vec3(vUv.x,vUv.y,viewZ);vec4 gi=vec4(0.);gi+=calculateGI(8.,screenPos,normal,1.);if(rayCount>1.5)gi=max(gi,calculateGI(2.,screenPos,normal,0.4));if(rayCount>2.5)gi=max(gi,calculateGI(3.,screenPos,normal,1.5));if(rayCount>3.5)gi=max(gi,calculateGI(1.,screenPos,normal,0.6));if(rayCount>4.5)gi=max(gi,calculateGI(3.,screenPos,normal,1.));gi.a=min(1.,gi.a);gi.a=max(0.,gi.a);gi.rgb=min(vec3(3.),gi.rgb);gi.rgb=max(vec3(0.),gi.rgb);if(frameCount2<3.){gl_FragColor=gi;return;}gl_FragColor=(texture2D(tLastThis,vUv));gl_FragColor=((gi+(gl_FragColor)*frameCount2)/(frameCount2+1.));}\n\n            `,
              uniforms: {
                tLastThis: { value: null },
                tDiffuse: { value: null },
                tNormalDepth: { value: null },
                tLastFrame: { value: null },
                opacity: { value: 1 },
                intensity: { value: 2.14 },
                rayCount: { value: 0.1 },
                objectRadius: { value: 1 },
                autoRadius: { value: !r },
                power: { value: 1.1 },
                bias: { value: 0.015 },
                falloff: { value: 0.7 },
                tolerance: { value: 1.5 },
                frameCount: { value: 0 },
                frameCount2: { value: 0 },
                projection: { value: new m.yGw() },
                screenSize: { value: new m.FM8() },
                cameraPositionWorld: { value: new m.Pa4() },
                cameraNearFar: { value: new m.FM8(0.1, 1e3) },
              },
              defines: { PERSPECTIVE_CAMERA: 1, SSGI_ENABLED: r ? 1 : 0 },
            },
            "tDiffuse",
            "tLastFrame",
            "tLastThis"
          ),
            (this.materialExtension = {
              shaderExtender: (e, t, i) => {
                if (!e.defines.SSRTAO_ENABLED) return;
                this.materialExtension.extraUniforms.tSSGIMap.value =
                  this._target?.texture;
                const r = t.materialObject;
                let a = this.material.defines.SSGI_ENABLED;
                r.defines.SSGI_ENABLED !== a &&
                  ((r.defines.SSGI_ENABLED = a), (r.needsUpdate = !0)),
                  (a = this._target.texture),
                  this.materialExtension.extraUniforms.tSSGIMap.value !== a &&
                    ((this.materialExtension.extraUniforms.tSSGIMap.value = a),
                    (r.needsUpdate = !0));
                const s = "vec3 totalDiffuse =";
                (e.fragmentShader = e.fragmentShader.replace(
                  s,
                  `\n\n            \n            #if defined(SSRTAO_ENABLED) && SSRTAO_ENABLED > 0\nvec4 ssgi=tSSGIMapTexelToLinear(texture2D(tSSGIMap,viewToScreen(vViewPosition.xyz).xy));float ambientOcclusion=1.-ssgi.a;ambientOcclusion=max(0.,ambientOcclusion);ambientOcclusion=pow(ambientOcclusion,ssaoPower);ambientOcclusion=min(1.,ambientOcclusion);reflectedLight.indirectDiffuse*=ambientOcclusion;\n#if defined(SSGI_ENABLED) && SSGI_ENABLED > 0\nvec3 ssgiColor=ssgi.rgb*ssgiIntensity;reflectedLight.indirectDiffuse+=ssgiColor*(material.diffuseColor.rgb);\n#endif\n#if defined( USE_ENVMAP )\nfloat dotNV=saturate(dot(geometry.normal,geometry.viewDir));float specularOcclusion=saturate(pow(dotNV+ambientOcclusion,exp2(-16.*material.roughness-1.))-1.+ambientOcclusion);reflectedLight.indirectSpecular*=specularOcclusion;\n#if defined(SSGI_ENABLED) && SSGI_ENABLED > 0\n#if !defined(SSR_ENABLED) || SSR_ENABLED < 1\nreflectedLight.indirectSpecular+=ssgiColor*material.specularColor;\n#endif\n#endif\n#endif\n#endif\n\n            \n            // reflectedLight.directDiffuse = vec3(0.);\n            // reflectedLight.indirectDiffuse = vec3(0.);\n            // reflectedLight.directSpecular = vec3(0.);\n            // reflectedLight.indirectSpecular = vec3(0.);\n            \n            \n${s}`
                )),
                  (e.fragmentShader = e.fragmentShader.replace(
                    "#include <aomap_fragment>",
                    ""
                  )),
                  (e.defines.USE_UV = "");
              },
              onObjectRender: (e, t, i) => {
                const r = t.materialObject,
                  a = !r.transparent && r.transmission < 0.001,
                  s =
                    this.enabled &&
                    a &&
                    (this.renderWithCamera || this._renderer.frameCount > 1) &&
                    !1 !== i.userData.screenSpaceRendering &&
                    !r.userData?.ssrtaoDisabled &&
                    !r.userData?.ssaoDisabled
                      ? 1
                      : 0;
                r.defines.SSRTAO_ENABLED !== s &&
                  ((r.defines.SSRTAO_ENABLED = s), (r.needsUpdate = !0));
              },
              parsFragmentSnippet: (e) => f.glsl`
            uniform float ssaoPower;
            uniform float ssgiIntensity;
            uniform sampler2D tSSGIMap;
            ${(0, g.N6)(
              "tSSGIMap",
              this._target?.texture,
              e.capabilities.isWebGL2
            )}

            ${h.Z}

        `,
              extraUniforms: {
                tSSGIMap: { value: null },
                ssaoPower: this.material.uniforms.power,
                ssgiIntensity: this.material.uniforms.intensity,
              },
              computeCacheKey: (e) =>
                this.enabled
                  ? "1"
                  : "0" +
                    this._target?.texture?.colorSpace +
                    this._target?.texture?.uuid +
                    this.material.defines.SSGI_ENABLED,
              isCompatible: (e) =>
                !e.materialObject.userData?.ssaoDisabled &&
                e.isMeshStandardMaterial2,
            }),
            (this.intensity = 2),
            (this.power = 1.1),
            (this.autoRadius = !0),
            (this.objectRadius = 2),
            (this.tolerance = 1),
            (this.bias = 0.15),
            (this.falloff = 0.7),
            (this.rayCount = 2),
            (this.stepCount = 4),
            (this.smoothEnabled = !0),
            (this.renderWithCamera = !0),
            (this.uiConfig = {
              type: "folder",
              label: "SS Global illumination (Dev)",
              children: [
                ...(0, v._t)(this),
                {
                  type: "checkbox",
                  label: "GI Enabled",
                  hidden: () => !this._giActivated,
                  property: [this, "ssgiEnabled"],
                },
              ],
            }),
            (this._renderer = e),
            (this._target = t),
            (this.needsSwap = !0),
            (this._giActivated = r),
            (this.ssgiEnabled = r),
            (this.bilateralPass = new y.$(this._target, i, "rgba"));
        }
        render(e, t, i, r, a) {
          (this.needsSwap = !1),
            (!this.renderWithCamera && this._renderer.frameCount < 2) ||
              (this._renderer.blit(this._target.texture, t),
              (this.uniforms.tLastThis.value = t.texture),
              super.render(e, this._target, i, r, a),
              this.smoothEnabled && this.bilateralPass.render(e, t, i, r, a));
        }
      }
      b([(0, _.qC)()], x.prototype, "bilateralPass", void 0),
        b(
          [(0, v.t8)("Intensity", [0, 4]), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "intensity",
          void 0
        ),
        b(
          [(0, v.t8)("Power", [0, 3]), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "power",
          void 0
        ),
        b(
          [(0, v.Q7)("Auto radius"), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "autoRadius",
          void 0
        ),
        b(
          [(0, v.t8)("Object Radius", [0.01, 10]), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "objectRadius",
          void 0
        ),
        b(
          [(0, v.t8)("Tolerance", [0.1, 5]), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "tolerance",
          void 0
        ),
        b(
          [(0, v.t8)("Bias", [-0.3, 0.3]), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "bias",
          void 0
        ),
        b(
          [(0, v.t8)("Falloff", [1e-4, 4]), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "falloff",
          void 0
        ),
        b(
          [(0, v.t8)("Ray Count", [1, 5], 1), (0, _.qC)(), (0, g.e5)()],
          x.prototype,
          "rayCount",
          void 0
        ),
        b(
          [
            (0, v.t8)("Step count", [1, 16], 1),
            (0, _.qC)(),
            (0, g.lD)("RTAO_STEP_COUNT"),
          ],
          x.prototype,
          "stepCount",
          void 0
        ),
        b(
          [(0, v.Q7)("Smooth Enabled"), (0, _.qC)()],
          x.prototype,
          "smoothEnabled",
          void 0
        ),
        b(
          [(0, v.Q7)("Render with Camera")],
          x.prototype,
          "renderWithCamera",
          void 0
        );
      var S = i(4821),
        C = i(3995);
      class D extends a.q {
        get rtgiTarget() {
          return this._rtgiTarget;
        }
        constructor(e = !0) {
          super(),
            (this.dependencies = [S.k, r.m, s.E]),
            (this._initEnabled = !1),
            (this.setDirty = this.setDirty.bind(this)),
            (this._initEnabled = e);
        }
        async onAdded(e) {
          await super.onAdded(e),
            (this.enabled = this._initEnabled),
            this.uiConfig.uiRefresh?.("postFrame", !0);
        }
        get enabled() {
          return this.passes.ssrtgi?.passObject?.enabled || !1;
        }
        set enabled(e) {
          this.passes.ssrtgi?.passObject &&
            (this.passes.ssrtgi.passObject.enabled = e);
        }
        createPasses(e) {
          return (
            (this._rtgiTarget = e.renderer.createTarget({ sizeMultiplier: 1 })),
            this._viewer?.getPluginByType("debug"),
            [
              (0, C.M)(
                e,
                {
                  passId: "ssrtgi",
                  after: ["gbuffer"],
                  before: ["render"],
                  required: ["render", "gbuffer", "progressive"],
                  passObject: new x(
                    e.renderer,
                    this._rtgiTarget,
                    e.getPlugin(r.m)?.getUnpackSnippet() ?? "",
                    !0
                  ),
                  update: () => {
                    const t = this.enabled;
                    if (t) {
                      const e = this._viewer?.getPluginByType("SSAO");
                      e?.enabled && (e.enabled = !1);
                    }
                    t &&
                      this.passes.ssrtgi.passObject.bilateralPass.updateShaderProperties(
                        [e.getPlugin(r.m)]
                      );
                  },
                },
                () => [
                  e.getPlugin(r.m),
                  e.getPlugin(s.E),
                  e.scene.activeCamera,
                  e.renderer,
                ]
              ),
            ]
          );
        }
        async onRemove(e) {
          return e.renderer.disposeTarget(this._rtgiTarget), super.onRemove(e);
        }
        setDirty() {
          this._viewer?.setDirty();
        }
        get uiConfig() {
          const e = this.passes.ssrtgi?.passObject?.uiConfig ?? {};
          return (
            e.children
              ?.map((e) => (0, f.getOrCall)(e))
              ?.flat(2)
              .forEach((e) => e && (e.onChange = this.setDirty)),
            e
          );
        }
      }
      D.PluginType = "SSGI";
    },
    3316: function (e, t, i) {
      i.d(t, {
        E: function () {
          return d;
        },
      });
      var r = i(3995),
        a = i(4821),
        s = i(743),
        n = i(5551),
        o = i(9008),
        l = i(2354),
        c = i(6420),
        u = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let d = class extends r.Q {
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [a.k]),
            (this.scenes = []),
            (this.assets = {}),
            (this.toJSON = void 0),
            (this._isPlaying = !1),
            (this._isPlayingLoop = !1),
            (this._options = {}),
            (this.minSceneTime = 2e3),
            (this.loadScenes = this.loadScenes.bind(this)),
            (this.play = this.play.bind(this)),
            (this.stop = this.stop.bind(this)),
            (this.downloadScenes = this.downloadScenes.bind(this)),
            (this.promptLoadScenes = this.promptLoadScenes.bind(this));
        }
        get loadedScenes() {
          return this.scenes.length;
        }
        async promptLoadScenes() {
          const e = await (0, o.uploadFile)(!0, !1, "model/gltf");
          await this.loadScenes(e);
        }
        async loadScenes(e) {
          const t = await Promise.all(
            e.map(async (e) => await e.arrayBuffer())
          );
          for (let i = 0; i < e.length; i++) {
            const r = e[i];
            this.scenes.push({ [r.name]: new Uint8Array(t[i]) }),
              (this.assets[r.name] = { path: r.name, file: r });
          }
          this.uiConfig?.uiRefresh?.();
        }
        async play() {
          if (!this._viewer) return;
          if (this._isPlaying || this._isPlayingLoop) return;
          (this._isPlaying = !0), (this._isPlayingLoop = !0);
          const e =
            this._viewer.getPluginByType("AssetManagerBasicPopupPlugin") ??
            this._viewer.getPluginByType("LoadingScreenPlugin");
          e?.enabled, e && (e.enabled = !1);
          const t = this._viewer.getPluginByType("FrameFade"),
            i = this._viewer.getPluginByType("GLTFAnimation"),
            r = this._viewer.getPluginByType("CameraViews");
          for (; this._isPlaying; )
            for (const a of this.scenes) {
              if (!this._isPlaying) break;
              const s = Object.keys(a);
              i?.stopAnimation(!1),
                await r?.stopAllAnimations(),
                this._viewer.scene.removeSceneModels(),
                (this._viewer.renderEnabled = !1);
              for (const e of s) {
                let t = this.assets[e];
                t ||
                  ((t = { path: e, file: new File([a[e]], e) }),
                  (this.assets[e] = t)),
                  await this._viewer
                    .getManager()
                    ?.addAssetSingle(t, this._options);
              }
              if (!this._isPlaying) break;
              (this._viewer.renderEnabled = !0),
                e && (e.enabled = !1),
                t && ((t.enabled = !0), await t.startTransition(1e3));
              const n = [(0, o.timeout)(this.minSceneTime)];
              i && n.push(i.playAnimation()),
                r && n.push(r.animateAllViews()),
                await Promise.all(n);
            }
          this._isPlayingLoop = !1;
        }
        stop() {
          this._isPlaying = !1;
        }
        async downloadScenes() {
          const e = {};
          for (const t of this.scenes)
            for (const i of Object.keys(t)) {
              const r = e[i] ? i + "_" : i;
              e[r] = t[r];
            }
          const t = (0, s.Xo)(e),
            i = new Blob([t], { type: "application/zip" });
          (0, o.downloadBlob)(i, "scenes.glbloop");
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = this;
          e.getManager()?.importer?.Importers.push(
            new l.q(
              class extends c.s {
                load(e, i, r, a) {
                  super.load(
                    e,
                    (e) => {
                      t.loadScenes([...e.values()]),
                        i?.(null),
                        (0, o.timeout)(100).then(t.play);
                    },
                    r,
                    a
                  );
                }
              },
              ["glbloop"],
              !0
            )
          );
        }
      };
      (d.PluginType = "SceneLoopPlugin"),
        u([(0, n.Kb)("Loaded scenes")], d.prototype, "loadedScenes", null),
        u([(0, n.M)("Load Scenes")], d.prototype, "promptLoadScenes", null),
        u([(0, n.Kb)("Playing")], d.prototype, "_isPlaying", void 0),
        u([(0, n.ri)("Min Scene Time")], d.prototype, "minSceneTime", void 0),
        u([(0, n.M)("Play")], d.prototype, "play", null),
        u([(0, n.M)("Stop")], d.prototype, "stop", null),
        u([(0, n.M)("Download Scenes")], d.prototype, "downloadScenes", null),
        (d = u([(0, n.Sp)("Scene Loop")], d));
    },
    5220: function (e, t, i) {
      i.d(t, {
        w: function () {
          return u;
        },
      });
      var r = i(3995),
        a = i(2988),
        s = i(4821),
        n = i(4107),
        o = i(5551),
        l = i(3198),
        c = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let u = class extends r.Q {
        addThinFilmLayer(e) {
          return d(e.materialObject);
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new p(e));
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [s.k]),
            (this._defines = {}),
            (this._uniforms = {
              thinBaseLayerFactors: { value: new a.Ltg() },
              thinNoiseLayerFactors: { value: new a.Ltg() },
              thinColorNoiseParams: { value: new a.Ltg() },
              thinFilmFactor: { value: 0.8 },
            }),
            (this.materialExtension = {
              parsFragmentSnippet: (e, t) =>
                this.enabled &&
                t?.materialObject.userData._thinFilmLayer?.hasThinFilm
                  ? l.Z +
                    "\n#ifndef VORONOISE_HELPER\n#define VORONOISE_HELPER \nfloat voronoise(in vec2 p,float u,float v){float k=1.+63.*pow(1.-v,6.);vec2 i=floor(p);vec2 f=fract(p);vec2 a=vec2(0.,0.);for(int y=-2;y<=2;y++)for(int x=-2;x<=2;x++){vec2 g=vec2(x,y);vec3 o=hash3(i+g)*vec3(u,u,1.);vec2 d=g-f+o.xy;float w=pow(1.-smoothstep(0.,1.414,length(d)),k);a+=vec2(o.z*w,w);}return a.x/a.y;}vec3 voronoise3(vec2 p,float u,float v){return vec3(voronoise(p,u,v),voronoise(p+vec2(0.435,0.23),u,v),voronoise(p-vec2(0.83,0.45),u,v));}vec3 voronoiseNormal(vec2 p,float u,float v){return vec3(voronoise(p,u,v),voronoise(p+vec2(0.435,0.23),u,v),1.);}\n#endif\n\n#ifndef HSV_HELPERS\n#define HSV_HELPERS \nvec3 hsv2rgb(vec3 c){vec4 K=vec4(1.,2./3.,1./3.,3.);vec3 p=abs(fract(c.xxx+K.xyz)*6.-K.www);return c.z*mix(K.xxx,clamp(p-K.xxx,0.,1.),c.y);}vec3 rgb2hsv(vec3 c){vec4 K=vec4(0.,-1./3.,2./3.,-1.);vec4 p=c.g<c.b?vec4(c.bg,K.wz):vec4(c.gb,K.xy);vec4 q=c.r<p.x?vec4(p.xyw,c.r):vec4(c.r,p.yzx);float d=q.x-min(q.w,q.y);float e=1.0e-10;return vec3(abs(q.z+(q.w-q.y)/(6.*d+e)),d/(q.x+e),q.x);}\n#endif \n\nuniform vec4 thinBaseLayerFactors;\nuniform vec4 thinNoiseLayerFactors;\nuniform vec4 thinColorNoiseParams;\nuniform float thinFilmFactor;\n        "
                  : "",
              shaderExtender: (e, t, i) => {
                if (
                  !this.enabled ||
                  !t.materialObject.userData._thinFilmLayer?.hasThinFilm
                )
                  return;
                const r = "#glMarker beforeAccumulation";
                (e.fragmentShader = e.fragmentShader.replace(
                  r,
                  "vec3 incident=normalize(vViewPosition.xyz);float hWeight=1.-dot(normal,incident);vec3 noiseV=voronoise3(vUv.xy*thinColorNoiseParams.xy*60.,thinColorNoiseParams.z,thinColorNoiseParams.w);float hWeight2=1.-dot(normalize(noiseV),incident);vec3 film=hsv2rgb(vec3(fract(hWeight+thinBaseLayerFactors.x),thinBaseLayerFactors.y,thinBaseLayerFactors.z))*thinBaseLayerFactors.a;vec3 film2=hsv2rgb(vec3(fract(hWeight2+thinNoiseLayerFactors.x),thinNoiseLayerFactors.y,thinNoiseLayerFactors.z))*thinNoiseLayerFactors.a;film=(film+film2)/(thinBaseLayerFactors.a+thinNoiseLayerFactors.a);diffuseColor.rgb=mix(diffuseColor.rgb,film,thinFilmFactor);" +
                    r
                )),
                  (e.defines.USE_UV = "");
              },
              onObjectRender: (e, t) => {
                const i = t.materialObject.userData?._thinFilmLayer;
                if (!i?.hasThinFilm) return;
                this._uniforms.thinBaseLayerFactors.value.fromArray(
                  i.baseLayerFactors
                ),
                  this._uniforms.thinNoiseLayerFactors.value.fromArray(
                    i.noiseLayerFactors
                  ),
                  this._uniforms.thinColorNoiseParams.value.fromArray(
                    i.colorNoiseParams
                  ),
                  (this._uniforms.thinFilmFactor.value = i.filmFactor);
                const r = this.enabled ? 1 : 0;
                t.materialObject.defines.THIN_FILM_LAYER_ENABLED !== r &&
                  ((t.materialObject.defines.THIN_FILM_LAYER_ENABLED = r),
                  (t.materialObject.needsUpdate = !0));
              },
              extraUniforms: { ...this._uniforms },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._thinFilmLayer?.hasThinFilm
                  ? "1"
                  : "0"),
              isCompatible: (e) =>
                e.isMeshStandardMaterial2 || e.isDiamondMaterial,
              updaters: () => [],
              getUiConfig: (e) => {
                const t = this._viewer,
                  i = {
                    type: "folder",
                    label: "ThinFilmLayer",
                    children: [
                      {
                        type: "checkbox",
                        label: "Enabled",
                        get value() {
                          return (
                            e.materialObject.userData._thinFilmLayer
                              ?.hasThinFilm || !1
                          );
                        },
                        set value(r) {
                          r !==
                            e.materialObject.userData._thinFilmLayer
                              ?.hasThinFilm &&
                            (r
                              ? d(e.materialObject) ||
                                t.alert("Cannot add thin film.")
                              : e.materialObject.userData._thinFilmLayer &&
                                ((e.materialObject.userData._thinFilmLayer.hasThinFilm =
                                  !1),
                                (e.materialObject.needsUpdate = !0)),
                            i.uiRefresh?.("postFrame", !0));
                        },
                        onChange: this.setDirty,
                      },
                      () => ({
                        type: "slider",
                        bounds: [0, 1],
                        label: "Intensity",
                        hidden: () =>
                          !e.materialObject.userData._thinFilmLayer
                            ?.hasThinFilm,
                        property: [
                          e.materialObject.userData._thinFilmLayer,
                          "filmFactor",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "vec4",
                        label: "Base Layer",
                        bounds: [0, 1],
                        hidden: () =>
                          !e.materialObject.userData._thinFilmLayer
                            ?.hasThinFilm,
                        property: [
                          e.materialObject.userData._thinFilmLayer,
                          "baseLayerFactors",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "vec4",
                        label: "Noise Layer",
                        bounds: [0, 1],
                        hidden: () =>
                          !e.materialObject.userData._thinFilmLayer
                            ?.hasThinFilm,
                        property: [
                          e.materialObject.userData._thinFilmLayer,
                          "noiseLayerFactors",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "vec4",
                        label: "Noise Params",
                        bounds: [0, 1],
                        hidden: () =>
                          !e.materialObject.userData._thinFilmLayer
                            ?.hasThinFilm,
                        property: [
                          e.materialObject.userData._thinFilmLayer,
                          "colorNoiseParams",
                        ],
                        onChange: this.setDirty,
                      }),
                    ],
                  };
                return i;
              },
            }),
            (this.setDirty = () => {
              this._viewer?.setDirty();
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(s.k);
          t?.materials?.registerMaterialExtension(this.materialExtension),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(h);
        }
        async onRemove(e) {
          return (
            e
              .getPlugin(s.k)
              ?.materials?.unregisterMaterialExtension(this.materialExtension),
            e
              .getPlugin(s.k)
              ?.importer?.removeEventListener(
                "loaderCreate",
                this._loaderCreate
              ),
            super.onRemove(e)
          );
        }
      };
      function d(e) {
        const t = e?.userData;
        if (!t) return !1;
        t._thinFilmLayer || (t._thinFilmLayer = {});
        const i = t._thinFilmLayer;
        return (
          (i.hasThinFilm = !0),
          void 0 === i.baseLayerFactors &&
            (i.baseLayerFactors = [0.3, 0.6, 1, 0.9]),
          void 0 === i.noiseLayerFactors &&
            (i.noiseLayerFactors = [0.7, 0.5, 0.9, 0.7]),
          void 0 === i.colorNoiseParams &&
            (i.colorNoiseParams = [0.5, 0.5, 0.5, 0.7]),
          void 0 === i.filmFactor && (i.filmFactor = 0.3),
          e.isMaterial && (e.needsUpdate = !0),
          !0
        );
      }
      (u.PluginType = "ThinFilmLayerPlugin"),
        (u.THIN_FILM_LAYER_GLTF_EXTENSION = "WEBGI_materials_thin_film_layer"),
        c(
          [
            (0, o.Q7)("Enabled", (e) => ({ onChange: e.setDirty })),
            (0, n.qC)(),
          ],
          u.prototype,
          "enabled",
          void 0
        ),
        (u = c([(0, o.Sp)("ThinFilmLayer Materials")], u));
      class p {
        constructor(e) {
          (this.parser = e), (this.name = u.THIN_FILM_LAYER_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          const r = i.extensions[this.name];
          return (
            t.userData || (t.userData = {}),
            d(t),
            (t.userData._thinFilmLayer = (0, n.Hx)(
              r,
              t.userData._thinFilmLayer,
              !1,
              {}
            )),
            Promise.resolve()
          );
        }
      }
      const h = (e) => ({
        writeMaterial: (t, i) => {
          if (!t.isMeshStandardMaterial || !t.userData._thinFilmLayer) return;
          if (!t.userData._thinFilmLayer.hasThinFilm) return;
          i.extensions = i.extensions || {};
          const r = (0, n.HD)(t.userData._thinFilmLayer, !1);
          (i.extensions[u.THIN_FILM_LAYER_GLTF_EXTENSION] = r),
            (e.extensionsUsed[u.THIN_FILM_LAYER_GLTF_EXTENSION] = !0);
        },
      });
    },
    2714: function (e, t, i) {
      i.d(t, {
        z: function () {
          return d;
        },
      });
      var r = i(3995),
        a = i(2988),
        s = i(9008),
        n = i(4821),
        o = i(4107),
        l = i(5551),
        c = i(8670),
        u = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let d = class extends r.Q {
        addTriplanarMapping(e) {
          const t = e.materialObject?.userData;
          return (
            !!t &&
            (t._triplanarMapping || (t._triplanarMapping = {}),
            (t._triplanarMapping.enable = !0),
            void 0 === t._triplanarMapping.scaleFactor &&
              (t._triplanarMapping.scaleFactor = 1),
            void 0 === t._triplanarMapping.blendFactor &&
              (t._triplanarMapping.blendFactor = 1),
            void 0 === t._triplanarMapping.offsetFactor &&
              (t._triplanarMapping.offsetFactor = 0),
            (e.materialObject.needsUpdate = !0),
            !0)
          );
        }
        _loaderCreate({ loader: e }) {
          e.isGLTFLoader2 && e.register((e) => new p(e));
        }
        constructor() {
          super(),
            (this.enabled = !0),
            (this.dependencies = [n.k]),
            (this._uniforms = {
              triplanarScale: { value: 1 },
              triplanarBlend: { value: 1 },
              triplanarOffset: { value: 0 },
            }),
            (this.materialExtension = {
              shaderExtender: (e, t, i) => {
                if (
                  !this.enabled ||
                  !t.materialObject.userData?._triplanarMapping?.enable
                )
                  return;
                const r = s.glsl`
                #ifndef USE_TRANSMISSION
                    varying vec3 vWorldPosition;
                #endif
                varying vec3 vWorldNormal;
            `;
                e.vertexShader = (0, c.p)(
                  e.vertexShader,
                  "#include <common>",
                  r,
                  { prepend: !0 }
                );
                const n = s.glsl`
                // same as worldpos_vertex.glsl.js but added a !
                #if !(defined( USE_ENVMAP ) || defined( DISTANCE ) || defined ( USE_SHADOWMAP ) || defined ( USE_TRANSMISSION ) || NUM_SPOT_LIGHT_COORDS > 0)
                vec4 worldPosition = vec4( transformed, 1.0 );
                #ifdef USE_INSTANCING
                worldPosition = instanceMatrix * worldPosition;
                #endif
                worldPosition = modelMatrix * worldPosition;
                #endif
                
                #ifndef USE_TRANSMISSION
                    vWorldPosition = worldPosition.xyz; 
                #endif
                vWorldNormal = normalize((modelMatrix * vec4(objectNormal, 0.)).xyz);
            `;
                e.vertexShader = (0, c.p)(
                  e.vertexShader,
                  "#include <worldpos_vertex>",
                  n,
                  { append: !0 }
                );
                const o = s.glsl`
                ${"struct TriplanarUV{vec2 x;vec2 y;vec2 z;};uniform float triplanarScale;uniform float triplanarBlend;uniform float triplanarOffset;vec3 getTriplanarWeights(in vec3 position,in vec3 normal){vec3 triW=abs(normal);triW=clamp(triW-vec3(triplanarOffset),vec3(0.),vec3(1.));triW=pow(triW,vec3(triplanarBlend));return triW/(triW.x+triW.y+triW.z);}TriplanarUV getTriplanarUV(in vec3 position,in vec3 normal){TriplanarUV triUV;triUV.x=position.zy*triplanarScale;triUV.y=position.xz*triplanarScale;triUV.z=position.xy*triplanarScale;if(normal.x<0.){triUV.x.x=-triUV.x.x;}if(normal.y<0.){triUV.y.x=-triUV.y.x;}if(normal.z>=0.){triUV.z.x=-triUV.z.x;}return triUV;}vec4 textureTriplanar(in sampler2D tex,in vec3 position,in vec3 normal){TriplanarUV triUV=getTriplanarUV(position,normal);vec4 texX=texture2D(tex,triUV.x);vec4 texY=texture2D(tex,triUV.y);vec4 texZ=texture2D(tex,triUV.z);vec3 triW=getTriplanarWeights(position,normal);return texX*triW.x+texY*triW.y+texZ*triW.z;}"}
                #ifndef USE_TRANSMISSION
                    varying vec3 vWorldPosition;
                #endif
                varying vec3 vWorldNormal;
            `;
                e.fragmentShader = (0, c.p)(
                  e.fragmentShader,
                  "#include <common>",
                  o,
                  { prepend: !0 }
                );
                const l = s.glsl`

            #ifdef USE_BUMPMAP

            uniform sampler2D bumpMap;
            uniform float bumpScale;

            // Bump Mapping Unparametrized Surfaces on the GPU by Morten S. Mikkelsen
            // https://mmikk.github.io/papers3d/mm_sfgrad_bump.pdf

            // Evaluate the derivative of the height w.r.t. screen-space using forward differencing (listing 2)

            vec2 dHdxy_fwd() {

                vec3 dSTdx = dFdx( vWorldPosition );
                vec3 dSTdy = dFdy( vWorldPosition );

                vec3 normal_ = normalize(vWorldNormal);
                float Hll = bumpScale * textureTriplanar( bumpMap, vWorldPosition, normal_ ).x;
                float dBx = bumpScale * textureTriplanar( bumpMap, vWorldPosition + dSTdx, normal_ ).x - Hll;
                float dBy = bumpScale * textureTriplanar( bumpMap, vWorldPosition + dSTdy, normal_ ).x - Hll;

                return vec2( dBx, dBy );

            }

            vec3 perturbNormalArb( vec3 surf_pos, vec3 surf_norm, vec2 dHdxy, float faceDirection ) {

                vec3 vSigmaX = dFdx( surf_pos.xyz );
                vec3 vSigmaY = dFdy( surf_pos.xyz );
                vec3 vN = surf_norm; // normalized

                vec3 R1 = cross( vSigmaY, vN );
                vec3 R2 = cross( vN, vSigmaX );

                float fDet = dot( vSigmaX, R1 ) * faceDirection;

                vec3 vGrad = sign( fDet ) * ( dHdxy.x * R1 + dHdxy.y * R2 );
                return normalize( abs( fDet ) * surf_norm - vGrad );

            }

        #endif
            `;
                e.fragmentShader = (0, c.p)(
                  e.fragmentShader,
                  "#include <bumpmap_pars_fragment>",
                  l
                );
                let u = (0, c.p)(
                  a.WdD.map_fragment,
                  "texture2D( map, vMapUv );",
                  "textureTriplanar( map, vWorldPosition, normalize(vWorldNormal) );"
                );
                (e.fragmentShader = (0, c.p)(
                  e.fragmentShader,
                  "#include <map_fragment>",
                  u
                )),
                  (u = (0, c.p)(
                    a.WdD.roughnessmap_fragment,
                    "texture2D( roughnessMap, vRoughnessMapUv );",
                    "textureTriplanar( roughnessMap, vWorldPosition, normalize(vWorldNormal));"
                  )),
                  (e.fragmentShader = (0, c.p)(
                    e.fragmentShader,
                    "#include <roughnessmap_fragment>",
                    u
                  )),
                  (u = (0, c.p)(
                    a.WdD.metalnessmap_fragment,
                    "texture2D( metalnessMap, vMetalnessMapUv );",
                    "textureTriplanar( metalnessMap, vWorldPosition, normalize(vWorldNormal));"
                  )),
                  (e.fragmentShader = (0, c.p)(
                    e.fragmentShader,
                    "#include <metalnessmap_fragment>",
                    u
                  )),
                  (u = (0, c.p)(
                    a.WdD.normal_fragment_maps,
                    "vec3 mapN = texture2D( normalMap, vNormalMapUv ).xyz * 2.0 - 1.0;",
                    "vec3 mapN = textureTriplanar( normalMap, vWorldPosition, normalize(vWorldNormal) ).xyz * 2.0 - 1.0;"
                  )),
                  (e.fragmentShader = (0, c.p)(
                    e.fragmentShader,
                    "#include <normal_fragment_maps>",
                    u
                  )),
                  (e.defines.USE_UV = "");
              },
              onObjectRender: (e, t) => {
                const i = t.materialObject.userData;
                if (!i?._triplanarMapping?.enable) return;
                const r = e;
                r.isMesh &&
                  r.geometry &&
                  ((this._uniforms.triplanarScale.value =
                    i._triplanarMapping?.scaleFactor),
                  (this._uniforms.triplanarBlend.value =
                    i._triplanarMapping?.blendFactor),
                  (this._uniforms.triplanarOffset.value =
                    i._triplanarMapping?.offsetFactor));
              },
              extraUniforms: { ...this._uniforms },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData?._triplanarMapping?.enable
                  ? "1"
                  : "0"),
              isCompatible: (e) => e.isMeshStandardMaterial2,
              updaters: () => [this._viewer?.renderer],
              getUiConfig: (e) => {
                const t = this._viewer,
                  i = this.addTriplanarMapping,
                  r = {
                    type: "folder",
                    label: "Triplanar",
                    children: [
                      {
                        type: "checkbox",
                        label: "Enabled",
                        get value() {
                          return (
                            e.materialObject.userData._triplanarMapping
                              ?.enable || !1
                          );
                        },
                        set value(a) {
                          a !==
                            e.materialObject.userData._triplanarMapping
                              ?.enable &&
                            (a
                              ? i(e) || t.alert("Cannot add Triplanar mapping.")
                              : e.materialObject.userData._triplanarMapping &&
                                ((e.materialObject.userData._triplanarMapping.enable =
                                  !1),
                                (e.materialObject.needsUpdate = !0)),
                            r.uiRefresh?.("postFrame", !0));
                        },
                        onChange: this.setDirty,
                      },
                      () => ({
                        type: "slider",
                        bounds: [0.1, 10],
                        label: "Scale",
                        hidden: () =>
                          !e.materialObject.userData._triplanarMapping?.enable,
                        property: [
                          e.materialObject.userData._triplanarMapping,
                          "scaleFactor",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        bounds: [1, 10],
                        label: "Blend",
                        hidden: () =>
                          !e.materialObject.userData._triplanarMapping?.enable,
                        property: [
                          e.materialObject.userData._triplanarMapping,
                          "blendFactor",
                        ],
                        onChange: this.setDirty,
                      }),
                      () => ({
                        type: "slider",
                        bounds: [0, 0.5],
                        stepSize: 0.01,
                        label: "Offset",
                        hidden: () =>
                          !e.materialObject.userData._triplanarMapping?.enable,
                        property: [
                          e.materialObject.userData._triplanarMapping,
                          "offsetFactor",
                        ],
                        onChange: this.setDirty,
                      }),
                    ],
                  };
                return r;
              },
            }),
            (this.setDirty = () => {
              this.materialExtension.setDirty?.(), this._viewer?.setDirty();
            }),
            (this._loaderCreate = this._loaderCreate.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e);
          const t = e.getPlugin(n.k);
          t?.materials?.registerMaterialExtension(this.materialExtension),
            t?.importer?.addEventListener("loaderCreate", this._loaderCreate),
            t?.exporter?.getExporter("gltf", "glb")?.extensions?.push(h);
        }
        async onRemove(e) {
          return (
            e
              .getPlugin(n.k)
              ?.materials?.unregisterMaterialExtension(this.materialExtension),
            e
              .getPlugin(n.k)
              ?.importer?.removeEventListener(
                "loaderCreate",
                this._loaderCreate
              ),
            super.onRemove(e)
          );
        }
      };
      (d.PluginType = "TriplanarUVMappingPlugin"),
        (d.TRIPLANAR_GLTF_EXTENSION = "WEBGI_materials_triplanar"),
        u(
          [
            (0, l.Q7)("Enabled", (e) => ({ onChange: e.setDirty })),
            (0, o.qC)(),
          ],
          d.prototype,
          "enabled",
          void 0
        ),
        (d = u([(0, l.Sp)("Triplanar Mapping")], d));
      class p {
        constructor(e) {
          (this.parser = e), (this.name = d.TRIPLANAR_GLTF_EXTENSION);
        }
        async extendMaterialParams(e, t) {
          const i = this.parser.json.materials[e];
          if (!i.extensions || !i.extensions[this.name])
            return Promise.resolve();
          const r = i.extensions[this.name];
          t.userData || (t.userData = {});
          const a = t.userData;
          return (
            a._triplanarMapping || (a._triplanarMapping = {}),
            (a._triplanarMapping.enable = !0),
            void 0 === a._triplanarMapping.scaleFactor &&
              (a._triplanarMapping.scaleFactor = 1),
            void 0 === a._triplanarMapping.blendFactor &&
              (a._triplanarMapping.blendFactor = 1),
            void 0 === a._triplanarMapping.offsetFactor &&
              (a._triplanarMapping.offsetFactor = 0),
            (t.userData._triplanarMapping = (0, o.Hx)(
              r,
              t.userData._triplanarMapping,
              !1,
              {}
            )),
            Promise.resolve()
          );
        }
      }
      const h = (e) => ({
        writeMaterial: (t, i) => {
          if (
            !t.isMeshStandardMaterial ||
            !t.userData._triplanarMapping?.enable
          )
            return;
          i.extensions = i.extensions || {};
          const r = (0, o.HD)(t.userData._triplanarMapping, !1);
          (i.extensions[d.TRIPLANAR_GLTF_EXTENSION] = r),
            (e.extensionsUsed[d.TRIPLANAR_GLTF_EXTENSION] = !0);
        },
      });
    },
    5133: function (e, t, i) {
      i.d(t, {
        l: function () {
          return d;
        },
      });
      var r = i(2988),
        a = i(4915),
        s = i(5551),
        n = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let o = class extends a.C {
        constructor(e, t, i) {
          super(e, t, i ?? new l(), new r.Ilk(0, 0, 0), 1),
            (this.enabled = !0),
            (this._firstCall = !0);
        }
        render(e, t, i, r, a) {
          if (!this.enabled || !this.camera) return;
          const s = this.overrideMaterial;
          s.uniforms.currentProjectionViewMatrix.value
            .copy(this.camera.projectionMatrix)
            .multiply(this.camera.matrixWorldInverse),
            this._firstCall &&
              (s.uniforms.lastProjectionViewMatrix.value.copy(
                s.uniforms.currentProjectionViewMatrix.value
              ),
              (this._firstCall = !1)),
            super.render(e, t, i, r, a),
            s.uniforms.lastProjectionViewMatrix.value.copy(
              s.uniforms.currentProjectionViewMatrix.value
            );
        }
      };
      n([(0, s.Q7)("Enabled")], o.prototype, "enabled", void 0),
        (o = n([(0, s.Sp)("Velocity Buffer (TAA)")], o));
      class l extends r.jyz {
        constructor() {
          super({
            vertexShader:
              "#ifdef USE_ALPHAMAP\n#define USE_UV \n#endif\n#include <uv_pars_vertex>\n#include <morphtarget_pars_vertex>\n#include <skinning_pars_vertex>\n#include <logdepthbuf_pars_vertex>\n#include <clipping_planes_pars_vertex>\nvarying vec3 vWorldPosition;varying vec3 vWorldPositionPrevious;uniform mat4 modelMatrixPrevious;void main(){\n#include <uv_vertex>\n#include <skinbase_vertex>\n#include <begin_vertex>\n#include <morphtarget_vertex>\n#include <skinning_vertex>\n#include <displacementmap_vertex>\nvec4 mvPosition=vec4(transformed,1.);\n#ifdef USE_INSTANCING\nmvPosition=instanceMatrix*mvPosition;\n#endif\nvWorldPosition=(modelMatrix*mvPosition).xyz;vWorldPositionPrevious=(modelMatrixPrevious*mvPosition).xyz;mvPosition=modelViewMatrix*mvPosition;gl_Position=projectionMatrix*mvPosition;\n#include <logdepthbuf_vertex>\n#include <clipping_planes_vertex>\n}",
            fragmentShader:
              "varying vec3 vWorldPosition;varying vec3 vWorldPositionPrevious;uniform mat4 currentProjectionViewMatrix;uniform mat4 lastProjectionViewMatrix;vec2 computeScreenSpaceVelocity2(){vec4 currentPositionClip=currentProjectionViewMatrix*vec4(vWorldPosition,1.);vec4 prevPositionClip=lastProjectionViewMatrix*vec4(vWorldPositionPrevious,1.);vec2 currentPositionNDC=currentPositionClip.xy/currentPositionClip.w;vec2 prevPositionNDC=prevPositionClip.xy/prevPositionClip.w;if(prevPositionNDC.x>=1.||prevPositionNDC.x<=-1.||prevPositionNDC.x>=1.||prevPositionNDC.y<=-1.){return vec2(0.);}return 0.5*(currentPositionNDC-prevPositionNDC);}void main(){vec2 velocity=clamp(computeScreenSpaceVelocity2(),-1.,1.);velocity=sign(velocity)*pow(abs(velocity),vec2(1./4.));velocity=velocity*0.5+0.5;gl_FragColor=vec4(velocity.x,velocity.y,1.,1.);}",
            uniforms: {
              cameraNearFar: { value: new r.FM8(0.1, 1e3) },
              alphaMap: { value: null },
              alphaTest: { value: null },
              alphaMapTransform: { value: new r.Vkp() },
              currentProjectionViewMatrix: { value: new r.yGw() },
              lastProjectionViewMatrix: { value: new r.yGw() },
            },
          }),
            (this.extraUniformsToUpload = {
              modelMatrixPrevious: { value: new r.yGw().identity() },
            }),
            (this._previousWorldMatrices = {});
        }
        onBeforeRender(e, t, i, a, s) {
          const n = this._previousWorldMatrices[s.uuid];
          this.extraUniformsToUpload.modelMatrixPrevious.value.copy(
            n ?? s.matrixWorld
          ),
            n
              ? n.copy(s.matrixWorld)
              : (this._previousWorldMatrices[s.uuid] = s.matrixWorld.clone());
          let o = s.material;
          Array.isArray(o) && (o = o[0]),
            (this.uniforms.alphaMap.value = o?.alphaMap ?? null),
            (this.uniforms.alphaTest.value =
              !o || !o.alphaTest || o.alphaTest < 1e-7 ? 0.001 : o.alphaTest);
          let l = this.uniforms.alphaMap.value ? 1 : void 0;
          l !== this.defines.USE_ALPHAMAP &&
            (void 0 === l
              ? delete this.defines.USE_ALPHAMAP
              : (this.defines.USE_ALPHAMAP = l),
            (this.needsUpdate = !0)),
            (l = o.userData.ALPHA_I_RGBA_PACKING ? 1 : void 0),
            l !== this.defines.ALPHA_I_RGBA_PACKING &&
              (void 0 === l
                ? delete this.defines.ALPHA_I_RGBA_PACKING
                : (this.defines.ALPHA_I_RGBA_PACKING = l),
              (this.needsUpdate = !0)),
            (this.side = o.side ?? r.ehD);
        }
      }
      var c = i(4895),
        u = i(6533);
      class d extends c.G {
        passCtor(e) {
          const t = e.renderer.createTarget({ depthBuffer: !0, type: r.ywz });
          (t.texture.name = "velocityBuffer"),
            this._velocityBuffers.push(t),
            e.getPluginByType("debug");
          const i = new Set(),
            a = new Set();
          return new (class extends o {
            render(r, s, n, o, l) {
              if (e.renderer.frameCount > 0) return;
              const c = r.getRenderTarget(),
                d = r.getActiveCubeFace(),
                p = r.getActiveMipmapLevel();
              this.scene?.traverse(({ material: e }) => {
                e &&
                  (((e.transparent && e.userData.renderToDepth) ||
                    (!e.transparent &&
                      0 === e.transmission &&
                      !1 === e.userData.renderToDepth)) &&
                    (i.add(e), (e.transparent = !e.transparent)),
                  Math.abs(e.transmission || 0) > 0 &&
                    e.userData.renderToDepth &&
                    (a.add([e, e.transmission]), (e.transmission = 0)));
              }),
                (0, u.of)(
                  r,
                  {
                    shadowMapRender: !1,
                    backgroundRender: !1,
                    opaqueRender: !0,
                    transparentRender: !1,
                    transmissionRender: !1,
                    mainRenderPass: !1,
                  },
                  () => super.render(r, s, t, o, l)
                ),
                i.forEach((e) => (e.transparent = !e.transparent)),
                i.clear(),
                a.forEach(([e, t]) => (e.transmission = t)),
                a.clear(),
                r.setRenderTarget(c, d, p);
            }
          })();
        }
        _update(e) {
          if (!super._update(e)) return !1;
          if (e.renderer.frameCount > 0) return !1;
          const t = this.pass.passObject;
          return (
            (t.scene = e.scene.modelObject),
            e.scene.renderCamera.updateShaderProperties(t.overrideMaterial),
            (t.camera = e.scene.renderCamera.cameraObject),
            !0
          );
        }
        constructor(e = !0) {
          super(),
            (this.passId = "velocityBuffer"),
            (this._beforeFilters = ["render"]),
            (this._afterFilters = []),
            (this._requiredFilters = ["render"]),
            (this._velocityBuffers = []),
            (this.enabled = e);
        }
        getVelocityBuffer() {
          return this._velocityBuffers.length > 0
            ? this._velocityBuffers[0]
            : void 0;
        }
        async onDispose(e) {}
        async onRemove(e) {
          return (
            this._velocityBuffers.forEach((t) =>
              e.renderer.disposeTarget(t?.dispose?.())
            ),
            super.onRemove(e)
          );
        }
        updateShaderProperties(e) {
          return (
            e.uniforms.tVelocity
              ? (e.uniforms.tVelocity.value = this.enabled
                  ? this.getVelocityBuffer()?.texture ?? null
                  : null)
              : console.warn("BaseRenderer: no uniform: tVelocity"),
            this
          );
        }
        get uiConfig() {
          return this.pass?.passObject.uiConfig;
        }
      }
      d.PluginType = "VelocityBuffer";
    },
    5571: function (e, t, i) {
      i.d(t, {
        _: function () {
          return p;
        },
      });
      var r,
        a = i(5551),
        s = i(4107),
        n = i(9008),
        o = i(8670),
        l = i(3278),
        c = i(5008),
        u = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let d = (r = class {
        constructor(e) {
          (this.enabled = !1),
            (this.aberrationIntensity = 0.01),
            (this.extraUniforms = { aberrationIntensity: { value: 1 } }),
            (this.parsFragmentSnippet = (e, t) =>
              this.enabled
                ? n.glsl`
            uniform float aberrationIntensity;
            ${"vec4 chromaticAberration(){vec2 distFromCenter=vUv-0.5;vec2 aberrated=aberrationIntensity*pow(distFromCenter,vec2(2.));vec4 color=tDiffuseTexelToLinear(texture2D(tDiffuse,vUv));vec4 outColor=vec4(tDiffuseTexelToLinear(texture2D(tDiffuse,vUv+aberrated)).r,color.g,tDiffuseTexelToLinear(texture2D(tDiffuse,vUv-aberrated)).b,color.a);return outColor;}"}
        `
                : ""),
            (this._combinedPostPlugin = e.getPlugin(c.x)),
            (this._setDirty = this._setDirty.bind(this));
        }
        shaderExtender(e, t, i) {
          this.enabled &&
            (e.fragmentShader = (0, o.p)(
              e.fragmentShader,
              "#glMarker",
              " \n            gl_FragColor = chromaticAberration();\n            #glMarker\n        "
            ));
        }
        onObjectRender(e, t, i) {
          this.enabled &&
            (this.extraUniforms.aberrationIntensity.value =
              this.aberrationIntensity);
        }
        getUiConfig() {
          return this.uiConfig;
        }
        computeCacheKey(e) {
          return this.enabled ? "1" : "0";
        }
        isCompatible(e) {
          return !0;
        }
        _setDirty() {
          this._combinedPostPlugin &&
            (this._combinedPostPlugin.pass.dirty = !0);
        }
        setDirty() {
          this.__setDirty?.(), this._setDirty();
        }
      });
      (d.PluginType = "ChromaticAberration"),
        u(
          [
            (0, n.onChange)(r.prototype._setDirty),
            (0, a.Q7)("Enable"),
            (0, s.qC)(),
          ],
          d.prototype,
          "enabled",
          void 0
        ),
        u(
          [
            (0, n.onChange)(r.prototype._setDirty),
            (0, a.t8)("Intensity", [0, 0.1], 0.001, { limitedUi: !0 }),
            (0, s.qC)(),
          ],
          d.prototype,
          "aberrationIntensity",
          void 0
        ),
        (d = r = u([(0, a.Sp)("ChromaticAberration")], d));
      class p extends l.a {
        constructor() {
          super();
        }
        generateExtension(e) {
          return new d(e);
        }
        get intensity() {
          return this._extension?.aberrationIntensity ?? 1;
        }
        set intensity(e) {
          this._extension &&
            ((this._extension.aberrationIntensity = e),
            this._extension.setDirty());
        }
      }
      p.PluginType = "ChromaticAberration";
    },
    7821: function (e, t, i) {
      i.d(t, {
        k: function () {
          return p;
        },
      });
      var r,
        a = i(5551),
        s = i(4107),
        n = i(9008),
        o = i(8670),
        l = i(3278),
        c = i(5008),
        u = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let d = (r = class {
        constructor(e) {
          (this.enabled = !1),
            (this.grainMultiply = !1),
            (this.grainIntensity = 10),
            (this.extraUniforms = {
              grainIntensity: { value: 1 },
              grainMultiply: { value: 1 },
            }),
            (this.parsFragmentSnippet = (e, t) =>
              this.enabled
                ? n.glsl`
            uniform float grainIntensity;
            uniform bool grainMultiply;
            ${"vec4 grain(in vec4 color){float x=(vUv.x+4.)*(vUv.y+4.)*(10.);vec4 grain=vec4(mod((mod(x,13.)+1.)*(mod(x,123.)+1.),0.01)-0.005)*grainIntensity;vec4 outColor=color;if(grainMultiply){grain=1.-grain;outColor.rgb=color.rgb*vec3(grain);}else{outColor.rgb=color.rgb+vec3(grain);}return outColor;}"}
        `
                : ""),
            (this._combinedPostPlugin = e.getPlugin(c.x)),
            (this._setDirty = this._setDirty.bind(this));
        }
        shaderExtender(e, t, i) {
          this.enabled &&
            (e.fragmentShader = (0, o.p)(
              e.fragmentShader,
              "#glMarker",
              " \n            gl_FragColor = grain(gl_FragColor);\n            #glMarker\n        "
            ));
        }
        onObjectRender(e, t, i) {
          this.enabled &&
            ((this.extraUniforms.grainIntensity.value = this.grainIntensity),
            (this.extraUniforms.grainMultiply.value = this.grainMultiply));
        }
        getUiConfig() {
          return this.uiConfig;
        }
        computeCacheKey(e) {
          return this.enabled ? "1" : "0";
        }
        isCompatible(e) {
          return !0;
        }
        _setDirty() {
          this._combinedPostPlugin &&
            (this._combinedPostPlugin.pass.dirty = !0);
        }
        setDirty() {
          this.__setDirty?.(), this._setDirty();
        }
      });
      u(
        [
          (0, n.onChange)(r.prototype._setDirty),
          (0, a.Q7)("Enable"),
          (0, s.qC)(),
        ],
        d.prototype,
        "enabled",
        void 0
      ),
        u(
          [
            (0, n.onChange)(r.prototype._setDirty),
            (0, a.Q7)("Multiply"),
            (0, s.qC)(),
          ],
          d.prototype,
          "grainMultiply",
          void 0
        ),
        u(
          [
            (0, n.onChange)(r.prototype._setDirty),
            (0, a.t8)("Intensity", [0, 20], 0.01, { limitedUi: !0 }),
            (0, s.qC)(),
          ],
          d.prototype,
          "grainIntensity",
          void 0
        ),
        (d = r = u([(0, a.Sp)("FilmicGrain")], d));
      class p extends l.a {
        constructor() {
          super();
        }
        generateExtension(e) {
          return new d(e);
        }
        get intensity() {
          return this._extension?.grainIntensity ?? 1;
        }
        set intensity(e) {
          this._extension &&
            ((this._extension.grainIntensity = e), this._extension.setDirty());
        }
        get multiply() {
          return this._extension?.grainMultiply ?? !1;
        }
        set multiply(e) {
          this._extension &&
            ((this._extension.grainMultiply = e), this._extension.setDirty());
        }
      }
      p.PluginType = "FilmicGrain";
    },
    1755: function (e, t, i) {
      i.d(t, {
        v: function () {
          return _;
        },
      });
      var r,
        a = i(2988),
        s = i(5551),
        n = i(4107),
        o = i(9008),
        l = i(8670),
        c = i(3278),
        u = i(5008),
        d = i(9354),
        p = i(6757),
        h = i(4821),
        m = i(8570),
        f = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let g = (r = class {
        constructor(e) {
          (this.enabled = !1),
            (this.lutBackground = !0),
            (this.intensity = 1),
            (this.lutMap = void 0),
            (this.lutMap1 = void 0),
            (this.lutMap2 = void 0),
            (this.extraUniforms = {
              intensity: { value: 1 },
              lutSize: { value: 1 },
              lutSize1: { value: 1 },
              lutSize2: { value: 1 },
              lut3d: { value: null },
              lut3d1: { value: null },
              lut3d2: { value: null },
              lut2d: { value: null },
              lut2d1: { value: null },
              lut2d2: { value: null },
            }),
            (this.extraDefines = {
              USE_LUT: 0,
              USE_LUT1: 0,
              USE_LUT2: 0,
              USE_3DTEXTURE: 0,
              LUT_BACKGROUND: 0,
            }),
            (this.parsFragmentSnippet = (e, t) =>
              this.enabled
                ? "#if (USE_LUT == 1 || USE_LUT1 == 1 || USE_LUT2 == 1)\nuniform float lutSize;uniform float lutSize1;uniform float lutSize2;uniform float intensity;\n#if USE_3DTEXTURE == 1\nprecision highp sampler3D;\n#if USE_LUT == 1\nuniform sampler3D lut3d;\n#endif\n#if USE_LUT1 == 1\nuniform sampler3D lut3d1;\n#endif\n#if USE_LUT2 == 1\nuniform sampler3D lut3d2;\n#endif\n#else\n#if USE_LUT == 1\nuniform sampler2D lut2d;\n#endif\n#if USE_LUT1 == 1\nuniform sampler2D lut2d1;\n#endif\n#if USE_LUT2 == 1\nuniform sampler2D lut2d2;\n#endif\nvec3 lutLookup(sampler2D tex,float size,vec3 rgb){float sliceHeight=1./size;float yPixelHeight=1./(size*size);float slice=rgb.b*size;float interp=fract(slice);float slice0=slice-interp;float centeredInterp=interp-0.5;float slice1=slice0+sign(centeredInterp);float greenOffset=clamp(rgb.g*sliceHeight,yPixelHeight*0.5,sliceHeight-yPixelHeight*0.5);vec2 uv0=vec2(rgb.r,slice0*sliceHeight+greenOffset);vec2 uv1=vec2(rgb.r,slice1*sliceHeight+greenOffset);vec3 sample0=texture2D(tex,uv0).rgb;vec3 sample1=texture2D(tex,uv1).rgb;return mix(sample0,sample1,abs(centeredInterp));}\n#endif\nint getLUTBit(in int number){\n#ifdef WebGL2Context\nreturn number%2;\n#else\nreturn int(mod(float(number),2.));\n#endif\n}int getLUTIndex(in int number){\n#ifdef WebGL2Context\nreturn number%8;\n#else\nreturn int(mod(float(number),8.));\n#endif\n}vec3 getUVW(in float lutSize,in vec4 color){float pixelWidth=1./lutSize;float halfPixelWidth=0.5/lutSize;vec3 uvw=vec3(halfPixelWidth)+color.rgb*(1.-pixelWidth);return uvw;}vec4 colorLookUp(in vec4 color){vec4 outColor;float lutFac=float(getLUTBit(getGBufferFlags(vUv).a));float lutIndex=float(getLUTIndex(getGBufferFlags(vUv).g));\n#if USE_3DTEXTURE == 1\nif(lutIndex==0.){\n#if USE_LUT == 1\noutColor=vec4(texture(lut3d,getUVW(lutSize,color)).rgb,color.a);\n#endif\n}else if(lutIndex==1.){\n#if USE_LUT1 == 1\noutColor=vec4(texture(lut3d1,getUVW(lutSize1,color)).rgb,color.a);\n#endif\n}else if(lutIndex==2.){\n#if USE_LUT2 == 1\noutColor=vec4(texture(lut3d2,getUVW(lutSize2,color)).rgb,color.a);\n#endif\n}else{\n#if USE_LUT == 1\noutColor=vec4(texture(lut3d,getUVW(lutSize,color)).rgb,color.a);\n#endif\n}\n#else\nif(lutIndex==0.){outColor=vec4(lutLookup(lut2d,lutSize,getUVW(lutSize,color)),color.a);}else if(lutIndex==1.){\n#if USE_LUT1 == 1\noutColor=vec4(lutLookup(lut2d1,lutSize,getUVW(lutSize1,color)),color.a);\n#endif\n}else if(lutIndex==2.){\n#if USE_LUT2 == 1\noutColor=vec4(lutLookup(lut2d2,lutSize,getUVW(lutSize2,color)),color.a);\n#endif\n}else{outColor=vec4(lutLookup(lut2d,lutSize,getUVW(lutSize,color)),color.a);}\n#endif\noutColor=mix(color,outColor,lutFac);return vec4(mix(color,outColor,intensity));}\n#endif\n"
                : ""),
            (this._viewer = e),
            (this._combinedPostPlugin = e.getPlugin(u.x)),
            (this._setDirty = this._setDirty.bind(this)),
            (this.setDirty = this.setDirty.bind(this));
        }
        _updateParams() {
          if (!this.enabled) return;
          const e = this._viewer.renderer.rendererObject.capabilities.isWebGL2
            ? 1
            : 0;
          let t = e ? this.extraUniforms.lut3d : this.extraUniforms.lut2d;
          this._updateLUTMap(this.lutMap, t, this.extraUniforms.lutSize, e),
            (this.extraDefines.USE_LUT = this.lutMap ? 1 : 0),
            (t = e ? this.extraUniforms.lut3d1 : this.extraUniforms.lut2d1),
            this._updateLUTMap(this.lutMap1, t, this.extraUniforms.lutSize1, e),
            (this.extraDefines.USE_LUT1 = this.lutMap1 ? 1 : 0),
            (t = e ? this.extraUniforms.lut3d2 : this.extraUniforms.lut2d2),
            this._updateLUTMap(this.lutMap2, t, this.extraUniforms.lutSize2, e),
            (this.extraDefines.USE_LUT2 = this.lutMap2 ? 1 : 0),
            (this.extraUniforms.intensity.value = this.intensity),
            (this.extraDefines.LUT_BACKGROUND = this.lutBackground ? 1 : 0),
            (this.extraDefines.USE_3DTEXTURE = e),
            this._setDirty();
        }
        _updateLUTMap(e, t, i, r) {
          if (e) {
            let a = 1;
            1 == r
              ? ((t.value = e.texture3D), (a = e.texture3D.image.width))
              : e.texture &&
                ((t.value = e.texture), (a = e.texture.image.width)),
              (t.value.needsUpdate = !0),
              (i.value = a);
          }
        }
        shaderExtender(e, t, i) {
          this.enabled &&
            (e.fragmentShader = (0, l.p)(
              e.fragmentShader,
              "#glMarker",
              " \n            #if USE_LUT == 1\n                bool isBackground = getDepth(vUv)>0.9999;\n                #if LUT_BACKGROUND == 1\n                    gl_FragColor = colorLookUp(gl_FragColor);\n                #else\n                    gl_FragColor = isBackground ? gl_FragColor : colorLookUp(gl_FragColor);\n                #endif\n            #endif\n            #glMarker\n        "
            ));
        }
        computeCacheKey(e) {
          return this.enabled ? "1" : "0";
        }
        isCompatible(e) {
          return !0;
        }
        _setDirty() {
          this.__setDirty?.(),
            this._combinedPostPlugin &&
              (this._combinedPostPlugin.pass.dirty = !0);
        }
        setDirty() {
          this._setDirty();
        }
      });
      function v(e) {
        const t = e?.userData;
        if (!t) return !1;
        t[_.PluginType] || (t[_.PluginType] = {});
        const i = t[_.PluginType];
        return (
          (i.enable = !0),
          void 0 === i.index && (i.index = 0),
          e.isMaterial && (e.needsUpdate = !0),
          !0
        );
      }
      f(
        [
          (0, n.qC)(),
          (0, o.onChange)(r.prototype._updateParams),
          (0, s.Q7)("Enable"),
        ],
        g.prototype,
        "enabled",
        void 0
      ),
        f(
          [
            (0, n.qC)(),
            (0, o.onChange)(r.prototype._updateParams),
            (0, s.Q7)("LUT Background"),
          ],
          g.prototype,
          "lutBackground",
          void 0
        ),
        f(
          [
            (0, n.qC)(),
            (0, o.onChange)(r.prototype._updateParams),
            (0, s.t8)("Intensity"),
          ],
          g.prototype,
          "intensity",
          void 0
        ),
        f(
          [
            (0, o.onChange)(r.prototype._updateParams),
            (0, s.w8)("LUT"),
            (0, n.qC)(),
          ],
          g.prototype,
          "lutMap",
          void 0
        ),
        f(
          [
            (0, o.onChange)(r.prototype._updateParams),
            (0, s.w8)("LUT1"),
            (0, n.qC)(),
          ],
          g.prototype,
          "lutMap1",
          void 0
        ),
        f(
          [
            (0, o.onChange)(r.prototype._updateParams),
            (0, s.w8)("LUT2"),
            (0, n.qC)(),
          ],
          g.prototype,
          "lutMap2",
          void 0
        ),
        (g = r = f([(0, s.Sp)("LUT")], g));
      class _ extends c.a {
        _getUiConfig(e) {
          const t = {
            type: "folder",
            label: "LUT",
            children: [
              {
                type: "checkbox",
                label: "Enabled",
                get value() {
                  return e.materialObject.userData[_.PluginType]?.enable ?? !0;
                },
                set value(i) {
                  const r = e.materialObject.userData[_.PluginType];
                  i !== r?.enable &&
                    (r || v(e.materialObject),
                    (e.materialObject.userData[_.PluginType].enable = i),
                    t.uiRefresh?.("postFrame", !0));
                },
                onChange: this._extension?.setDirty,
              },
              {
                type: "dropdown",
                children: [
                  ["LUT 0", 0],
                  ["LUT 1", 1],
                  ["LUT 2", 2],
                ].map((e) => ({ label: e[0], value: e[1] })),
                label: "index",
                hidden: () => {
                  const t = e.materialObject.userData[_.PluginType];
                  return !!t && !t.enable;
                },
                get value() {
                  return e.materialObject.userData[_.PluginType]?.index ?? 0;
                },
                set value(i) {
                  e.materialObject.userData[_.PluginType] ||
                    v(e.materialObject),
                    (e.materialObject.userData[_.PluginType].index = i),
                    t.uiRefresh?.("postFrame", !0);
                },
                onChange: this._extension?.setDirty,
              },
            ],
          };
          return t;
        }
        constructor() {
          super(),
            (this.materialExtension = {
              uuid: (0, m.Z)(),
              getUiConfig: (e) => {
                if (
                  (e.__uiConfigs || (e.__uiConfigs = {}),
                  e.__uiConfigs[this.materialExtension.uuid])
                )
                  return e.__uiConfigs[this.materialExtension.uuid];
                const t = this._getUiConfig(e);
                return (e.__uiConfigs[this.materialExtension.uuid] = t), t;
              },
              computeCacheKey: (e) =>
                (this.enabled ? "1" : "0") +
                (e.materialObject.userData[_.PluginType]?.enable ? "1" : "0"),
              isCompatible: (e) => !0,
            }),
            (this.updateGBuffer = this.updateGBuffer.bind(this));
        }
        async onAdded(e) {
          await super.onAdded(e),
            e.getPlugin(p.m)?.registerGBufferUpdater(this.updateGBuffer);
          const t = e.getPlugin(h.k);
          t?.materials?.registerMaterialExtension(this.materialExtension);
        }
        generateExtension(e) {
          return new g(e);
        }
        updateGBuffer(e, t) {
          if (e instanceof a.Kj0 && e.material?.userData) {
            const i = e.material?.userData[_.PluginType];
            if (i) {
              const e = !1 === i.enable ? 0 : 1;
              t.w = (0, d.s)(t.w, 0, e);
              for (let e = 0; e < 3; e++) t.y = (0, d.o)(t.y, e);
              let r = i.enable ? i.index : 0;
              (r = Math.min(r, 7)), (t.y = t.y | r);
            } else t.w = (0, d.s)(t.w, 0, 1);
          }
        }
      }
      _.PluginType = "LUTPlugin1";
    },
    9483: function (e, t, i) {
      i.d(t, {
        Q: function () {
          return h;
        },
      });
      var r,
        a = i(2988),
        s = i(5551),
        n = i(4107),
        o = i(9008),
        l = i(8670),
        c = i(3278),
        u = i(5008),
        d = function (e, t, i, r) {
          var a,
            s = arguments.length,
            n =
              s < 3
                ? t
                : null === r
                ? (r = Object.getOwnPropertyDescriptor(t, i))
                : r;
          if (
            "object" == typeof Reflect &&
            "function" == typeof Reflect.decorate
          )
            n = Reflect.decorate(e, t, i, r);
          else
            for (var o = e.length - 1; o >= 0; o--)
              (a = e[o]) &&
                (n = (s < 3 ? a(n) : s > 3 ? a(t, i, n) : a(t, i)) || n);
          return s > 3 && n && Object.defineProperty(t, i, n), n;
        };
      let p = (r = class {
        constructor(e) {
          (this.enabled = !1),
            (this.power = 0.5),
            (this.bgcolor = new a.Ilk(0)),
            (this.extraUniforms = {
              power: { value: 0.5 },
              bgcolor: { value: new a.Ilk() },
            }),
            (this.parsFragmentSnippet = (e, t) =>
              this.enabled
                ? o.glsl`
            uniform float power;
            uniform vec3 bgcolor;
            ${"vec4 Vignette(in vec4 color){vec2 uv=vUv*(1.-vUv);float vig=uv.x*uv.y*16.;vig=pow(vig,power);return vec4(mix(color.rgb,vec3(bgcolor),1.-vig),color.a);}"}
        `
                : ""),
            (this._combinedPostPlugin = e.getPlugin(u.x)),
            (this._setDirty = this._setDirty.bind(this));
        }
        shaderExtender(e, t, i) {
          this.enabled &&
            (e.fragmentShader = (0, l.p)(
              e.fragmentShader,
              "#glMarker",
              " \n            gl_FragColor = Vignette(gl_FragColor);\n            #glMarker\n        "
            ));
        }
        onObjectRender(e, t, i) {
          this.enabled &&
            ((this.extraUniforms.power.value = this.power),
            this.extraUniforms.bgcolor.value.copy(this.bgcolor));
        }
        getUiConfig() {
          return this.uiConfig;
        }
        computeCacheKey(e) {
          return this.enabled ? "1" : "0";
        }
        isCompatible(e) {
          return !0;
        }
        _setDirty() {
          this._combinedPostPlugin &&
            (this._combinedPostPlugin.pass.dirty = !0);
        }
        setDirty() {
          this.__setDirty?.(), this._setDirty();
        }
      });
      (p.PluginType = "Vignette"),
        d(
          [
            (0, o.onChange)(r.prototype._setDirty),
            (0, s.Q7)("Enable"),
            (0, n.qC)(),
          ],
          p.prototype,
          "enabled",
          void 0
        ),
        d(
          [
            (0, o.onChange)(r.prototype._setDirty),
            (0, s.t8)("Power", [0.1, 4], 0.01, { limitedUi: !0 }),
            (0, n.qC)(),
          ],
          p.prototype,
          "power",
          void 0
        ),
        d(
          [
            (0, o.onChange)(r.prototype._setDirty),
            (0, s.s4)("Color"),
            (0, n.qC)(),
          ],
          p.prototype,
          "bgcolor",
          void 0
        ),
        (p = r = d([(0, s.Sp)("Vignette")], p));
      class h extends c.a {
        constructor() {
          super();
        }
        generateExtension(e) {
          return new p(e);
        }
        get power() {
          return this._extension?.power ?? 1;
        }
        set power(e) {
          this._extension &&
            ((this._extension.power = e), this._extension.setDirty());
        }
        get color() {
          return this._extension?.bgcolor ?? new a.Ilk();
        }
        set color(e) {
          this._extension &&
            (this._extension.bgcolor.set(e), this._extension.setDirty());
        }
      }
      h.PluginType = "Vignette";
    },
  },
]);
