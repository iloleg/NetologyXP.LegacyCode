player.showHighScoreList = function(pageToken) {
    document.querySelector('#highScoreListDiv').innerHTML = '';
    document.querySelector('#highScoreListDiv').style.display = 'block';
    // Create the request.
    LEADERBOARD_ID = document.getElementById('leaderboardIdShowHS').value;
    var request = gapi.client.games.scores.list(
        {leaderboardId: LEADERBOARD_ID,
            collection: 'PUBLIC',
            timeSpan: 'all_time',
            pageToken: pageToken,
            maxResults: '10'});
    // шов
    request.execute(
        function(response) {
            //шов
            console.log('High score', response);
            if (response.error) {
                alert('Error ' + response.error.code + ': ' + response.message);
                return;
            }
            var root = document.getElementById('highScoreListDiv');
            //шов
            player.createPlayerList(root, response.items, true);//show
            if (response.prevPageToken) {
                root.appendChild(
                    //шов
                    utilities.createButton('Prev', response.prevPageToken,
                        function(event) {
                            player.showHighScoreList(event.target.value);
                        }));
            }
            if (response.nextPageToken) {
                root.appendChild(
                    //шов
                    utilities.createButton('Prev', response.prevPageToken,//show
                        function(event) {
                            player.showHighScoreList(event.target.value);
                        }));
            }
        });
};