
let acctInfoList = [];

window.onload = function() {
  document.getElementById("button").onclick = function() {

    accountModule.createAccount();
    accountModule.displayInfo();
  };
};

let accountModule = (function() {
  let acctName;
  let depositAmt;

  let createAccount = function() {
    acctName = document.getElementById("accountName").value;
    depositAmt = document.getElementById("amount").value;

    acctInfoList.push({
      accountName: acctName,
      Balance: depositAmt
    });
  };

  let displayInfo = function() {
    document.getElementById("displayArea").value = "";
    for(let acct of acctInfoList) {
      document.getElementById("displayArea").value += `Account name:  ${acct.accountName},  Balance:  ${acct.Balance}\n`;
    };
  };

  return {
    createAccount: createAccount,
    displayInfo: displayInfo
  };
})();
