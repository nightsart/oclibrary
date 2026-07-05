param(
    [switch]$Watch
)

$galleryDir = Join-Path $PSScriptRoot 'images/gallery'
$manifestPath = Join-Path $galleryDir 'gallery-manifest.json'

function Write-GalleryManifest {
    $images = Get-ChildItem -Path $galleryDir -Filter '*.webp' -File |
        Sort-Object Name |
        ForEach-Object { "images/gallery/$($_.Name)" }

    @{ images = $images } |
        ConvertTo-Json -Depth 2 |
        Set-Content -Path $manifestPath -Encoding UTF8

    Write-Host "Updated gallery manifest with $($images.Count) images."
}

Write-GalleryManifest

if (-not $Watch) {
    return
}

$watcher = New-Object System.IO.FileSystemWatcher $galleryDir, '*.webp'
$watcher.IncludeSubdirectories = $false
$watcher.NotifyFilter = [System.IO.NotifyFilters]'FileName, LastWrite'
$watcher.EnableRaisingEvents = $true

$refreshManifest = {
    $images = Get-ChildItem -Path $using:galleryDir -Filter '*.webp' -File |
        Sort-Object Name |
        ForEach-Object { "images/gallery/$($_.Name)" }

    @{ images = $images } |
        ConvertTo-Json -Depth 2 |
        Set-Content -Path $using:manifestPath -Encoding UTF8

    Write-Host "Updated gallery manifest with $($images.Count) images."
}

Register-ObjectEvent -InputObject $watcher -EventName Created -Action $refreshManifest | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Deleted -Action $refreshManifest | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Renamed -Action $refreshManifest | Out-Null
Register-ObjectEvent -InputObject $watcher -EventName Changed -Action $refreshManifest | Out-Null

Write-Host 'Watching images/gallery for .webp changes. Press Ctrl+C to stop.'
while ($true) {
    Wait-Event -Timeout 1 | Out-Null
}
