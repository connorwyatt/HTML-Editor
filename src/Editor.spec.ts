import { Editor } from './Editor';

describe('Editor', () => {
  let editor: Editor,
    element: HTMLElement;

  beforeEach(() => {
    element = document.createElement('div');

    element.innerHTML = '<p>This is text!</p>';

    editor = new Editor(element);
  });

  describe('when getting the HTML', () => {
    it('should return the contents of the element', () => {
      expect(editor.getHtml()).toBe('<p>This is text!</p>');
    });
  });
});
