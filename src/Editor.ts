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

  public removeFormat(): boolean {
    return this.executeCommand(Action.REMOVE_FORMAT);
  }

  private executeCommand(command: string): boolean {
    if (!this.isSelected()) {
      return false;
    }

    return document.execCommand(command);
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
