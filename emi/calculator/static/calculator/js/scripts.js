$(document).ready(function() {
    $('#emiForm').on('submit', function(e) {
        e.preventDefault();

        // Input validation
        let principal = $('#principal').val();
        let rate = $('#rate').val();
        let time = $('#time').val();

        if (principal <= 0) {
            alert('Principal amount must be positive.');
            return;
        }
        if (rate <= 0) {
            alert('Interest rate must be positive.');
            return;
        }
        if (time <= 0) {
            alert('Time period must be a positive integer.');
            return;
        }

        $.ajax({
            url: '/calculate_emi/',
            type: 'GET',
            data: $('#emiForm').serialize(),
            success: function(response) {
                $('#result').html('Monthly EMI: ' + response.emi.toFixed(2)).show();
            }
        });
    });
});
