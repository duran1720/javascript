function maximizeZ() {
  let bestX = 0;
  let bestY = 0;
  let bestZ = -Infinity;

  for (let i = 0; i < 100; i++) {
    let x = Math.floor(Math.random() * 11) - 5; 
    let y = Math.floor(Math.random() * 11) - 5; 
    let z = x * x + y * y;

    if (z > bestZ) {
      bestZ = z;
      bestX = x;
      bestY = y;
    }
  }

  console.log("Best X:", bestX);
  console.log("Best Y:", bestY);
  console.log("Best Z:", bestZ);
}

maximizeZ();