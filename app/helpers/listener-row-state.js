import Ember from 'ember';

export function listenerRowState(params/*, hash*/) {
  var downConditions = ["Stopped","Down"];
  var warningConditions = ["In Development", "Alpha", "Beta"];
  if (downConditions.contains(params.toString()))  {
    return "row red lighten-5";
  } else if (warningConditions.contains(params.toString())){
    return "row yellow lighten-5";
  } else {
    return "cell";
  }

}

export default Ember.Helper.helper(listenerRowState);
