let product_count = 1;
arr = [];

function getAmount() {
  sum_of_amounts = 0;
  for (i = 1; i <= product_count; i++) {
    product_name = document.getElementById(`product_name_${i}`);
    qty = document.getElementById(`qty_${i}`);
    price = document.getElementById(`price_${i}`);
    amount = document.getElementById(`amount_${i}`);
    if (qty && price && amount) {
      a = qty.value * price.value;
      amount.value = a;
    } else {
      continue;
    }
    var p = document.getElementById(`price_${i}`).value;
    var q = document.getElementById(`qty_${i}`).value;
    var TA = p * q;

    sum_of_amounts += TA;
  }
  total_amount = document.getElementById("total_amount").value = sum_of_amounts;
}

function add_product() {
  product_count++;
  let table = document.getElementById("mytable");
  let row = table.insertRow(0);
  let cell1 = row.insertCell(0);
  let cell2 = row.insertCell(1);
  let cell3 = row.insertCell(2);
  let cell4 = row.insertCell(3);
  let cell5 = row.insertCell(4);
  cell1.innerHTML = `<input id='product_name_${product_count}' class='id'  type='text' placeholder='Product' style='height: 25px; border-radius: 10px; padding: 3px;'/>`;
  cell2.innerHTML = `<input id='qty_${product_count}' type='number' placeholder='Qty' onchange='getAmount()' style='height: 25px; border-radius: 10px; padding: 3px;'/>`;
  cell3.innerHTML = `<input id='price_${product_count}' type='number' placeholder='Price' onchange='getAmount()' style='height: 25px; border-radius: 10px; padding: 3px;'/>`;
  cell4.innerHTML = `<input id='amount_${product_count}' type='number' placeholder='Amount' style='height: 25px; border-radius: 10px; padding: 3px;' readonly/>`;
  // DELETE ICON
  cell5.innerHTML = `<svg onclick='delete_row(this)' xmlns="http://www.w3.org/2000/svg" height="1.2em" viewBox="0 0 448 512"><!--! Font Awesome Free 6.4.2 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2023 Fonticons, Inc. --><style>svg{fill:#000000}</style><path d="M64 32C28.7 32 0 60.7 0 96V416c0 35.3 28.7 64 64 64H384c35.3 0 64-28.7 64-64V96c0-35.3-28.7-64-64-64H64zm88 200H296c13.3 0 24 10.7 24 24s-10.7 24-24 24H152c-13.3 0-24-10.7-24-24s10.7-24 24-24z"/></svg>`;
}

function delete_row(btn) {
  var row = btn.parentNode.parentNode;
  row.remove();
  var sum_of_amounts = 0;
  for (i = 1; i <= product_count; i++) {
    if (document.getElementById(`amount_${i}`) == undefined) {
      continue;
    } else {
      amountInput = document.getElementById(`amount_${i}`).value;
      sum_of_amounts += parseInt(amountInput);
      document.getElementById("total_amount").value = sum_of_amounts;
    }
  }
}

function data_in_console() {
  for (i = 1; i <= product_count; i++) {
    if (
      document.getElementById(`qty_${i}`) != undefined ||
      document.getElementById(`price_${i}`) != undefined
    ) {
      var product_name_element = document.getElementById(`product_name_${i}`);
      var qty_element = document.getElementById(`qty_${i}`);
      var price_element = document.getElementById(`price_${i}`);
      var amount_element = qty_element.value * price_element.value;
    } else continue;
    if (!product_name_element || !qty_element || !price_element) {
      continue;
    } else {
      arr.push({
        Product_name: product_name_element.value,
        Qty: qty_element.value,
        Price: price_element.value,
        Amount: amount_element,
      });
    }
  }
  let product_details = {
    Total_Amount: total_amount,
    Number_of_item: arr.length,
    Item_details: arr,
  };
  console.log(product_details);
}
