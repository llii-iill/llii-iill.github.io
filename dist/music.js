// hexo.extend.injector.register('head_end', '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=536622304&auto=0&height=66"></iframe>', 'about');

// hexo.extend.filter.register('theme_inject', function(injects) {
  // injects.footer.raw('about', '<iframe frameborder="no" border="0" marginwidth="0" marginheight="0" width=330 height=86 src="//music.163.com/outchain/player?type=2&id=536622304&auto=0&height=66"></iframe>');
// });

/* 
const ap = new APlayer({
  container: document.getElementById('aplayer'),
  autoplay: false,
  loop: 'all',
  volume: 0.7,
  listFolded: true,
  listMaxHeight: 60,
  audio: [
      {
          name: 'name1',
          artist: 'artist1',
          url: 'url1.mp3',
          cover: 'cover1.jpg',
      },
      {
          name: 'name2',
          artist: 'artist2',
          url: 'url2.mp3',
          cover: 'cover2.jpg',
      }
  ]
});
 */

const ap = new APlayer({
  container: document.getElementById('aplayer'),
  fixed: true,
  autoplay: false,
  audio: [{
      name: '松烟入墨',
      artist: 'Winky诗',
      url: 'http://music.163.com/song/media/outer/url?id=28765208.mp3',
      cover: 'http://p1.music.126.net/rZ1304NRFlC3a1KoJD-t2A==/109951163781615257.jpg',
  },
  {
    name: '浮生未歇',
    artist: '音频怪物',
    url: 'http://music.163.com/song/media/outer/url?id=184557.mp3',
    cover: 'http://p2.music.126.net/fROEZT7Jzjpq94sZtZZ_XA==/30786325590544.jpg',
},
{
  name: '意中人',
  artist: ' ',
  url: 'http://music.163.com/song/media/outer/url?id=1405349492.mp3',
  cover: 'http://p2.music.126.net/fROEZT7Jzjpq94sZtZZ_XA==/30786325590544.jpg',
},
{
  name: '吹灭小山河',
  artist: ' ',
  url: 'http://music.163.com/song/media/outer/url?id=1412559986.mp3',
  cover: 'http://p2.music.126.net/taWBQliW8wLh_pqXElAeww==/109951164923015271.jpg',
},
{
  name: 'Lemon',
  artist: '米津玄师',
  url: 'http://music.163.com/song/media/outer/url?id=536622304.mp3',
  cover: 'http://p1.music.126.net/jtPZRUFrSS-nRCjW_LYowQ==/109951166521931227.jpg',
}]
});