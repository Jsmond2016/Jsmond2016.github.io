# bashrc 配置

编辑 `.bashrc` 文件

```bash
. ~/z/z.sh

export PYTHONIOENCODING=UTF-8
export LANG='en_US.UTF-8'
export LC_ALL='en_US.UTF-8'


# some more ls aliases
alias ll='ls -alF'
alias la='ls -A'
alias l='ls -CF'

alias c='clear'
alias j='z'
alias gst="git status -sb"
alias ga="git add"
alias gc="git commit -v"
alias gcc="git commit . -m update"
alias gp="git push"
alias gl="git pull"
alias open="start"
alias ll="ls -la"
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less"
alias start='explorer.exe'
```

