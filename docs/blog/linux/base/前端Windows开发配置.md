---
title: Windows ��Чдǰ�˼���
date: 2018-03-28 22:57:32
copyright: true
comments: true
post: true
categories:
- windows
tags:
- windows
---





## 1.�� .bashrc ���� `z.sh` ��

- ���� [z.sh](https://github.com/rupa/z)

> ע�� git ϰ�ߣ��������Լ���git��Ŀʱ��ʹ�� SSH�������ر��˵���Ŀʱ�����ֱ������ ������ ʹ�� htps

- ���õ� `.bashrc`

  - ���ȿ����� `z.sh` d Ŀ¼λ�ã�����Ϊ `C:\Users\jin\z`
  - �� `.bashrc`��д�����´��룺

  ```bash
  . ~/z/z.sh  # ע�⣬���￪ͷ�� �������һ���ո񣬱�ʾ�ڴ� bash ��ʱ��Ϳ�����z.sh
  alias j='z'
  ```

  ���

## 2.�� .bashrc ���� alias 

- alias  open='start'

`open file == start file`

- �� bash ����������ʱ����θĳ���������

  - `Ctr + A` ���ٻص���ͷλ��
  - `Ctr + K` ɾ����������

  ![1555569740248](https://i.loli.net/2019/04/18/5cb8264d309ec.png)

- glog

```bash
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less"
```

-  ���� alias

```bash

. ~/GitHub/z/z.sh


export PYTHONIOENCODING=UTF-8
export LANG='en_US.UTF-8'
export LC_ALL='en_US.UTF-8'

alias j='z'
alias gst="git status -sb"
alias ga="git add"
alias gc="git commit -v"
alias gcc="git commit . -m update"
alias gp="git push"
alias gl="git pull"
alias open="start"
alias ll="ls -la"
alias start='explorer.exe'
alias glog="git log --graph --pretty=format:'%Cred%h%Creset -%C(yellow)%d%Creset %s %Cgreen(%cr) %C(bold blue)<%an>%Creset' --abbrev-commit -- | less"

```



## 3.����� gitbash ��۸��ÿ�

> ���������ر������ļ��� `H:\1.���Գ���������װ\E����������\1.ǰ����������\01 ǰ�˿�������\` �����´��� windows ����

- ������������ [SourceCodePro](https://github.com/powerline/fonts/tree/master/SourceCodePro) ��Ȼ��˫�����ص�������а�װ�����ſ����� gitbash ���������������ѡ��
- ���� gitbash �Ŀ���Ϊ 100 * 40
- �����Լ�ϲ��������



## 4.��װ Curl �� Tree

### ��װ Curl

> ��װ curl ��ǰ���ǰ�װ scoop��

- ���ȣ��ο� [scoop ����](https://scoop.sh/) ,�� windows �� powershell ��������������

```bash
iex (new-object net.webclient).downloadstring('https://get.scoop.sh')
```

��װ���̿��ܻ��������⣺

- ` Set-ExecutionPolicy RemoteSigned -scope CurrentUser`
- ���� Y
- `iex (new-object net.webclient).downloadstring('https://get.scoop.sh')`

![��������](https://i.loli.net/2019/04/18/5cb82d208a5f8.png)

### ��װ Tree

- ���� [GnuTree.exe](https://newcontinuum.dl.sourceforge.net/project/gnuwin32/tree/1.5.2.2/tree-1.5.2.2-setup.exe) ˫����װ��һ·��һ����ע�ⰲװ·���ﲻҪ�пո񣬽��鰲װ�� C:\Software\GnuWin32
- �� C:\Software\GnuWin32\bin ���ӵ� PATH ����ӷ������£�
  1. Git Bash ���ӷ���
     1. ���� `touch ~/.bashrc; echo 'export PATH="$PATH:/c/Software/GnuWin32/bin/"' >> ~/.bashrc`
     2. ���� Git Bash
  2. ͼ�ν������ӷ������Ƽ�ʹ������һ�ַ�����
     1. �� Windows �Ļ������� PATH ������ C:\Software\GnuWin32\bin
     2. �����֪�� Windows ��ô���ӻ������� PATH���ٶȡ�Windows �������� PATH������
- Ȼ����Ϳ������� tree ������

## 5.�����п�ݷ���

1. `npm i -g fanyi`
2. `echo "alias yd='fanyi'" >> ~/.bashrc`

�����ʾ commond not found������Ҫ���� PATH

```
export PATH="xxx:$PATH" 
```

���� xxx ��ʾ��Ϊ `/c/Users/Fang/AppData/Roaming/npm`

�ο���ͼ��

![1555575095320](https://i.loli.net/2019/04/18/5cb8513c47c90.png)

����������룬���޸� gitbash �ı����ʽ���绹�����⣬������������������ʽ��֪��û������Ϊֹ

![1555574841180](https://i.loli.net/2019/04/18/5cb8515af19f3.png)



## 6.�������еĿ�ݼ�

1. Ctrl + R ������ʷ���ٴ� Ctrl + R �л�

����ʹ�ã�

- ���ȣ����� ctrl + r ����������ģʽ������ģ���������ʱ bash �л���ʾ��ص�������Ϊѡ��
- ���û���Լ���Ҫ�������������� ctrl + r����� bash ��ʾ�����Լ���Ҫ��������� **���Ҽ�**����ʾ **ѡ�и���ʾ���Ȼ���˳���ʾ**����������û����Ҫ�������������� ctrl + r

2. Ctrl + A ����
3. Ctrl + E ��β :end
4. Ctrl + B �˺� : back
5. Ctrl + F ǰ�� : front
6. Ctrl + W ɾһ������ : word
7. Ctrl + Kill �ɵ���һ��: kill
8. Ctrl + Cancel �ж�
9. Ctrl + Go �˳�����

�����ݼ����ɣ���ȸ� [bash ��ݼ�](https://www.google.com/search?q=bash+%E5%BF%AB%E6%8D%B7%E9%94%AE&oq=bash+%E5%BF%AB%E6%8D%B7%E9%94%AE&aqs=chrome..69i57j0.6011j0j1&sourceid=chrome&ie=UTF-8) ��[��������������Ч�ʵ� Bash ��ݼ� [������]](https://linuxtoy.org/archives/bash-shortcuts.html)

## 7.���ٸ���ճ��

### �� GitBash ��

1. ѡ�и��� ���� Ctrl+ Insert, ���ǱʼǱ���û�� insert����Ҫ�� Fn +Ctrl + Insert
2. �м�ճ�� ���� shift + Insert, ���ǱʼǱ���û�� insert����Ҫ�� Fn + Shift + Insert

### ��CMD��

1. ѡ���ٻس�����
2. �Ҽ�ճ��

### �Ƽ��� windows ����

1. [ClipboardFusion](https://www.clipboardfusion.com/Download/) ��Ҫ���� ����ʾ��ʷ���ơ�Ϊ Ctrl + Shift + V
2. Snipaste

## 8. ConEmu ��ʹ��

> ���� ConEmu �Ժ󣬾Ϳ������� gitbash ��

- ���ص�ַ�� [ConEmu download](<https://www.fosshub.com/ConEmu.html>)
- ѡ��汾�� �ڶ����������Ǹ�

![1555577506138](https://i.loli.net/2019/04/18/5cb851ced4c4b.png)

- ���� [˼Դ����](https://github.com/adobe-fonts/source-han-sans/releases/tag/2.001R)

- �Զ�������

- ��������

![1555580116134](https://i.loli.net/2019/04/18/5cb851f03202f.png)

- �����ã� ���½� �Ҽ�

![1555583701387](https://i.loli.net/2019/04/18/5cb88a243c7f1.png)

- һ������ F4

![1555583764178.png](https://i.loli.net/2019/04/18/5cb8531e39e91.png)

- ���ÿ��� 86%�� �ߣ� 95%
- ���� ��ǩ��

![1555580250697.png](https://i.loli.net/2019/04/18/5cb8578be8586.png)

- ���� �ı���꣬����״������ˮƽ�������̶�����С��

![1555580409416.png](https://i.loli.net/2019/04/18/5cb85399e0c44.png)

- ���� ����ݼ����á������� ��δѡ����ɫ������

![1555581376444.png](https://i.loli.net/2019/04/18/5cb853cbb3073.png)

![1555581394698.png](https://i.loli.net/2019/04/18/5cb854184df69.png)

- �Ѿ����ݺ����������ļ� ��ConEmu.xml ���ļ��� `H:\1.���Գ���������װ\E����������\1.ǰ����������\01 ǰ�˿�������\ConEmu����` 

## 9. Ubuntu on  Windows

### ��װ������ Ubuntu

���ȣ��� windows Microsoft store������ Ubuntu��ѡ��װ����

![1555586497719.png](https://i.loli.net/2019/04/18/5cb88721c626b.png)

- �������⣺������Ϣ���룺 `0x8007019e`
- ����취��[��������|������־win10��װlinux��ϵͳ����0x8007019e����취](<https://dueros.baidu.com/forum/topic/show/263267>)
- ������� Ubuntu�������˺�����󣬼���ʹ��
- ��Դ���ã�[ubuntu on windows��װ������](https://blog.csdn.net/qq_34914551/article/details/81630269)

### �ļ��������� Ubuntu �ϲ���  Windows �ļ�

#### ����һ��

- ���� windows �� C �� :  ` cd /mnt/c`
- ����һ�� Ubuntu �ͽ��� windows ��C ��
  - �� `.bashrc` ���ڵ�һ������  `cd /mnt/c/Users/yourName` ����ʱ��ÿ�δ� Ubuntu �Ϳ��Խ���windows �� C ����

#### ��������

**������� windows �ļ��� Ubuntu �ϣ�**

- ���� Ubuntu��ʱ������ Ubuntu �� ��Ŀ¼�У����ʱ����������� Windows ���ļ�����ô�죿

  **�� windows ���ļ� ���ӵ� Ubuntu ����**

- ʹ������ `ln -s /mnt/c/Users/yourName/file`

- ���ɰ� `file` �ļ����ӵ� Ubuntu ��ǰĿ¼����

**��ô�������������ӹ����� windows �ļ���ʹ�� `start file` ������**

���У�

����ʹ�� `explore.exe file` �ſ��Դ���� windows �ļ�

Ϊ�˲������㣬���ǿ����� `.bashrc`  ��ʹ�� alias д�� `alias start='explore.exe'`

###  ʹ�ÿ����������� fzf

> ֻ���� Ubuntu �ϲſ���ʹ�� fzf�� windows ����

- [fzf](https://github.com/junegunn/fzf) �������� windows �ϵ� everything ���ߣ���װ��ʽ���� github �����£�

```bash
git clone --depth 1 https://github.com/junegunn/fzf.git ~/.fzf
~/.fzf/install
```

![1555591813464.png](https://i.loli.net/2019/04/18/5cb887462be00.png)

![1555591933987.png](https://i.loli.net/2019/04/18/5cb8875ed6fb2.png)

���ʹ�ã�

1. ��װ����Ժ��˳� Ubuntu�ٽ����������Ǳ��� `.bashrc` �ļ���`source .bashrc`

2. ��ĳ��Ŀ¼�£����룺`fzf` �����ͻ����ɨ���Ŀ¼�������ļ���

3. Ȼ��������������ļ�����ʱ�򣬾ͻ���ٰ��㶨λ�����ļ���λ��

����Ҳ�����Լ�����һЩɧ����

- ��������Ŀ¼��`fd directoryName` + �س�

- ��������������: `fs contentName` + �س�  

  �˴����ܻ���ʾ��װ `sudo apt install silversearcher-ag` 

- ������������Ϊ "xxx" ���ļ�����ʹ�� vim �򿪣�`f fileName` + �س�

- ����ʹ��Ĭ��������ĳ���ļ��� `fo fileName` + �س� 

���ϵ�ʵ�֣���Ҫ��bash��дһ���ű���ʵ�֣�

�� `.bashrc` ����д���������ݣ����棺

```bash
# �����ļ�
f() {
  local file
  q=$1

  file=$( fzf --query="" --select-1 --exit-0 -x)
  if [ -n "$file" ] ;then
    vim "$file"
  fi
  echo "fzf: bye"
}

# ���Ҳ� open �ļ��������û�� open ���� alias һ�� open
fo(){
  local file
  q=$1

  #file=$(ag -l -g ""| fzf --query="$q" --select-1 --exit-0 -x)
  file=$( fzf --query="" --select-1 --exit-0 -x)
  if [ -n "$file" ] ;then
    open "$file"
  fi
  echo "fzf: bye"
}
# ���Ҳ����ļ�����Ŀ¼
fd() {
  local file
  local dir
  file=$(fzf +m -q "$1") && dir=$(dirname "$file") && cd "$dir"
}

# �����ļ����ݲ���vim�򿪶�Ӧ��
fs(){
  local file
  q=$1
  if [ -z "$q"] ;then
    q="."
  fi
  result=$(ag "$q" | fzf)
  IFS=':' read file line other <<< "$result"
  [ -n "$file" ] && vim "$file" +"$line";
}
```

![1557498797990.png](https://i.loli.net/2019/05/10/5cd58bea71b74.png)

