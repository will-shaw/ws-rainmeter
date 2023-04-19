import {
  CancellationToken,
  DocumentSymbol,
  DocumentSymbolProvider,
  Location,
  Position,
  ProviderResult,
  Range,
  SymbolInformation,
  SymbolKind,
  TextDocument,
} from "vscode";

export class IniDocumentSymbolProvider implements DocumentSymbolProvider {
  sectionRegex = /^\s*\[([^\]]+)\]/;
  fieldRegex = /^\s*([^\[;=]+)\s*=/;

  provideDocumentSymbols(
    document: TextDocument,
    token: CancellationToken
  ): ProviderResult<SymbolInformation[] | DocumentSymbol[]> {
    const result = [];

    let lastFieldLine = -1;

    for (let i = document.lineCount - 1; i >= 0; i--) {
      if (token.isCancellationRequested) {
        break;
      }

      const { text } = document.lineAt(i);

      const sectionMatch = text.match(this.sectionRegex);

      if (sectionMatch) {
        let sectionEnd = null;

        if (lastFieldLine >= 0) {
          sectionEnd = document.lineAt(lastFieldLine).range.end;
          lastFieldLine = -1;
        } else {
          sectionEnd = new Position(i, sectionMatch[1].length);
        }

        result.push(
          new SymbolInformation(
            sectionMatch[1],
            SymbolKind.Class,
            "",
            new Location(
              document.uri,
              new Range(new Position(i, 0), sectionEnd)
            )
          )
        );
      } else {
        let fieldMatch = text.match(this.fieldRegex);

        if (fieldMatch) {
          if (lastFieldLine < 0) lastFieldLine = i;
          result.push(
            new SymbolInformation(
              fieldMatch[1],
              SymbolKind.Field,
              "",
              new Location(
                document.uri,
                new Range(
                  new Position(i, 0),
                  new Position(i, fieldMatch[1].length)
                )
              )
            )
          );
        }
      }
    }

    return result;
  }
}
