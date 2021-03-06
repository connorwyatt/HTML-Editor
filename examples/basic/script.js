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
      case 'indent':
        htmlEditor.indent();
        break;
      case 'outdent':
        htmlEditor.outdent();
        break;
      case 'orderedList':
        htmlEditor.setOrderedList();
        break;
      case 'unorderedList':
        htmlEditor.setUnorderedList();
        break;
      case 'subscript':
        htmlEditor.setSubscript();
        break;
      case 'superscript':
        htmlEditor.setSuperscript();
        break;
      case 'heading1':
        htmlEditor.setHeading1();
        break;
      case 'heading2':
        htmlEditor.setHeading2();
        break;
      case 'heading3':
        htmlEditor.setHeading3();
        break;
      case 'heading4':
        htmlEditor.setHeading4();
        break;
      case 'heading5':
        htmlEditor.setHeading5();
        break;
      case 'heading6':
        htmlEditor.setHeading6();
        break;
      case 'paragraph':
        htmlEditor.setParagraph();
        break;
      case 'removeFormat':
        htmlEditor.removeFormat();
        break;
    }
  }
}());
