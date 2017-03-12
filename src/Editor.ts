import {Action} from './Action.constant';

export class Editor {
  constructor(private editor: HTMLElement) {
  }

  public getHtml(): string {
    return this.editor.innerHTML;
  }

  public setEnabled(enabled: boolean): void {
    this.editor.contentEditable = String(enabled);
  }

  public setBold(): boolean {
    return this.executeCommand(Action.BOLD);
  }

  public setItalic(): boolean {
    return this.executeCommand(Action.ITALIC);
  }

  public setUnderline(): boolean {
    return this.executeCommand(Action.UNDERLINE);
  }

  public setStrikeThrough(): boolean {
    return this.executeCommand(Action.STRIKE_THROUGH);
  }

  public setAlignLeft(): boolean {
    return this.executeCommand(Action.ALIGN_LEFT);
  }

  public setAlignCenter(): boolean {
    return this.executeCommand(Action.ALIGN_CENTER);
  }

  public setAlignRight(): boolean {
    return this.executeCommand(Action.ALIGN_RIGHT);
  }

  public setAlignJustify(): boolean {
    return this.executeCommand(Action.ALIGN_JUSTIFY);
  }

  public setTextColor(color: string): boolean {
    return this.executeCommand(Action.TEXT_COLOR, color, true);
  }

  public setBackgroundColor(color: string): boolean {
    return this.executeCommand(Action.BACKGROUND_COLOR, color, true);
  }

  public indent(): boolean {
    return this.executeCommand(Action.INDENT);
  }

  public outdent(): boolean {
    return this.executeCommand(Action.OUTDENT);
  }

  public setOrderedList() : boolean {
    return this.executeCommand(Action.ORDERED_LIST);
  }

  public setUnorderedList() : boolean {
    return this.executeCommand(Action.UNORDERED_LIST);
  }

  public setSubscript(): boolean {
    return this.executeCommand(Action.SUBSCRIPT);
  }

  public setSuperscript(): boolean {
    return this.executeCommand(Action.SUPERSCRIPT);
  }

  public removeFormat(): boolean {
    return this.executeCommand(Action.REMOVE_FORMAT);
  }

  private executeCommand(command: string, value: string = null, styleWithCSS: boolean = false): boolean {
    if (!this.isSelected()) {
      return false;
    }

    if (styleWithCSS) {
      document.execCommand(Action.STYLE_WITH_CSS, false, true);
    }

    let result = document.execCommand(command, false, value);

    if (styleWithCSS) {
      document.execCommand(Action.STYLE_WITH_CSS, false, false);
    }

    return result;
  }

  private isSelected(): boolean {
    const selection = document.getSelection();
    let node = selection.focusNode;
    let isInEditor: boolean = false;

    if (node) {
      while (!isInEditor && node.parentElement) {
        if (node.parentElement === this.editor) {
          isInEditor = true;
          break;
        }

        node = node.parentElement;
      }
    }

    return isInEditor;
  }
}
