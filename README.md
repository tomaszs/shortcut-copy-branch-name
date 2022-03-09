# Shortcut: Copy branch name and Conventional Commits ticket name

A Shortcut extension that allows you to easily copy a branch name from a ticket.

- No GitHub, GitLab etc. integration needed
- No Shortcut admin rights needed

## Features

a) Easily copy a branch name in GitFlow naming convention (and shorten it too!)
b) Copy the name of the branch in Conventional Commits naming convention (feat: something)

![](shortcut-copy-branch-name.png)

3. Easy to customise. It is pure, editable JavaScript

## How to use
1. Install 'Run JavaScript' extension (https://chrome.google.com/webstore/detail/run-javascript/lmilalhkkdhfieeienjbiicclobibjao?hl=en) for Chrome, or any other extension that allows you to run JavaScript in the browser
2. Open Shortcut ticket
3. Paste code from [shortcut-copy-branch-name.js](https://github.com/tomaszs/shortcut-copy-branch-name/blob/main/shortcut-copy-branch-name.js) into Run JavaScript window, and select 'Enable on <your website>' checkbox
4. Click Save and Run

## Expected result

Every time you open a Shortcut ticket, below the name there will be a button called 'Copy branch name' and 'Copy ticket name'.

Copy branch name will prepare a branch name from the ticket number eg. 'feature/CR-182' and copy it to the clipboard. Now you can go to console and create your branch faster.

Copy ticket name will prepare a ticket name in Conventional Commits convention eg. 'feat: Fix that damn thing' and copy it to the clipboard, so you can use it for a Pull Request name or a commit

## Security

Validate the security of your browser, JS execution extension and your code to make sure, you won't copy and execute malcious script in your console.

## Become a patron

Become a patron for 3$ and receive amazing Patreon benefits:

https://www.patreon.com/tomaszs

## Contribution

You can commit a MR if you like

## Authors

Tomasz Smykowski (http://tomasz-smykowski.com)
