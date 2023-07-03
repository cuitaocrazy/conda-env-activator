# Conda Env Activator

Conda Env Activator 是一个为 Visual Studio Code 用户设计的插件，旨在自动在新的终端中激活指定的 Conda 环境。本插件适用于希望在 Visual Studio Code 的终端中使用 Conda 环境的用户。

请注意，如果你已经安装了 Microsoft Python 插件，你可能不需要这个插件，因为 Microsoft Python 插件已经包含了类似的功能。

# 安装

在 Visual Studio Code 中打开 Extensions 视图 (Ctrl+Shift+X)
搜索 "Conda Env Activator"
在搜索结果中找到 "Conda Env Activator" 并点击安装
使用方法
安装 Conda Env Activator 插件后，当你在 Visual Studio Code 中打开新的终端时，插件会自动尝试获取并激活当前的 Conda 环境。如果成功获取到了环境名称，插件会自动发送 "conda activate {envName}" 命令。

# 配置

Conda Env Activator 插件没有需要用户配置的部分。只要安装了插件，它就会在新的终端中尝试激活 Conda 环境。

# 已知问题

当重新打开含有已运行终端的 Visual Studio Code 时，该插件可能无法成功加入 Conda 环境。这意味着如果在 Visual Studio Code 被关闭后，仍有终端进程在运行，当再次打开 Visual Studio Code 时，这些已存在的终端可能不会自动进入 Conda 环境，需要手动激活。

# 反馈

如果你在使用 Conda Env Activator 插件时遇到了问题，或者你有任何建议或改进的想法，欢迎在 GitHub 上提交 issue。
