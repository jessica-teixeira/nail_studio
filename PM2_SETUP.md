# PM2 Configuration for Jessy Nail Studio

## Setup Instructions

### 1. Install PM2 globally
```bash
npm install -g pm2
```

### 2. Install project dependencies
```bash
npm install
```

### 3. Start the application with PM2
```bash
pm2 start ecosystem.config.js
```

### 4. PM2 Commands

#### Start the application
```bash
pm2 start ecosystem.config.js
```

#### Stop the application
```bash
pm2 stop jessy-nail-studio
```

#### Restart the application
```bash
pm2 restart jessy-nail-studio
```

#### View logs
```bash
pm2 logs jessy-nail-studio
```

#### Monitor the application
```bash
pm2 monit
```

#### Delete the application from PM2
```bash
pm2 delete jessy-nail-studio
```

### 5. Save PM2 configuration
```bash
pm2 save
pm2 startup
```

## Configuration Details

- **App Name**: jessy-nail-studio
- **Port**: 3000
- **Instances**: 1
- **Auto-restart**: Enabled
- **Max Memory**: 1GB
- **Environment**: Production

## Notes

- The application serves static files using `serve` package
- Default port is 3000 but can be changed in ecosystem.config.js
- PM2 will automatically restart the app if it crashes
- Logs are available via `pm2 logs` command
