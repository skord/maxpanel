import Ember from 'ember';

export function cellstate(params/*, hash*/) {
  var downConditions = ["Stopped","Down"];
  var upConditions = ["Running", "Slave, Running", "Master, Running","GA"];
  var warningConditions = ["In Development", "Alpha", "Beta"];
  if (downConditions.contains(params.toString()))  {
    return "negative";
  } else if (upConditions.contains(params.toString())) {
    return "positive";
  } else if (warningConditions.contains(params.toString())){
    return "warning";
  } else {
    return "";
  }
}

export default Ember.Helper.helper(cellstate);
