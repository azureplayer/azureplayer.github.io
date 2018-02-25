$(window).on('load', function() { //makes sure the whole site is loaded 
    $('#status').fadeOut(); //will first fade out the loading animation 
    $('#preloader').delay(500).fadeOut('slow'); //will fade out the white DIV that covers the website. 
    // checkTouchScreen();
})

$(document).ready(function() {
    (function(window, undefined) {
        var player = document.getElementById('ap');
        var audio;
        var preloadBar = player.querySelector('.line_preload');
        var seeking = false;
        var rightClick = false;
        var progressBar = player.querySelector('.line_played');
        var trackList = player.querySelector('.player_playlist_list');
        var t = {
            playList: [{
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/the_weeknd_reminder.aac',
                'thumb': 'https://i.redd.it/nmv7v8mqzs0y.png',
                'trackName': 'Reminder',
                'trackArtist': 'The Weeknd',
                'trackAlbum': 'Starboy',
                'time': '3:50'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/g_eazy_him_and_i.aac',
                'thumb': 'https://images.complex.com/complex/images/c_fill,g_center,w_1200/fl_lossy,pg_1,q_auto/yazjorhuv8qfhvhhfhvj/g-eazy-halsey-single-art-him-i',
                'trackName': 'Him & I',
                'trackArtist': 'G-Eazy & Halsey',
                'trackAlbum': 'The Beautiful & Damned',
                'time': '4:46'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/g_eazy_me_myself_and_i.aac',
                'thumb': 'https://images.rapgenius.com/8afcead7a7ebb5b09504d86ed6851610.1000x1000x1.png',
                'trackName': 'Me, Myself and I',
                'trackArtist': 'G-Eazy x Bebe Rexha',
                'trackAlbum': 'When It Is Dark Out',
                'time': '5:48'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/lox_chatterbox_confess.aac',
                'thumb': 'https://avatars.yandex.net/get-music-content/63210/e868018d.a.3558890-1/m1000x1000',
                'trackName': 'Confess',
                'trackArtist': 'Lox Chatterbox',
                'trackAlbum': 'How to Sell Your Soul',
                'time': '3:49'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/example_kickstarts.aac',
                'thumb': 'https://aceplaylist.files.wordpress.com/2010/10/example-kickstarts.jpg',
                'trackName': 'Kickstarts',
                'trackArtist': 'Example',
                'trackAlbum': 'Would Not Go Quietly',
                'time': '3:05'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/crazy_loop.aac',
                'thumb': 'https://s.mxmcdn.net/images-storage/albums/3/8/6/6/5/3/28356683_350_350.jpg',
                'trackName': 'Crazy Loop (Mm-Ma-Ma)',
                'trackArtist': 'Crazy Loop',
                'trackAlbum': 'The Power of Shower',
                'time': '3:47'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/crazy_loop_joanna.aac',
                'thumb': 'http://alltorrents.ucoz.com/Pop/Crazy_Loop.jpg',
                'trackName': 'Joanna (Shut up)',
                'trackArtist': 'Crazy Loop',
                'trackAlbum': 'The Power of Shower',
                'time': '3:43'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/two_feet_go_fuck_yourself.aac',
                'thumb': 'http://images.genius.com/dcb01596eee7697107b61301478ef039.1000x1000x1.jpg',
                'trackName': 'Go F*ck Yourself',
                'trackArtist': 'Two Feet',
                'trackAlbum': 'First Steps',
                'time': '2:10'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/imagine_dragons_believer.aac',
                'thumb': 'http://www.lemonademagazine.net/wp-content/uploads/2017/03/Imagine-Dragons-Believer.jpg',
                'trackName': 'Believer',
                'trackArtist': 'Imagine Dragons',
                'trackAlbum': 'Evolve',
                'time': '3:36'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/inna_nirvana.aac',
                'thumb': 'http://coverlandia.net/sites/default/files/artworks/music/387261516041029.png',
                'trackName': 'Nirvana',
                'trackArtist': 'INNA',
                'trackAlbum': 'Nirvana',
                'time': '3:14'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/datsik_nasty.aac',
                'thumb': 'https://i1.sndcdn.com/artworks-000197455646-voyt6r-t500x500.jpg',
                'trackName': 'Nasty',
                'trackArtist': 'Datsik & Virtual Riot',
                'trackAlbum': 'Sensei',
                'time': '3:39'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/getter_head_splitter.aac',
                'thumb': 'https://nesthq.com/wp-content/uploads/2015/05/GETTER--1024x1024.jpg',
                'trackName': 'Head Splitter',
                'trackArtist': 'Getter',
                'trackAlbum': 'Allegiance',
                'time': '3:29'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/timeflies_raincoat.aac',
                'thumb': 'https://pbs.twimg.com/media/C_e9O7gXgAMnl9b.jpg',
                'trackName': 'Raincoat',
                'trackArtist': 'Timeflies ft. Shy Martin',
                'trackAlbum': 'Too Much',
                'time': '3:36'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/timeflies_once_in_a_while.aac',
                'thumb': 'http://www.skyelyfe.com/wp-content/uploads/2016/02/timeflies-once-in-a-while-skyelyfe.jpg',
                'trackName': 'Once In a While',
                'trackArtist': 'Timeflies',
                'trackAlbum': 'no album',
                'time': '3:37'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/luis_fonsi_echame_la_culpa.aac',
                'thumb': 'https://images.genius.com/b869e819b95458855f985e299452c753.1000x1000x1.jpg',
                'trackName': 'Échame la culpa',
                'trackArtist': 'Luis Fonsi, Demi Lovato',
                'trackAlbum': 'no album',
                'time': '3:30'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/big_sean_idfwu.aac',
                'thumb': 'https://pbs.twimg.com/media/C4E0zJJUYAAiA3r.jpg',
                'trackName': 'IDFWU',
                'trackArtist': 'Big Sean ft. E-40',
                'trackAlbum': 'Dark Sky Paradise',
                'time': '5:47'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/g_eazy_i_mean_it.aac',
                'thumb': 'https://lastfm-img2.akamaized.net/i/u/770x0/e1545071f2640e40f41c384e77410aee.jpg',
                'trackName': 'I Mean It',
                'trackArtist': 'G-Eazy ft. Remo',
                'trackAlbum': 'These Things Happen',
                'time': '3:57'
            }, {
                'file': 'https://raw.githubusercontent.com/azureplayer/azureplayer.github.io/master/res/diss_youtube_ro.mp3',
                'thumb': 'https://s10.postimg.org/4fya4dhhl/cover.jpg',
                'trackName': 'Disstrack YouTube Romania',
                'trackArtist': 'Quicky Boy',
                'trackAlbum': 'Smecer',
                'time': '2:59'
            }]
        };
        var arr = t.playList;
        var randomArr = arr.slice();
        addRandomLi.called = false;

        function addPlaylistLi() {
            for (var index = 0; index < arr.length; index++) {
                var trackFile = arr[index].file;
                var trackName = arr[index].trackName;
                var trackArtist = arr[index].trackArtist;
                var trackThumb = arr[index].thumb;
                var trackTime = arr[index].time;
                var count = index + 1;
                var html = "";

                html += '<li class="player_playlist_item" song="' + trackFile + '" cover="' + trackThumb + '" artist="' + trackArtist + '" data-track="' + count + '">' +
                    '<div class="song_block" title="' + trackArtist + ' – ' + trackName + '">' +
                    '<p class="title_block">' + trackName + '</p>' +
                    '<p class="artist_block">' + trackArtist + '</p>' +
                    '</div>' +
                    '<div class="song_time">' + trackTime + '</div>' +
                    '</li>';

                $(trackList).append(html);
            }
        }
        addPlaylistLi();
        clickOnSong();

        //Initialize
        initAudio($('.player_playlist_list li:first-child'));

        //Initializer Function
        function initAudio(element) {
            var song = element.attr('song');
            var title = $('.title_block', element).text();
            var artist = $('.artist_block', element).text();
            var cover = element.attr('cover');

            progressBar.closest('.timeline').addEventListener('mousedown', handlerBar, false);
            progressBar.closest('.timeline').addEventListener('mousemove', seek, false);
            document.documentElement.addEventListener('mouseup', seekingFalse, false);

            //Create Audio Object
            audio = new Audio(song);
            timeUpdate();
            autoPlayNext();

            //Set Current time to 00:00
            if (!audio.currentTime) {
                $('.time_played').html('0:00')
            }

            //Add title and artist name on main paige 
            $('#title').attr('title', artist + " – " + title).text(title);
            $('#artist').attr('title', artist + " – " + title).text(artist);

            //Insert Cover image
            var a = {
                    'background-image': 'url(' + cover + ')'
                },
                //No Cover image
                b = {
                    'background-image': 'url(https://s30.postimg.org/shr4aygpt/default_album_art_blue2.jpg)'
                }
            //If Cover exists show it
            if (cover !== '') {
                $('.cover').css(a);
            }
            //If Cover not exist show Default cover image
            else {
                $('.cover').css(b);
            }

            $('.player_playlist_list li').removeClass('active');
            element.addClass('active');
        }

        //Play and Pause button
        $('.play_btn').on('click', function() {
            if (!audio.paused) {
                //Pause action
                audio.pause();
            } else {
                //Play action
                audio.play();
            }
            $('#play_circle').toggleClass('glyphicon-play').toggleClass('glyphicon-pause');
            $('#npAction').text(function(i, text) {
                return text === "PAUSED..." ? "NOW PLAYING" : "PAUSED...";
            })
            $('.time_played').fadeIn(400);
            timeUpdate();
        })

        //Next Button
        $('.next_btn').on('click', function() {
            clearTime();
          console.log("audio next");
            if (audio.paused) {
                $('#play_circle').removeClass('glyphicon-play').addClass('glyphicon-pause');
                $('#npAction').text(function(i, text) {
                    if (text === "PAUSED...") {
                        return "NOW PLAYING";
                    }
                })
            }
            audio.pause();
            audio.loop = false;
            $('.repeat_btn').removeClass('active');
            var next = $('.player_playlist_list li.active').next();
            if (next.length == 0) {
                next = $('.player_playlist_list li:first-child');
            }
            initAudio(next);
            audio.load();
            audio.play();
            timeUpdate();
        })

        //Prev Button
        $('.prev_btn').on('click', function() {
            clearTime();
            if (audio.paused) {
                $('#play_circle').removeClass('glyphicon-play').addClass('glyphicon-pause');
                $('#npAction').text(function(i, text) {
                    if (text === "PAUSED...") {
                        return "NOW PLAYING";
                    }
                })
            }
            audio.pause();
            audio.loop = false;
            $('.repeat_btn').removeClass('active');
            var prev = $('.player_playlist_list li.active').prev();
            if (prev.length == 0) {
                prev = $('.player_playlist_list li:last-child');
            }
            initAudio(prev);
            audio.load();
            audio.play();
            timeUpdate();
        })

        //Repeat Button
        $('.repeat_btn').on('click', function() {
            if (audio.loop == false) {
                audio.loop = true;
                $('.repeat_btn').addClass('active');
            } else {
                audio.loop = false;
                $('.repeat_btn').removeClass('active');
            }
        })

        //Random Button
        $('.random_btn').on('click', function() {
            if (addRandomLi.called == false) {
                addRandomLi.called = true;
                $(trackList).html('');
                addRandomLi();
                $('.random_btn').addClass('active');
            } else if (addRandomLi.called == true) {
                addRandomLi.called = false;
                $(trackList).html('');
                addPlaylistLi();
                $('.random_btn').removeClass('active');
            }

            //       if (!audio.paused) {

            //       }
            //       audio.pause();
            //       clearTime();
            //       audio.loop = false;
            //       $('.repeat_btn').removeClass('active');

            clickOnSong();
            // initAudio($('.player_playlist_list li:first-child'));
            // if (audio.paused) {
            //   $('#play_circle').removeClass('glyphicon-play').addClass('glyphicon-pause');
            //   $('#npAction').text(function(i, text) {
            //     if (text === "PAUSED...") {
            //       return "NOW PLAYING";
            //     }
            //   })
            // }
            // audio.play();
            // timeUpdate();
        })

        function addRandomLi() {
            // addRandomLi.called = true;
            randomArr = shuffle(randomArr);
            for (var index = 0; index < randomArr.length; index++) {
                trackFile = randomArr[index].file;
                trackName = randomArr[index].trackName;
                trackArtist = randomArr[index].trackArtist;
                trackThumb = randomArr[index].thumb;
                trackTime = randomArr[index].time;
                var count = index + 1;
                var html = "";
                html += '<li class="player_playlist_item" song="' + trackFile + '" cover="' + trackThumb + '" artist="' + trackArtist + '" data-track="' + count + '">' +
                    '<div class="song_block" title="' + trackArtist + ' – ' + trackName + '">' +
                    '<p class="title_block">' + trackName + '</p>' +
                    '<p class="artist_block">' + trackArtist + '</p>' +
                    '</div>' +
                    '<div class="song_time">' + trackTime + '</div>' +
                    '</li>';
                $(trackList).append(html);
            }
        }

        //CLICK ON SONG
        function clickOnSong() {
            $('.player_playlist_list li').on('click', function() {
                if ($(this).hasClass('active') == true) {
                    if (audio.paused) {
                        $('#play_circle').removeClass('glyphicon-play').addClass('glyphicon-pause');
                        $('#npAction').text(function(i, text) {
                            if (text === "PAUSED...") {
                                return "NOW PLAYING";
                            }
                        })
                        audio.play();
                    } else {
                        $('#play_circle').addClass('glyphicon-play').removeClass('glyphicon-pause');
                        $('#npAction').text(function(i, text) {
                            if (text === "NOW PLAYING") {
                                return "PAUSED...";
                            }
                        })
                        audio.pause();
                    }
                } else if ($(this).hasClass('active') == false) {
                    audio.pause();
                    clearTime();
                    audio.loop = false;
                    $('.repeat_btn').removeClass('active');
                    $('#play_circle').removeClass('glyphicon-play').addClass('glyphicon-pause');
                    $('#npAction').text(function(i, text) {
                        if (text === "PAUSED...") {
                            return "NOW PLAYING";
                        }
                    })
                    initAudio($(this));
                    audio.load();
                    audio.play();
                    timeUpdate();
                }
            })
        }

        function timeUpdate() {
            audio.addEventListener('loadedmetadata', function() {
                var time = audio.duration;

                $(audio).bind('timeupdate', function() {
                    var value = 0;
                    if (audio.currentTime > 0) {
                        value = Math.floor((100 / time) * audio.currentTime);
                    }
                    $('.line_played').css('width', value + '%');

                    //Get Hours & Minutes
                    var curSecs = parseInt(audio.currentTime % 60);
                    var curMins = parseInt((audio.currentTime) / 60) % 60;

                    var secs = parseInt(time % 60);
                    var mins = parseInt((time) / 60) % 60;

                    //Add 0 if les than 10
                    if (curSecs < 10) {
                        curSecs = '0' + curSecs;
                    }
                    if (secs < 10) {
                        secs = '0' + secs;
                    }
                    $('.time_played').html(curMins + ':' + curSecs);
                    $('.full_time').html(mins + ':' + secs);

                    if (audio.buffered) {
                        var buffered = audio.buffered;
                        if (buffered.length) {
                            var loaded = Math.round(100 * buffered.end(0) / time);
                            preloadBar.style.width = loaded + '%';
                        }
                    }
                })
            })
        }

        function clearTime() {
            $('.line_played').css('width', '0%');
            $('.time_played').html('0:00');
            // $('.full_time').html('0:00');
        }

        //Shuffle function
        function shuffle(array) {
            var currentIndex = array.length,
                temporaryValue, randomIndex;

            // While there remain elements to shuffle...
            while (0 !== currentIndex) {

                // Pick a remaining element...
                randomIndex = Math.floor(Math.random() * currentIndex);
                currentIndex -= 1;

                // And swap it with the current element.
                temporaryValue = array[currentIndex];
                array[currentIndex] = array[randomIndex];
                array[randomIndex] = temporaryValue;
            }
            return array;
        }
      
        //After song ends play next song
        function autoPlayNext() {
            $(audio).on("ended", function() {
                clearTime();
                // audio.pause();
                var next = $('.player_playlist_list li.active').next();
                if (next.length === 0) {
                    next = $('.player_playlist_list li:first-child');
                }
                initAudio(next);
                audio.load();
                audio.play();
                timeUpdate();
            })
        }

        //Move and seeking Progress Bar and set Current Time
        function moveBar(evt, el, dir) {
            var value;
            if (dir === 'horizontal') {
                value = Math.round(((evt.clientX - el.offset().left) + window.pageXOffset) * 100 / el.parentNode.offsetWidth);
                el.style.width = value + '%';
                return value;
            }
        }

        function handlerBar(evt) {
            rightClick = (evt.which === 3) ? true : false;
            seeking = true;
            seek(evt);
        }

        function seek(evt) {
            if (seeking && rightClick === false && audio.readyState !== 0) {
                var value = moveBar(evt, progressBar, 'horizontal');
                audio.currentTime = audio.duration * (value / 100);
            }
        }

        function seekingFalse() {
            seeking = false;
        }

        Element.prototype.offset = function() {
            var el = this.getBoundingClientRect(),
                scrollLeft = window.pageXOffset || document.documentElement.scrollLeft;
            return {
                left: el.left + scrollLeft
            };
        };

        (function() {
            $('.playlist_btn').on('click', function() {
                $('.player_playlist').toggleClass('active');
                $('.glyphicon-menu-left').toggleClass('active');
                $('.waves').toggleClass('active');
                $('.album_wrap').toggleClass('active');
                $('.song_playing').toggleClass('active');
                $('.timeline_wrap').toggleClass('active');
                $('.player_btns').toggleClass('active');
                $('.line_played').toggleClass('active');
                $('.full_line').toggleClass('active');
                $('.time_of_song').toggleClass('active');
                $('.timeline_pointer').toggleClass('active');
                $('.line_preload').toggleClass('active');
            })
        })();

        (function() {
            $('.hamburger-menu').on('click', function() {
                $('.bar').toggleClass('active');
                $('.hamburger-menu').toggleClass('active');
                $('.playlist_btn').toggleClass('active');
                $('.nav_menu').toggleClass('active');
                $('.player_fade').toggleClass('active');
            })
            $('.player_fade').on('click', function() {
                $('.bar').removeClass('active');
                $('.hamburger-menu').removeClass('active');
                $('.playlist_btn').removeClass('active');
                $('.nav_menu').removeClass('active');
                $('.player_fade').removeClass('active');
            })
        })();

        // отменить выделение текста
        function preventSelection(element) {
            var preventSelection = false;

            function addHandler(element, event, handler) {
                if (element.attachEvent)
                    element.attachEvent('on' + event, handler);
                else
                if (element.addEventListener)
                    element.addEventListener(event, handler, false);
            }

            function removeSelection() {
                if (window.getSelection) {
                    window.getSelection().removeAllRanges();
                } else if (document.selection && document.selection.clear)
                    document.selection.clear();
            }

            function killCtrlA(event) {
                var event = event || window.event;
                var sender = event.target || event.srcElement;
                if (sender.tagName.match(/INPUT|TEXTAREA/i))
                    return;
                var key = event.keyCode || event.which;
                if (event.ctrlKey && key == 'A'.charCodeAt(0)) // 'A'.charCodeAt(0) можно заменить на 65
                {
                    removeSelection();
                    if (event.preventDefault)
                        event.preventDefault();
                    else
                        event.returnValue = false;
                }
            }
            addHandler(element, 'mousemove', function() {
                if (preventSelection)
                    removeSelection();
            });
            addHandler(element, 'mousedown', function(event) {
                var event = event || window.event;
                var sender = event.target || event.srcElement;
                preventSelection = !sender.tagName.match(/INPUT|TEXTAREA/i);
            });
            addHandler(element, 'mouseup', function() {
                if (preventSelection)
                    removeSelection();
                preventSelection = false;
            });
            addHandler(element, 'keydown', killCtrlA);
            addHandler(element, 'keyup', killCtrlA);
        }
        preventSelection(document);
    })(window);
});

// function checkTouchScreen() {
//   if (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
//     $('body').addClass('touch-screen');
//     return true;
//   } else {
//     $('body').removeClass('touch-screen');
//     return false;
//   }
// }

//черновик

//Shuffle Button
//   function shuffle(array) {
//     var currentIndex = array.length, temporaryValue, randomIndex ;
//     // While there remain elements to shuffle...
//     while (0 !== currentIndex) {
//       // Pick a remaining element...
//       randomIndex = Math.floor(Math.random() * currentIndex);
//       currentIndex -= 1;
//       // And swap it with the current element.
//       temporaryValue = array[currentIndex];
//       array[currentIndex] = array[randomIndex];
//       array[randomIndex] = temporaryValue;
//     }
//     return array;
//   }

//перетягивание Progress Bar упрощённая версия
// $(".timeline").mouseup(function(e) {
//   var leftOffset = e.pageX - $(this).offset().left;
//   var songPercents = leftOffset / $('.timeline').width();
//   audio.currentTime = songPercents * audio.duration;
// });
