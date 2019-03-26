$oldvids = Get-ChildItem ogg\shaxx\*.ogg -Recurse
foreach ($oldvid in $oldvids) {
    $newvid = [io.path]::ChangeExtension($oldvid.FullName, '.mp3')
    ffmpeg -i $oldvid.FullName $newvid
}