var userFeed = new Instafeed({
    get: 'user',
    userId: '4078788353',
    accessToken: '4078788353.1677ed0.4112454355f04fcf88f3db2939f3cf27',
    resolution: 'standard_resolution',
    limit: 7,
    template: '<a href="{{link}}" target="_blank"><img src="{{image}}" /></a>',
    // filter #lotusvibes365 for designs
    filter: function(image) {
    return image.tags.indexOf('lotusvibes365') >= 0;
    }
});

userFeed.run();
