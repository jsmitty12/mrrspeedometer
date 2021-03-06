function Create-Icon {
    [CmdletBinding()]
    param (
        [Parameter(Mandatory)]
        [string]$InputFilename,

        [Parameter(Mandatory)]
        [int32]$IconSizeX,

        [ValidateNotNullOrEmpty()]
        [int32]$IconSizeY=$IconSizeX
    )

    Write-Verbose -Message "Generating a ${IconSizeX}x${IconSizeY} icon from $InputFilename"
    $OutputFilename = "icon-${IconSizeX}x${IconSizeY}.png"
    inkscape -w $IconSizeX -h $IconSizeY $InputFilename -o $OutputFilename
}

$env:path += ";C:\Program Files\Inkscape\bin"

$InputFilename = "speed-black-18dp.svg"

Create-Icon $InputFilename 128
Create-Icon $InputFilename 144
Create-Icon $InputFilename 152
Create-Icon $InputFilename 192
Create-Icon $InputFilename 384
Create-Icon $InputFilename 512
Create-Icon $InputFilename  72
Create-Icon $InputFilename  96
