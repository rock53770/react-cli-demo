import React from "react";
import baseLoadable from '@loadable/component'
function loadable(func) {
  return baseLoadable(func, { fallback: <div>Loading</div>})
}
export default loadable
