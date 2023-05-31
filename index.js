$("button").on("click",function(){
    var s=$(".input-btn").val();
    convert(s,this.id);
});
function convert(s,id)
{
    if(s=="")
    alert("Enter a Valid input!");
    else{
        if(id==='celsius'){
        var res=(1.8*s)+32;
        $("#"+id).addClass("btn-dark");
        $("#"+"farenheit").removeClass("btn-dark");
        }
        else{
        var res=(s-32)/1.8;
        $("#"+id).addClass("btn-dark");
        $("#"+"celsius").removeClass("btn-dark");
    }
        res=res.toFixed(4);
        $(".result-btn").val(res);}
}