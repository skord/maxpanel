import Ember from 'ember';

export function cellstate(params/*, hash*/) {
  var downConditions = ["Stopped","Down"];
  var upConditions = ["Running", "Master, Running","GA"];
  var warningConditions = ["In Development", "Alpha", "Beta"];
  if (downConditions.contains(params.toString()))  {
    return "cell red-lighten-5";
  } else if (upConditions.contains(params.toString())) {
    return "cell green lighten-5";
  } else if (warningConditions.contains(params.toString())){
    return "cell yellow lighten-5";
  } else {
    return "cell";
  }
}

export default Ember.Helper.helper(cellstate);
