/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

function hasProperty(object, key) {
  return object ? hasOwnProperty.call(object, key) : false;
}

function APIRequest(object) {
  let URL = `${object.domainURL}/steam/${object.method}/`;

  if (hasProperty(object, 'id')) {
    URL += `${object.id}`;
  }

  if (hasProperty(object, 'appid')) {
    URL += `${object.appid}`;
  }

  if (hasProperty(object, 'query')) {
    if (object.query !== false) {
      URL += `${object.query}`;
    }
  }

  console.log('URL', URL);
  return fetch(URL)
    .then((res) => {
      if (!res.ok) {
        throw new Error(`HTTP error! Status: ${res.status}`);
      }
      return res.json();
    })
    .then((data) => data);
}

module.exports = (object) => new APIRequest(object);