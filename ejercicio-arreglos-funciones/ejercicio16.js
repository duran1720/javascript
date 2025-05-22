function bankAccountSimulation() {
  let accounts = [];
  let accountCounter = 1;

  function createAccount() {
    const currentYear = new Date().getFullYear();
    const accountCode = `${currentYear}-${accountCounter}`;
    accountCounter++;
    const creationDate = new Date();
    const balance = 0;

    const account = {
      code: accountCode,
      creationDate: creationDate,
      balance: balance
    };

    accounts.push(account);
    console.log(`Cuenta creada con código: ${accountCode}`);
    return account;
  }

  function deposit(accountCode, amount) {
    const account = accounts.find(acc => acc.code === accountCode);
    if (account) {
      account.balance += amount;
      console.log(`Se depositaron ${amount} en la cuenta ${accountCode}. Nuevo saldo: ${account.balance}`);
    } else {
      console.log(`No se encontró la cuenta con código ${accountCode}`);
    }
  }

  function withdraw(accountCode, amount) {
    const account = accounts.find(acc => acc.code === accountCode);
    if (account) {
      if (account.balance >= amount) {
        account.balance -= amount;
        console.log(`Se retiraron ${amount} de la cuenta ${accountCode}. Nuevo saldo: ${account.balance}`);
      } else {
        console.log(`Saldo insuficiente en la cuenta ${accountCode}`);
      }
    } else {
      console.log(`No se encontró la cuenta con código ${accountCode}`);
    }
  }

  function consultAccount(accountCode) {
    const account = accounts.find(acc => acc.code === accountCode);
    if (account) {
      console.log("--- Datos de la cuenta ---");
      console.log("Código:", account.code);
      console.log("Fecha de creación:", account.creationDate);
      console.log("Saldo:", account.balance);
    } else {
      console.log(`No se encontró la cuenta con código ${accountCode}`);
    }
  }

  function listAccounts() {
    if (accounts.length === 0) {
      console.log("No hay cuentas registradas.");
      return;
    }
    console.log("--- Listado de Cuentas ---");
    accounts.forEach(account => {
      console.log(`Código: ${account.code}, Saldo: ${account.balance}`);
    });
  }

  // Menu
  while (true) {
    let option = prompt(`MENÚ BANCO ADSO\n1. Crear Cuenta\n2. Consignar Cuenta\n3. Retirar Cuenta\n4. Consultar Cuenta Por Código\n6. Listar Cuentas\n7. Salir\nIngrese Opción (1-7):`);

    switch (option) {
      case "1":
        createAccount();
        break;
      case "2":
        const depositAccountCode = prompt("Ingrese el código de la cuenta para depositar:");
        const depositAmount = parseFloat(prompt("Ingrese el monto a depositar:"));
        deposit(depositAccountCode, depositAmount);
        break;
      case "3":
        const withdrawAccountCode = prompt("Ingrese el código de la cuenta para retirar:");
        const withdrawAmount = parseFloat(prompt("Ingrese el monto a retirar:"));
        withdraw(withdrawAccountCode, withdrawAmount);
        break;
      case "4":
        const consultAccountCode = prompt("Ingrese el código de la cuenta a consultar:");
        consultAccount(consultAccountCode);
        break;
      case "6":
        listAccounts();
        break;
      case "7":
        alert("Gracias por usar Banco ADSO. ¡Hasta luego!");
        return;
      default:
        alert("Opción inválida. Intente de nuevo.");
    }
  }
}

bankAccountSimulation();