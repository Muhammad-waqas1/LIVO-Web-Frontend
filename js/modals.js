
  document.addEventListener('DOMContentLoaded', function () {
    const inputs = document.querySelectorAll('#verifyModal .digit-input');
    inputs.forEach((input, idx) => {
      input.addEventListener('input', () => {
        // Only digits allowed
        input.value = input.value.replace(/[^0-9]/g, '');
        if (input.value && idx < inputs.length - 1) {
          inputs[idx + 1].focus();
        }
      });

      input.addEventListener('keydown', (e) => {
        if (e.key === 'Backspace' && !input.value && idx > 0) {
          inputs[idx - 1].focus();
        }
      });
    });

    document.getElementById('verifyBtn').addEventListener('click', () => {
        const inputs = document.querySelectorAll('#verifyModal .digit-input');
        const code = Array.from(inputs).map(i => i.value).join('');
        if (code.length < inputs.length) {
          alert('Please enter all 5 digits');
          return;
        }
  
        // hide Verify
        const verifyEl = document.getElementById('verifyModal');
        bootstrap.Modal.getInstance(verifyEl).hide();
  
        // show Welcome
        const welcomeEl = document.getElementById('welcomeModal');
        new bootstrap.Modal(welcomeEl).show();
      });

    document.getElementById('resendCode').addEventListener('click', (e) => {
      e.preventDefault();
      // TODO: front‑end resend logic placeholder
      alert('Code resent!');
    });
    
  });



  document.getElementById('signupForm').addEventListener('submit', function(e){
    e.preventDefault();
    bootstrap.Modal.getInstance(document.getElementById('signupModal')).hide();
    new bootstrap.Modal(document.getElementById('verifyModal')).show();
  });
  


