const container = document.getElementById('videoContainer');
const video = container.querySelector('.video-element');
const poster = container.querySelector('.video-poster');

// تشغيل الفيديو عند مرور الماوس
container.addEventListener('mouseenter', () => {
  poster.style.opacity = '0';
  video.style.display = 'block';
  video.play();
});

container.addEventListener('mouseleave', () => {
  video.pause();
  video.currentTime = 0;
  video.style.display = 'none';
  poster.style.opacity = '1';
});

// دعم الضغط المطوّل على الهاتف
let pressTimer;
container.addEventListener('touchstart', () => {
  pressTimer = setTimeout(() => {
    poster.style.opacity = '0';
    video.style.display = 'block';
    video.play();
  }, 500); // مدة الضغط قبل التشغيل
});

container.addEventListener('touchend', () => {
  clearTimeout(pressTimer);
});
