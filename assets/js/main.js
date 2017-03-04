$(document).ready(function(){


var userFeed = new Instafeed({
    get: 'user',
    userId: '4078788353',
    accessToken: '4078788353.1677ed0.4112454355f04fcf88f3db2939f3cf27',
    resolution: 'standard_resolution',
    limit: 6,
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
});

userFeed.run();

});
