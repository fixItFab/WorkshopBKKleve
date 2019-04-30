const calc = () => {
  const a = document.querySelector("#summand1");
  const b = document.querySelector("#summand2");
  const sum = document.querySelector("#sum");

  const aNumber = parseInt(a.value);
  const bNumber = parseInt(b.value);

  sum.value = aNumber + bNumber;
};
