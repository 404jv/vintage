
let songAlreadyPlaying = false;

export function playSongNewMessage() {
  if (songAlreadyPlaying) return;

  songAlreadyPlaying = true;

  const audio = new Audio('/new_message_notification_windows2007.mp3');
  audio.volume = 0.1;
  audio.muted = true;
  audio.play();

  songAlreadyPlaying = false;
}

export function playSongNewUserOnline() {
  if (songAlreadyPlaying) return;

  songAlreadyPlaying = true;

  const audio = new Audio('/new_user_online_msn2002.mp3');
  audio.volume = 1;
  audio.muted = true;
  audio.play();

  songAlreadyPlaying = false;
}
