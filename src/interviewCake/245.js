const ids = [1, 2, 3, 4, 3, 2, 1, 5, 4];

function findUniqueId (ids) {
  let idHolder = {};

  ids.map(id => {
    if (idHolder[id]) {
      idHolder[id] ++;
    } else {
      idHolder[id] = 1;
    }
  });

  for (id in idHolder) {
    if (idHolder[id] === 1) {
      return id;
    }
  }  
}

function findUniqueIdWithBitwiseOperator (ids) {
  let uniqueDeliveryId = 0;

  ids.map(id => {
    uniqueDeliveryId = uniqueDeliveryId ^ id;
  });

  return uniqueDeliveryId;
}