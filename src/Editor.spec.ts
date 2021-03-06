import {Editor} from './Editor';

describe('Editor', () => {
  let editor: Editor,
    editorElement: HTMLElement;

  beforeEach(() => {
    editorElement = document.createElement('div');

    editorElement.innerHTML = '<p>This is <b>awesome</b> text!</p>';

    document.body.appendChild(editorElement);

    editor = new Editor(editorElement);
  });

  afterEach(() => {
    document.body.removeChild(editorElement);

    document.getSelection().removeAllRanges();
  });

  describe('when getting the HTML', () => {
    it('should return the contents of the element', () => {
      expect(editor.getHtml()).toBe('<p>This is <b>awesome</b> text!</p>');
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
          expect(editorElement.innerHTML).toBe('<p>This <b>is</b> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

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
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

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
          expect(editorElement.innerHTML).toBe('<p>This <i>is</i> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

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
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

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
          expect(editorElement.innerHTML).toBe('<p>This <u>is</u> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

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
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

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

  describe('when making the selected text strike through', () => {
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

          editor.setStrikeThrough();
        });

        it('should make the selected text strike through', () => {
          expect(editorElement.innerHTML).toBe('<p>This <strike>is</strike> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setStrikeThrough();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text strike through', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setStrikeThrough()).not.toThrow();
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

          editor.setStrikeThrough();
        });

        it('should not make the selected text strike through', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setStrikeThrough();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text strike through', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text left aligned', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          paragraph.style.textAlign = 'center';

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setAlignLeft();
        });

        it('should make the surrounding block left aligned', () => {
          expect(editorElement.innerHTML).toBe('<p style="text-align: left;">This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignLeft();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block left aligned', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setAlignLeft()).not.toThrow();
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

          editor.setAlignLeft();
        });

        it('should not make the surrounding block left aligned', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignLeft();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block left aligned', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text center aligned', () => {
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

          editor.setAlignCenter();
        });

        it('should make the surrounding block center aligned', () => {
          expect(editorElement.innerHTML).toBe('<p style="text-align: center;">This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignCenter();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block center aligned', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setAlignCenter()).not.toThrow();
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

          editor.setAlignCenter();
        });

        it('should not make the surrounding block center aligned', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignCenter();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block center aligned', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text right aligned', () => {
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

          editor.setAlignRight();
        });

        it('should make the surrounding block right aligned', () => {
          expect(editorElement.innerHTML).toBe('<p style="text-align: right;">This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignRight();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block right aligned', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setAlignRight()).not.toThrow();
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

          editor.setAlignRight();
        });

        it('should not make the surrounding block right aligned', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignRight();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block right aligned', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text justified', () => {
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

          editor.setAlignJustify();
        });

        it('should make the surrounding block justified', () => {
          expect(editorElement.innerHTML).toBe('<p style="text-align: justify;">This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignJustify();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block justified', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setAlignJustify()).not.toThrow();
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

          editor.setAlignJustify();
        });

        it('should not make the surrounding block justified', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setAlignJustify();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the surrounding block justified', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when changing the selected text color', () => {
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

          editor.setTextColor('#ff0000');
        });

        it('should change the selected text color', () => {
          expect(editorElement.innerHTML).toBe('<p>This <span style="color: rgb(255, 0, 0);">is</span> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setTextColor('#ff0000');
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not change the selected text color', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setTextColor('#ff0000')).not.toThrow();
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

          editor.setTextColor('#ff0000');
        });

        it('should not change the selected text color', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setTextColor('#ff0000');
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not change the selected text color', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when changing the selected text background color', () => {
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

          editor.setBackgroundColor('#ff0000');
        });

        it('should change the selected text background color', () => {
          expect(editorElement.innerHTML).toBe('<p>This <span style="background-color: rgb(255, 0, 0);">is</span> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setBackgroundColor('#ff0000');
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not change the selected text background color', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setBackgroundColor('#ff0000')).not.toThrow();
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

          editor.setBackgroundColor('#ff0000');
        });

        it('should not change the selected text background color', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setBackgroundColor('#ff0000');
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not change the selected text background color', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when indenting the selected text', () => {
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

          editor.indent();
        });

        it('should indent the selected text block', () => {
          expect(editorElement.innerHTML).toBe(
            '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">'
            + '<p>This is <b>awesome</b> text!</p>'
            + '</blockquote>'
          );
        });

        describe('when indenting text that is already indented', () => {
          beforeEach(() => {
            editor.indent();
          });

          it('should indent the selected text block again', () => {
            expect(editorElement.innerHTML).toBe(
              '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">'
              + '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">'
              + '<p>This is <b>awesome</b> text!</p>'
              + '</blockquote>'
              + '</blockquote>'
            );
          });
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.indent();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not indent the selected text block', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.indent()).not.toThrow();
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

          editor.indent();
        });

        it('should not indent the selected text block', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.indent();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not indent the selected text block', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when outdenting the selected text', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          editorElement.innerHTML = '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;">' + editorElement.innerHTML + '</blockquote>';

          const paragraph = editorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 5);
          range.setEnd(paragraph.firstChild, 7);

          document.getSelection().addRange(range);

          editor.outdent();
        });

        it('should outdent the selected text block', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });

        describe('when outdenting text that is already outdented', () => {
          beforeEach(() => {
            editor.outdent();
          });

          it('should not modify the editor contents', () => {
            expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
          });
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p>This is not the editor!</p></blockquote>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.outdent();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not outdent the selected text block', () => {
          expect(nonEditorElement.innerHTML).toBe('<blockquote style="margin: 0 0 0 40px; border: none; padding: 0px;"><p>This is not the editor!</p></blockquote>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.outdent()).not.toThrow();
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

          editor.outdent();
        });

        it('should not outdent the selected text block', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.outdent();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not outdent the selected text block', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text an ordered list', () => {
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

          editor.setOrderedList();
        });

        it('should make the selected text block into an ordered list', () => {
          expect(editorElement.innerHTML).toBe('<p><ol><li>This is <b>awesome</b> text!<br></li></ol></p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setOrderedList();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into an ordered list', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setOrderedList()).not.toThrow();
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

          editor.setOrderedList();
        });

        it('should not make the selected text block into an ordered list', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setOrderedList();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into an ordered list', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text an unordered list', () => {
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

          editor.setUnorderedList();
        });

        it('should make the selected text block into an unordered list', () => {
          expect(editorElement.innerHTML).toBe('<p><ul><li>This is <b>awesome</b> text!<br></li></ul></p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setUnorderedList();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into an unordered list', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setUnorderedList()).not.toThrow();
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

          editor.setUnorderedList();
        });

        it('should not make the selected text block into an unordered list', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setUnorderedList();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into an unordered list', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text subscripted', () => {
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

          editor.setSubscript();
        });

        it('should make the selected text subscripted', () => {
          expect(editorElement.innerHTML).toBe('<p>This <sub>is</sub> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setSubscript();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text subscripted', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setSubscript()).not.toThrow();
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

          editor.setSubscript();
        });

        it('should not make the selected text subscripted', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setSubscript();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text subscripted', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text superscripted', () => {
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

          editor.setSuperscript();
        });

        it('should make the selected text superscripted', () => {
          expect(editorElement.innerHTML).toBe('<p>This <sup>is</sup> <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setSuperscript();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text superscripted', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setSuperscript()).not.toThrow();
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

          editor.setSuperscript();
        });

        it('should not make the selected text superscripted', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setSuperscript();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text superscripted', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a heading 1', () => {
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

          editor.setHeading1();
        });

        it('should make the selected text block into a heading 1', () => {
          expect(editorElement.innerHTML).toBe('<h1>This is <b>awesome</b> text!</h1>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading1();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 1', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setHeading1()).not.toThrow();
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

          editor.setHeading1();
        });

        it('should not make the selected text block into a heading 1', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading1();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 1', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a heading 2', () => {
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

          editor.setHeading2();
        });

        it('should make the selected text block into a heading 2', () => {
          expect(editorElement.innerHTML).toBe('<h2>This is <b>awesome</b> text!</h2>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading2();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 2', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setHeading2()).not.toThrow();
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

          editor.setHeading2();
        });

        it('should not make the selected text block into a heading 2', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading2();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 2', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a heading 3', () => {
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

          editor.setHeading3();
        });

        it('should make the selected text block into a heading 3', () => {
          expect(editorElement.innerHTML).toBe('<h3>This is <b>awesome</b> text!</h3>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading3();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 3', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setHeading3()).not.toThrow();
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

          editor.setHeading3();
        });

        it('should not make the selected text block into a heading 3', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading3();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 3', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a heading 4', () => {
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

          editor.setHeading4();
        });

        it('should make the selected text block into a heading 4', () => {
          expect(editorElement.innerHTML).toBe('<h4>This is <b>awesome</b> text!</h4>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading4();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 4', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setHeading4()).not.toThrow();
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

          editor.setHeading4();
        });

        it('should not make the selected text block into a heading 4', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading4();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 4', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a heading 5', () => {
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

          editor.setHeading5();
        });

        it('should make the selected text block into a heading 5', () => {
          expect(editorElement.innerHTML).toBe('<h5>This is <b>awesome</b> text!</h5>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading5();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 5', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setHeading5()).not.toThrow();
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

          editor.setHeading5();
        });

        it('should not make the selected text block into a heading 5', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading5();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 5', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a heading 6', () => {
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

          editor.setHeading6();
        });

        it('should make the selected text block into a heading 6', () => {
          expect(editorElement.innerHTML).toBe('<h6>This is <b>awesome</b> text!</h6>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading6();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 6', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setHeading6()).not.toThrow();
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

          editor.setHeading6();
        });

        it('should not make the selected text block into a heading 6', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setHeading6();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a heading 6', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when making the selected text into a paragraph', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const paragraph = editorElement.querySelector('p');

          editorElement.innerHTML = '<h1>' + paragraph.innerHTML + '</h1>';

          const heading = editorElement.querySelector('h1');

          const range = document.createRange();
          range.setStart(heading.firstChild, 5);
          range.setEnd(heading.firstChild, 7);

          document.getSelection().addRange(range);

          editor.setParagraph();
        });

        it('should make the selected text block into a paragraph', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setParagraph();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a paragraph', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.setParagraph()).not.toThrow();
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

          editor.setParagraph();
        });

        it('should not make the selected text block into a paragraph', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is not the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const paragraph = nonEditorElement.querySelector('p');

          const range = document.createRange();
          range.setStart(paragraph.firstChild, 8);
          range.setEnd(paragraph.firstChild, 11);

          document.getSelection().addRange(range);

          editor.setParagraph();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not make the selected text block into a paragraph', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is not the editor!</p>');
        });
      });
    });
  });

  describe('when removing the formatting', () => {
    describe('when the editor is enabled', () => {
      beforeEach(() => {
        editor.setEnabled(true);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const bold = editorElement.querySelector('p').querySelector('b');

          const range = document.createRange();
          range.selectNodeContents(bold.firstChild);

          document.getSelection().addRange(range);

          editor.removeFormat();
        });

        it('should remove the format from the selected text', () => {
          expect(editorElement.innerHTML).toBe('<p>This is awesome text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is <b>not</b> the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const bold = nonEditorElement.querySelector('p').querySelector('b');

          const range = document.createRange();
          range.selectNodeContents(bold.firstChild);

          document.getSelection().addRange(range);

          editor.removeFormat();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not remove the format from the selected text', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is <b>not</b> the editor!</p>');
        });
      });

      describe('when there is no selection', () => {
        beforeEach(() => {
          document.getSelection().removeAllRanges();
        });

        it('should not error', () => {
          expect(() => editor.removeFormat()).not.toThrow();
        });
      });
    });

    describe('when the editor is disabled', () => {
      beforeEach(() => {
        editor.setEnabled(false);
      });

      describe('when the selection is inside the editor', () => {
        beforeEach(() => {
          const bold = editorElement.querySelector('p').querySelector('b');

          const range = document.createRange();
          range.selectNodeContents(bold.firstChild);

          document.getSelection().addRange(range);

          editor.removeFormat();
        });

        it('should not remove the format from the selected text', () => {
          expect(editorElement.innerHTML).toBe('<p>This is <b>awesome</b> text!</p>');
        });
      });

      describe('when the selection is not inside the editor', () => {
        let nonEditorElement: HTMLElement;

        beforeEach(() => {
          nonEditorElement = document.createElement('div');

          nonEditorElement.contentEditable = String(true);

          nonEditorElement.innerHTML = '<p>This is <b>not</b> the editor!</p>';

          document.body.appendChild(nonEditorElement);

          const bold = nonEditorElement.querySelector('p').querySelector('b');

          const range = document.createRange();
          range.selectNodeContents(bold.firstChild);

          document.getSelection().addRange(range);

          editor.removeFormat();
        });

        afterEach(() => {
          document.body.removeChild(nonEditorElement);
        });

        it('should not remove the format from the selected text', () => {
          expect(nonEditorElement.innerHTML).toBe('<p>This is <b>not</b> the editor!</p>');
        });
      });
    });
  });
});
