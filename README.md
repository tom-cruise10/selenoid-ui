# Selenoid UI (Custom Fork)

A modern, full-stack status page for [Selenoid](https://github.com/aerokube/selenoid) featuring built-in user authentication and SQLite persistence.

![ui](docs/img/stats-sessions.png)

## ✨ New Features

- **Built-in Authentication**: Secure Login and Signup system.
- **SQLite Database**: Persistence for user sessions and accounts (stored in `selenoid.db`).
- **Premium UI**: Modernized React frontend with glassmorphism-themed auth pages.
- **GHCR Integration**: Automated image publishing exclusively to GitHub Container Registry.

## 🚀 Usage

We distribute this UI as a lightweight Docker container published to GitHub Container Registry.

### Run with Docker

```bash
docker run -d --name selenoid-ui \
    -p 8080:8080 \
    ghcr.io/tom-cruise10/selenoid-ui:latest \
    --selenoid-uri=http://your-selenoid-host:4444
```

### Run Locally (Go)

1. Build the binary (sync dependencies first):
   ```bash
   go mod tidy
   go build -o selenoid-ui
   ```
2. Start the service:
   ```bash
   ./selenoid-ui --selenoid-uri http://localhost:4444
   ```
   *The `selenoid.db` file will be created automatically on the first run.*

## ⚙️ Configuration Flags

- `--listen` - Host and port to listen on (default `:8080`).
- `--period` - Data refresh period (e.g., `5s` or `1m`).
- `--selenoid-uri` - Selenoid URI to fetch data from.

## 🛡️ Authentication Flow

1. **Initial Access**: Navigate to `http://localhost:8080`. You will be redirected to the Login page.
2. **Signup**: Use the "Sign up" link to create your first administrative user.
3. **Login**: Authenticate to unlock the Dashboard, SSE events, and WebSocket proxies.
4. **Logout**: Clear your session via the Logout button in the header.

## 📦 Deployment (CI/CD)

This project uses GitHub Actions to build and push images to **GitHub Container Registry (GHCR.io)**:
- **Build**: Triggered on every push to `master`.
- **Release**: Triggered on formal GitHub Releases.

> [!IMPORTANT]
> This fork purely uses GHCR for container distribution. Docker Hub and Quay.io are no longer used.
