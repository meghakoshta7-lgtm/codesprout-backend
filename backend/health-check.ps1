$services = @(
    @{Name="Gateway";   Url="http://localhost:3000/api/health"},
    @{Name="Auth";      Url="http://localhost:3001/health"},
    @{Name="Content";   Url="http://localhost:3002/health"},
    @{Name="Social";    Url="http://localhost:3003/health"},
    @{Name="Execution"; Url="http://localhost:3004/health"},
    @{Name="Payment";   Url="http://localhost:3005/health"}
)

while ($true) {
    Clear-Host
    Write-Host "========================================" -ForegroundColor Cyan
    Write-Host "  Microservice Health Check - $(Get-Date -Format 'HH:mm:ss')" -ForegroundColor Cyan
    Write-Host "========================================" -ForegroundColor Cyan

    foreach ($svc in $services) {
        try {
            $r = Invoke-WebRequest -Uri $svc.Url -UseBasicParsing -TimeoutSec 3
            $data = $r.Content | ConvertFrom-Json
            $name = if ($data.service) { $data.service } else { $svc.Name.ToLower() }
            Write-Host "  [$name] $($svc.Name)" -NoNewline
            Write-Host "  UP" -ForegroundColor Green
        } catch {
            Write-Host "  $($svc.Name)" -NoNewline
            Write-Host "  DOWN" -ForegroundColor Red
        }
    }

    Write-Host "----------------------------------------" -ForegroundColor Gray
    Write-Host "  Checking again in 10s... (Ctrl+C to exit)" -ForegroundColor Yellow
    Write-Host "========================================" -ForegroundColor Cyan
    Start-Sleep -Seconds 10
}