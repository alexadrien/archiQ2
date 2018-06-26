// @flow
import request from 'superagent';

/**
 * Requests a URL, returning a promise
 *
 * @param  {string} url       The URL we want to request
 * @param  {object} [options] The options we want to pass to "fetch"
 *
 * @return {object}           The response data
 */
export const postRequest = (url: string, options
? : Object
):
Promise < any >
=>
request
  .post(url)
  .send(options)
  .set('Accept', 'application/json')
  .set('Content-Type', 'application/json')
  .set('Ocp-Apim-Subscription-Key', '886fb27a3e9544698fc53fcead1e067a');
