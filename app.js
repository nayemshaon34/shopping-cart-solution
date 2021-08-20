function updateAmount(id,price,isIncrease){
    const previousAmount = document.getElementById(id+'-amount');
    const amountText = previousAmount.value;
    if(isIncrease == true){
        previousAmount.value = parseInt(amountText)+1;
    }
    else if(amountText>0){
    previousAmount.value = parseInt(amountText)-1;
    }
    // update total
    const previousCost = document.getElementById(id+'-price');
    previousCost.innerText = previousAmount.value*price;
    // calculate total
    const sub = calculateCost();
    const subtotal = document.getElementById('sub-total');
    subtotal.innerText = sub;
    const tax = document.getElementById('tax');
    tax.innerText = parseFloat(sub*0.0075);
    console.log(tax.innerText);
    const total = document.getElementById('total');
    total.innerText = parseFloat(sub*0.0075)+sub;
    
}

function getInputAmount(id){
    const amount = document.getElementById(id+'-amount');
    return parseInt(amount.value);
}

function calculateCost(){
    const mobileCost = getInputAmount('phone')*1219;
    const caseCost = getInputAmount('case')*59;
    const total = mobileCost+ caseCost;
    return total;
}
// mobile plus
document.getElementById('phone-plus').addEventListener('click',function(){
    updateAmount('phone',1219,true);
});
// mobile minus
document.getElementById('phone-minus').addEventListener('click',function(){
    updateAmount('phone',1219,false);
});
// case plus
document.getElementById('case-plus').addEventListener('click', function(){
    updateAmount('case',59,true);
}); 

// mobile minus
document.getElementById('case-minus').addEventListener('click',function(){
    updateAmount('case',59,false);

});




//  // calculate total
//  const subtotal = calculateCost();
//  // subtotal
//  const sub = document.getElementById('sub-total');
//  sub.innerText = subtotal;
//  // total tax
//  const subTax = document.getElementById('tax');
//  const totalTax = parseFloat(subtotal * 0.075);
//  const tax = parseFloat(totalTax.toFixed(2));
//  subTax.innerText = tax;
//  // total bill
//  const total = document.getElementById('total');
//  total.innerText = tax + parseFloat(subtotal.toFixed(2)); 