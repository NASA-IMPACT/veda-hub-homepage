function setInterface(interfaceUrl) {
    let loginUrl = new URL($('#home').data('authenticator-login-url'), document.location.origin);
    loginUrl.searchParams.set('next', '/hub/user-redirect/' + interfaceUrl)
    $('#login-button').attr(
        'href',
        loginUrl.toString()
    );
}
$(function() {
    // if next query param is presentm just do nothing
    const nextPresent = new URL(document.location).searchParams.get('next');
    if (!nextPresent) {
        setInterface($("input[name='interface']:checked").val());

        $("input[name='interface']").change(function() {
            if (this.checked) {
                setInterface(this.value)
            }
        });
    }

})