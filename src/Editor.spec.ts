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
