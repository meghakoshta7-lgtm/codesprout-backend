$services = @(
    @{Name="Gateway";   Url="https://backend-code-jrrs.onrender.com/health"},
    @{Name="Auth";      Url="https://backend-code-1-purk.onrender.com/health"},
    @{Name="Content";   Url="https://backend-code-content.onrender.com/health"},
    @{Name="Social";    Url="https://backend-code-social.onrender.com/health"},
    @{Name="Execution"; Url="https://backend-code-execution-port-10004-node.onrender.com/health"},
    @{Name="Payment";   Url="https://backend-code-payment.onrender.com/health"}
)

while ($true) {
    Clear-Host
    Write-Host "============================================" -ForegroundColor Cyan
    Write-Host "  Deploy Health Check - $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Cyan
    Write-Host "============================================" -ForegroundColor Cyan

    foreach ($svc in $services) {
        try {
            $r = Invoke-WebRequest -Uri $svc.Url -UseBasicParsing -TimeoutSec 10
            Write-Host "  $($svc.Name)" -NoNewline
            Write-Host "  UP" -ForegroundColor Green
        } catch {
            Write-Host "  $($svc.Name)" -NoNewline
            Write-Host "  DOWN" -ForegroundColor Red
        }
    }

    Write-Host "--------------------------------------------" -ForegroundColor Gray
    Write-Host "  Next check in 10s... (Ctrl+C to exit)" -ForegroundColor Yellow
    Write-Host "============================================" -ForegroundColor Cyan
    Start-Sleep -Seconds 10
}