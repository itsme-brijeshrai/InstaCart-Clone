document.querySelector(".myForm").addEventListener("submit",myFunction);
function myFunction(){
    alert('Record added to our database...')
    document.querySelector(".myForm").action = 'payment.html';
}