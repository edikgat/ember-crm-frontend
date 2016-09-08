import DS from 'ember-data';

export default DS.Store.extend({

  adapterFor: function (modelOrClass) {

    if(Boolean(window.modelForAdapter)) {
      modelOrClass = window.modelForAdapter;
    }

    var modelName;

    if (typeof modelOrClass === 'string') {
      modelName = modelOrClass;
    } else {
      modelName = modelOrClass.modelName;
    }

    return this.lookupAdapter(modelName);
  },


});
