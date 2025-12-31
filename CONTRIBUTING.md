# Contributing to Profix Masters Center

Thank you for your interest in contributing to Profix! This document provides guidelines and instructions for contributing to the project.

## Code of Conduct

By participating in this project, you agree to maintain a respectful and inclusive environment for everyone.

## How Can I Contribute?

### Reporting Bugs

Before creating a bug report:
- Check if the bug has already been reported in [Issues](https://github.com/tejindersingh8877-blip/Profix/issues)
- Verify you're using the latest version
- Collect information about the bug

When creating a bug report, include:
- **Clear title** describing the issue
- **Detailed description** of the problem
- **Steps to reproduce** the behavior
- **Expected behavior**
- **Actual behavior**
- **Screenshots** if applicable
- **Environment details** (OS, Node version, browser)
- **Error messages** and stack traces

### Suggesting Enhancements

Enhancement suggestions are welcome! Please:
- Use a clear and descriptive title
- Provide detailed description of the enhancement
- Explain why this enhancement would be useful
- Include examples or mockups if applicable

### Pull Requests

1. **Fork the repository**
   ```bash
   git clone https://github.com/tejindersingh8877-blip/Profix.git
   cd Profix
   ```

2. **Create a branch**
   ```bash
   git checkout -b feature/your-feature-name
   ```

3. **Make your changes**
   - Follow the coding standards
   - Write meaningful commit messages
   - Add tests if applicable
   - Update documentation

4. **Test your changes**
   ```bash
   npm run lint
   npm run build
   ```

5. **Commit your changes**
   ```bash
   git commit -m "feat: add amazing feature"
   ```

6. **Push to your fork**
   ```bash
   git push origin feature/your-feature-name
   ```

7. **Create Pull Request**
   - Go to the original repository
   - Click "New Pull Request"
   - Provide clear description of changes
   - Link related issues

## Development Setup

See [SETUP.md](./SETUP.md) for detailed setup instructions.

Quick start:
```bash
npm install
cp .env.example .env
npx prisma generate
npx prisma db push
npm run db:seed
npm run dev
```

## Coding Standards

### TypeScript

- Use TypeScript strict mode
- Define types for all function parameters and return values
- Avoid `any` type unless absolutely necessary
- Use interfaces for object types
- Use enums for constants

Example:
```typescript
interface User {
  id: string;
  name: string;
  email: string;
}

async function getUser(id: string): Promise<User | null> {
  // Implementation
}
```

### Code Style

- Use **2 spaces** for indentation
- Use **semicolons**
- Use **single quotes** for strings
- Max line length: **100 characters**
- Use **camelCase** for variables and functions
- Use **PascalCase** for components and classes
- Use **UPPER_CASE** for constants

### React Components

- Use functional components with hooks
- One component per file
- Props interface at the top
- Export component at the bottom

Example:
```typescript
interface ButtonProps {
  label: string;
  onClick: () => void;
  disabled?: boolean;
}

export function Button({ label, onClick, disabled }: ButtonProps) {
  return (
    <button onClick={onClick} disabled={disabled}>
      {label}
    </button>
  );
}
```

### File Structure

```
app/
├── (auth)/          # Authentication pages
├── (dashboard)/     # Dashboard pages
├── api/             # API routes
└── globals.css      # Global styles

components/
├── ui/              # Base UI components
├── auth/            # Auth components
├── services/        # Service components
└── layout/          # Layout components

lib/
├── db.ts            # Database utilities
├── auth.ts          # Auth utilities
└── utils.ts         # Helper functions

prisma/
├── schema.prisma    # Database schema
└── seed.ts          # Seed script
```

### Git Commit Messages

Follow [Conventional Commits](https://www.conventionalcommits.org/):

- `feat:` New feature
- `fix:` Bug fix
- `docs:` Documentation changes
- `style:` Code style changes (formatting)
- `refactor:` Code refactoring
- `test:` Adding tests
- `chore:` Maintenance tasks

Examples:
```
feat: add booking cancellation feature
fix: resolve payment processing error
docs: update API documentation
refactor: simplify authentication logic
```

## Testing

### Running Tests

```bash
# Run all tests
npm test

# Run with coverage
npm test -- --coverage

# Run specific test
npm test -- path/to/test
```

### Writing Tests

- Write tests for new features
- Test edge cases and error scenarios
- Use descriptive test names
- Mock external dependencies

Example:
```typescript
describe('calculateCommission', () => {
  it('should calculate 15% commission correctly', () => {
    const result = calculateCommission(100);
    expect(result.commission).toBe(15);
    expect(result.providerAmount).toBe(85);
  });

  it('should handle zero amount', () => {
    const result = calculateCommission(0);
    expect(result.commission).toBe(0);
  });
});
```

## Documentation

- Update README.md if adding features
- Document new API endpoints in API.md
- Add JSDoc comments for complex functions
- Include examples in documentation

## Database Changes

When modifying the database schema:

1. Update `prisma/schema.prisma`
2. Generate migration: `npx prisma migrate dev --name description`
3. Update seed script if needed
4. Document schema changes
5. Update related TypeScript types

## Security

- Never commit secrets or credentials
- Use environment variables for sensitive data
- Validate all user inputs
- Sanitize data before database operations
- Follow OWASP security guidelines

## Performance

- Optimize database queries
- Use appropriate indexes
- Implement caching where beneficial
- Lazy load components when possible
- Optimize images and assets

## Accessibility

- Use semantic HTML
- Include ARIA labels where needed
- Ensure keyboard navigation works
- Maintain color contrast ratios
- Test with screen readers

## Review Process

Pull requests will be reviewed for:
- Code quality and style
- Test coverage
- Documentation
- Performance impact
- Security considerations

Reviews typically take 2-5 business days.

## Questions?

- Check [README.md](./README.md) and [SETUP.md](./SETUP.md)
- Search [existing issues](https://github.com/tejindersingh8877-blip/Profix/issues)
- Create a new issue with your question

## License

By contributing, you agree that your contributions will be licensed under the ISC License.

## Recognition

Contributors will be acknowledged in the project README.

Thank you for contributing to Profix! 🎉
