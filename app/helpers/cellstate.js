import Ember from 'ember';

export function cellstate(params/*, hash*/) {
  var downConditions = ["Stopped","Down"];
  var upConditions = ["Running", "Master, Running","GA"];
  var warningConditions = ["In Development", "Alpha"];
  if (downConditions.contains(params.toString()))  {
    return "cell negative";
  } else if (upConditions.contains(params.toString())) {
    return "cell positive";
  } else if (warningConditions.contains(params.toString())){
    return "cell warning";
  } else {
    return "cell";
  }
}

export default Ember.Helper.helper(cellstate);
