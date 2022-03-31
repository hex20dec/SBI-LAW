const urlParams = new URLSearchParams(window.location.search);

function calcHeight(element) {
    const height = element.offsetHeight,
        style = window.getComputedStyle(element)

    return ['top', 'bottom']
        .map(side => parseInt(style[`margin-${side}`]))
        .reduce((total, side) => total + side, height)
  }
$(function(){
    let windowHeight = window.outerHeight;
    // $('#name').val(windowHeight);
    let card = document.getElementById("maincard");
    let header = document.getElementById("header");
    let featuredin = document.getElementById("featuredin");
    let total = calcHeight(card) + calcHeight(header) + calcHeight(featuredin);
    if( total > windowHeight){
    featuredin.classList.add('zoom09');
    }
});

$("#pricingBtn").on("click", ()=>{

    $("#pricingModal").modal();
})


$("#offerForm").on("submit", (e)=>{
    e.preventDefault();

    let ajaxObj = {};
    let $form = $(e.target);
    var postURL = $form.attr("action");
    // postURL = 'http://localhost:8000/offer';
    $form.find("input, select, textarea").each(function(val) {
        var name = $(this).attr("name");
        if (name !== undefined && name !== "" && name !== null) {
            ajaxObj[name] = $(this).val();
        }
    });

    ajaxObj['source'] = urlParams.get('f');
     console.log(ajaxObj);
     $.post(postURL, ajaxObj, function(res){
        if(res === 'ok'){
            location = 'https://musicmi.org/#thank-you';
        }else{
            alert('Something went wrong, please try again.');
        }
        
    });
    

    return false;
});