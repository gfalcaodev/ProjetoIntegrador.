@echo off
REM ===============================================
REM Script para rodar backend + AI + frontend
REM ===============================================

echo Iniciando backend (Spring Boot)...
start cmd /k "cd backend && mvn spring-boot:run"

timeout /t 10 > nul

echo Iniciando AI Service (Flask)...
start cmd /k "cd ai-service && call venv\Scripts\activate && python app.py"

timeout /t 5 > nul

echo Iniciando Frontend (HTTP server Python)...
start cmd /k "cd frontend && python -m http.server 8080"

echo Todos os serviços iniciados.
