import Ember from 'ember';

export function listenerRowState(params/*, hash*/) {
  var downConditions = ["Stopped","Down"]
  var warningConditions = ["In Development", "Alpha"]
  if (downConditions.contains(params.toString()))  {
    return "row negative"
  } else if (warningConditions.contains(params.toString())){
    return "row warning"
  } else {
    return "cell"
  }

}

export default Ember.Helper.helper(listenerRowState);
