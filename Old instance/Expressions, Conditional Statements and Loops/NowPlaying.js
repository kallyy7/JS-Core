function nowPlaying(input) {
    let track = input[0];
    let artist = input[1];
    let duration = input[2];

    console.log(`Now Playing: ${artist} - ${track} [${duration}]`);
}

nowPlaying(['Number One', 'Nelly', '4:09'])