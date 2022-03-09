function titleCase(str) {
   var splitStr = str.toLowerCase().split(' ');
   for (var i = 0; i < splitStr.length; i++) {
       splitStr[i] = splitStr[i].charAt(0).toUpperCase() + splitStr[i].substring(1);     
   }
   return splitStr.join(' '); 
}

setInterval(showButtonsProtected, 1000);

function showButtonsProtected() {
    try {
        showButtons();
    } catch (ex) {}
}

function showButtons() {
    if (document.querySelector('#copyBranchNameButton')) { return; }
    
    var storyName = document.querySelector('.story-name')
        .innerText.toLowerCase().replace(/ /g, '-');
    var storyId = document.querySelector('.clipboard').value;
    var storyNameTrimmed = storyName;
    
    storyNameTrimmed = storyNameTrimmed.replace('update', '');
    storyNameTrimmed = storyNameTrimmed.replace('use', '');
    storyNameTrimmed = storyNameTrimmed.replace('always', '');
    
    var shortStoryName = storyNameTrimmed.substring(0, 10);
    shortStoryName = shortStoryName.replace('--', '-');
    
    var branchName = `feature/${storyId}-${shortStoryName}`;
    var ticketName = `feat: ${storyId} ${titleCase(storyName.replaceAll('-', ' '))}`;
    
    var header = document.querySelector('.title-container');
    
    var button = document.createElement('span');
    button.id = 'copyBranchNameButton';
    button.innerHTML = '<a class="action micro flat-white" onClick="navigator.clipboard.writeText(\'' + branchName + '\'); return false;"><span class="is-descending fa fa-arrow-up"></span>Copy branch name</a>';
    header.appendChild(button);
    
    var button2 = document.createElement('span');
    button2.innerHTML = '<a class="action micro flat-white" onClick="navigator.clipboard.writeText(\'' + ticketName + '\'); return false;"><span class="is-descending fa fa-arrow-up"></span>Copy ticket name</a>';
    header.appendChild(button2);
}
