FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./

# Install dependencies
RUN npm ci --only=production

# Copy built application
COPY dist/ ./dist/

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S mercury -u 1001

# Change ownership of the app directory
RUN chown -R mercury:nodejs /app
USER mercury

# Expose port (if needed for MCP server)
EXPOSE 3000

# Health check
HEALTHCHECK --interval=30s --timeout=3s --start-period=5s --retries=3 \
  CMD node --version || exit 1

# Start the MCP server
ENTRYPOINT ["node", "dist/src/server.js"]
