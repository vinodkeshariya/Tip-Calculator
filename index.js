document.addEventListener("DOMContentLoaded", function() {
    const billAmountInput = document.getElementById("billAmount");
    const tipPercentageInput = document.getElementById("tipPercentage");
    const calculateTipButton = document.getElementById("calculateTip");
    const totalAmountOutput = document.getElementById("totalAmount");
    const tipAmountOutput = document.getElementById("tipAmount");

    calculateTipButton.addEventListener("click", function() {
        const billAmount = parseFloat(billAmountInput.value);
        const tipPercentage = parseFloat(tipPercentageInput.value);

        if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
            alert("Please enter valid values for the bill amount and tip percentage.");
            return;
        }

        const tipAmount = (billAmount * tipPercentage) / 100;
        const totalAmount = billAmount + tipAmount;

        tipAmountOutput.textContent = tipAmount.toFixed(2);
        totalAmountOutput.textContent = totalAmount.toFixed(2);
    });
});
