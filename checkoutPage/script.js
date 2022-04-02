document.querySelector(".submit").addEventListener("click",submitinfo);
    event.preventDefault();
    function submitinfo(){
        console.log("submitted");
        window.location.href="payment.html"
    }
