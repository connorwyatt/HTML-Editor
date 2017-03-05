var editor = document.querySelector('#editor');

var htmlEditor = new HTMLEditor(editor);

htmlEditor.setEnabled(true);

var buttons = document.querySelector('#buttons').querySelectorAll('button');

buttons.forEach(function (button) {
  button.addEventListener('click', function (event) {
    var action = event.target.dataset.action;

    dispatchAction(action);
  });
});

function dispatchAction(action) {
  switch (action) {
    case 'bold':
      htmlEditor.setBold();
      break;
    case 'italic':
      htmlEditor.setItalic();
      break;
    case 'underline':
      htmlEditor.setUnderline();
      break;
  }
}
