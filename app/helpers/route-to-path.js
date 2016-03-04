import Ember from 'ember';

export function routeToPath(params) {
  let newPath = '/' + params[0].replace(/\./g, '/');
  return newPath;
}

export default Ember.Helper.helper(routeToPath);
