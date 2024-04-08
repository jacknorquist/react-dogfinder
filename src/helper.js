'use strict';

async function makeFetch() {

  const result = await fetch('localhost:5001/dogs');
  const dogs = await result.json();

  return dogs;

}

export default makeFetch;