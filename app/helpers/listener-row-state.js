import Ember from 'ember';

export function listenerRowState(params/*, hash*/) {
  var downConditions = ["Stopped","Down","Slave, Down"];
  var warningConditions = ["In Development", "Alpha", "Beta"];
  if (downConditions.contains(params.toString()))  {
    return "negative";
  } else if (warningConditions.contains(params.toString())){
    return "warning";
  } else {
    return "";
  }

}

export default Ember.Helper.helper(listenerRowState);
