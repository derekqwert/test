@echo off

:: Output file name
set OUTPUT_FILE=compiled_codebase.txt

:: Directory to scan (use . for the current directory)
set DIRECTORY=.

:: Clear the output file if it exists
echo. > %OUTPUT_FILE%

echo Compiling code files into %OUTPUT_FILE%...

:: Loop through all files recursively in the directory
for /r "%DIRECTORY%" %%I in (*) do (
    if exist "%%I" (
        echo --- Start of %%I --- >> %OUTPUT_FILE%
        type "%%I" >> %OUTPUT_FILE%
        echo. >> %OUTPUT_FILE%
        echo --- End of %%I --- >> %OUTPUT_FILE%
        echo. >> %OUTPUT_FILE%
    ) else (
        echo Skipped: %%I (file not found)
    )
)

echo Compilation complete! Output saved to %OUTPUT_FILE%.
