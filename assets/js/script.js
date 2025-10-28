document.addEventListener('DOMContentLoaded', function(){
    document.getElementById('pdfBtn').addEventListener('click', function(){
        window.location.href='generate_pdf.php';
    });

    const cards = document.querySelectorAll('.project-card');
    cards.forEach((card,i)=>{
        card.style.animationDelay = (i*0.2)+'s';
    });
});
