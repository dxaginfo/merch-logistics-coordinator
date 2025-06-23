# Merch Logistics Coordinator

A comprehensive web application for the music industry to handle merchandise planning, inventory management, and sales tracking.

![Merch Logistics Coordinator Banner](https://source.unsplash.com/random/1200x600/?music,merchandise)

## Overview

The Merch Logistics Coordinator is designed for artists, bands, and their teams to efficiently manage merchandise operations from production to sales, both online and at live events.

## Key Features

### Inventory Management
- Add and manage merchandise items with detailed attributes
- Update inventory quantities across multiple storage locations
- Set up low stock alerts for timely reordering
- Allocate specific inventory for different tour dates/venues

### Sales Tracking
- Record sales at live events with a mobile-responsive interface
- View detailed sales reports by date, location, and product
- Analyze profit margins and identify best-selling items
- Access real-time sales data during and after shows

### Order Management
- Create purchase orders for new inventory
- Track the status of pending orders from suppliers
- Schedule inventory shipments to upcoming tour locations
- Process returns and exchanges

### E-commerce Integration
- Sync inventory between physical and online stores
- Fulfill online orders with integrated shipping management
- Connect with popular platforms like Shopify and Bandcamp

### Reporting and Analytics
- Generate sales reports for accounting purposes
- Forecast inventory needs based on historical data
- View merchandise performance metrics across different venues/cities
- Identify slow-moving inventory for potential discounts

### User Management
- Create user accounts with different permission levels
- Provide temporary access to venue staff
- Track inventory changes with user attribution

## Technology Stack

### Frontend
- React.js with TypeScript
- Redux Toolkit for state management
- Material-UI with responsive design
- Chart.js for data visualization
- Formik with Yup validation

### Backend
- Node.js runtime
- Express.js framework
- Swagger/OpenAPI documentation
- JWT authentication with secure HTTP-only cookies
- Joi request validation

### Database
- MongoDB (NoSQL) for flexible schema design
- Redis for caching and performance optimization

### DevOps & Infrastructure
- AWS (EC2 or ECS) for hosting
- GitHub Actions for CI/CD
- AWS CloudWatch for monitoring
- AWS S3 for static assets and merchandise images

## Installation

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn
- MongoDB (v5 or higher)
- Redis (optional, for production)

### Setup Development Environment

1. Clone the repository:
```bash
git clone https://github.com/dxaginfo/merch-logistics-coordinator.git
cd merch-logistics-coordinator
```

2. Install dependencies:
```bash
# Install backend dependencies
cd server
npm install

# Install frontend dependencies
cd ../client
npm install
```

3. Set up environment variables:
```bash
# In the server directory
cp .env.example .env
# Edit .env with your MongoDB connection string and other configurations
```

4. Start the development servers:
```bash
# Start backend server (from server directory)
npm run dev

# Start frontend development server (from client directory)
npm start
```

5. Access the application:
- Backend API: http://localhost:8000
- Frontend: http://localhost:3000

## Project Structure

```
merch-logistics-coordinator/
├── client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # React source code
│   │   ├── components/     # UI components
│   │   ├── pages/          # Page components
│   │   ├── redux/          # Redux store configuration
│   │   ├── services/       # API service integrations
│   │   └── utils/          # Utility functions
│   └── package.json        # Frontend dependencies
│
├── server/                 # Backend Node.js application
│   ├── src/                # Server source code
│   │   ├── config/         # Configuration files
│   │   ├── controllers/    # Request handlers
│   │   ├── middleware/     # Express middleware
│   │   ├── models/         # Database models
│   │   ├── routes/         # API routes
│   │   └── services/       # Business logic
│   └── package.json        # Backend dependencies
│
├── .github/                # GitHub configuration files
│   └── workflows/          # CI/CD workflows
│
└── docker/                 # Docker configuration
    ├── docker-compose.yml  # Container orchestration
    └── Dockerfile          # Container definition
```

## API Documentation

API documentation is available using Swagger UI when running the development server:

```
http://localhost:8000/api-docs
```

## Deployment

### Docker Deployment

1. Build the Docker images:
```bash
docker-compose build
```

2. Start the containers:
```bash
docker-compose up -d
```

### AWS Deployment

Detailed AWS deployment instructions can be found in the [deployment guide](./docs/deployment.md).

## Security Considerations

- All API endpoints are secured with JWT authentication
- Role-based access control for different user types
- HTTPS enforcement for all communications
- Sensitive data encryption in the database
- Rate limiting to prevent abuse
- Regular security audits and updates

## Contributing

1. Fork the repository
2. Create your feature branch: `git checkout -b feature/amazing-feature`
3. Commit your changes: `git commit -m 'Add amazing feature'`
4. Push to the branch: `git push origin feature/amazing-feature`
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Music industry professionals who provided insights and requirements
- Open source libraries and tools that made this project possible