var menuLeft = document.getElementById( 'omenu-a' ),
        showLeftPush = document.getElementById( 'showRightPush' ),
        body = document.body;
 
showLeftPush.onclick = function() {
    classie.toggle( this, 'active' );
    classie.toggle( body, 'omenu-push-toleft' );
    classie.toggle( menuLeft, 'omenu-open' );
    disableOther( 'showRightPush' );
};
 
function disableOther( button ) {
    if( button !== 'showRightPush' ) {
        classie.toggle( showLeftPush, 'disabled' );
    }
}