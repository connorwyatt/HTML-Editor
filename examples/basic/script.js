(function () {
  var editor = document.querySelector('#editor');

  var htmlEditor = new HTMLEditor.Editor(editor);

  htmlEditor.setEnabled(true);

  var buttons = document.querySelector('#buttons').querySelectorAll('button');

  buttons.forEach(function (button) {
    button.addEventListener('click', function (event) {
      var action = event.currentTarget.dataset.action;

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
      case 'strikeThrough':
        htmlEditor.setStrikeThrough();
        break;
      case 'alignLeft':
        htmlEditor.setAlignLeft();
        break;
      case 'alignCenter':
        htmlEditor.setAlignCenter();
        break;
      case 'alignRight':
        htmlEditor.setAlignRight();
        break;
      case 'alignJustify':
        htmlEditor.setAlignJustify();
        break;
      case 'textColor':
        var textColor = window.prompt('Enter the text color:', '#rrggbb or rgb(x, y, z)');
        htmlEditor.setTextColor(textColor);
        break;
      case 'backgroundColor':
        var backgroundColor = window.prompt('Enter the background color:', '#rrggbb or rgb(x, y, z)');
        htmlEditor.setBackgroundColor(backgroundColor);
        break;
      case 'removeFormat':
        htmlEditor.removeFormat();
        break;
    }
  }
}());
