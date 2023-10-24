document.querySelector("#sendForm").onclick = function myFunc() {
    const alertPlaceholder = document.getElementById('liveAlertPlaceholder')
    const wrapper = document.createElement('div')
    wrapper.innerHTML = [
      `<div class="col-md-5 mt-3 alert alert-success alert-dismissible" role="alert">`,
      `   <div>Message sent!</div>`,
      '   <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>',
      '</div>'
    ].join('')
    alertPlaceholder.append(wrapper)
  }
  