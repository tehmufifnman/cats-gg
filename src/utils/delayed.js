import delay from "./delay";
import map from "./map";

export default delaySeconds => map(async item => await delay(delaySeconds) || item);
