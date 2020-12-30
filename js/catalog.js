$(".range-control").slider({
    min: 0,
    max: 5000,
    values: [2000, 3000],
    range: true,
    animate: "fast",
    slide : function(event, ui) {    
        $(".min-price").val(ui.values[ 0 ]);   
        $(".max-price").val(ui.values[ 1 ]);  
    }    
});
$(".min-price").val($(".range-control").slider("values", 0));
$(".max-price").val($(".range-control").slider("values", 1));
$(".range-filter input").change(function() {
    var input_left = $(".min-price").val().replace(/[^0-9]/g, ''),    
    opt_left = $(".range-control").slider("option", "min"),
    where_right = $(".range-control").slider("values", 1),
    input_right = $(".max-price").val().replace(/[^0-9]/g, ''),    
    opt_right = $(".range-control").slider("option", "max"),
    where_left = $(".range-control").slider("values", 0); 
    if (input_left > where_right) { 
        input_left = where_right; 
    }
    if (input_left < opt_left) {
        input_left = opt_left; 
    }
    if (input_left == "") {
    input_left = 0;    
    }        
    if (input_right < where_left) { 
        input_right = where_left; 
    }
    if (input_right > opt_right) {
        input_right = opt_right; 
    }
    if (input_right == "") {
    input_right = 0;    
    }    
    $(".min-price").val(input_left); 
    $(".max-price").val(input_right); 
    if (input_left != where_left) {
        $(".range-control").slider("values", 0, input_left);
    }
    if (input_right != where_right) {
        $(".range-control").slider("values", 1, input_right);
    }
});