import { Editor } from './Editor';

describe('Editor', () => {
  let editor: Editor,
    editorElement: HTMLElement;

  beforeEach(() => {
    editorElement = document.createElement('div');

    editorElement.innerHTML = '<p>This is text!</p>';

    document.body.appendChild(editorElement);

    editor = new Editor(editorElement);
  });

  afterEach(() => {
    document.body.removeChild(editorElement);

    document.getSelection().removeAllRanges();
  });

  describe('when getting the HTML', () => {
    it('should return the contents of the element', () => {
      expect(editor.getHtml()).toBe('<p>This is text!</p>');
    });
  });

  describe('when enabling the editor', () => {
    beforeEach(() => {
      editorElement.contentEditable = String(false);

      editor.setEnabled(true);
    });

    it('should enable the editor', () => {
      expect(editorElement.isContentEditable).toBe(true);
    });
  });

  describe('when disabling the editor', () => {
    beforeEach(() => {
      editorElement.contentEditable = String(true);

      editor.setEnabled(false);
    });

    it('should disable the editor', () => {
      expect(editorElement.isContentEditable).toBe(false);
    });
  });

  describe('when making the selected text bold', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setBold();
        });

        it('should make the selected text bold', () => {
          expect(editorElement.innerHTML).toBe('<p>This <b>is</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setBold();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text bold', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setBold()).not.toThrow();
        });
      });
    });

    describe('when the editor is disabled', () => {
      beforeEach(() => {
        editor.setEnabled(false);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setBold();
        });

        it('should not make the selected text bold', () => {
          expect(editorElement.innerHTML).toBe('<p>This is text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setBold();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text bold', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text italic', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setItalic();
        });

        it('should make the selected text italic', () => {
          expect(editorElement.innerHTML).toBe('<p>This <i>is</i> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setItalic();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text italic', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setItalic()).not.toThrow();
        });
      });
    });

    describe('when the editor is disabled', () => {
      beforeEach(() => {
        editor.setEnabled(false);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setItalic();
        });

        it('should not make the selected text italic', () => {
          expect(editorElement.innerHTML).toBe('<p>This is text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setItalic();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text italic', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text underlined', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setUnderline();
        });

        it('should make the selected text underlined', () => {
          expect(editorElement.innerHTML).toBe('<p>This <u>is</u> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setUnderline();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text underlined', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setUnderline()).not.toThrow();
        });
      });
    });

    describe('when the editor is disabled', () => {
      beforeEach(() => {
        editor.setEnabled(false);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setUnderline();
        });

        it('should not make the selected text underlined', () => {
          expect(editorElement.innerHTML).toBe('<p>This is text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setUnderline();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text underlined', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });
});
