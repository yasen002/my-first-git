// create a html and a JS file
// Bash:: git init
// add your user anme and email to git :  Bash:: git config --global user.name 'Yasen'
// Bash:: git config --global user.email 'yasen@gmail.com' 
// add html file to git repository:   git add index.html 
// remove the tracked file:  Bash:: git rm --cashed 'index.html'
// add any html files:  Bash:: git add *.html
// add every file Bash:: git add .
// Bash:: git commit    enter i to got insert mode 
// put your comment and Bash::  :wq      to exit.
// or     Bash:: git commit -m Your comment here  
// create a ignore file:  .gitignore     put the file name that you want to ignore inside of that file
// ignore a folder or file type: inside .gitignore file: /folderNmae    or   *txt(filel type)
// to switch branch:  Bash:: git checkout branchName 
// merge two branch:  Bash:: git merge branchName

// remote repository:
// open github create new repository.
// follow the instruction to create new repository on the command line
// once you added your file to the remote reository, {Bash:: git push} to update it

console.log('Hello world');
console.logI('I am trying to know how commit works.')



// for more info checkout this website
// src: https://www.atlassian.com/git/tutorials/using-branches
// The git fetch command downloads commits, files, and refs from a remote repository into your local repo. Fetching is what you do when you want to see what everybody else has been working on. 

// git fetch: will download the remote content but not update your local repo's working state, leaving your current work intact.


// git pull is the more aggressive alternative, it will download the remote content for the active local branch and immediately execute git merge to create a merge commit for the new remote content. If you have pending changes in progress this will cause conflicts and kickoff the merge conflict resolution flow.

//  git branch command will output a list of the local branch refs. Examining the contents of the /.git/refs/heads/ directory would reveal similar output.

//  Remote branch refs live in the ./.git/refs/remotes/ directory. 
// git branch -r

// So, unlike SVN, synchronizing your local repository with a remote repository is actually a two-step process: fetch, then merge. The git pull command is a convenient shortcut for this process.

// GIT Fetch:
// 1.configure the remote repo using the git remote command.
// 2.pass the remote name to git fetch to download the contents.
// 3. integrate our work into our local working copy: git checkout command to checkout the newly downloaded remote branch.
// 4. create a new local branch named local_feature_branch: 
// git checkout -b local_feature_branch

// Synchronize origin with git fetch:
// 1.git fetch origin
// git fetch gives you access to the entire branch structure of another repository.
// 2.To see what commits have been added to the upstream master, you can run a git log using origin/master as a filter:  

//create gitignore file:  touch .gitignore
