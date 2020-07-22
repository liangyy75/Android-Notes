
* 1
    * git checkout -- <file>
    * git add <file> | <directory>
    * git reset <file>
    * git reset --soft | --hard <commitId>
    * git commit -m "message"
    * **git stash**
* 2
    * git branch <branchName>
    * git checkout -b <branchName>
    * git checkout <branchName>
    * git checkout <tag> | <commitId>
    * git branch -d <branchName>
    * git push origin -delete <branchName>
    * git push <remoteReposity> <localBranch>(:<remoteBranch>)
* 3
    * git fetch <remoteReposity> <localBranch>(:<remoteBranch>)
    * git pull <remoteReposity> <localBranch>(:<remoteBranch>) == git fetch + git merge
    * git merge <targetBranch>
    * git rebase <targetBranch>
    * **git reflog**
    * **git worktree**
