import * as vscode from "vscode";

let hasPythonExtension: boolean;

export function activate(context: vscode.ExtensionContext) {
  // 检查用户是否已经安装了 Microsoft Python 插件
  const pythonExtension = vscode.extensions.getExtension("ms-python.python");
  hasPythonExtension = Boolean(pythonExtension);

  // 获取当前 Conda 环境的名称
  const condaEnv = process.env.CONDA_DEFAULT_ENV;

  if (!condaEnv || condaEnv === "base") {
    return;
  }

  context.subscriptions.push(
    vscode.window.onDidOpenTerminal(async (terminal) => {
      if (!hasPythonExtension) {
        // 发送 "conda activate {envName}" 命令
        terminal.sendText(`conda activate ${condaEnv}`);
      }
    })
  );
}

// This method is called when your extension is deactivated
export function deactivate() {}
