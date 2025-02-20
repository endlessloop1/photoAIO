# Photo Management App

## Overview
A self-hosted photo management application designed for homelab users. Deployed via Docker with all dependencies included, accessible through web browsers or future mobile apps. Supports multiple user accounts and large photo libraries with network folder support.

### Technology Stack

#### Frontend
- **Framework**: React with TypeScript
  - Fast development and strong type safety
  - Rich ecosystem of libraries and tools
- **UI Framework**: Tailwind CSS
  - Utility-first CSS framework
  - Responsive design out of the box
- **State Management**: Redux Toolkit
  - Predictable state container
  - Built-in dev tools and middleware
- **Build Tool**: Vite
  - Lightning-fast HMR
  - Optimized production builds
- **Authentication**: JWT with refresh tokens

#### Backend
- **Framework**: FastAPI (Python)
  - High performance async capabilities
  - Automatic OpenAPI documentation
  - Type hints and validation
- **Database**: PostgreSQL
  - Robust and scalable
  - Advanced indexing capabilities
  - JSON support for flexible metadata
- **ORM**: SQLAlchemy
  - Async support
  - Powerful query builder
  - Migration management
- **AI & Image Processing**:
  - OpenCV for image manipulation
  - TensorFlow for AI-based tagging
  - Tesseract for OCR capabilities
- **Task Queue**: Celery
  - Async task processing
  - Scheduled jobs
  - Progress tracking

#### Storage & Caching
- **File Storage**: Direct network mount (NFS/SMB)
  - Native filesystem performance
  - Simple backup integration
- **Caching Layer**: Redis
  - Session management
  - Task queue backend
  - Performance optimization

#### DevOps & Infrastructure
- **Containerization**: Docker
  - Multi-stage builds
  - Production-optimized images
- **Orchestration**: Docker Compose
  - Service dependency management
  - Environment configuration
- **Reverse Proxy**: Caddy
  - Automatic HTTPS
  - Modern HTTP/3 support
- **Monitoring Stack**:
  - Prometheus for metrics
  - Grafana for visualization
  - Loki for log aggregation

## Development Strategy

### Phase 1: Core Infrastructure Setup
```text
1. Docker Environment
   - Base images for services
   - Docker-compose network
   - Shared volume configuration

2. Backend API Skeleton
   - FastAPI application structure
   - Health check endpoint
   - Database connection setup

3. Frontend Foundation
   - React app initialization
   - Basic routing setup
   - API client configuration

4. Base Services
   - PostgreSQL container
   - Redis container
   - Migration system
```

### Phase 2: Basic Photo Management
```text
1. File System Integration
   - Network mount handling
   - File watcher service
   - Thumbnail generation

2. Metadata Processing
   - EXIF extraction
   - Basic indexing
   - Database schema v1

3. Web Interface
   - Photo grid view
   - Date filtering
   - Basic search

4. API Endpoints
   - Library scanning
   - Photo listing
   - Metadata retrieval
```

### Phase 3: AI Integration
```text
1. Processing Pipeline
   - Celery task setup
   - OpenCV integration
   - TensorFlow model loading

2. Core Features
   - Face detection
   - Object recognition
   - Color analysis

3. UI Enhancements
   - Tag management
   - Search filters
   - Batch operations
```

### Phase 4: Advanced Features
```text
1. User System
   - JWT authentication
   - Role management
   - Preferences storage

2. Smart Organization
   - Auto-tagging
   - Duplicate detection
   - Folder rules engine

3. Mobile Support
   - PWA setup
   - Responsive UI
   - Offline caching
```

## Roadmap

### Planned Features
1. Mobile applications (Android/iOS)
2. Advanced editing capabilities
3. Smart album generation
4. Cloud service integration
5. Sharing and collaboration tools

### Future Enhancements
- Enhanced AI capabilities
- Performance optimizations
- Additional format support
- Extended API functionality

---

## Key Features

### User Management
- Multi-user support with individual libraries and settings
- Role-based access control
- Personalized workspace for each user

### Library Management
- Add folders from local/network directories
- Non-destructive indexing and organization
- Centralized interface for all photos
- Automated folder watching for new content

### AI-Powered Features
- Intelligent tagging (faces, objects, colors, places)
- OCR for text extraction
- Smart deduplication with visual similarity detection
- Face recognition and grouping

### Organization Tools
- Configurable folder restructuring
- Metadata-based organization
- Smart albums and collections
- Advanced search capabilities

### Technical Features
- Docker-based deployment
- PostgreSQL/SQLite database backend
- Modern web interface (React/Vue)
- FastAPI/Flask backend
- Persistent storage for preferences and metadata

## Workflow

### 1. User Setup
- Registration and authentication
- Admin configuration options
- Workspace initialization

### 2. Library Configuration
- Source folder addition
  - Local directories
  - Network locations
- Initial scan and indexing
- Metadata extraction

### 3. Photo Organization
#### Views
- Timeline
- Grid
- Album
- Location-based

#### Filtering Options
- Date ranges
- Locations
- Tags
- Faces
- Custom metadata

### 4. Smart Features
#### Deduplication
- Hash-based detection
- Visual similarity analysis
- Side-by-side comparison
- Batch processing options

#### AI Processing
- Facial recognition
- Object detection
- Scene classification
- Text extraction
- Auto-tagging

#### Photo Management
- Metadata editing
- Basic image adjustments
- Batch operations
- Export and sharing

### 5. Automation
- Folder monitoring
- Auto-processing of new content
- Notification system
- Scheduled tasks

## Technical Architecture

### Deployment
- Containerized application
- Docker Compose setup
- Easy installation process
- Automated updates

### Storage
- Database: PostgreSQL/SQLite
- Original files remain untouched
- Efficient metadata indexing
- Backup support

### Original Folder Structure
```
photo-app/
├── app/
│   ├── backend/
│   │   ├── src/
│   │   │   ├── main.py          # FastAPI entry point
│   │   │   ├── core/            # Core application logic
│   │   │   ├── api/             # API endpoints
│   │   │   ├── models/          # Database models
│   │   │   ├── services/        # Business logic services
│   │   │   └── workers/         # Celery task definitions
│   ├── frontend/
│   │   ├── src/
│   │   │   ├── main.tsx         # React entry point
│   │   │   ├── app/             # Main app structure
│   │   │   ├── features/        # Redux slices and API hooks
│   │   │   ├── components/      # React components
│   │   │   └── assets/          # Static assets
├── config/
│   ├── docker/
│   │   ├── backend.Dockerfile
│   │   └── frontend.Dockerfile
│   ├── nginx/                   # Reverse proxy configs
│   └── celery/                  # Task queue configs
├── data/
│   ├── pgdata/                  # PostgreSQL data
│   ├── redis/                   # Redis data
│   └── models/                  # AI model storage
├── scripts/
│   ├── entrypoints/             # Docker entrypoint scripts
│   └── migrations/              # Database migration scripts
├── docker-compose.yml
├── .env.template                # Environment template
└── README.md                    # Deployment instructions
```

*Note: This specification is subject to change as development progresses.*
