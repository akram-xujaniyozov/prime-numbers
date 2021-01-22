/* JavaScript App */

const addForm = document.forms['add-form'];

addForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const value = addForm.querySelector('input[type="text"]').value;
    const result = document.querySelector('.result');

    
    let isPrime = num => {
      for (i = 2; i < num; i++){
        if (num % i === 0) {
          return `No prime` 
        }
      }
       return num > 1
    }
      
    
    let primeNumber = isPrime(value);
    result.textContent  = `Is it prime number: ${primeNumber}!!!`;
});
   


