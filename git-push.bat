@echo off
setlocal
cd /d "%~dp0"

set "GIT=git"
where git >nul 2>&1
if errorlevel 1 (
    if exist "%ProgramFiles%\Git\cmd\git.exe" (
        set "GIT=%ProgramFiles%\Git\cmd\git.exe"
    ) else (
        echo Error: Git was not found. Install Git or add it to PATH.
        exit /b 1
    )
)

"%GIT%" rev-parse --is-inside-work-tree >nul 2>&1
if errorlevel 1 (
    echo Error: This folder is not a Git repository.
    exit /b 1
)

"%GIT%" remote get-url origin >nul 2>&1
if errorlevel 1 (
    echo Error: No Git remote named "origin" is configured.
    exit /b 1
)

set "BRANCH="
for /f "delims=" %%B in ('"%GIT%" branch --show-current 2^>nul') do set "BRANCH=%%B"
if not defined BRANCH (
    echo Error: Could not determine the current branch.
    exit /b 1
)

echo.
echo Current branch: %BRANCH%
echo Changes that may be included:
"%GIT%" status --short
echo.
choice /C YN /M "Stage all changes, create a commit, and push to origin"
if errorlevel 2 (
    echo Cancelled. No changes were staged or pushed.
    exit /b 0
)

"%GIT%" add -A
if errorlevel 1 (
    echo Error: Staging changes failed.
    exit /b 1
)

"%GIT%" diff --cached --quiet
if not errorlevel 1 (
    echo There are no changes to commit.
    exit /b 0
)

set "COMMIT_MESSAGE="
set /p "COMMIT_MESSAGE=Enter commit message: "
if not defined COMMIT_MESSAGE (
    echo Error: Commit message cannot be empty.
    exit /b 1
)

"%GIT%" commit -m "%COMMIT_MESSAGE%"
if errorlevel 1 (
    echo Error: Commit failed. Review the Git output above.
    exit /b 1
)

"%GIT%" push -u origin "%BRANCH%"
if errorlevel 1 (
    echo Error: Push failed. Your commit is still saved locally.
    exit /b 1
)

echo.
echo Successfully pushed %BRANCH% to origin.
endlocal
