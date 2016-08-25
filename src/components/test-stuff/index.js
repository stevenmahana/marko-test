var apps = require('src/api/src/apps');

module.exports = require('marko-widgets').defineComponent({
    template: require('./template.marko'),

    getTemplateData: function(state, input) {

        console.log(input);
        return {
            species: input.species
        }
    }
});
