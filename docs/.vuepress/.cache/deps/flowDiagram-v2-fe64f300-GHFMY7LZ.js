import {
  flowRendererV2,
  flowStyles
} from "./chunk-MD36MF7V.js";
import "./chunk-BC3ALYWW.js";
import {
  flowDb,
  parser$1
} from "./chunk-WL4G3JPG.js";
import "./chunk-AGA73GYY.js";
import "./chunk-EWMUUL64.js";
import "./chunk-TVGOTRPD.js";
import "./chunk-77PAL7S4.js";
import "./chunk-6PG4LGA7.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-XRVZFYA5.js";
import {
  __toESM
} from "./chunk-HM4MQYWN.js";

// node_modules/mermaid/dist/flowDiagram-v2-fe64f300.js
var import_dayjs = __toESM(require_dayjs_min(), 1);
var import_sanitize_url = __toESM(require_dist(), 1);
var diagram = {
  parser: parser$1,
  db: flowDb,
  renderer: flowRendererV2,
  styles: flowStyles,
  init: (cnf) => {
    if (!cnf.flowchart) {
      cnf.flowchart = {};
    }
    cnf.flowchart.arrowMarkerAbsolute = cnf.arrowMarkerAbsolute;
    setConfig({ flowchart: { arrowMarkerAbsolute: cnf.arrowMarkerAbsolute } });
    flowRendererV2.setConf(cnf.flowchart);
    flowDb.clear();
    flowDb.setGen("gen-2");
  }
};
export {
  diagram
};
//# sourceMappingURL=flowDiagram-v2-fe64f300-GHFMY7LZ.js.map
