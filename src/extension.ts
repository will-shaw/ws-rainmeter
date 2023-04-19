import { ExtensionContext, languages } from "vscode";
import { IniDocumentSymbolProvider } from "./DocumentSymbolProvider";

export function activate(context: ExtensionContext) {
  context.subscriptions.push(
    languages.registerDocumentSymbolProvider(
      [
        { language: "rainmeter", pattern: "**/*.{ini,inc}" },
        { language: "rainmeter", scheme: "untitled" },
      ],
      new IniDocumentSymbolProvider()
    )
  );
}

export function deactivate() {}
