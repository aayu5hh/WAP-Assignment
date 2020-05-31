let acctInfoList = [];

window.onload = function() {
  document.getElementById("button").onclick = buttonHandler;
};

let accountModule = (function() {
  let acctName;
  let depositAmt;

  let createAccount = function() {
    acctName = document.getElementById("accountName").value;
    depositAmt = document.getElementById("amount").value;
  };

  let getAccountInfo = function() {
    return {
      accountName: acctName,
      Balance: depositAmt
    };
  };

  return {
    createAccount: createAccount,
    getAccountInfo: getAccountInfo
  };
})();

function buttonHandler() {
  accountModule.createAccount()
  acctInfoList.push(accountModule.getAccountInfo());

  document.getElementById("displayArea").value = "";
  for (let acct of acctInfoList) {
    document.getElementById("displayArea").value += `Account name:  ${acct.accountName},  Balance:  ${acct.Balance}\n`;
  };
};
