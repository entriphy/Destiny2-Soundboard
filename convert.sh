for i in ogg/calus/*.ogg; do ffmpeg -i "$i" "${i%.*}.mp3"; done
