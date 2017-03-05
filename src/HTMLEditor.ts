import {Action} from './Action.constant';

export class HTMLEditor {
  constructor(private editor: HTMLElement) {
  }

  setEnabled(enabled: boolean): void {
    this.editor.contentEditable = String(enabled);
  }

  setBold(): boolean {
    return this.executeCommand(Action.BOLD);
  }

  setItalic(): boolean {
    return this.executeCommand(Action.ITALIC);
  }

  setUnderline(): boolean {
    return this.executeCommand(Action.UNDERLINE);
  }

  private executeCommand(command: string): boolean {
    if (!this.isSelected()) {
      return false;
    }

    document.execCommand(command);
  }

  private isSelected(): boolean {
    const selection = document.getSelection();
    let node = selection.focusNode;
    let isInEditor: boolean = false;

    while (!isInEditor && node.parentElement) {
      if (node.parentElement === this.editor) {
        isInEditor = true;
        break;
      }

      node = node.parentElement;
    }

    return isInEditor;
  }
}
