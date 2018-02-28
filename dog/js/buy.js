/*
 * @author t@tabalt.net
 */

$(function(){
    setInterval(function(){
        Buyer.ShowPetsOnSale();
    }, 500);

    Buyer.InitBuyModal();

    setInterval(function(){
        Buyer.TryBuyPets();
    }, 100);
});