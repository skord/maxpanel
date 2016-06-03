import Ember from 'ember';
// import defaultTheme from '../themes/default-theme';

export default Ember.Controller.extend({
    chartOptions: Ember.computed('model', function(){
      return {
        chart: {
          type: "column"
        },
        title: {
          text: "Events"
        },
        xAxis: {
          categories: this.get('model').mapBy('duration')
        },
        yAxis: {
          title: {
            text: 'Event Count'
          }
        }
      }
    }),

    chartData: Ember.computed('model.@each.queued', function() {
      return (
        [{
          name: 'Queued',
          data: this.get('model').mapBy('queued').map(function(i){return +i;})
        }, {
          name: 'Executed',
          data: this.get('model').mapBy('executed').map(function(i){return +i;})
        }]
    )
  })

});
