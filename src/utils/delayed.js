import delay from "./delay";
import map from "./map";

export default delaySeconds => map(function* (item) {
  yield delay(delaySeconds) || item;
});
