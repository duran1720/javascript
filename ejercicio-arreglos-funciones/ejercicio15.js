function votingSimulation() {
  let candidate1Votes = 0;
  let candidate2Votes = 0;
  let candidate3Votes = 0;
  let blankVotes = 0;
  let totalVotes = 0;
  const totalVoters = 50;
  let votingFinished = false;

  while (totalVotes < totalVoters && !votingFinished) {
    let option = prompt(`MENU ELECCIONES 2025\n1. Candidato Uno\n2. Candidato Dos\n3. Candidato Tres\n4. Blanco\n5. Cerrar elecciones\nIngrese Opción (1-5):`);

    switch (option) {
      case "1":
        candidate1Votes++;
        totalVotes++;
        break;
      case "2":
        candidate2Votes++;
        totalVotes++;
        break;
      case "3":
        candidate3Votes++;
        totalVotes++;
        break;
      case "4":
        blankVotes++;
        totalVotes++;
        break;
      case "5":
        let clave = prompt("Ingrese la clave para cerrar las elecciones:");
        if (clave === "your_secret_key") { 
          votingFinished = true;
        } else {
          alert("Clave incorrecta. La votación continúa.");
        }
        break;
      default:
        alert("Opción inválida. Intente de nuevo.");
    }

    if (option !== "5" && option >= "1" && option <= "4") {
      alert(`Voto registrado. Votos restantes: ${totalVoters - totalVotes}`);
    }
  }

  console.log("--- Resultados de las Elecciones ---");
  console.log("Número de personas que votaron:", totalVotes);
  console.log("Votos por Candidato Uno:", candidate1Votes);
  console.log("Votos por Candidato Dos:", candidate2Votes);
  console.log("Votos por Candidato Tres:", candidate3Votes);
  console.log("Votos en Blanco:", blankVotes);
}


votingSimulation();