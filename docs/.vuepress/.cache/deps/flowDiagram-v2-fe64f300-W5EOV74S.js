import {
  flowRendererV2,
  flowStyles
} from "./chunk-D2GTDTX4.js";
import "./chunk-JRFXGSGF.js";
import {
  flowDb,
  parser$1
} from "./chunk-3FJW7Y7F.js";
import "./chunk-TRUQW5GO.js";
import "./chunk-QVGZDHFH.js";
import "./chunk-J3TNDNUO.js";
import "./chunk-6QBB2GMU.js";
import "./chunk-627GYWEK.js";
import {
  require_dayjs_min,
  require_dist,
  setConfig
} from "./chunk-MSSJYOW3.js";
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
//# sourceMappingURL=flowDiagram-v2-fe64f300-W5EOV74S.js.map
