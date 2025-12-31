# API Documentation - Profix Masters Center

This document describes the REST API endpoints available in the Profix platform.

## Base URL

```
http://localhost:3000/api
```

## Authentication

Most endpoints require authentication via JWT token stored in httpOnly cookie.

### Headers

```
Cookie: auth-token=<jwt_token>
```

## Common Response Formats

### Success Response

```json
{
  "message": "Success message",
  "data": { ... }
}
```

### Error Response

```json
{
  "error": "Error message",
  "details": [ ... ] // Optional, for validation errors
}
```

## Status Codes

- `200` - Success
- `201` - Created
- `400` - Bad Request (validation error)
- `401` - Unauthorized
- `403` - Forbidden
- `404` - Not Found
- `500` - Internal Server Error

---

## Authentication Endpoints

### Register User

Create a new user account.

**Endpoint**: `POST /api/auth/register`

**Body**:
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "phone": "+1234567890",
  "password": "securePassword123",
  "role": "CUSTOMER" // or "PROVIDER"
}
```

**Response** (201):
```json
{
  "message": "User registered successfully",
  "user": {
    "id": "clx123abc",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "CUSTOMER"
  }
}
```

**Errors**:
- `400` - Validation error or user already exists

---

### Login

Authenticate a user and receive a JWT token.

**Endpoint**: `POST /api/auth/login`

**Body**:
```json
{
  "email": "john@example.com",
  "password": "securePassword123"
}
```

**Response** (200):
```json
{
  "message": "Login successful",
  "user": {
    "id": "clx123abc",
    "name": "John Doe",
    "email": "john@example.com",
    "role": "CUSTOMER",
    "profilePhoto": null,
    "provider": null
  }
}
```

**Errors**:
- `401` - Invalid credentials
- `403` - Account is inactive

---

### Logout

Invalidate the current session.

**Endpoint**: `POST /api/auth/logout`

**Response** (200):
```json
{
  "message": "Logout successful"
}
```

---

## Services Endpoints (Coming Soon)

### List Services

Get a paginated list of services.

**Endpoint**: `GET /api/services`

**Query Parameters**:
- `page` (optional) - Page number (default: 1)
- `limit` (optional) - Items per page (default: 20)
- `categoryId` (optional) - Filter by category
- `search` (optional) - Search in title and description
- `minPrice` (optional) - Minimum price filter
- `maxPrice` (optional) - Maximum price filter

**Response** (200):
```json
{
  "services": [
    {
      "id": "clx123",
      "title": "AC Repair Service",
      "description": "Professional AC repair and maintenance",
      "price": 99.99,
      "durationMinutes": 120,
      "category": {
        "id": "clx456",
        "name": "AC Repair & Maintenance"
      },
      "provider": {
        "id": "clx789",
        "businessName": "Cool Air Services",
        "rating": 4.5
      }
    }
  ],
  "pagination": {
    "page": 1,
    "limit": 20,
    "total": 45,
    "pages": 3
  }
}
```

---

### Get Service Details

Get detailed information about a specific service.

**Endpoint**: `GET /api/services/:id`

**Response** (200):
```json
{
  "id": "clx123",
  "title": "AC Repair Service",
  "description": "Professional AC repair and maintenance",
  "price": 99.99,
  "durationMinutes": 120,
  "isActive": true,
  "category": {
    "id": "clx456",
    "name": "AC Repair & Maintenance",
    "icon": "❄️"
  },
  "provider": {
    "id": "clx789",
    "businessName": "Cool Air Services",
    "rating": 4.5,
    "totalReviews": 23,
    "verificationStatus": "APPROVED"
  }
}
```

**Errors**:
- `404` - Service not found

---

### Create Service

Create a new service listing (Provider only).

**Endpoint**: `POST /api/services`

**Authentication**: Required (Provider role)

**Body**:
```json
{
  "categoryId": "clx456",
  "title": "AC Installation",
  "description": "Professional AC installation service",
  "price": 299.99,
  "durationMinutes": 180
}
```

**Response** (201):
```json
{
  "message": "Service created successfully",
  "service": {
    "id": "clx999",
    "title": "AC Installation",
    "price": 299.99
  }
}
```

**Errors**:
- `401` - Unauthorized
- `403` - Forbidden (not a provider)
- `400` - Validation error

---

## Bookings Endpoints (Coming Soon)

### Create Booking

Book a service.

**Endpoint**: `POST /api/bookings`

**Authentication**: Required (Customer role)

**Body**:
```json
{
  "serviceId": "clx123",
  "bookingDate": "2024-01-15",
  "bookingTime": "10:00",
  "address": "123 Main St, City, State 12345",
  "notes": "Please call before arriving"
}
```

**Response** (201):
```json
{
  "message": "Booking created successfully",
  "booking": {
    "id": "clx888",
    "status": "PENDING",
    "totalAmount": 99.99,
    "commissionAmount": 14.99
  }
}
```

---

### List Bookings

Get user's bookings.

**Endpoint**: `GET /api/bookings`

**Authentication**: Required

**Query Parameters**:
- `status` (optional) - Filter by status
- `page` (optional) - Page number

**Response** (200):
```json
{
  "bookings": [
    {
      "id": "clx888",
      "bookingDate": "2024-01-15T00:00:00Z",
      "bookingTime": "10:00",
      "status": "CONFIRMED",
      "totalAmount": 99.99,
      "service": {
        "title": "AC Repair Service"
      },
      "provider": {
        "businessName": "Cool Air Services"
      }
    }
  ]
}
```

---

## Categories Endpoints (Coming Soon)

### List Categories

Get all service categories.

**Endpoint**: `GET /api/categories`

**Response** (200):
```json
{
  "categories": [
    {
      "id": "clx456",
      "name": "AC Repair & Maintenance",
      "description": "Professional air conditioning services",
      "icon": "❄️"
    }
  ]
}
```

---

## Payments Endpoints (Coming Soon)

### Create Payment Intent

Create a Stripe payment intent for a booking.

**Endpoint**: `POST /api/payments/create-intent`

**Authentication**: Required

**Body**:
```json
{
  "bookingId": "clx888"
}
```

**Response** (200):
```json
{
  "clientSecret": "pi_xxx_secret_xxx",
  "amount": 9999
}
```

---

### Payment Webhook

Handle Stripe webhook events.

**Endpoint**: `POST /api/payments/webhook`

**Headers**:
```
stripe-signature: <signature>
```

**Body**: Stripe event payload

---

## Provider Endpoints (Coming Soon)

### Register as Provider

Create a provider profile.

**Endpoint**: `POST /api/providers/register`

**Authentication**: Required

**Body**:
```json
{
  "businessName": "Cool Air Services",
  "skills": "AC Repair, Installation, Maintenance",
  "experienceYears": 5
}
```

---

## Wallet Endpoints (Coming Soon)

### Get Wallet Balance

Get provider's wallet information.

**Endpoint**: `GET /api/wallets/:providerId`

**Authentication**: Required (Provider)

**Response** (200):
```json
{
  "balance": 1250.50,
  "totalEarned": 5000.00,
  "totalWithdrawn": 3749.50
}
```

---

## Rate Limiting

All endpoints are subject to rate limiting:
- **Authentication**: 5 requests per minute
- **General API**: 100 requests per minute
- **Payment**: 10 requests per minute

## Error Codes

| Code | Description |
|------|-------------|
| `VALIDATION_ERROR` | Request validation failed |
| `UNAUTHORIZED` | Authentication required |
| `FORBIDDEN` | Insufficient permissions |
| `NOT_FOUND` | Resource not found |
| `ALREADY_EXISTS` | Resource already exists |
| `INTERNAL_ERROR` | Server error |

## Support

For API support, contact: support@profixmasters.com
