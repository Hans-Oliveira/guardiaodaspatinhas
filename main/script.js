$(document).ready(function () {
  $('#form-contato', function (e) {
    e.preventDefault();
    alert('Mensagem enviada com sucesso!');
    this.reset();
  });
});